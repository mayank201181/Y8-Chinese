"use client";

// Illustrated study guide for a topic: sections with discovery puzzles,
// patterns, vocab, key points, diagrams, read-aloud and mark-as-read.

import React, { useState } from "react";
import type { Diagram, GuideSection, Topic, TopicExtras } from "@/lib/types";
import { useStore } from "@/lib/store";
import {
  Zh,
  extractChinese,
  renderRich,
  speakChinese,
  speakEnglish,
  stopSpeaking,
  toPlain,
} from "@/lib/chinese";
import AskAI from "@/components/AskAI";

/* ---------- body rendering: paragraphs + "- " bullet lists ---------- */

function BodyBlocks({ body }: { body: string }) {
  const blocks = body.split("\n\n");
  return (
    <div className="space-y-3">
      {blocks.map((block, bi) => {
        // Group consecutive lines: bullet lines ("- ") become a list,
        // other lines render as paragraphs.
        const lines = block.split("\n");
        const groups: { bullets: boolean; lines: string[] }[] = [];
        for (const line of lines) {
          const isBullet = line.startsWith("- ");
          const last = groups[groups.length - 1];
          if (last && last.bullets === isBullet) last.lines.push(line);
          else groups.push({ bullets: isBullet, lines: [line] });
        }
        return (
          <React.Fragment key={bi}>
            {groups.map((g, gi) =>
              g.bullets ? (
                <ul key={gi} className="ml-1 space-y-1.5">
                  {g.lines.map((l, li) => (
                    <li key={li} className="flex items-start gap-2 leading-relaxed">
                      <span className="mt-0.5 text-rose-400">•</span>
                      <span>{renderRich(l.slice(2))}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p key={gi} className="leading-relaxed text-slate-700">
                  {renderRich(g.lines.join(" "))}
                </p>
              )
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

/* ---------- diagrams ---------- */

function DiagramCard({ d }: { d: Diagram }) {
  return (
    <figure className="rounded-2xl border border-sky-100 bg-sky-50/50 p-4">
      <p className="mb-2 text-sm font-bold text-sky-800">🖼️ {d.title}</p>
      <div className="diagram" dangerouslySetInnerHTML={{ __html: d.svg }} />
      {d.caption && (
        <figcaption className="mt-2 text-center text-xs text-slate-500">
          {d.caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ---------- one guide section card ---------- */

function SectionCard({
  topic,
  section,
  index,
}: {
  topic: Topic;
  section: GuideSection;
  index: number;
}) {
  const { progress, markGuideRead } = useStore();
  const [revealed, setRevealed] = useState(false);
  const isRead = (progress.guidesRead[topic.id] ?? []).includes(section.heading);

  return (
    <section className="rounded-2xl border border-rose-100 bg-white p-5 shadow-md shadow-rose-50 sm:p-6">
      {/* Heading + mark-as-read */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
          <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-100 text-sm font-extrabold text-rose-600">
            {index + 1}
          </span>
          {section.heading}
        </h2>
        <button
          type="button"
          onClick={() => markGuideRead(topic.id, section.heading)}
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
            isRead
              ? "border-emerald-300 bg-emerald-50 text-emerald-700"
              : "border-slate-300 bg-white text-slate-500 hover:bg-slate-50"
          }`}
        >
          {isRead ? "✓ Read!" : "Mark as read"}
        </button>
      </div>

      {/* Read-aloud controls */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => speakEnglish(toPlain(section.body))}
          className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 ring-1 ring-violet-200 transition-colors hover:bg-violet-100"
        >
          📖 Read aloud
        </button>
        <button
          type="button"
          onClick={() => speakChinese(extractChinese(section.body))}
          className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 ring-1 ring-rose-200 transition-colors hover:bg-rose-100"
        >
          🔊 中文
        </button>
        <button
          type="button"
          onClick={() => stopSpeaking()}
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200 transition-colors hover:bg-slate-100"
        >
          ⏹ Stop
        </button>
      </div>

      {/* Discovery puzzle — never reveal the idea unclicked */}
      {section.discovery && (
        <div className="mt-4 rounded-2xl border-2 border-dashed border-amber-300 bg-amber-50 p-4">
          <p className="text-sm font-extrabold text-amber-700">🧩 Puzzle first!</p>
          <p className="mt-2 leading-relaxed text-slate-800">
            {renderRich(section.discovery.problem)}
          </p>
          {revealed ? (
            <div className="pop-in mt-3 rounded-xl bg-white p-3 ring-1 ring-amber-200">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-600">
                💡 The idea
              </p>
              <p className="mt-1 leading-relaxed text-slate-800">
                {renderRich(section.discovery.idea)}
              </p>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="mt-3 rounded-full bg-amber-400 px-4 py-2 text-sm font-bold text-amber-950 shadow-sm transition-transform hover:scale-105"
            >
              I've had a think — reveal the idea ✨
            </button>
          )}
        </div>
      )}

      {/* Body */}
      <div className="mt-4">
        <BodyBlocks body={section.body} />
      </div>

      {/* Sentence patterns */}
      {section.patterns && section.patterns.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {section.patterns.map((p, pi) => (
            <div
              key={pi}
              className="rounded-2xl border border-rose-100 bg-rose-50/60 p-4"
            >
              <p className="text-sm font-bold text-rose-700">🧱 {p.pattern}</p>
              <div className="mt-2 flex items-start justify-between gap-2">
                <div>
                  <Zh
                    hanzi={p.example.hanzi}
                    pinyin={p.example.pinyin}
                    className="text-2xl font-semibold text-slate-900"
                  />
                  <p className="mt-1 text-sm text-slate-600">{p.example.english}</p>
                </div>
                <button
                  type="button"
                  onClick={() => speakChinese(p.example.hanzi)}
                  className="shrink-0 rounded-full bg-white p-2 text-lg shadow-sm ring-1 ring-rose-200 transition-transform hover:scale-110"
                  title="Hear it"
                >
                  🔊
                </button>
              </div>
              {p.note && <p className="mt-2 text-xs text-slate-500">💬 {p.note}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Vocab table */}
      {section.vocab && section.vocab.length > 0 && (
        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-100">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <th className="px-3 py-2">Chinese</th>
                <th className="px-3 py-2">English</th>
                <th className="px-3 py-2">Type</th>
                <th className="px-3 py-2" aria-label="Listen" />
              </tr>
            </thead>
            <tbody>
              {section.vocab.map((v, vi) => (
                <tr key={vi} className="border-t border-slate-100">
                  <td className="px-3 py-2.5">
                    <Zh hanzi={v.hanzi} pinyin={v.pinyin} className="text-lg" />
                  </td>
                  <td className="px-3 py-2.5 text-slate-700">{v.english}</td>
                  <td className="px-3 py-2.5 text-xs text-slate-400">{v.pos ?? ""}</td>
                  <td className="px-3 py-2.5 text-right">
                    <button
                      type="button"
                      onClick={() => speakChinese(v.hanzi)}
                      className="rounded-full p-1.5 text-base transition-transform hover:scale-110"
                      title={`Hear ${v.hanzi}`}
                    >
                      🔊
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Key points */}
      {section.keyPoints && section.keyPoints.length > 0 && (
        <div className="mt-5 rounded-2xl bg-emerald-50 p-4">
          <p className="text-sm font-extrabold text-emerald-700">🔑 Key points</p>
          <ul className="mt-2 space-y-1.5">
            {section.keyPoints.map((k, ki) => (
              <li key={ki} className="flex items-start gap-2 text-sm text-slate-800">
                <span className="mt-0.5 text-emerald-500">✔</span>
                <span>{renderRich(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Why it works */}
      {section.whyItWorks && (
        <div className="mt-4 rounded-2xl border border-sky-100 bg-sky-50 p-4">
          <p className="text-sm font-extrabold text-sky-700">
            🤔 Why does this work?
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
            {renderRich(section.whyItWorks)}
          </p>
        </div>
      )}

      {/* Strategy chips */}
      {section.strategies && section.strategies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {section.strategies.map((s, si) => (
            <span
              key={si}
              className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 ring-1 ring-violet-200"
            >
              🧠 {s}
            </span>
          ))}
        </div>
      )}

      {/* Think deeper */}
      {section.thinkDeeper && (
        <div className="mt-4 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
          <p className="text-sm font-extrabold text-indigo-700">🚀 Think deeper</p>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
            {renderRich(section.thinkDeeper)}
          </p>
        </div>
      )}

      {/* Diagrams */}
      {section.diagrams && section.diagrams.length > 0 && (
        <div className="mt-5 space-y-3">
          {section.diagrams.map((d) => (
            <DiagramCard key={d.id} d={d} />
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------- the full guide ---------- */

export default function GuideView({
  topic,
  extras,
}: {
  topic: Topic;
  extras?: TopicExtras;
}) {
  const aiContext = `${topic.title} — sections: ${topic.guide
    .map((s) => s.heading)
    .join("; ")}`;

  return (
    <div className="space-y-5">
      {/* Hook banner */}
      {extras?.hook && (
        <div className="rounded-2xl bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 p-4 text-center shadow-lg shadow-orange-100 sm:p-5">
          <p className="text-base font-extrabold text-white drop-shadow sm:text-lg">
            {topic.icon} {extras.hook}
          </p>
        </div>
      )}

      {/* Intro */}
      <p className="rounded-2xl bg-white/70 p-4 leading-relaxed text-slate-700 ring-1 ring-rose-100 sm:p-5">
        {renderRich(topic.intro)}
      </p>

      {/* Sections */}
      {topic.guide.map((section, i) => (
        <SectionCard key={section.heading} topic={topic} section={section} index={i} />
      ))}

      {/* Did you know? */}
      {extras?.didYouKnow && extras.didYouKnow.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {extras.didYouKnow.map((fact, fi) => (
            <div
              key={fi}
              className="rounded-2xl border border-amber-100 bg-amber-50 p-4 shadow-sm"
            >
              <p className="text-sm font-extrabold text-amber-700">
                ✨ Did you know?
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-800">
                {renderRich(fact)}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Try this at home */}
      {extras?.activities && extras.activities.length > 0 && (
        <div className="space-y-3">
          {extras.activities.map((a, ai) => (
            <div
              key={ai}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 shadow-sm sm:p-5"
            >
              <p className="text-sm font-extrabold text-emerald-700">
                🏠 Try this at home: {a.title}
              </p>
              <ol className="mt-2 space-y-1.5">
                {a.steps.map((step, si) => (
                  <li
                    key={si}
                    className="flex items-start gap-2 text-sm text-slate-800"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-[11px] font-bold text-emerald-800">
                      {si + 1}
                    </span>
                    <span>{renderRich(step)}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}

      {/* Bonus diagrams */}
      {extras?.bonusDiagrams && extras.bonusDiagrams.length > 0 && (
        <div className="space-y-3">
          {extras.bonusDiagrams.map((d) => (
            <DiagramCard key={d.id} d={d} />
          ))}
        </div>
      )}

      {/* Ask the tutor */}
      <div className="pt-2">
        <AskAI context={aiContext} />
      </div>
    </div>
  );
}
