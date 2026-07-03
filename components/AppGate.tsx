"use client";

// Gate: loading -> AuthGate -> ProfilePicker -> the app (with header + mascot).

import React from "react";
import { useStore } from "@/lib/store";
import AuthGate from "./AuthGate";
import ProfilePicker from "./ProfilePicker";
import Header from "./Header";
import Mascot from "./Mascot";

export default function AppGate({ children }: { children: React.ReactNode }) {
  const { status } = useStore();
  if (status === "loading")
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="floaty text-6xl">🐉</div>
          <p className="mt-3 text-sm font-medium text-slate-500">
            Loading the Chinese Lab…
          </p>
        </div>
      </div>
    );
  if (status === "anon") return <AuthGate />;
  if (status === "no-profile") return <ProfilePicker />;
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 pt-6 sm:px-6">
        {children}
      </main>
      <Mascot />
    </div>
  );
}
