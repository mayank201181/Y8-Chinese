"use client";

// PIN-gated parent dashboard. Renders standalone (no AppGate) so it works
// straight from a bookmark as long as the account cookie exists.

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { rankFor } from "@/lib/store";
import { TOPIC_META } from "@/lib/topicIndex";
import type { Profile, ProgressDoc } from "@/lib/profileTypes";

interface Learner {
  profile: Profile;
  progress: ProgressDoc | null;
}

function dayKey(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function fmtDate(ms: number): string {
  return new Date(ms).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
  });
}

function fmtWhen(ms: number): string {
  const diff = Date.now() - ms;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins} min ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  return fmtDate(ms);
}

function topicTitle(id: string): string {
  return TOPIC_META.find((t) => t.id === id)?.title ?? id;
}

function overallAccuracy(p: ProgressDoc): { correct: number; total: number } {
  let correct = 0;
  let total = 0;
  for (const a of Object.values(p.attempts)) {
    correct += a.correct;
    total += a.correct + a.wrong;
  }
  return { correct, total };
}

function Stat({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 px-3 py-2.5 text-center">
      <div className="text-lg font-extrabold text-slate-900">
        <span className="mr-1">{icon}</span>
        {value}
      </div>
      <div className="text-[11px] font-medium text-slate-500">{label}</div>
    </div>
  );
}

function WeekChart({ perDay }: { perDay: Record<string, number> }) {
  const days = useMemo(() => {
    const out: { key: string; label: string; minutes: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const key = dayKey(d);
      out.push({
        key,
        label: d.toLocaleDateString(undefined, { weekday: "narrow" }),
        minutes: perDay[key] ?? 0,
      });
    }
    return out;
  }, [perDay]);
  const max = Math.max(1, ...days.map((d) => d.minutes));
  return (
    <div className="flex h-28 items-end gap-2">
      {days.map((d) => (
        <div key={d.key} className="flex flex-1 flex-col items-center gap-1">
          <span className="text-[10px] font-semibold text-slate-500">
            {d.minutes > 0 ? `${d.minutes}m` : ""}
          </span>
          <div
            className={`w-full rounded-t-lg ${
              d.minutes > 0 ? "bg-rose-400" : "bg-slate-100"
            }`}
            style={{ height: `${Math.max(4, Math.round((d.minutes / max) * 72))}px` }}
            title={`${d.key}: ${d.minutes} min`}
          />
          <span className="text-[10px] font-medium text-slate-400">{d.label}</span>
        </div>
      ))}
    </div>
  );
}

function LearnerCard({ learner }: { learner: Learner }) {
  const { profile, progress } = learner;
  if (!progress) {
    return (
      <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{profile.avatar}</span>
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">{profile.name}</h2>
            <p className="text-sm text-slate-500">
              Hasn&apos;t studied yet — the dragon is waiting! 🐉
            </p>
          </div>
        </div>
      </section>
    );
  }

  const rank = rankFor(progress.stars);
  const acc = overallAccuracy(progress);
  const accPct = acc.total > 0 ? Math.round((acc.correct / acc.total) * 100) : null;
  const topics = Object.entries(progress.analytics.perTopic).sort(
    (a, b) => b[1].lastSeen - a[1].lastSeen
  );
  const recent = progress.analytics.log.slice(0, 8);

  return (
    <section className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-4xl">{profile.avatar}</span>
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">{profile.name}</h2>
          <p className="text-sm font-medium text-slate-500">
            {rank.icon} {rank.name}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
        <Stat icon="⭐" value={String(progress.stars)} label="stars" />
        <Stat
          icon="⏱️"
          value={`${progress.analytics.totalMinutes}m`}
          label="time on task"
        />
        <Stat icon="📚" value={String(progress.analytics.sessions)} label="sessions" />
        <Stat icon="🔥" value={String(progress.streak.count)} label="day streak" />
        <Stat icon="🎯" value={`${progress.goalMinutes}m`} label="daily goal" />
        <Stat icon="✅" value={accPct === null ? "—" : `${accPct}%`} label="accuracy" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
            This week
          </h3>
          <div className="mt-3 rounded-2xl bg-amber-50/60 p-4">
            <WeekChart perDay={progress.analytics.perDayMinutes} />
          </div>

          <h3 className="mt-6 text-sm font-bold uppercase tracking-wide text-slate-500">
            Recent activity
          </h3>
          {recent.length === 0 ? (
            <p className="mt-2 text-sm text-slate-500">Nothing logged yet.</p>
          ) : (
            <ul className="mt-2 space-y-1.5">
              {recent.map((ev, i) => (
                <li
                  key={`${ev.at}-${i}`}
                  className="flex items-center justify-between gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm"
                >
                  <span className="min-w-0 truncate font-medium text-slate-800">
                    {ev.label}
                  </span>
                  <span className="flex shrink-0 items-center gap-2 text-xs text-slate-500">
                    {ev.correct !== undefined && ev.total !== undefined && (
                      <span className="font-semibold text-emerald-600">
                        {ev.correct}/{ev.total}
                      </span>
                    )}
                    {ev.stars !== undefined && ev.stars > 0 && (
                      <span className="font-semibold text-amber-600">⭐{ev.stars}</span>
                    )}
                    <span>{fmtWhen(ev.at)}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
            By topic
          </h3>
          {topics.length === 0 ? (
            <p className="mt-2 text-sm text-slate-500">No topic practice yet.</p>
          ) : (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs font-bold uppercase tracking-wide text-slate-400">
                    <th className="pb-2 pr-2">Topic</th>
                    <th className="pb-2 pr-2 text-right">Tries</th>
                    <th className="pb-2 pr-2 text-right">Correct</th>
                    <th className="pb-2 text-right">Last seen</th>
                  </tr>
                </thead>
                <tbody>
                  {topics.map(([id, t]) => (
                    <tr key={id} className="border-t border-slate-100">
                      <td className="py-2 pr-2 font-medium text-slate-800">
                        {topicTitle(id)}
                      </td>
                      <td className="py-2 pr-2 text-right text-slate-600">
                        {t.attempts}
                      </td>
                      <td className="py-2 pr-2 text-right font-semibold text-emerald-600">
                        {t.attempts > 0
                          ? `${Math.round((t.correct / t.attempts) * 100)}%`
                          : "—"}
                      </td>
                      <td className="py-2 text-right text-slate-500">
                        {t.lastSeen ? fmtDate(t.lastSeen) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function ParentPage() {
  const [pin, setPin] = useState("");
  const [learners, setLearners] = useState<Learner[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/parent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      if (res.status === 401) {
        setNotLoggedIn(true);
        return;
      }
      if (res.status === 403) {
        setError("Wrong PIN — try again.");
        return;
      }
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Something went wrong — please try again.");
        return;
      }
      const data = (await res.json()) as { learners: Learner[] };
      setLearners(data.learners);
    } catch {
      setError("Couldn't reach the server — check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            👪 Parent dashboard
          </h1>
          <Link
            href="/"
            className="rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700 ring-1 ring-rose-200 hover:bg-rose-100"
          >
            ← Back to the Lab
          </Link>
        </div>

        {notLoggedIn ? (
          <div className="mt-10 rounded-2xl border border-rose-100 bg-white p-8 text-center shadow-sm">
            <div className="text-5xl">🔑</div>
            <p className="mt-3 font-semibold text-slate-800">
              You&apos;re not logged in to a family account.
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Head back to the Lab and log in first, then come back here.
            </p>
            <Link
              href="/"
              className="mt-5 inline-block rounded-xl bg-rose-500 px-5 py-2.5 font-bold text-white hover:bg-rose-600"
            >
              Go to the Lab
            </Link>
          </div>
        ) : learners === null ? (
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-rose-100 bg-white p-8 shadow-sm">
            <div className="text-center text-5xl">🔒</div>
            <p className="mt-3 text-center text-slate-600">
              Enter your parent PIN to see how your learners are getting on.
            </p>
            <form onSubmit={submit} className="mt-5">
              <input
                type="password"
                inputMode="numeric"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Parent PIN"
                autoFocus
                required
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-lg tracking-[0.4em] text-slate-900 placeholder:tracking-normal placeholder:text-slate-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              {error && (
                <p className="mt-3 rounded-xl bg-rose-50 px-3 py-2 text-center text-sm font-medium text-rose-700">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={submitting}
                className="mt-4 w-full rounded-xl bg-rose-500 px-4 py-3 font-bold text-white shadow-md shadow-rose-200 hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Checking…" : "Unlock dashboard"}
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {learners.length === 0 ? (
              <p className="rounded-2xl border border-rose-100 bg-white p-8 text-center text-slate-600 shadow-sm">
                No learner profiles yet — add one from the Lab home screen.
              </p>
            ) : (
              learners.map((l) => <LearnerCard key={l.profile.id} learner={l} />)
            )}
          </div>
        )}
      </div>
    </div>
  );
}
