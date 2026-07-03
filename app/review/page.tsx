"use client";

// Smart Review: everything due in the spaced-repetition queue — missed
// questions (via PaperRunner) and shaky vocab (quick flip cards).

import Link from "next/link";
import React, { useMemo, useState } from "react";
import AppGate from "@/components/AppGate";
import PaperRunner from "@/components/PaperRunner";
import { QUESTION_INDEX, TOPIC_BY_ID } from "@/lib/topicIndex";
import { useStore } from "@/lib/store";
import { Zh, speakChinese } from "@/lib/chinese";
import type { MCQ, Paper, QA } from "@/lib/types";

function ReviewInner() {
  const { dueReviews, recordVocab } = useStore();
  // Snapshot the due list once per mount so cards don't vanish mid-session.
  const due = useMemo(() => dueReviews(), []); // eslint-disable-line react-hooks/exhaustive-deps
  const [mode, setMode] = useState<"menu" | "mcq" | "qa" | "vocab">("menu");
  const [vocabIdx, setVocabIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const dueQuestions = due.filter((s) => !s.qid.startsWith("vocab:"));
  const dueVocab = due.filter((s) => s.qid.startsWith("vocab:"));

  const mcqPaper: Paper<MCQ> = useMemo(
    () => ({
      id: "review-mcq",
      title: "Review round — multiple choice",
      questions: dueQuestions
        .map((s) => QUESTION_INDEX[s.qid])
        .filter((iq) => iq && iq.kind === "mcq")
        .map((iq) => iq!.q as MCQ)
        .slice(0, 15),
    }),
    [dueQuestions]
  );
  const qaPaper: Paper<QA> = useMemo(
    () => ({
      id: "review-qa",
      title: "Review round — written",
      questions: dueQuestions
        .map((s) => QUESTION_INDEX[s.qid])
        .filter((iq) => iq && iq.kind === "qa")
        .map((iq) => iq!.q as QA)
        .slice(0, 8),
    }),
    [dueQuestions]
  );

  const vocabCards = useMemo(
    () =>
      dueVocab
        .map((s) => {
          const [, topicId, hanzi] = s.qid.split(":");
          const topic = TOPIC_BY_ID[topicId];
          const item = topic?.learn.vocab.find((v) => v.hanzi === hanzi);
          return item ? { topicId, item } : null;
        })
        .filter((x): x is NonNullable<typeof x> => !!x),
    [dueVocab]
  );

  if (due.length === 0)
    return (
      <div className="py-16 text-center">
        <div className="text-6xl">🎉</div>
        <h1 className="mt-3 text-2xl font-black">Nothing due for review!</h1>
        <p className="mt-1 text-slate-500">
          Your memory queue is empty. Learn something new and check back tomorrow.
        </p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-full bg-rose-500 px-6 py-2.5 font-bold text-white"
        >
          Explore topics
        </Link>
      </div>
    );

  if (mode === "mcq")
    return (
      <div>
        <button type="button" onClick={() => setMode("menu")} className="mb-3 text-sm font-bold text-rose-500">
          ← Review menu
        </button>
        <PaperRunner paper={mcqPaper} kind="mcq" />
      </div>
    );
  if (mode === "qa")
    return (
      <div>
        <button type="button" onClick={() => setMode("menu")} className="mb-3 text-sm font-bold text-rose-500">
          ← Review menu
        </button>
        <PaperRunner paper={qaPaper} kind="qa" />
      </div>
    );

  if (mode === "vocab") {
    const card = vocabCards[vocabIdx];
    if (!card)
      return (
        <div className="py-16 text-center">
          <div className="text-5xl">🌟</div>
          <h2 className="mt-3 text-xl font-black">Vocab review done!</h2>
          <button
            type="button"
            onClick={() => setMode("menu")}
            className="mt-4 rounded-full bg-rose-500 px-6 py-2.5 font-bold text-white"
          >
            Back to review menu
          </button>
        </div>
      );
    return (
      <div className="mx-auto max-w-md">
        <button type="button" onClick={() => setMode("menu")} className="mb-3 text-sm font-bold text-rose-500">
          ← Review menu
        </button>
        <p className="mb-2 text-center text-sm font-semibold text-slate-500">
          Card {vocabIdx + 1} of {vocabCards.length}
        </p>
        <button
          type="button"
          onClick={() => setFlipped((f) => !f)}
          className="block w-full rounded-3xl border-2 border-rose-200 bg-white p-10 text-center shadow-sm"
        >
          {!flipped ? (
            <>
              <Zh hanzi={card.item.hanzi} pinyin={card.item.pinyin} className="text-5xl font-bold" />
              <p className="mt-4 text-xs text-slate-400">Tap to reveal</p>
            </>
          ) : (
            <>
              <p className="text-2xl font-extrabold text-slate-900">{card.item.english}</p>
              {card.item.example && (
                <p className="mt-3 text-sm text-slate-500">
                  {card.item.example.hanzi} — {card.item.example.english}
                </p>
              )}
            </>
          )}
        </button>
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => speakChinese(card.item.hanzi)}
            className="rounded-full bg-slate-100 px-4 py-1.5 text-sm font-bold"
          >
            🔊 Listen
          </button>
        </div>
        {flipped && (
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                recordVocab(card.topicId, card.item.hanzi, false);
                setFlipped(false);
                setVocabIdx((i) => i + 1);
              }}
              className="rounded-2xl bg-rose-100 py-3 font-bold text-rose-700"
            >
              😅 Still learning
            </button>
            <button
              type="button"
              onClick={() => {
                recordVocab(card.topicId, card.item.hanzi, true);
                setFlipped(false);
                setVocabIdx((i) => i + 1);
              }}
              className="rounded-2xl bg-emerald-100 py-3 font-bold text-emerald-700"
            >
              ✅ Got it!
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-black">🔁 Smart Review</h1>
      <p className="mt-1 text-slate-500">
        These are due right now — reviewing them today locks them into long-term memory.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <button
          type="button"
          disabled={mcqPaper.questions.length === 0}
          onClick={() => setMode("mcq")}
          className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-5 text-left disabled:opacity-40"
        >
          <span className="text-3xl">✅</span>
          <h3 className="mt-2 font-extrabold">Multiple choice</h3>
          <p className="text-sm text-slate-600">{mcqPaper.questions.length} due</p>
        </button>
        <button
          type="button"
          disabled={qaPaper.questions.length === 0}
          onClick={() => setMode("qa")}
          className="rounded-3xl border-2 border-sky-200 bg-sky-50 p-5 text-left disabled:opacity-40"
        >
          <span className="text-3xl">✍️</span>
          <h3 className="mt-2 font-extrabold">Written</h3>
          <p className="text-sm text-slate-600">{qaPaper.questions.length} due</p>
        </button>
        <button
          type="button"
          disabled={vocabCards.length === 0}
          onClick={() => {
            setVocabIdx(0);
            setFlipped(false);
            setMode("vocab");
          }}
          className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-5 text-left disabled:opacity-40"
        >
          <span className="text-3xl">🀄</span>
          <h3 className="mt-2 font-extrabold">Vocab cards</h3>
          <p className="text-sm text-slate-600">{vocabCards.length} due</p>
        </button>
      </div>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <AppGate>
      <ReviewInner />
    </AppGate>
  );
}
