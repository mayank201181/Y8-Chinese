"use client";

import Link from "next/link";
import React from "react";
import AppGate from "@/components/AppGate";
import { TOPIC_BY_ID, TOPIC_META } from "@/lib/topicIndex";
import { rankFor, todayKey, useStore } from "@/lib/store";
import { Zh } from "@/lib/chinese";

const COLOR: Record<string, string> = {
  rose: "from-rose-100 to-rose-50 border-rose-200 hover:border-rose-400",
  amber: "from-amber-100 to-amber-50 border-amber-200 hover:border-amber-400",
  sky: "from-sky-100 to-sky-50 border-sky-200 hover:border-sky-400",
  emerald: "from-emerald-100 to-emerald-50 border-emerald-200 hover:border-emerald-400",
  orange: "from-orange-100 to-orange-50 border-orange-200 hover:border-orange-400",
  fuchsia: "from-fuchsia-100 to-fuchsia-50 border-fuchsia-200 hover:border-fuchsia-400",
  violet: "from-violet-100 to-violet-50 border-violet-200 hover:border-violet-400",
  cyan: "from-cyan-100 to-cyan-50 border-cyan-200 hover:border-cyan-400",
  blue: "from-blue-100 to-blue-50 border-blue-200 hover:border-blue-400",
  lime: "from-lime-100 to-lime-50 border-lime-200 hover:border-lime-400",
  red: "from-red-100 to-red-50 border-red-200 hover:border-red-400",
  yellow: "from-yellow-100 to-yellow-50 border-yellow-200 hover:border-yellow-400",
};

function Home() {
  const { profile, progress, setGoalMinutes, dueReviews } = useStore();
  const rank = rankFor(progress.stars);
  const minutesToday = progress.analytics.perDayMinutes[todayKey()] ?? 0;
  const due = dueReviews().length;

  return (
    <div>
      <section className="rounded-3xl bg-gradient-to-br from-rose-500 to-orange-400 p-6 text-white shadow-lg sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black sm:text-3xl">
              {profile?.name ? `你好, ${profile.name}!` : "你好!"} 👋
            </h1>
            <p className="mt-1 max-w-xl text-sm text-rose-50 sm:text-base">
              Welcome back to your Chinese Lab. {rank.icon}{" "}
              <strong>{rank.name}</strong> — {progress.stars} ⭐
              {rank.next
                ? ` · ${rank.next.stars - progress.stars} more to ${rank.next.name}`
                : " · top rank!"}
            </p>
          </div>
          <div className="rounded-2xl bg-white/15 px-4 py-3 text-sm backdrop-blur">
            <p className="font-semibold">
              🎯 Daily goal: {minutesToday}/{progress.goalMinutes} min
            </p>
            <div className="mt-1.5 h-2 w-44 overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${Math.min(100, (minutesToday / Math.max(1, progress.goalMinutes)) * 100)}%`,
                }}
              />
            </div>
            <div className="mt-2 flex gap-1.5">
              {[10, 15, 20, 30].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setGoalMinutes(m)}
                  className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                    progress.goalMinutes === m
                      ? "bg-white text-rose-600"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  {m}m
                </button>
              ))}
            </div>
          </div>
        </div>
        {due > 0 && (
          <Link
            href="/review"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-rose-600 shadow hover:bg-rose-50"
          >
            🔁 {due} thing{due === 1 ? "" : "s"} ready to review — quick win!
          </Link>
        )}
      </section>

      <h2 className="mt-8 text-xl font-extrabold text-slate-900">
        Your topics{" "}
        <span className="text-sm font-medium text-slate-400">
          (Cambridge IGCSE 0547 pathway)
        </span>
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {TOPIC_META.map((m) => {
          const loaded = !!TOPIC_BY_ID[m.id];
          const read = progress.guidesRead[m.id]?.length ?? 0;
          const total = TOPIC_BY_ID[m.id]?.guide.length ?? 0;
          const card = (
            <div
              className={`h-full rounded-3xl border-2 bg-gradient-to-br p-5 transition-all ${
                COLOR[m.color] ?? COLOR.rose
              } ${loaded ? "hover:-translate-y-0.5 hover:shadow-md" : "opacity-60"}`}
            >
              <div className="flex items-start justify-between">
                <span className="text-4xl">{m.icon}</span>
                <span className="text-right">
                  <Zh hanzi={m.hanzi} pinyin={m.pinyin} className="text-xl font-bold" />
                </span>
              </div>
              <h3 className="mt-3 font-extrabold leading-snug text-slate-900">{m.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{m.blurb}</p>
              {loaded ? (
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
                  {total > 0 && (
                    <span>
                      📖 {read}/{total} sections read
                    </span>
                  )}
                  {progress.challengeBest[m.id] ? (
                    <span>⚡ best {progress.challengeBest[m.id]}</span>
                  ) : null}
                </div>
              ) : (
                <p className="mt-3 text-xs font-bold uppercase tracking-wide text-slate-400">
                  Coming soon
                </p>
              )}
            </div>
          );
          return loaded ? (
            <Link key={m.id} href={`/topic/${m.id}`} className="block">
              {card}
            </Link>
          ) : (
            <div key={m.id}>{card}</div>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Link
          href="/exam"
          className="rounded-3xl border-2 border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
        >
          <span className="text-3xl">📝</span>
          <h3 className="mt-2 font-extrabold text-slate-900">The Big Exam</h3>
          <p className="mt-1 text-sm text-slate-600">
            Cross-topic mock papers, IGCSE style. Take it when you feel brave!
          </p>
        </Link>
        <Link
          href="/review"
          className="rounded-3xl border-2 border-slate-200 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-md"
        >
          <span className="text-3xl">🔁</span>
          <h3 className="mt-2 font-extrabold text-slate-900">Smart Review</h3>
          <p className="mt-1 text-sm text-slate-600">
            Spaced repetition brings back exactly what you were about to forget.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <AppGate>
      <Home />
    </AppGate>
  );
}
