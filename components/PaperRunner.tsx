"use client";

// PaperRunner — the single assessment engine for MCQ and written (QA) papers.
// AoPS behaviour: try first, laddered hints, explanations after checking,
// alternative solution paths, self-assessment for written answers.

import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import type { MCQ, Paper, QA, Difficulty } from "@/lib/types";
import { useStore } from "@/lib/store";
import { renderRich, extractChinese, speakChinese, PinyinToggle } from "@/lib/chinese";
import { gradeAnswer, GradeResult } from "@/lib/grade";

type SelfMark = "right" | "partly" | "notyet";

interface QState {
  sel: number | null; // mcq: chosen option index
  text: string; // qa: typed answer
  hintsUsed: number;
  checked: boolean;
  correct: boolean;
  selfMark?: SelfMark;
  modelShown?: boolean;
}

interface RunState {
  states: QState[];
  current: number;
  finished: boolean;
}

function freshQState(): QState {
  return { sel: null, text: "", hintsUsed: 0, checked: false, correct: false };
}

const DIFF_BADGE: Record<Difficulty, { label: string; cls: string }> = {
  warmup: { label: "🌱 warm-up", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  core: { label: "💪 core", cls: "bg-sky-50 text-sky-700 border-sky-200" },
  challenge: { label: "🔥 challenge", cls: "bg-orange-50 text-orange-700 border-orange-200" },
};

export default function PaperRunner({
  paper,
  kind,
  topicId,
  examMode,
}: {
  paper: Paper<MCQ> | Paper<QA>;
  kind: "mcq" | "qa";
  topicId?: string;
  examMode?: boolean;
}) {
  const { recordResult, awardStars } = useStore();
  const questions = paper.questions as (MCQ | QA)[];
  const total = questions.length;
  const storageKey = `y8zh-paper-${paper.id}`;

  const [states, setStates] = useState<QState[]>(() =>
    questions.map(() => freshQState())
  );
  const [current, setCurrent] = useState(0);
  const [finished, setFinished] = useState(false);
  const [ready, setReady] = useState(false); // localStorage checked
  const [resumeOffer, setResumeOffer] = useState<RunState | null>(null);
  const [solTab, setSolTab] = useState(0);
  const awardedRef = useRef(false);

  // ---- Load saved run on mount ----
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) {
        const saved = JSON.parse(raw) as RunState;
        if (
          saved &&
          !saved.finished &&
          Array.isArray(saved.states) &&
          saved.states.length === total &&
          saved.states.some((s) => s.checked || s.sel !== null || s.text)
        ) {
          setResumeOffer(saved);
        }
      }
    } catch {}
    setReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  // ---- Autosave on every change (once the resume question is settled) ----
  useEffect(() => {
    if (!ready || resumeOffer) return;
    try {
      if (finished) localStorage.removeItem(storageKey);
      else
        localStorage.setItem(
          storageKey,
          JSON.stringify({ states, current, finished } satisfies RunState)
        );
    } catch {}
  }, [states, current, finished, ready, resumeOffer, storageKey]);

  const setQ = useCallback((idx: number, patch: Partial<QState>) => {
    setStates((prev) => prev.map((s, i) => (i === idx ? { ...s, ...patch } : s)));
  }, []);

  const q = questions[current];
  const st = states[current];
  const hints = q.hints ?? [];
  const diff = DIFF_BADGE[q.difficulty ?? "core"];
  const chinese = extractChinese(q.question);

  // QA grading is deterministic — recompute from the stored answer.
  const grade: GradeResult | null =
    kind === "qa" && st.checked ? gradeAnswer(st.text, (q as QA).markScheme) : null;

  const allChecked = states.every((s) => s.checked);
  const correctCount = states.filter((s) => s.correct).length;

  // ---- Actions ----
  const check = () => {
    if (st.checked) return;
    let correct: boolean;
    if (kind === "mcq") {
      if (st.sel === null) return;
      correct = st.sel === (q as MCQ).answerIndex;
    } else {
      if (!st.text.trim()) return;
      correct = gradeAnswer(st.text, (q as QA).markScheme).verdict === "correct";
    }
    setQ(current, { checked: true, correct });
    recordResult(q.id, correct, topicId);
  };

  const selfMark = (mark: SelfMark) => {
    // "correct" only if the verdict was correct or the learner says they got it right.
    setQ(current, {
      selfMark: mark,
      correct: mark === "right" || grade?.verdict === "correct",
    });
  };

  const goTo = (idx: number) => {
    setCurrent(idx);
    setSolTab(0);
  };

  const finish = () => {
    if (!allChecked) return;
    setFinished(true);
    if (!awardedRef.current) {
      awardedRef.current = true;
      const noHintBonus = Math.min(
        states.filter((s) => s.correct && s.hintsUsed === 0).length,
        Math.ceil(total / 3)
      );
      const stars = correctCount + noHintBonus;
      awardStars(paper.id, stars, {
        kind: examMode ? "exam" : "paper",
        topicId,
        label: paper.title,
        correct: correctCount,
        total,
      });
      try {
        localStorage.removeItem(storageKey);
      } catch {}
    }
  };

  const restart = () => {
    try {
      localStorage.removeItem(storageKey);
    } catch {}
    setStates(questions.map(() => freshQState()));
    setCurrent(0);
    setFinished(false);
    setSolTab(0);
    awardedRef.current = false;
  };

  // ---- Resume prompt ----
  if (ready && resumeOffer) {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
        <div className="text-4xl">📌</div>
        <h2 className="mt-2 text-lg font-bold text-slate-900">
          Resume where you left off?
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          You have an unfinished attempt at <strong>{paper.title}</strong>.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-2xl bg-emerald-500 px-5 py-2.5 font-bold text-white shadow hover:bg-emerald-600"
            onClick={() => {
              setStates(resumeOffer.states.map((s) => ({ ...freshQState(), ...s })));
              setCurrent(Math.min(resumeOffer.current, total - 1));
              setResumeOffer(null);
            }}
          >
            ▶️ Resume
          </button>
          <button
            type="button"
            className="rounded-2xl border border-slate-300 bg-white px-5 py-2.5 font-bold text-slate-700 hover:bg-slate-50"
            onClick={() => {
              try {
                localStorage.removeItem(storageKey);
              } catch {}
              setResumeOffer(null);
            }}
          >
            🔄 Start fresh
          </button>
        </div>
      </div>
    );
  }

  // ---- Finish screen ----
  if (finished) {
    const zeroHintCorrect = states.filter((s) => s.correct && s.hintsUsed === 0).length;
    const bonus = Math.min(zeroHintCorrect, Math.ceil(total / 3));
    const stars = correctCount + bonus;
    const pct = total ? correctCount / total : 0;
    const emoji = pct === 1 ? "🏆" : pct >= 0.7 ? "🎉" : pct >= 0.4 ? "💪" : "🌱";
    return (
      <div className="mx-auto max-w-2xl rounded-2xl border border-rose-100 bg-white p-8 text-center shadow-sm">
        <div className="pop-in text-6xl">{emoji}</div>
        <h2 className="mt-3 text-2xl font-extrabold text-slate-900">
          {pct === 1 ? "Perfect paper!" : pct >= 0.7 ? "Great work!" : "Good effort — keep going!"}
        </h2>
        <p className="mt-2 text-lg font-semibold text-slate-700">
          Score: {correctCount}/{total}
        </p>
        <div className="mx-auto mt-4 inline-flex flex-col items-center gap-1 rounded-2xl bg-amber-50 px-6 py-4">
          <p className="text-2xl font-extrabold text-amber-600">⭐ {stars} stars</p>
          <p className="text-xs text-slate-500">
            {correctCount} for correct answers
            {bonus > 0 && (
              <>
                {" "}
                + {bonus} <strong>no-hint bonus</strong> (answers you nailed with zero
                hints, capped at {Math.ceil(total / 3)})
              </>
            )}
          </p>
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            onClick={restart}
            className="rounded-2xl bg-rose-500 px-6 py-3 font-bold text-white shadow hover:bg-rose-600"
          >
            🔁 Try again
          </button>
          <button
            type="button"
            onClick={() => history.back()}
            className="rounded-2xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-700 hover:bg-slate-50"
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  // ---- Main runner ----
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* Paper header */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-rose-100 bg-white px-4 py-3 shadow-sm">
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-base font-bold text-slate-900">
            {examMode ? "📝 " : ""}
            {paper.title}
          </h1>
          {paper.description && (
            <p className="truncate text-xs text-slate-500">{paper.description}</p>
          )}
        </div>
        <PinyinToggle compact />
      </div>

      {/* Question navigator */}
      <div className="flex flex-wrap gap-1.5">
        {states.map((s, i) => {
          const isCur = i === current;
          let cls = "border-slate-200 bg-white text-slate-500 hover:bg-slate-50";
          if (s.checked && s.correct)
            cls = "border-emerald-300 bg-emerald-100 text-emerald-700";
          else if (s.checked) cls = "border-rose-300 bg-rose-100 text-rose-700";
          return (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              className={`h-9 w-9 rounded-full border text-sm font-bold transition-all ${cls} ${
                isCur ? "ring-2 ring-rose-400 ring-offset-2" : ""
              }`}
              aria-label={`Question ${i + 1}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Question card */}
      <div className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-400">
            Q{current + 1} of {total}
          </span>
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${diff.cls}`}
          >
            {diff.label}
          </span>
          {q.strategy && (
            <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-xs font-semibold text-violet-700">
              🧠 {q.strategy}
            </span>
          )}
          {chinese && (
            <button
              type="button"
              onClick={() => speakChinese(chinese)}
              className="ml-auto rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-sm hover:bg-slate-50"
              title="Read the Chinese out loud"
            >
              🔊
            </button>
          )}
        </div>

        <p className="mt-3 text-base font-semibold leading-relaxed text-slate-900">
          {renderRich(q.question)}
        </p>

        {/* Hints */}
        {hints.length > 0 && !st.checked && (
          <div className="mt-4">
            <button
              type="button"
              disabled={st.hintsUsed >= hints.length}
              onClick={() => setQ(current, { hintsUsed: st.hintsUsed + 1 })}
              className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700 hover:bg-amber-100 disabled:opacity-40"
            >
              💡 Hint ({hints.length - st.hintsUsed} left)
            </button>
          </div>
        )}
        {st.hintsUsed > 0 && (
          <div className="mt-3 space-y-2">
            {hints.slice(0, st.hintsUsed).map((h, i) => (
              <div
                key={i}
                className="rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900"
              >
                <span className="mr-1 font-bold">Hint {i + 1}:</span>
                {renderRich(h)}
              </div>
            ))}
          </div>
        )}

        {/* Answer area */}
        {kind === "mcq" ? (
          <McqBody
            q={q as MCQ}
            st={st}
            onSelect={(i) => !st.checked && setQ(current, { sel: i })}
          />
        ) : (
          <QaBody
            q={q as QA}
            st={st}
            grade={grade}
            solTab={solTab}
            setSolTab={setSolTab}
            onText={(t) => !st.checked && setQ(current, { text: t })}
            onShowModel={() => setQ(current, { modelShown: true })}
            onSelfMark={selfMark}
          />
        )}

        {/* Re-read link */}
        {st.checked && q.guideRef && topicId && (
          <Link
            href={`/topic/${topicId}?tab=guide`}
            className="mt-4 inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700 hover:bg-sky-100"
          >
            📖 Re-read: {q.guideRef}
          </Link>
        )}

        {/* Footer buttons */}
        <div className="mt-5 flex items-center gap-3">
          {!st.checked ? (
            <button
              type="button"
              onClick={check}
              disabled={kind === "mcq" ? st.sel === null : !st.text.trim()}
              className="rounded-2xl bg-rose-500 px-6 py-3 font-bold text-white shadow transition-colors hover:bg-rose-600 disabled:opacity-40"
            >
              {kind === "mcq" ? "Check" : "Check my answer"}
            </button>
          ) : allChecked ? (
            <button
              type="button"
              onClick={finish}
              className="rounded-2xl bg-emerald-500 px-6 py-3 font-bold text-white shadow hover:bg-emerald-600"
            >
              🏁 Finish
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                const next = states.findIndex((s, i) => i > current && !s.checked);
                goTo(next !== -1 ? next : states.findIndex((s) => !s.checked));
              }}
              className="rounded-2xl bg-rose-500 px-6 py-3 font-bold text-white shadow hover:bg-rose-600"
            >
              Next →
            </button>
          )}
          <span className="text-xs text-slate-400">
            {states.filter((s) => s.checked).length}/{total} answered
          </span>
        </div>
      </div>
    </div>
  );
}

// ---- MCQ answer body ----

function McqBody({
  q,
  st,
  onSelect,
}: {
  q: MCQ;
  st: QState;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="mt-4 space-y-2">
      {q.options.map((opt, i) => {
        let cls = "border-slate-200 bg-white hover:border-rose-300 hover:bg-rose-50";
        if (st.checked) {
          if (i === q.answerIndex)
            cls = "border-emerald-400 bg-emerald-50 text-emerald-900";
          else if (i === st.sel) cls = "border-rose-400 bg-rose-50 text-rose-900";
          else cls = "border-slate-200 bg-white opacity-60";
        } else if (i === st.sel) {
          cls = "border-rose-400 bg-rose-50 ring-1 ring-rose-300";
        }
        return (
          <button
            key={i}
            type="button"
            onClick={() => onSelect(i)}
            disabled={st.checked}
            className={`block w-full rounded-2xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ${cls}`}
          >
            <span className="mr-2 font-bold text-slate-400">
              {String.fromCharCode(65 + i)}.
            </span>
            {renderRich(opt)}
            {st.checked && i === q.answerIndex && <span className="ml-2">✅</span>}
            {st.checked && i === st.sel && i !== q.answerIndex && (
              <span className="ml-2">❌</span>
            )}
          </button>
        );
      })}
      {st.checked && (
        <div
          className={`mt-3 rounded-2xl border px-4 py-3 text-sm ${
            st.correct
              ? "border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border-rose-200 bg-rose-50 text-rose-900"
          }`}
        >
          <p className="font-bold">{st.correct ? "🎉 Correct!" : "Not quite…"}</p>
          <p className="mt-1">{renderRich(q.explanation)}</p>
        </div>
      )}
    </div>
  );
}

// ---- QA answer body ----

function QaBody({
  q,
  st,
  grade,
  solTab,
  setSolTab,
  onText,
  onShowModel,
  onSelfMark,
}: {
  q: QA;
  st: QState;
  grade: GradeResult | null;
  solTab: number;
  setSolTab: (i: number) => void;
  onText: (t: string) => void;
  onShowModel: () => void;
  onSelfMark: (m: SelfMark) => void;
}) {
  const verdictUi =
    grade?.verdict === "correct"
      ? { emoji: "🎉", label: "Looking great!", cls: "border-emerald-200 bg-emerald-50 text-emerald-900" }
      : grade?.verdict === "partial"
        ? { emoji: "🟡", label: "Partly there — check the points below.", cls: "border-amber-200 bg-amber-50 text-amber-900" }
        : { emoji: "🌱", label: "Needs work — compare with the mark scheme.", cls: "border-rose-200 bg-rose-50 text-rose-900" };

  return (
    <div className="mt-4 space-y-3">
      <textarea
        value={st.text}
        onChange={(e) => onText(e.target.value)}
        disabled={st.checked}
        rows={3}
        lang="zh-Hans"
        placeholder="Type your answer here — Chinese characters or pinyin both work! 加油!"
        className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base focus:border-rose-400 focus:outline-none disabled:bg-slate-50"
      />

      {st.checked && grade && (
        <>
          <div className={`rounded-2xl border px-4 py-3 text-sm ${verdictUi.cls}`}>
            <p className="font-bold">
              {verdictUi.emoji} {verdictUi.label}{" "}
              <span className="font-normal">
                ({grade.hit}/{grade.total} mark-scheme points spotted)
              </span>
            </p>
            <ul className="mt-2 space-y-1.5">
              {q.markScheme.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5">{grade.matchedPoints[i] ? "✓" : "✗"}</span>
                  <span
                    className={grade.matchedPoints[i] ? "" : "opacity-70"}
                  >
                    {renderRich(point)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Model answer reveal */}
          {!st.modelShown ? (
            <button
              type="button"
              onClick={onShowModel}
              className="rounded-full border border-sky-300 bg-sky-50 px-3 py-1.5 text-xs font-bold text-sky-700 hover:bg-sky-100"
            >
              I tried — show the model answer
            </button>
          ) : (
            <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-900">
              <p className="font-bold">📗 Model answer</p>
              <p className="mt-1 leading-relaxed">{renderRich(q.modelAnswer)}</p>
            </div>
          )}

          {/* Common error */}
          {q.commonError && (
            <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-sm text-orange-900">
              <p className="font-bold">⚠️ Watch out</p>
              <p className="mt-1">{renderRich(q.commonError)}</p>
            </div>
          )}

          {/* Alternative solutions as tabs */}
          {q.solutions && q.solutions.length > 0 && (
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-3">
              <p className="px-1 text-xs font-bold text-violet-700">
                🧭 More than one way to get there:
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {q.solutions.map((s, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSolTab(i)}
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      solTab === i
                        ? "bg-violet-500 text-white"
                        : "bg-white text-violet-700 hover:bg-violet-100"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
              <ol className="mt-2 list-decimal space-y-1 pl-6 text-sm text-violet-900">
                {(q.solutions[Math.min(solTab, q.solutions.length - 1)]?.steps ?? []).map(
                  (step, i) => (
                    <li key={i}>{renderRich(step)}</li>
                  )
                )}
              </ol>
            </div>
          )}

          {/* Self-assessment override */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl bg-slate-50 px-3 py-2.5">
            <span className="text-xs font-bold text-slate-500">
              How did you really do?
            </span>
            <button
              type="button"
              onClick={() => onSelfMark("right")}
              className={`rounded-full border px-3 py-1 text-xs font-bold ${
                st.selfMark === "right"
                  ? "border-emerald-400 bg-emerald-100 text-emerald-800"
                  : "border-emerald-200 bg-white text-emerald-700 hover:bg-emerald-50"
              }`}
            >
              😄 I got it right
            </button>
            <button
              type="button"
              onClick={() => onSelfMark("partly")}
              className={`rounded-full border px-3 py-1 text-xs font-bold ${
                st.selfMark === "partly"
                  ? "border-amber-400 bg-amber-100 text-amber-800"
                  : "border-amber-200 bg-white text-amber-700 hover:bg-amber-50"
              }`}
            >
              🤏 Partly
            </button>
            <button
              type="button"
              onClick={() => onSelfMark("notyet")}
              className={`rounded-full border px-3 py-1 text-xs font-bold ${
                st.selfMark === "notyet"
                  ? "border-rose-400 bg-rose-100 text-rose-800"
                  : "border-rose-200 bg-white text-rose-700 hover:bg-rose-50"
              }`}
            >
              🌱 Not yet
            </button>
          </div>
        </>
      )}
    </div>
  );
}
