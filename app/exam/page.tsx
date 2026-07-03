"use client";

import Link from "next/link";
import React, { useState } from "react";
import AppGate from "@/components/AppGate";
import PaperRunner from "@/components/PaperRunner";
import { COMPREHENSIVE_EXAM } from "@/lib/exam";
import { useStore } from "@/lib/store";
import type { MCQ, Paper, QA } from "@/lib/types";

function ExamInner() {
  const [active, setActive] = useState<{
    paper: Paper<MCQ> | Paper<QA>;
    kind: "mcq" | "qa";
  } | null>(null);
  const { progress } = useStore();
  const { mcqPapers, qaPapers } = COMPREHENSIVE_EXAM;

  if (mcqPapers.length === 0 && qaPapers.length === 0)
    return (
      <div className="py-16 text-center">
        <div className="text-5xl">🚧</div>
        <h1 className="mt-3 text-xl font-extrabold">The Big Exam is being written!</h1>
        <p className="mt-1 text-slate-500">Practise the topics first — it&apos;s coming soon.</p>
        <Link href="/" className="mt-4 inline-block rounded-full bg-rose-500 px-5 py-2 font-bold text-white">
          ← Back to topics
        </Link>
      </div>
    );

  if (active)
    return (
      <div>
        <button
          type="button"
          onClick={() => setActive(null)}
          className="mb-3 text-sm font-bold text-rose-500 hover:underline"
        >
          ← Exam menu
        </button>
        <PaperRunner paper={active.paper} kind={active.kind} examMode />
      </div>
    );

  return (
    <div>
      <h1 className="text-2xl font-black">📝 The Big Exam</h1>
      <p className="mt-1 max-w-2xl text-slate-500">
        Cross-topic mock papers in the style of Cambridge IGCSE Chinese (0547). Mixed
        topics, no warm-up — just like the real thing. 加油!
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {mcqPapers.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive({ paper: p, kind: "mcq" })}
            className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-violet-400"
          >
            <span className="text-3xl">🅰️</span>
            <h3 className="mt-2 font-extrabold">{p.title}</h3>
            <p className="text-sm text-slate-600">
              {p.questions.length} questions
              {(progress.awarded[p.id] ?? 0) > 0 && ` · best ⭐${progress.awarded[p.id]}`}
            </p>
            {p.description && <p className="mt-1 text-xs text-slate-500">{p.description}</p>}
          </button>
        ))}
        {qaPapers.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActive({ paper: p, kind: "qa" })}
            className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-amber-400"
          >
            <span className="text-3xl">✍️</span>
            <h3 className="mt-2 font-extrabold">{p.title}</h3>
            <p className="text-sm text-slate-600">
              {p.questions.length} written questions
              {(progress.awarded[p.id] ?? 0) > 0 && ` · best ⭐${progress.awarded[p.id]}`}
            </p>
            {p.description && <p className="mt-1 text-xs text-slate-500">{p.description}</p>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ExamPage() {
  return (
    <AppGate>
      <ExamInner />
    </AppGate>
  );
}
