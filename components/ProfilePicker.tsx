"use client";

// "Who's studying today?" — pick, add, rename or remove learner profiles.

import React, { useState } from "react";
import { useStore } from "@/lib/store";
import type { Profile } from "@/lib/profileTypes";

const AVATARS = ["🐼", "🐉", "🦊", "🐰", "🐯", "🦁", "🐸", "🐧", "🦄", "🐨", "🐷", "🐹"];

export default function ProfilePicker() {
  const { account, selectProfile, refreshAuth, logout } = useStore();
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [editName, setEditName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const profiles = account?.profiles ?? [];

  const addLearner = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, avatar }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Couldn't add that learner — try again.");
        return;
      }
      await refreshAuth();
      setAdding(false);
      setName("");
      setAvatar(AVATARS[0]);
    } catch {
      setError("Couldn't reach the server — try again.");
    } finally {
      setBusy(false);
    }
  };

  const rename = async (p: Profile) => {
    if (busy || !editName.trim()) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/profiles", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId: p.id, name: editName }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Couldn't rename — try again.");
        return;
      }
      await refreshAuth();
      setEditingId(null);
    } catch {
      setError("Couldn't reach the server — try again.");
    } finally {
      setBusy(false);
    }
  };

  const remove = async (p: Profile) => {
    if (busy) return;
    if (!confirm(`Remove ${p.name}? All their stars and progress will be deleted.`))
      return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/profiles", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId: p.id }),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Couldn't remove that learner — try again.");
        return;
      }
      await refreshAuth();
      setEditingId(null);
    } catch {
      setError("Couldn't reach the server — try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl text-center">
        <div className="floaty inline-block text-6xl">🐉</div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Who&apos;s studying today?
        </h1>
        <p className="mt-2 text-slate-600">
          Tap your face to jump into the {account?.familyName} family lab!
        </p>

        {error && (
          <p className="mx-auto mt-4 max-w-md rounded-xl bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700">
            {error}
          </p>
        )}

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {profiles.map((p) =>
            editingId === p.id ? (
              <div
                key={p.id}
                className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4 text-left"
              >
                <div className="text-center text-4xl">{p.avatar}</div>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-200"
                  placeholder="New name"
                />
                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    disabled={busy}
                    onClick={() => rename(p)}
                    className="flex-1 rounded-xl bg-amber-500 px-2 py-1.5 text-xs font-bold text-white hover:bg-amber-600 disabled:opacity-60"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="flex-1 rounded-xl bg-white px-2 py-1.5 text-xs font-bold text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                </div>
                <button
                  type="button"
                  disabled={busy}
                  onClick={() => remove(p)}
                  className="mt-2 w-full rounded-xl px-2 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-50 disabled:opacity-60"
                >
                  🗑️ Remove learner
                </button>
              </div>
            ) : (
              <div key={p.id} className="relative">
                <button
                  type="button"
                  onClick={() => selectProfile(p)}
                  className="pop-in w-full rounded-2xl border-2 border-rose-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-rose-300 hover:shadow-lg"
                >
                  <span className="block text-5xl">{p.avatar}</span>
                  <span className="mt-3 block text-lg font-bold text-slate-900">
                    {p.name}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(p.id);
                    setEditName(p.name);
                    setError(null);
                  }}
                  className="absolute right-2 top-2 rounded-full bg-slate-100 p-1.5 text-sm hover:bg-amber-100"
                  title={`Edit ${p.name}`}
                >
                  ✏️
                </button>
              </div>
            )
          )}

          {adding ? (
            <form
              onSubmit={addLearner}
              className="rounded-2xl border-2 border-dashed border-rose-200 bg-white p-4 text-left"
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Learner's name"
                required
                autoFocus
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200"
              />
              <div className="mt-3 grid grid-cols-6 gap-1">
                {AVATARS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAvatar(a)}
                    className={`rounded-lg p-1 text-xl transition-transform hover:scale-110 ${
                      avatar === a ? "bg-rose-100 ring-2 ring-rose-400" : ""
                    }`}
                    title={`Pick ${a}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  type="submit"
                  disabled={busy}
                  className="flex-1 rounded-xl bg-rose-500 px-2 py-1.5 text-xs font-bold text-white hover:bg-rose-600 disabled:opacity-60"
                >
                  {busy ? "Adding…" : "Add!"}
                </button>
                <button
                  type="button"
                  onClick={() => setAdding(false)}
                  className="flex-1 rounded-xl bg-white px-2 py-1.5 text-xs font-bold text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => {
                setAdding(true);
                setError(null);
              }}
              className="flex min-h-40 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-rose-200 bg-rose-50/50 p-6 text-rose-500 transition-colors hover:border-rose-400 hover:bg-rose-50"
            >
              <span className="text-4xl">➕</span>
              <span className="mt-2 text-sm font-bold">Add learner</span>
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => logout()}
          className="mt-10 text-sm font-medium text-slate-400 underline-offset-2 hover:text-rose-600 hover:underline"
        >
          Not your family? Log out
        </button>
      </div>
    </div>
  );
}
