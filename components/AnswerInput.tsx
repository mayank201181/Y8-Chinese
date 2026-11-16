"use client";
// Typed-answer box with a Mandarin Pinyin tone keypad (ā á ǎ à … ǖ ǘ ǚ ǜ ü + Chinese punctuation)
// and, for numeric/maths specs, a maths keypad + live preview.
import { useId, useRef } from "react";
import type { AnswerSpec } from "@/lib/types";
import { CHINESE_KEYPAD_EXTRAS, TONE_VOWEL_GROUPS } from "@/lib/chinese/pinyin";
import { typedToMathML } from "@/lib/mathml";
import { normalizeInput } from "@/lib/mathParse";

const KEYS_BY_TYPE: Record<Exclude<AnswerSpec["type"], "text">, string[]> = {
  number: ["−", "/", ".", "×10^"],
  fraction: ["−", "/", "␣"],
  list: [",", "−", "/", "(", ")"],
  ratio: [":", "/", "."],
  expression: ["x", "y", "n", "^", "(", ")", "−", "/", "√", "π"],
};

const PLACEHOLDER: Record<AnswerSpec["type"], string> = {
  number: "e.g. 12, −3.5 or 3/4",
  fraction: "e.g. 3/4 or 1 2/3",
  list: "e.g. 28, 35",
  ratio: "e.g. 3 : 4",
  expression: "e.g. 3x + 2 or 2(x − 1)",
  text: "输入答案… Type Hanzi (下雨), Pinyin (xià yǔ / xia4 yu3) or English",
};

function previewMarkup(raw: string, type: AnswerSpec["type"]): string {
  return typedToMathML(normalizeInput(raw), type === "expression");
}

export function AnswerInput({
  value,
  onChange,
  onSubmit,
  type,
  disabled,
  autoFocus,
  label = "Your answer",
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
  type: AnswerSpec["type"];
  disabled?: boolean;
  autoFocus?: boolean;
  label?: string;
}) {
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);
  const mathKeys = type === "text" ? [] : (KEYS_BY_TYPE[type] ?? []);
  const showPreview = type !== "text" && value.trim().length > 0 && /[/^√π*×]|sqrt|\d\s+\d+\//.test(value);

  function insert(key: string) {
    const el = ref.current;
    const text = key === "␣" ? " " : key === "−" ? "-" : key === "√" ? "sqrt(" : key === "×10^" ? " x 10^" : key;
    const start = el?.selectionStart ?? value.length;
    const end = el?.selectionEnd ?? value.length;
    const next = value.slice(0, start) + text + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      if (!el) return;
      el.focus();
      const pos = start + text.length;
      el.setSelectionRange(pos, pos);
    });
  }

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-bold text-ink-2">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className="input font-semibold tabular-nums"
        lang={type === "text" ? "zh-CN" : undefined}
        value={value}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode="text"
        placeholder={PLACEHOLDER[type]}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSubmit) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
      {!disabled && type === "text" ? (
        <div className="space-y-1.5" role="group" aria-label="Mandarin Pinyin tone keypad">
          <div className="flex flex-wrap gap-1.5">
            {TONE_VOWEL_GROUPS.map((grp) => (
              <div key={grp.base} className="inline-flex items-center gap-0.5 rounded-xl border border-line bg-surface-2 px-1 py-0.5">
                {grp.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className="kbd min-h-8 min-w-8 px-1.5 py-0.5 text-sm font-bold"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => insert(t)}
                    aria-label={`insert ${t}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            ))}
            <div className="inline-flex items-center gap-0.5 rounded-xl border border-line bg-surface-2 px-1 py-0.5">
              {CHINESE_KEYPAD_EXTRAS.map((p) => (
                <button
                  key={p}
                  type="button"
                  className="kbd min-h-8 min-w-8 px-1.5 py-0.5 text-sm font-bold"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => insert(p)}
                  aria-label={`insert ${p}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-ink-2">
            Tip: type Simplified Hanzi, tap a Pinyin tone vowel above, or use tone numbers (e.g. <code>xia4 yu3</code>, <code>nv3</code>).
          </p>
        </div>
      ) : null}
      {!disabled && mathKeys.length ? (
        <div className="flex flex-wrap gap-1.5" aria-label="Maths keys">
          {mathKeys.map((key) => (
            <button
              key={key}
              type="button"
              className="kbd min-w-10 text-base"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => insert(key)}
              aria-label={`insert ${key === "␣" ? "space" : key}`}
            >
              {key}
            </button>
          ))}
        </div>
      ) : null}
      {showPreview ? (
        <div className="text-sm text-ink-2" aria-live="polite">
          We read this as: <span className="math align-middle text-ink" dangerouslySetInnerHTML={{ __html: previewMarkup(value, type) }} />
        </div>
      ) : null}
    </div>
  );
}
