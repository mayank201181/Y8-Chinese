// Markdown-lite + {{maths}} renderer used for every piece of content text.
// Supports optional Mandarin inline audio buttons (🔊 Normal + 🐢 Slow) and Pinyin challenge blur
// when rendered inside block-level lessons (`withAudio` / `hidePinyin`).
import { Fragment, type ReactNode } from "react";
import { toMathML } from "@/lib/mathml";
import { extractHanziForSpeech, SpeakButtons } from "./HanziAudio";

interface RenderOpts {
  withAudio?: boolean;
  hidePinyin?: boolean;
}

const PINYIN_TONE_RE = /[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/i;
const HANZI_RE = /[\u4e00-\u9fff]/;

function pushStyled(text: string, out: ReactNode[], opts?: RenderOpts) {
  let bold = false;
  let italic = false;
  let buf = "";
  const flush = () => {
    if (!buf) return;
    const key = out.length;
    let node: ReactNode = buf;
    if (italic) {
      const blurPinyin = opts?.hidePinyin && PINYIN_TONE_RE.test(buf) && !HANZI_RE.test(buf);
      node = blurPinyin ? (
        <em className="blur-[4px] opacity-35 transition hover:blur-none hover:opacity-100" title="Hover to peek Pinyin">
          {node}
        </em>
      ) : (
        <em>{node}</em>
      );
    }
    if (bold) node = <strong>{node}</strong>;
    out.push(<Fragment key={key}>{node}</Fragment>);
    buf = "";
  };
  const isSpace = (c: string | undefined) => c === undefined || /\s/.test(c);
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (c === "\n") {
      flush();
      out.push(<br key={out.length} />);
    } else if (c === "`") {
      const end = text.indexOf("`", i + 1);
      if (end > i + 1) {
        flush();
        out.push(<code key={out.length}>{text.slice(i + 1, end)}</code>);
        i = end;
      } else buf += c;
    } else if (c === "*" && text[i + 1] === "*") {
      const opening = !bold;
      if (opening ? !isSpace(text[i + 2]) && text.indexOf("**", i + 2) > 0 : !isSpace(text[i - 1])) {
        flush();
        bold = !bold;
        i++;
      } else {
        buf += "**";
        i++;
      }
    } else if (c === "*") {
      const opening = !italic;
      const canOpen = !isSpace(text[i + 1]) && /\*/.test(text.slice(i + 1).replace(/\*\*/g, ""));
      const canClose = !isSpace(text[i - 1]);
      if (opening ? canOpen : canClose) {
        flush();
        italic = !italic;
      } else buf += c;
    } else buf += c;
  }
  flush();
}

/** Inline: {{maths}}, **bold**, *italic* (nestable), `code`. Newlines become <br/>. */
export function renderInline(text: string, opts?: RenderOpts): ReactNode[] {
  const out: ReactNode[] = [];
  const k = () => out.length;
  const parts = String(text ?? "").split(/(\{\{[\s\S]+?\}\})/g);
  for (const part of parts) {
    if (!part) continue;
    if (part.startsWith("{{") && part.endsWith("}}")) {
      out.push(<span key={k()} className="math" dangerouslySetInnerHTML={{ __html: toMathML(part.slice(2, -2)) }} />);
      continue;
    }
    pushStyled(part, out, opts);
  }
  return out;
}

function maybeAudio(raw: string, opts?: RenderOpts): ReactNode {
  if (!opts?.withAudio) return null;
  const zh = extractHanziForSpeech(raw);
  if (!zh) return null;
  return <SpeakButtons text={zh} compact className="ml-1.5" />;
}

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

function renderTable(lines: string[], key: number, opts?: RenderOpts): ReactNode {
  const rows = lines.filter((l) => !/^\s*\|?\s*:?-{2,}/.test(l));
  const [head, ...body] = rows.map(splitRow);
  return (
    <div key={key} className="rich-table-wrap">
      <table className="rich-table">
        <thead>
          <tr>
            {head.map((c, i) => (
              <th key={i}>{renderInline(c, opts)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>
                  {renderInline(c, opts)}
                  {maybeAudio(c, opts)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Block-level renderer: paragraphs, bullets, numbered lists, tables, callouts, calc lines. */
export function renderBlocks(text: string, opts?: RenderOpts): ReactNode[] {
  const out: ReactNode[] = [];
  const k = () => out.length;
  const blocks = String(text ?? "").replace(/\r\n/g, "\n").split(/\n\s*\n/);
  for (const block of blocks) {
    if (!block.trim()) continue;
    const lines = block.split("\n");
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (/^\s*\|/.test(line)) {
        const tbl: string[] = [];
        while (i < lines.length && /^\s*\|/.test(lines[i])) tbl.push(lines[i++]);
        out.push(renderTable(tbl, k(), opts));
      } else if (/^\s*[-•]\s+/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\s*[-•]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*[-•]\s+/, ""));
        out.push(
          <ul key={k()} className="rich-ul">
            {items.map((it, j) => (
              <li key={j}>
                {renderInline(it, opts)}
                {maybeAudio(it, opts)}
              </li>
            ))}
          </ul>,
        );
      } else if (/^\s*\d+[.)]\s+/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) items.push(lines[i++].replace(/^\s*\d+[.)]\s+/, ""));
        out.push(
          <ol key={k()} className="rich-ol">
            {items.map((it, j) => (
              <li key={j}>
                {renderInline(it, opts)}
                {maybeAudio(it, opts)}
              </li>
            ))}
          </ol>,
        );
      } else if (/^>\s?/.test(line)) {
        const q: string[] = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ""));
        const joined = q.join("\n");
        out.push(
          <blockquote key={k()} className="rich-callout">
            {renderInline(joined, opts)}
            {maybeAudio(joined, opts)}
          </blockquote>,
        );
      } else if (/^( {4}|\t)/.test(line)) {
        const c: string[] = [];
        while (i < lines.length && /^( {4}|\t)/.test(lines[i])) c.push(lines[i++].replace(/^( {4}|\t)/, ""));
        out.push(
          <div key={k()} className="rich-calc">
            {c.map((l, j) => (
              <div key={j}>
                {renderInline(l, opts)}
                {maybeAudio(l, opts)}
              </div>
            ))}
          </div>,
        );
      } else {
        const p: string[] = [];
        while (
          i < lines.length &&
          !/^\s*\|/.test(lines[i]) &&
          !/^\s*[-•]\s+/.test(lines[i]) &&
          !/^\s*\d+[.)]\s+/.test(lines[i]) &&
          !/^>\s?/.test(lines[i]) &&
          !/^( {4}|\t)/.test(lines[i])
        )
          p.push(lines[i++]);
        const joined = p.join("\n");
        out.push(
          <p key={k()}>
            {renderInline(joined, opts)}
            {maybeAudio(joined, opts)}
          </p>,
        );
      }
    }
  }
  return out;
}

/** Rich block text. */
export function Rich({
  text,
  className,
  withAudio = false,
  hidePinyin = false,
}: {
  text: string;
  className?: string;
  withAudio?: boolean;
  hidePinyin?: boolean;
}) {
  return <div className={`rich ${className ?? ""}`}>{renderBlocks(text, { withAudio, hidePinyin })}</div>;
}

/** Rich inline text (for options, hints, short labels — never renders nested buttons). */
export function RichInline({ text, className }: { text: string; className?: string }) {
  return <span className={className}>{renderInline(text)}</span>;
}

/** Inline SVG diagram from trusted content. */
export function Diagram({ svg, caption }: { svg: string; caption?: string }) {
  return (
    <figure className="diagram">
      <div className="diagram-svg" dangerouslySetInnerHTML={{ __html: svg }} />
      {caption ? <figcaption>{renderInline(caption)}</figcaption> : null}
    </figure>
  );
}
