"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import AppGate from "@/components/AppGate";
import GuideView from "@/components/GuideView";
import PaperRunner from "@/components/PaperRunner";
import ChallengeMode from "@/components/ChallengeMode";
import VocabTrainer from "@/components/VocabTrainer";
import Explorables from "@/components/Explorables";
import CertificateButton from "@/components/Certificate";
import { EXTRAS_BY_TOPIC } from "@/lib/extrasIndex";
import { TOPIC_BY_ID, TOPIC_META } from "@/lib/topicIndex";
import { useStore } from "@/lib/store";
import { Zh } from "@/lib/chinese";
import type { MCQ, Paper, QA } from "@/lib/types";

const TABS = [
  { key: "guide", label: "Guide", icon: "📖" },
  { key: "learn", label: "Words", icon: "🀄" },
  { key: "quiz", label: "Quiz", icon: "✅" },
  { key: "papers", label: "Papers", icon: "📝" },
  { key: "play", label: "Play", icon: "🎮" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

function TopicInner({ id, initialTab }: { id: string; initialTab?: string }) {
  const topic = TOPIC_BY_ID[id];
  const meta = TOPIC_META.find((m) => m.id === id);
  const [tab, setTab] = useState<TabKey>(
    (TABS.some((t) => t.key === initialTab) ? initialTab : "guide") as TabKey
  );
  const [activePaper, setActivePaper] = useState<{
    paper: Paper<MCQ> | Paper<QA>;
    kind: "mcq" | "qa";
  } | null>(null);
  const { profile, progress } = useStore();

  const quizMcqPaper: Paper<MCQ> | null = useMemo(
    () =>
      topic
        ? {
            id: `${topic.id}-quiz-mcq`,
            title: `${topic.title} — Quick quiz`,
            questions: topic.quiz.mcq,
          }
        : null,
    [topic]
  );
  const quizQaPaper: Paper<QA> | null = useMemo(
    () =>
      topic
        ? {
            id: `${topic.id}-quiz-qa`,
            title: `${topic.title} — Written quiz`,
            questions: topic.quiz.qa,
          }
        : null,
    [topic]
  );

  if (!topic || !meta) {
    return (
      <div className="py-16 text-center">
        <div className="text-5xl">🚧</div>
        <h1 className="mt-3 text-xl font-extrabold">This topic is coming soon!</h1>
        <p className="mt-1 text-slate-500">We&apos;re still writing it. Check back shortly.</p>
        <Link
          href="/"
          className="mt-4 inline-block rounded-full bg-rose-500 px-5 py-2 font-bold text-white"
        >
          ← Back to topics
        </Link>
      </div>
    );
  }

  const extras = EXTRAS_BY_TOPIC[topic.id];
  const sectionsRead = progress.guidesRead[topic.id]?.length ?? 0;
  const mastered =
    sectionsRead >= topic.guide.length &&
    (progress.awarded[`${topic.id}-quiz-mcq`] ?? 0) > 0;

  const switchTab = (k: TabKey) => {
    setTab(k);
    setActivePaper(null);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <Link href="/" className="text-sm font-bold text-rose-500 hover:underline">
          ← Topics
        </Link>
        <span className="text-3xl">{topic.icon}</span>
        <h1 className="text-xl font-black text-slate-900 sm:text-2xl">{topic.title}</h1>
        <Zh
          hanzi={topic.titleChinese.hanzi}
          pinyin={topic.titleChinese.pinyin}
          className="text-lg font-bold text-slate-500"
        />
        {mastered && <span title="Topic mastered!">🏅</span>}
      </div>

      <div className="mt-4 flex gap-1.5 overflow-x-auto rounded-full bg-white p-1.5 shadow-sm ring-1 ring-slate-200">
        {TABS.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => switchTab(t.key)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              tab === t.key
                ? "bg-rose-500 text-white shadow"
                : "text-slate-600 hover:bg-rose-50"
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {tab === "guide" && <GuideView topic={topic} extras={extras} />}
        {tab === "learn" && <VocabTrainer topic={topic} />}

        {tab === "quiz" &&
          (activePaper ? (
            <div>
              <button
                type="button"
                onClick={() => setActivePaper(null)}
                className="mb-3 text-sm font-bold text-rose-500 hover:underline"
              >
                ← All quizzes
              </button>
              <PaperRunner
                paper={activePaper.paper}
                kind={activePaper.kind}
                topicId={topic.id}
              />
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {quizMcqPaper && (
                <button
                  type="button"
                  onClick={() => setActivePaper({ paper: quizMcqPaper, kind: "mcq" })}
                  className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-emerald-400"
                >
                  <span className="text-3xl">✅</span>
                  <h3 className="mt-2 font-extrabold">Quick quiz</h3>
                  <p className="text-sm text-slate-600">
                    {quizMcqPaper.questions.length} multiple-choice questions
                    {(progress.awarded[quizMcqPaper.id] ?? 0) > 0 &&
                      ` · best ⭐${progress.awarded[quizMcqPaper.id]}`}
                  </p>
                </button>
              )}
              {quizQaPaper && (
                <button
                  type="button"
                  onClick={() => setActivePaper({ paper: quizQaPaper, kind: "qa" })}
                  className="rounded-3xl border-2 border-sky-200 bg-sky-50 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-sky-400"
                >
                  <span className="text-3xl">✍️</span>
                  <h3 className="mt-2 font-extrabold">Written quiz</h3>
                  <p className="text-sm text-slate-600">
                    {quizQaPaper.questions.length} write-it-yourself questions
                    {(progress.awarded[quizQaPaper.id] ?? 0) > 0 &&
                      ` · best ⭐${progress.awarded[quizQaPaper.id]}`}
                  </p>
                </button>
              )}
            </div>
          ))}

        {tab === "papers" &&
          (activePaper ? (
            <div>
              <button
                type="button"
                onClick={() => setActivePaper(null)}
                className="mb-3 text-sm font-bold text-rose-500 hover:underline"
              >
                ← All papers
              </button>
              <PaperRunner
                paper={activePaper.paper}
                kind={activePaper.kind}
                topicId={topic.id}
              />
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {topic.questionBank.mcqPapers.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePaper({ paper: p, kind: "mcq" })}
                  className="rounded-3xl border-2 border-violet-200 bg-violet-50 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-violet-400"
                >
                  <span className="text-3xl">🅰️</span>
                  <h3 className="mt-2 font-extrabold">{p.title}</h3>
                  <p className="text-sm text-slate-600">
                    {p.questions.length} MCQs
                    {(progress.awarded[p.id] ?? 0) > 0 && ` · best ⭐${progress.awarded[p.id]}`}
                  </p>
                </button>
              ))}
              {topic.questionBank.qaPapers.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePaper({ paper: p, kind: "qa" })}
                  className="rounded-3xl border-2 border-amber-200 bg-amber-50 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-amber-400"
                >
                  <span className="text-3xl">✍️</span>
                  <h3 className="mt-2 font-extrabold">{p.title}</h3>
                  <p className="text-sm text-slate-600">
                    {p.questions.length} written questions
                    {(progress.awarded[p.id] ?? 0) > 0 && ` · best ⭐${progress.awarded[p.id]}`}
                  </p>
                </button>
              ))}
            </div>
          ))}

        {tab === "play" && (
          <div className="space-y-6">
            <Explorables topicId={topic.id} keys={extras?.interactives} />
            <div className="rounded-3xl border-2 border-orange-200 bg-orange-50 p-5">
              <h3 className="text-lg font-extrabold">⚡ Lightning challenge</h3>
              <p className="mb-4 text-sm text-slate-600">
                90 seconds, as many right answers as you can. Best:{" "}
                {progress.challengeBest[topic.id] ?? 0}
              </p>
              <ChallengeMode topic={topic} />
            </div>
            {mastered && (
              <div className="rounded-3xl border-2 border-yellow-300 bg-yellow-50 p-5 text-center">
                <p className="mb-3 font-bold">
                  🏅 You&apos;ve mastered this topic — claim your certificate!
                </p>
                <CertificateButton
                  title={topic.title}
                  learnerName={profile?.name ?? "Super Learner"}
                  stars={progress.stars}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function TopicClient(props: { id: string; initialTab?: string }) {
  return (
    <AppGate>
      <TopicInner {...props} />
    </AppGate>
  );
}
