"use client";

// Full-screen welcome + family login / signup for the Year 8 Chinese Lab.

import React, { useState } from "react";
import { useStore } from "@/lib/store";

type Tab = "login" | "signup";

const FEATURES: { icon: string; text: string }[] = [
  { icon: "🏮", text: "Seven fun topics — from greetings to shopping" },
  { icon: "🎴", text: "Flashcards with pinyin you can switch on and off" },
  { icon: "⭐", text: "Earn stars, streaks and ranks as you learn" },
  { icon: "👪", text: "One family account, a profile for each learner" },
];

export default function AuthGate() {
  const { refreshAuth } = useStore();
  const [tab, setTab] = useState<Tab>("login");
  const [familyName, setFamilyName] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const switchTab = (t: Tab) => {
    setTab(t);
    setError(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const url = tab === "login" ? "/api/auth/login" : "/api/auth/signup";
      const body =
        tab === "login" ? { familyName, password } : { familyName, password, pin };
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Something went wrong — please try again.");
        return;
      }
      await refreshAuth();
    } catch {
      setError("Couldn't reach the server — check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200";

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="grid w-full max-w-4xl gap-8 md:grid-cols-2 md:items-center">
        {/* Welcome panel */}
        <div className="text-center md:text-left">
          <div className="floaty inline-block text-7xl">🐉</div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Year 8 Chinese Lab
          </h1>
          <p className="zh mt-1 text-2xl font-bold text-rose-600" lang="zh-Hans">
            中文实验室
          </p>
          <p className="mt-3 text-slate-600">
            Your friendly place to practise Mandarin — a little every day goes a
            long way!
          </p>
          <ul className="mt-6 space-y-3 text-left">
            {FEATURES.map((f) => (
              <li
                key={f.text}
                className="flex items-center gap-3 text-sm font-medium text-slate-700"
              >
                <span className="text-xl">{f.icon}</span>
                {f.text}
              </li>
            ))}
          </ul>
        </div>

        {/* Auth card */}
        <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-lg shadow-rose-100/50 sm:p-8">
          <div className="flex rounded-full bg-slate-100 p-1">
            {(
              [
                { key: "login", label: "Log in" },
                { key: "signup", label: "Create family account" },
              ] as { key: Tab; label: string }[]
            ).map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => switchTab(t.key)}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-bold transition-colors ${
                  tab === t.key
                    ? "bg-white text-rose-700 shadow"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Family name
              </label>
              <input
                type="text"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                placeholder="e.g. The Wangs"
                autoComplete="username"
                required
                className={inputCls}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={tab === "signup" ? "At least 6 characters" : "Your password"}
                autoComplete={tab === "signup" ? "new-password" : "current-password"}
                minLength={tab === "signup" ? 6 : undefined}
                required
                className={inputCls}
              />
            </div>
            {tab === "signup" && (
              <div>
                <label className="mb-1 block text-sm font-semibold text-slate-700">
                  Parent PIN
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="\d{4,6}"
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="4–6 digits"
                  required
                  className={inputCls}
                />
                <p className="mt-1.5 text-xs text-slate-500">
                  🔒 Grown-ups use this PIN to open the parent dashboard and see
                  progress — keep it secret from the kids!
                </p>
              </div>
            )}

            {error && (
              <p className="rounded-xl bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-rose-500 px-4 py-3 font-bold text-white shadow-md shadow-rose-200 transition-colors hover:bg-rose-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting
                ? "One moment…"
                : tab === "login"
                  ? "🏮 Let's go!"
                  : "🎉 Create our account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
