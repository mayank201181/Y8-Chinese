"use client";
import { useState } from "react";
import Link from "next/link";
import { SHOW_BLURB, SHOW_TITLE, SITCOM_EPISODES, sitcomEpisodeFor } from "@/lib/sitcom";
import { STRANDS } from "@/lib/topics/meta";
import { formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export interface WatchTopicItem {
  id: string;
  num: number;
  title: string;
  icon: string;
  strand: string;
  summary: string;
}

export function WatchHub({ topics }: { topics: WatchTopicItem[] }) {
  const [strand, setStrand] = useState<string>("All");
  const epDone = useWatchedEpisodes();
  const strands = ["All", ...STRANDS];
  const visible = strand === "All" ? topics : topics.filter((t) => t.strand === strand);
  const ready = SITCOM_EPISODES.length;

  return (
    <div className="space-y-6 pb-8">
      <section className="card overflow-hidden p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip border-0 bg-brand-soft text-brand">📺 Claude sitcom · Season 1</span>
          <span className="chip">
            ⭐ {Object.keys(epDone).length}/{ready || topics.length} watched
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">{SHOW_TITLE}</h1>
        <p className="mt-2 max-w-2xl text-sm text-ink-2 sm:text-base">{SHOW_BLURB}</p>
        {ready ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/episodes" className="btn btn-primary">
              ▶ Binge from Episode 1
            </Link>
          </div>
        ) : null}
      </section>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by strand">
        {strands.map((s) => (
          <button key={s} type="button" onClick={() => setStrand(s)} className={`btn btn-sm ${strand === s ? "btn-primary" : "btn-secondary"}`} aria-pressed={strand === s}>
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => {
          const ep = sitcomEpisodeFor(t.id);
          return (
            <article key={t.id} className="card flex flex-col overflow-hidden">
              {ep ? (
                <Link href={`/topic/${t.id}?tab=watch`} className="relative block aspect-video bg-surface-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ep.poster} alt="" className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute bottom-2 right-2 rounded-md bg-black/70 px-1.5 py-0.5 text-xs font-bold text-white">{formatDuration(ep.durationSec)}</span>
                </Link>
              ) : (
                <div className="flex aspect-video items-center justify-center bg-surface-2 text-4xl" aria-hidden>
                  {t.icon}
                </div>
              )}
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="chip">
                    {t.icon} Ep {String(ep?.num ?? t.num).padStart(2, "0")} · {t.strand}
                  </span>
                  {epDone[t.id] ? <span className="chip border-0 bg-good-soft text-good">📺✓</span> : null}
                </div>
                <h2 className="text-lg font-extrabold leading-snug">{ep ? `“${ep.title}”` : t.title}</h2>
                <p className="text-sm text-ink-2">{ep ? ep.logline : "Coming soon."}</p>
                <div className="mt-auto pt-1">
                  {ep ? (
                    <Link href={`/topic/${t.id}?tab=watch`} className="btn btn-primary btn-sm">
                      ▶ Watch
                    </Link>
                  ) : (
                    <Link href={`/topic/${t.id}`} className="btn btn-secondary btn-sm">
                      Open topic
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
