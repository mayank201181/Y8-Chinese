"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { rankFor, todayKey, useStore } from "@/lib/store";
import { PinyinToggle } from "@/lib/chinese";

export default function Header() {
  const { account, profile, progress, selectProfile, logout } = useStore();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const rank = rankFor(progress.stars);
  const minutesToday = progress.analytics.perDayMinutes[todayKey()] ?? 0;
  const goalPct = Math.min(
    100,
    Math.round((minutesToday / Math.max(1, progress.goalMinutes)) * 100)
  );

  const nav = [
    { href: "/", label: "Topics", icon: "🏮" },
    { href: "/review", label: "Review", icon: "🔁" },
    { href: "/exam", label: "Big Exam", icon: "📝" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-rose-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-2.5 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🐉</span>
          <span className="hidden font-bold tracking-tight text-slate-900 sm:block">
            Year 8 Chinese Lab
          </span>
        </Link>
        <nav className="ml-2 flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                pathname === n.href
                  ? "bg-rose-100 text-rose-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <span className="mr-1">{n.icon}</span>
              <span className="hidden sm:inline">{n.label}</span>
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <PinyinToggle compact />
          <div
            className="hidden items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-bold text-amber-700 sm:flex"
            title={`${rank.icon} ${rank.name}`}
          >
            ⭐ {progress.stars}
          </div>
          {progress.streak.count > 0 && (
            <div
              className="flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1.5 text-sm font-bold text-orange-600"
              title={`${progress.streak.count}-day streak`}
            >
              🔥 {progress.streak.count}
            </div>
          )}
          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-lg ring-1 ring-rose-200"
              title={profile?.name}
            >
              {profile?.avatar ?? "🐼"}
            </button>
            {menuOpen && (
              <div
                className="absolute right-0 top-11 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
                onMouseLeave={() => setMenuOpen(false)}
              >
                <div className="px-3 py-2">
                  <p className="font-bold text-slate-900">{profile?.name}</p>
                  <p className="text-xs text-slate-500">
                    {rank.icon} {rank.name} · {account?.familyName} family
                  </p>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: `${goalPct}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {minutesToday}/{progress.goalMinutes} min today
                  </p>
                </div>
                <hr className="my-1 border-slate-100" />
                <button
                  type="button"
                  className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-slate-50"
                  onClick={() => {
                    setMenuOpen(false);
                    selectProfile(null);
                  }}
                >
                  🔄 Switch learner
                </button>
                <Link
                  href="/parent"
                  className="block w-full rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-slate-50"
                  onClick={() => setMenuOpen(false)}
                >
                  👪 Parent dashboard
                </Link>
                <button
                  type="button"
                  className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-rose-600 hover:bg-rose-50"
                  onClick={() => logout()}
                >
                  🚪 Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
