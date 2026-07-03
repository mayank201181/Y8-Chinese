"use client";

// Ask 小龙 (Xiǎolóng) — the friendly dragon tutor chat widget.
// Collapsed button → expandable chat panel wired to /api/ai.

import React, { useEffect, useRef, useState } from "react";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const PRESETS = [
  "Explain this simply",
  "Give me an example sentence",
  "Why does the grammar work this way?",
  "Test me with one question",
];

export default function AskAI({
  context,
  compact,
}: {
  context: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy, open]);

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || busy) return;
    const next: ChatMessage[] = [...messages, { role: "user", content: question }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const history = next
        .filter((m): m is ChatMessage & { role: "user" | "assistant" } => m.role !== "system")
        .slice(-12)
        .map((m) => ({ role: m.role, content: m.content }));
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, context }),
      });
      const data = (await res.json().catch(() => null)) as {
        reply?: string;
        error?: string;
      } | null;
      if (!res.ok) {
        setMessages((cur) => [
          ...cur,
          {
            role: "system",
            content: data?.error ?? "小龙 couldn't answer just now. Try again shortly.",
          },
        ]);
      } else {
        setMessages((cur) => [
          ...cur,
          { role: "assistant", content: data?.reply ?? "…" },
        ]);
      }
    } catch {
      setMessages((cur) => [
        ...cur,
        { role: "system", content: "小龙 couldn't reach the server — check your connection and try again." },
      ]);
    } finally {
      setBusy(false);
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 font-bold text-white shadow-lg shadow-emerald-200 transition-transform hover:scale-105 ${
          compact ? "px-4 py-2 text-sm" : "px-5 py-3"
        }`}
      >
        <span className={compact ? "text-lg" : "text-2xl"}>🐉</span>
        Ask 小龙 (Xiǎolóng) the dragon tutor
      </button>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-emerald-200 bg-white shadow-xl shadow-emerald-100">
      {/* Header */}
      <div className="flex items-center gap-2 rounded-t-2xl bg-gradient-to-r from-emerald-400 to-teal-500 px-4 py-3 text-white">
        <span className="floaty text-2xl">🐉</span>
        <div className="min-w-0">
          <p className="font-bold leading-tight">小龙 (Xiǎolóng)</p>
          <p className="truncate text-xs text-emerald-50">
            Your friendly dragon tutor
          </p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="ml-auto rounded-full bg-white/20 px-2.5 py-1 text-sm font-bold hover:bg-white/30"
          title="Close chat"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className={`overflow-y-auto px-4 py-3 ${compact ? "max-h-64" : "max-h-96"}`}
      >
        {messages.length === 0 && (
          <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            你好! 👋 I'm 小龙. Ask me anything about what you're studying — or
            tap one of the ideas below to get started!
          </div>
        )}
        <div className="flex flex-col gap-2">
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div
                key={i}
                className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-rose-500 px-3.5 py-2 text-sm text-white shadow-sm"
              >
                <span className="whitespace-pre-wrap">{m.content}</span>
              </div>
            ) : m.role === "assistant" ? (
              <div
                key={i}
                className="mr-auto max-w-[85%] rounded-2xl rounded-bl-md bg-emerald-50 px-3.5 py-2 text-sm text-slate-800 shadow-sm"
              >
                <span className="mr-1">🐉</span>
                <span className="whitespace-pre-wrap">{m.content}</span>
              </div>
            ) : (
              <div
                key={i}
                className="mx-auto max-w-[90%] rounded-2xl bg-amber-50 px-3.5 py-2 text-center text-xs font-medium text-amber-700"
              >
                💤 {m.content}
              </div>
            )
          )}
          {busy && (
            <div className="mr-auto flex items-center gap-1.5 rounded-2xl rounded-bl-md bg-emerald-50 px-3.5 py-2.5 text-sm shadow-sm">
              <span>🐉</span>
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:150ms]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-400 [animation-delay:300ms]" />
            </div>
          )}
        </div>
      </div>

      {/* Preset chips */}
      <div className="flex flex-wrap gap-1.5 px-4 pb-2">
        {PRESETS.map((p) => (
          <button
            key={p}
            type="button"
            disabled={busy}
            onClick={() => send(p)}
            className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 transition-colors hover:bg-emerald-100 disabled:opacity-50"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        className="flex items-center gap-2 border-t border-slate-100 px-3 py-2.5"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
          className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-emerald-300 focus:bg-white"
        />
        <button
          type="submit"
          disabled={busy || !input.trim()}
          className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-600 disabled:opacity-50"
        >
          Send ✉️
        </button>
      </form>
    </div>
  );
}
