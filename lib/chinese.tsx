"use client";

// Inline-Chinese rendering + the global pinyin toggle.
//
// Prose fields across the app may embed {{汉字|pīnyīn}} or {{汉字|pīnyīn|gloss}}.
// renderRich() turns those into <ruby> elements whose pinyin (<rt>) is shown or
// hidden by the PinyinProvider toggle, and also handles **bold** spans.

import React, { createContext, useContext, useEffect, useState } from "react";

interface PinyinCtx {
  showPinyin: boolean;
  setShowPinyin: (v: boolean) => void;
}

const Ctx = createContext<PinyinCtx>({ showPinyin: true, setShowPinyin: () => {} });

export function PinyinProvider({ children }: { children: React.ReactNode }) {
  const [showPinyin, setShowPinyinState] = useState(true);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("y8zh-pinyin");
      if (saved !== null) setShowPinyinState(saved === "1");
    } catch {}
  }, []);
  const setShowPinyin = (v: boolean) => {
    setShowPinyinState(v);
    try {
      localStorage.setItem("y8zh-pinyin", v ? "1" : "0");
    } catch {}
  };
  return <Ctx.Provider value={{ showPinyin, setShowPinyin }}>{children}</Ctx.Provider>;
}

export function usePinyin() {
  return useContext(Ctx);
}

export function PinyinToggle({ compact }: { compact?: boolean }) {
  const { showPinyin, setShowPinyin } = usePinyin();
  return (
    <button
      type="button"
      onClick={() => setShowPinyin(!showPinyin)}
      className={`inline-flex items-center gap-1.5 rounded-full border text-xs font-semibold transition-colors ${
        compact ? "px-2.5 py-1" : "px-3 py-1.5"
      } ${
        showPinyin
          ? "border-rose-300 bg-rose-50 text-rose-700"
          : "border-slate-300 bg-white text-slate-500"
      }`}
      title={showPinyin ? "Hide pinyin (harder!)" : "Show pinyin"}
    >
      <span className="text-sm leading-none">
        <ruby>
          拼<rt className={showPinyin ? "" : "opacity-30"}>pīn</rt>
        </ruby>
      </span>
      pinyin {showPinyin ? "on" : "off"}
    </button>
  );
}

/** One Chinese chunk rendered as ruby text. */
export function Zh({
  hanzi,
  pinyin,
  gloss,
  className,
}: {
  hanzi: string;
  pinyin?: string;
  gloss?: string;
  className?: string;
}) {
  const { showPinyin } = usePinyin();
  return (
    <span
      className={`zh whitespace-nowrap ${className ?? ""}`}
      title={gloss ? `${pinyin ? pinyin + " — " : ""}${gloss}` : pinyin}
      lang="zh-Hans"
    >
      <ruby className="align-baseline">
        {hanzi}
        {pinyin ? (
          <rt
            className={`text-[0.55em] font-medium tracking-tight text-slate-500 ${
              showPinyin ? "" : "hidden"
            }`}
          >
            {pinyin}
          </rt>
        ) : null}
      </ruby>
    </span>
  );
}

const CHUNK_RE = /\{\{([^|{}]+)\|([^|{}]+)(?:\|([^{}]+))?\}\}/g;

/** Render a prose string containing {{hanzi|pinyin|gloss}} chunks and **bold** spans. */
export function renderRich(text: string): React.ReactNode {
  if (!text) return null;
  const out: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of text.matchAll(CHUNK_RE)) {
    const idx = m.index ?? 0;
    if (idx > last) out.push(renderBold(text.slice(last, idx), `t${key++}`));
    out.push(<Zh key={`z${key++}`} hanzi={m[1]} pinyin={m[2]} gloss={m[3]} />);
    last = idx + m[0].length;
  }
  if (last < text.length) out.push(renderBold(text.slice(last), `t${key++}`));
  return <>{out}</>;
}

function renderBold(text: string, key: string): React.ReactNode {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  if (parts.length === 1) return <React.Fragment key={key}>{text}</React.Fragment>;
  return (
    <React.Fragment key={key}>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-slate-900">
            {p}
          </strong>
        ) : (
          p
        )
      )}
    </React.Fragment>
  );
}

/** Strip {{...}} markup down to hanzi only (for speech synthesis / plain text). */
export function toPlain(text: string): string {
  return text.replace(CHUNK_RE, "$1").replace(/\*\*/g, "");
}

/** Extract just the Chinese chunks of a rich string (for read-aloud). */
export function extractChinese(text: string): string {
  const bits: string[] = [];
  for (const m of text.matchAll(CHUNK_RE)) bits.push(m[1]);
  return bits.join("，");
}

let voiceCache: SpeechSynthesisVoice | null = null;

function pickChineseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  if (voiceCache) return voiceCache;
  const voices = window.speechSynthesis.getVoices();
  voiceCache =
    voices.find((v) => v.lang === "zh-CN") ||
    voices.find((v) => v.lang?.toLowerCase().startsWith("zh")) ||
    null;
  return voiceCache;
}

/** Speak Mandarin out loud via the Web Speech API. Safe no-op if unsupported. */
export function speakChinese(hanzi: string, rate = 0.85) {
  if (typeof window === "undefined" || !window.speechSynthesis || !hanzi) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(hanzi);
  u.lang = "zh-CN";
  u.rate = rate;
  const v = pickChineseVoice();
  if (v) u.voice = v;
  window.speechSynthesis.speak(u);
}

/** Speak English (for glosses / guide read-aloud). */
export function speakEnglish(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis || !text) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-GB";
  u.rate = 1;
  window.speechSynthesis.speak(u);
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && window.speechSynthesis)
    window.speechSynthesis.cancel();
}
