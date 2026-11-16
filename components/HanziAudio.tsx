"use client";
// Reusable Mandarin audio buttons (🔊 normal 0.9x + 🐢 slow 0.55x) and Pinyin visibility toggle.
import { useSyncExternalStore } from "react";
import { speakChinese, speechAvailable } from "@/lib/speech";
import { togglePinyinVisible, usePinyinVisible } from "@/lib/pinyinDisplay";

const noop = () => () => {};

export function useSpeechAvailable(): boolean {
  return useSyncExternalStore(noop, speechAvailable, () => false);
}

/** Extract clean Mandarin clauses from mixed prose so TTS reads only the Chinese characters. */
export function extractHanziForSpeech(raw: string): string {
  const runs = raw.match(/[\u4e00-\u9fff\u3400-\u4dbf][\u4e00-\u9fff\u3400-\u4dbf0-9，。！？、；：“”‘’\s]*/g);
  if (!runs?.length) return "";
  return runs
    .map((r) => r.trim())
    .filter(Boolean)
    .join("，");
}

export function SpeakButtons({
  text,
  compact = false,
  className = "",
}: {
  text: string;
  compact?: boolean;
  className?: string;
}) {
  const ok = useSpeechAvailable();
  if (!ok || !text.trim()) return null;

  if (compact) {
    return (
      <span className={`no-print inline-flex items-center gap-1 align-middle ${className}`}>
        <button
          type="button"
          onClick={() => speakChinese(text, { slow: false })}
          className="inline-flex h-6 items-center rounded-md border border-line bg-surface-2 px-1.5 text-xs font-bold text-ink hover:border-brand hover:bg-brand-soft hover:text-brand"
          aria-label={`Listen at normal speed: ${text}`}
          title="Listen (normal speed)"
        >
          🔊
        </button>
        <button
          type="button"
          onClick={() => speakChinese(text, { slow: true })}
          className="inline-flex h-6 items-center rounded-md border border-line bg-surface-2 px-1.5 text-xs font-bold text-ink-2 hover:border-brand hover:bg-brand-soft hover:text-brand"
          aria-label={`Listen slowly: ${text}`}
          title="Listen slowly (0.55x)"
        >
          🐢
        </button>
      </span>
    );
  }

  return (
    <span className={`no-print inline-flex items-center gap-1.5 ${className}`}>
      <button
        type="button"
        onClick={() => speakChinese(text, { slow: false })}
        className="btn btn-ghost btn-sm min-h-9 px-2.5 text-sm"
        aria-label={`Listen at normal speed: ${text}`}
        title="Normal speed (0.9x)"
      >
        🔊
      </button>
      <button
        type="button"
        onClick={() => speakChinese(text, { slow: true })}
        className="btn btn-ghost btn-sm min-h-9 px-2.5 text-sm"
        aria-label={`Listen slowly: ${text}`}
        title="Slow speed (0.55x)"
      >
        🐢
      </button>
    </span>
  );
}

export function PinyinToggleButton({ className = "" }: { className?: string }) {
  const visible = usePinyinVisible();
  return (
    <button
      type="button"
      onClick={togglePinyinVisible}
      aria-pressed={!visible}
      className={`no-print btn btn-sm ${visible ? "btn-secondary" : "btn-primary"} ${className}`}
      title={visible ? "Hide Pinyin to test your character reading (hover to peek)" : "Show Pinyin tone marks again"}
    >
      {visible ? "👁️ Pinyin: ON" : "🙈 Pinyin: Hidden"}
    </button>
  );
}
