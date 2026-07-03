"use client";

// ChallengeMode — a 90-second lightning round over all of a topic's MCQs.
// Tap an answer, get an instant flash, auto-advance. Beat your best score!

import React, { useEffect, useMemo, useRef, useState } from "react";
import type { MCQ, Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { renderRich } from "@/lib/chinese";

const ROUND_SECONDS = 90;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = "ready" | "playing" | "done";

export default function ChallengeMode({ topic }: { topic: Topic }) {
  const { progress, recordResult, awardStars, setChallengeBest } = useStore();

  const allMcqs = useMemo<MCQ[]>(
    () => [
      ...topic.quiz.mcq,
      ...topic.questionBank.mcqPapers.flatMap((p) => p.questions),
    ],
    [topic]
  );

  const [pool, setPool] = useState<MCQ[]>([]);
  const [phase, setPhase] = useState<Phase>("ready");
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [flash, setFlash] = useState<{ sel: number; correct: boolean } | null>(null);
  const [prevBest, setPrevBest] = useState(0);
  const finishedRef = useRef(false);
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Shuffle the pool on mount (Fisher-Yates) — client-only, so no SSR mismatch.
  useEffect(() => {
    setPool(shuffle(allMcqs));
  }, [allMcqs]);

  // Countdown while playing.
  useEffect(() => {
    if (phase !== "playing") return;
    const iv = setInterval(() => setTimeLeft((t) => Math.max(0, t - 0.1)), 100);
    return () => clearInterval(iv);
  }, [phase]);

  // Time's up -> finish (score/answered are current state here).
  useEffect(() => {
    if (phase === "playing" && timeLeft <= 0) finish(score, answered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase]);

  useEffect(
    () => () => {
      if (flashTimer.current) clearTimeout(flashTimer.current);
    },
    []
  );

  const finish = (finalScore: number, finalAnswered: number) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    if (flashTimer.current) clearTimeout(flashTimer.current);
    setPrevBest(progress.challengeBest[topic.id] ?? 0);
    setPhase("done");
    setChallengeBest(topic.id, finalScore);
    // awardStars keeps the best result, so it's safe to award every run.
    awardStars(`challenge-${topic.id}`, Math.min(finalScore, 15), {
      kind: "challenge",
      topicId: topic.id,
      label: `${topic.title} challenge`,
      correct: finalScore,
      total: finalAnswered,
    });
  };

  const start = () => {
    setPool(shuffle(allMcqs));
    setIdx(0);
    setScore(0);
    setAnswered(0);
    setTimeLeft(ROUND_SECONDS);
    setFlash(null);
    finishedRef.current = false;
    setPhase("playing");
  };

  const answer = (sel: number) => {
    if (flash || phase !== "playing" || timeLeft <= 0) return;
    const q = pool[idx];
    if (!q) return;
    const correct = sel === q.answerIndex;
    recordResult(q.id, correct, topic.id);
    const nextScore = score + (correct ? 1 : 0);
    const nextAnswered = answered + 1;
    setScore(nextScore);
    setAnswered(nextAnswered);
    setFlash({ sel, correct });
    flashTimer.current = setTimeout(() => {
      setFlash(null);
      if (idx + 1 >= pool.length) {
        // Ran out of questions before the clock — end the round.
        finish(nextScore, nextAnswered);
      } else {
        setIdx(idx + 1);
      }
    }, 450);
  };

  // ---- Ready screen ----
  if (phase === "ready") {
    const best = progress.challengeBest[topic.id] ?? 0;
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-rose-100 bg-white p-8 text-center shadow-sm">
        <div className="floaty text-6xl">⚡</div>
        <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
          Lightning Challenge
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          {ROUND_SECONDS} seconds. As many questions as you can. No hints, no
          second chances — go with your gut!
        </p>
        {best > 0 && (
          <p className="mt-2 text-sm font-bold text-amber-600">
            🏅 Your best: {best}
          </p>
        )}
        <button
          type="button"
          onClick={start}
          disabled={pool.length === 0}
          className="mt-5 rounded-2xl bg-rose-500 px-8 py-3 text-lg font-extrabold text-white shadow hover:bg-rose-600 disabled:opacity-40"
        >
          🚀 Start!
        </button>
      </div>
    );
  }

  // ---- Score screen ----
  if (phase === "done") {
    const isNewBest = score > prevBest;
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-rose-100 bg-white p-8 text-center shadow-sm">
        <div className="pop-in text-6xl">{isNewBest ? "🏆" : "⏰"}</div>
        <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
          {isNewBest ? "New best score!" : "Time's up!"}
        </h2>
        <p className="mt-2 text-4xl font-extrabold text-rose-500">{score}</p>
        <p className="mt-1 text-sm text-slate-600">
          {score} correct out of {answered} answered
        </p>
        <p className="mt-2 text-sm font-semibold text-amber-600">
          {isNewBest
            ? `You beat your old best of ${prevBest}! 🎉`
            : `Your best is still ${Math.max(prevBest, score)} — can you top it?`}
        </p>
        <p className="mt-1 text-xs text-slate-400">
          ⭐ up to 15 stars per challenge — best run counts
        </p>
        <button
          type="button"
          onClick={start}
          className="mt-5 rounded-2xl bg-rose-500 px-8 py-3 text-lg font-extrabold text-white shadow hover:bg-rose-600"
        >
          🔁 Play again
        </button>
      </div>
    );
  }

  // ---- Playing ----
  const q = pool[idx];
  const pct = Math.max(0, Math.min(100, (timeLeft / ROUND_SECONDS) * 100));
  const secs = Math.ceil(timeLeft);
  return (
    <div className="mx-auto max-w-xl space-y-4">
      {/* Timer bar */}
      <div className="rounded-2xl border border-rose-100 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between text-sm font-bold">
          <span className="text-slate-700">⚡ Score: {score}</span>
          <span className={secs <= 10 ? "animate-pulse text-rose-600" : "text-slate-700"}>
            ⏱ {secs}s
          </span>
        </div>
        <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full transition-[width] duration-100 ${
              secs <= 10 ? "bg-rose-500" : secs <= 30 ? "bg-amber-400" : "bg-emerald-400"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Question */}
      {q && (
        <div
          className={`rounded-2xl border-2 p-5 shadow-sm transition-colors sm:p-6 ${
            flash
              ? flash.correct
                ? "border-emerald-400 bg-emerald-50"
                : "border-rose-400 bg-rose-50"
              : "border-rose-100 bg-white"
          }`}
        >
          <p className="text-base font-semibold leading-relaxed text-slate-900">
            {renderRich(q.question)}
          </p>
          <div className="mt-4 space-y-2">
            {q.options.map((opt, i) => {
              let cls =
                "border-slate-200 bg-white hover:border-rose-300 hover:bg-rose-50";
              if (flash && i === flash.sel)
                cls = flash.correct
                  ? "border-emerald-400 bg-emerald-100 text-emerald-900"
                  : "border-rose-400 bg-rose-100 text-rose-900";
              else if (flash) cls = "border-slate-200 bg-white opacity-60";
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => answer(i)}
                  disabled={!!flash}
                  className={`block w-full rounded-2xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ${cls}`}
                >
                  {renderRich(opt)}
                  {flash && i === flash.sel && (
                    <span className="ml-2">{flash.correct ? "✅" : "❌"}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
