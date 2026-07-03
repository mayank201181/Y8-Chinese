"use client";

// Central client store: auth status, active profile, progress (stars, SRS,
// streaks, analytics) with localStorage cache + debounced cloud sync.

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Account,
  Profile,
  ProgressDoc,
  SRS_LADDER_DAYS,
  SrsItem,
  ActivityEvent,
  emptyProgress,
} from "./profileTypes";

export type AppStatus = "loading" | "anon" | "no-profile" | "ready";

export const RANKS: { stars: number; name: string; icon: string }[] = [
  { stars: 0, name: "New Explorer", icon: "🐣" },
  { stars: 15, name: "Pinyin Pupil", icon: "🐼" },
  { stars: 40, name: "Character Cadet", icon: "✏️" },
  { stars: 80, name: "Tone Tamer", icon: "🎵" },
  { stars: 140, name: "Sentence Builder", icon: "🧱" },
  { stars: 220, name: "Conversation Captain", icon: "🗣️" },
  { stars: 320, name: "Hanzi Hero", icon: "🐉" },
  { stars: 450, name: "Mandarin Master", icon: "🏮" },
];

export function rankFor(stars: number) {
  let r = RANKS[0];
  for (const cand of RANKS) if (stars >= cand.stars) r = cand;
  const next = RANKS.find((c) => c.stars > stars) ?? null;
  return { ...r, next };
}

export function todayKey(d = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

interface StoreCtx {
  status: AppStatus;
  account: Account | null;
  profile: Profile | null;
  progress: ProgressDoc;
  refreshAuth: () => Promise<void>;
  selectProfile: (p: Profile | null) => void;
  logout: () => Promise<void>;
  // progress mutators
  recordResult: (qid: string, correct: boolean, topicId?: string) => void;
  recordVocab: (topicId: string, hanzi: string, known: boolean) => void;
  markGuideRead: (topicId: string, heading: string) => void;
  awardStars: (paperId: string, stars: number, ev?: Partial<ActivityEvent>) => void;
  setChallengeBest: (topicId: string, score: number) => void;
  setGoalMinutes: (m: number) => void;
  logEvent: (ev: ActivityEvent) => void;
  dueReviews: () => SrsItem[];
}

const Ctx = createContext<StoreCtx | null>(null);

function cacheKey(accountId: string, profileId: string) {
  return `y8zh-progress-${accountId}-${profileId}`;
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<AppStatus>("loading");
  const [account, setAccount] = useState<Account | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [progress, setProgress] = useState<ProgressDoc>(emptyProgress());
  const progressRef = useRef(progress);
  progressRef.current = progress;
  const accountRef = useRef(account);
  accountRef.current = account;
  const profileRef = useRef(profile);
  profileRef.current = profile;
  const syncTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dirty = useRef(false);

  const refreshAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      if (!res.ok) {
        setAccount(null);
        setProfile(null);
        setStatus("anon");
        return;
      }
      const data = (await res.json()) as { account: Account };
      setAccount(data.account);
      // restore last profile
      let restored: Profile | null = null;
      try {
        const savedId = localStorage.getItem(`y8zh-profile-${data.account.id}`);
        restored = data.account.profiles.find((p) => p.id === savedId) ?? null;
      } catch {}
      if (restored) {
        setProfile(restored);
        setStatus("ready");
      } else {
        setProfile(null);
        setStatus(data.account.profiles.length ? "no-profile" : "no-profile");
      }
    } catch {
      setAccount(null);
      setProfile(null);
      setStatus("anon");
    }
  }, []);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  // Load progress whenever the active profile changes: cache first, then server.
  useEffect(() => {
    if (!account || !profile) return;
    let cancelled = false;
    let base = emptyProgress();
    try {
      const raw = localStorage.getItem(cacheKey(account.id, profile.id));
      if (raw) base = { ...base, ...(JSON.parse(raw) as ProgressDoc) };
    } catch {}
    setProgress(base);
    (async () => {
      try {
        const res = await fetch(`/api/progress?profileId=${profile.id}&t=${Date.now()}`, {
          cache: "no-store",
        });
        if (!res.ok || cancelled) return;
        const remote = (await res.json()) as { progress: ProgressDoc | null };
        if (remote.progress && remote.progress.updatedAt > (base.updatedAt || 0)) {
          setProgress({ ...emptyProgress(), ...remote.progress });
        }
      } catch {}
    })();
    return () => {
      cancelled = true;
    };
  }, [account, profile]);

  const scheduleSync = useCallback(() => {
    dirty.current = true;
    if (syncTimer.current) clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(async () => {
      const acc = accountRef.current;
      const prof = profileRef.current;
      if (!acc || !prof || !dirty.current) return;
      dirty.current = false;
      const doc = progressRef.current;
      try {
        localStorage.setItem(cacheKey(acc.id, prof.id), JSON.stringify(doc));
      } catch {}
      try {
        await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ profileId: prof.id, progress: doc }),
        });
      } catch {
        dirty.current = true; // retry on next mutation
      }
    }, 1500);
  }, []);

  const mutate = useCallback(
    (fn: (p: ProgressDoc) => ProgressDoc) => {
      setProgress((prev) => {
        const next = fn(prev);
        next.updatedAt = Date.now();
        return next;
      });
      scheduleSync();
    },
    [scheduleSync]
  );

  const touchStreakAndDay = useCallback((p: ProgressDoc, minutes = 0): ProgressDoc => {
    const day = todayKey();
    const streak = { ...p.streak };
    if (streak.lastDay !== day) {
      const yesterday = todayKey(new Date(Date.now() - 86400000));
      streak.count = streak.lastDay === yesterday ? streak.count + 1 : 1;
      streak.lastDay = day;
    }
    const perDay = { ...p.analytics.perDayMinutes };
    if (minutes > 0) perDay[day] = (perDay[day] ?? 0) + minutes;
    return {
      ...p,
      streak,
      analytics: { ...p.analytics, perDayMinutes: perDay, lastSeen: Date.now() },
    };
  }, []);

  // Heartbeat: 1 minute of time-on-task per minute while the tab is visible.
  useEffect(() => {
    if (status !== "ready") return;
    const iv = setInterval(() => {
      if (typeof document !== "undefined" && document.visibilityState !== "visible") return;
      mutate((p) =>
        touchStreakAndDay(
          {
            ...p,
            analytics: { ...p.analytics, totalMinutes: p.analytics.totalMinutes + 1 },
          },
          1
        )
      );
    }, 60000);
    return () => clearInterval(iv);
  }, [status, mutate, touchStreakAndDay]);

  // Count a session on profile select
  useEffect(() => {
    if (status !== "ready") return;
    mutate((p) => ({
      ...p,
      analytics: { ...p.analytics, sessions: p.analytics.sessions + 1 },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, profile?.id]);

  const recordResult = useCallback(
    (qid: string, correct: boolean, topicId?: string) => {
      mutate((p) => {
        const attempts = { ...p.attempts };
        const a = attempts[qid] ?? { correct: 0, wrong: 0 };
        attempts[qid] = correct
          ? { ...a, correct: a.correct + 1 }
          : { ...a, wrong: a.wrong + 1 };

        let missed = p.missed;
        const srs = { ...p.srs };
        const now = Date.now();
        const existing = srs[qid];
        if (!correct) {
          if (!missed.includes(qid)) missed = [...missed, qid];
          srs[qid] = {
            qid,
            step: 0,
            dueAt: now, // due immediately, first ladder step scheduled on next correct
            lapses: (existing?.lapses ?? 0) + 1,
          };
        } else if (existing) {
          const nextStep = existing.step + 1;
          if (nextStep >= SRS_LADDER_DAYS.length) {
            delete srs[qid]; // graduated
            missed = missed.filter((m) => m !== qid);
          } else {
            srs[qid] = {
              ...existing,
              step: nextStep,
              dueAt: now + SRS_LADDER_DAYS[nextStep] * 86400000,
            };
          }
        }

        const perTopic = { ...p.analytics.perTopic };
        if (topicId) {
          const t = perTopic[topicId] ?? { attempts: 0, correct: 0, minutes: 0, lastSeen: 0 };
          perTopic[topicId] = {
            ...t,
            attempts: t.attempts + 1,
            correct: t.correct + (correct ? 1 : 0),
            lastSeen: now,
          };
        }
        return touchStreakAndDay({
          ...p,
          attempts,
          missed,
          srs,
          analytics: { ...p.analytics, perTopic },
        });
      });
    },
    [mutate, touchStreakAndDay]
  );

  const recordVocab = useCallback(
    (topicId: string, hanzi: string, known: boolean) => {
      const key = `${topicId}:${hanzi}`;
      mutate((p) => {
        const cur = p.vocabKnown[key] ?? 0;
        const next = known ? Math.min(3, cur + 1) : 0;
        const srs = { ...p.srs };
        const qid = `vocab:${key}`;
        const now = Date.now();
        if (!known) {
          srs[qid] = { qid, step: 0, dueAt: now, lapses: (srs[qid]?.lapses ?? 0) + 1 };
        } else if (srs[qid]) {
          const nextStep = srs[qid].step + 1;
          if (nextStep >= SRS_LADDER_DAYS.length) delete srs[qid];
          else srs[qid] = { ...srs[qid], step: nextStep, dueAt: now + SRS_LADDER_DAYS[nextStep] * 86400000 };
        }
        return touchStreakAndDay({
          ...p,
          vocabKnown: { ...p.vocabKnown, [key]: next },
          srs,
        });
      });
    },
    [mutate, touchStreakAndDay]
  );

  const markGuideRead = useCallback(
    (topicId: string, heading: string) => {
      mutate((p) => {
        const read = p.guidesRead[topicId] ?? [];
        if (read.includes(heading)) return p;
        return touchStreakAndDay({
          ...p,
          guidesRead: { ...p.guidesRead, [topicId]: [...read, heading] },
        });
      });
    },
    [mutate, touchStreakAndDay]
  );

  const awardStars = useCallback(
    (paperId: string, stars: number, ev?: Partial<ActivityEvent>) => {
      mutate((p) => {
        const prevBest = p.awarded[paperId] ?? 0;
        const gain = Math.max(0, stars - prevBest);
        const log: ActivityEvent[] = [
          {
            at: Date.now(),
            kind: (ev?.kind ?? "paper") as ActivityEvent["kind"],
            topicId: ev?.topicId,
            label: ev?.label ?? paperId,
            correct: ev?.correct,
            total: ev?.total,
            stars,
          },
          ...p.analytics.log,
        ].slice(0, 60);
        return touchStreakAndDay({
          ...p,
          stars: p.stars + gain,
          awarded: { ...p.awarded, [paperId]: Math.max(prevBest, stars) },
          analytics: { ...p.analytics, log },
        });
      });
    },
    [mutate, touchStreakAndDay]
  );

  const setChallengeBest = useCallback(
    (topicId: string, score: number) => {
      mutate((p) => ({
        ...p,
        challengeBest: {
          ...p.challengeBest,
          [topicId]: Math.max(p.challengeBest[topicId] ?? 0, score),
        },
      }));
    },
    [mutate]
  );

  const setGoalMinutes = useCallback(
    (m: number) => mutate((p) => ({ ...p, goalMinutes: m })),
    [mutate]
  );

  const logEvent = useCallback(
    (ev: ActivityEvent) => {
      mutate((p) => ({
        ...p,
        analytics: { ...p.analytics, log: [ev, ...p.analytics.log].slice(0, 60) },
      }));
    },
    [mutate]
  );

  const dueReviews = useCallback((): SrsItem[] => {
    const now = Date.now();
    return Object.values(progressRef.current.srs)
      .filter((s) => s.dueAt <= now)
      .sort((a, b) => a.dueAt - b.dueAt);
  }, []);

  const selectProfile = useCallback((p: Profile | null) => {
    setProfile(p);
    const acc = accountRef.current;
    if (acc && p) {
      try {
        localStorage.setItem(`y8zh-profile-${acc.id}`, p.id);
      } catch {}
      setStatus("ready");
    } else if (acc) {
      setStatus("no-profile");
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {}
    setAccount(null);
    setProfile(null);
    setProgress(emptyProgress());
    setStatus("anon");
  }, []);

  const value = useMemo<StoreCtx>(
    () => ({
      status,
      account,
      profile,
      progress,
      refreshAuth,
      selectProfile,
      logout,
      recordResult,
      recordVocab,
      markGuideRead,
      awardStars,
      setChallengeBest,
      setGoalMinutes,
      logEvent,
      dueReviews,
    }),
    [
      status,
      account,
      profile,
      progress,
      refreshAuth,
      selectProfile,
      logout,
      recordResult,
      recordVocab,
      markGuideRead,
      awardStars,
      setChallengeBest,
      setGoalMinutes,
      logEvent,
      dueReviews,
    ]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore(): StoreCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
