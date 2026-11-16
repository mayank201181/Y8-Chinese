"use client";
import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { SHOW_TITLE, sitcomEpisodeFor } from "@/lib/sitcom";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export function WatchTab({
  topic,
  onPractise,
  onChallenge,
}: {
  topic: Topic;
  onPractise: () => void;
  onChallenge: () => void;
}) {
  const episode = sitcomEpisodeFor(topic.id);
  const watchedEpisodes = useWatchedEpisodes();
  const episodeDone = !!watchedEpisodes[topic.id];
  const { setBest } = useStore();

  useEffect(() => {
    if (episodeDone) setBest(`watch:${topic.id}`, 1);
  }, [episodeDone, topic.id, setBest]);

  if (!episode) {
    return (
      <div className="card p-6 text-center">
        <div className="text-4xl" aria-hidden>📺</div>
        <h2 className="mt-2 text-xl font-extrabold">This episode is still in the edit suite</h2>
        <p className="mx-auto mt-1 max-w-md text-ink-2">
          The {SHOW_TITLE} episode for {topic.title} is being finished. Meanwhile, catch the other episodes in the Watch hub.
        </p>
        <Link href="/watch" className="btn btn-secondary mt-4">🍿 Watch hub</Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="card flex items-start gap-3 p-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-xl text-white" aria-hidden>
          🏮
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <span className="font-extrabold">
              {SHOW_TITLE} · Episode {episode.num}: &ldquo;{episode.title}&rdquo;
            </span>
            {episodeDone ? <span className="chip border-0 bg-good-soft text-good">Watched ✓</span> : null}
          </div>
          <p className="mt-0.5 text-xs text-ink-2">
            {formatDuration(episode.durationSec)} · Bilingual English &amp; Mandarin with Hanzi + Pinyin on screen · three pause challenges at the end.
          </p>
        </div>
      </div>

      <div className="card overflow-hidden p-1 sm:p-2">
        <EpisodePlayer episode={episode} />
        {episode.logline ? <p className="px-2 pt-2 text-sm text-ink-2">{episode.logline}</p> : null}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <Link href={`/episodes?ep=${episode.num}`} className="btn btn-secondary btn-sm">
            📺 All episodes
          </Link>
          <Link href="/watch" className="btn btn-ghost btn-sm">
            🍿 Watch hub
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onPractise}>
            ✏️ Practise
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onChallenge}>
            🧗 Challenge →
          </button>
        </div>
      </div>
    </div>
  );
}
