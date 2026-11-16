// Comprehensive Mandarin linguistic, SVG XML, Traditional-vs-Simplified, and MCQ answer-key audit.
// Usage: node scripts/audit-chinese.ts
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { TOPIC_META } from "../lib/topics/meta.ts";
import type { ExamPaper, MCQ, Paper, Question, TopicExtras, TopicGuide, TopicPractice, VocabGroup } from "../lib/types.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Strictly Traditional-only characters that should NEVER appear in Simplified Mandarin content
// (unless in an explicit cultural/etymological note in extras/).
const TRADITIONAL_CHARS =
  /[氣學習運動點買單醫麵飯館時間電話個兩歲謝說請對開關書車魚鳥湯熱陰風雲認識歡電視腦機場國語號塊錢貴蘋雞鴨豬飲餓飽廳務員鹹雖為邊過應禮]/g;

const UNESCAPED_AMP = /&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/;

async function load<T>(rel: string, exportName: string): Promise<T | undefined> {
  const p = path.join(root, rel);
  if (!existsSync(p)) return undefined;
  const mod = await import(pathToFileURL(p).href);
  return mod[exportName] as T;
}

interface Finding {
  severity: "ERROR" | "WARN";
  where: string;
  detail: string;
}

const findings: Finding[] = [];

function checkTraditional(where: string, text: string) {
  const matches = text.match(TRADITIONAL_CHARS);
  if (matches) {
    findings.push({
      severity: "ERROR",
      where,
      detail: `Contains Traditional character(s) [${[...new Set(matches)].join("")}] — convert to Simplified (简体中文)`,
    });
  }
}

function checkXmlSvg(where: string, svg: string) {
  if (UNESCAPED_AMP.test(svg)) {
    findings.push({ severity: "ERROR", where, detail: "SVG contains unescaped '&' (use &amp;)" });
  }
  // Check tag balance for common SVG elements
  for (const tag of ["svg", "g", "text", "tspan", "defs", "linearGradient", "clipPath"]) {
    const opens = (svg.match(new RegExp(`<${tag}(?:\\s|>)`, "g")) || []).length;
    const selfClosing = (svg.match(new RegExp(`<${tag}[^>]*/>`, "g")) || []).length;
    const closes = (svg.match(new RegExp(`</${tag}>`, "g")) || []).length;
    if (opens - selfClosing !== closes) {
      findings.push({
        severity: "ERROR",
        where,
        detail: `Unbalanced <${tag}> tags in SVG (open=${opens}, selfClosing=${selfClosing}, close=${closes})`,
      });
    }
  }
}

function auditMcq(where: string, q: MCQ) {
  const chosen = q.options[q.answerIndex] ?? "";
  const exp = q.explanation ?? "";
  // Extract Hanzi chunks (>=1 char) from the chosen option; if chosen has Hanzi, check if explanation mentions any char from chosen
  const chosenHanzi = [...new Set((chosen.match(/[\u4e00-\u9fff]/g) ?? []))];
  const expHanzi = new Set(exp.match(/[\u4e00-\u9fff]/g) ?? []);
  if (chosenHanzi.length > 0 && expHanzi.size > 0) {
    const overlap = chosenHanzi.some((ch) => expHanzi.has(ch));
    if (!overlap) {
      // Also check English overlap
      const chosenWords = chosen
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length >= 4);
      const expLow = exp.toLowerCase();
      const enOverlap = chosenWords.some((w) => expLow.includes(w));
      if (!enOverlap) {
        findings.push({
          severity: "WARN",
          where: `${where} (${q.id})`,
          detail: `Chosen option [${q.answerIndex}]="${chosen.slice(0, 45)}" shares no Hanzi/4+letter word with explanation="${exp.slice(0, 70)}..." — verify answerIndex!`,
        });
      }
    }
  }
}

let totalVocab = 0;
let totalVocabWithExample = 0;
let totalTopicQuestions = 0;
let totalExamQuestions = 0;
let totalSvgs = 0;
const globalIds = new Set<string>();

for (const m of TOPIC_META) {
  const id = m.id;
  const vocab = await load<VocabGroup[]>(`lib/vocab/${id}.ts`, "vocab");
  if (vocab) {
    for (const g of vocab) {
      checkTraditional(`vocab/${id}:${g.title}`, g.title);
      for (const it of g.items) {
        totalVocab++;
        if (it.example) totalVocabWithExample++;
        checkTraditional(`vocab/${id}:${it.hanzi}`, it.hanzi + " " + (it.example?.hanzi ?? ""));
        if (/(?:^|\s)[a-z]*v[a-z]*(?:\s|$)/i.test(it.pinyin) && !/vs\./i.test(it.pinyin)) {
          findings.push({ severity: "ERROR", where: `vocab/${id}:${it.hanzi}`, detail: `Raw 'v' instead of ü in pinyin "${it.pinyin}"` });
        }
      }
    }
  }

  const guide = await load<TopicGuide>(`lib/topics/${id}/guide.ts`, "guide");
  if (guide) {
    checkTraditional(`${id}/guide:intro`, guide.intro + " " + guide.summary);
    for (const s of guide.guide) {
      checkTraditional(`${id}/guide:${s.id}`, s.heading + " " + s.body + " " + (s.whyItWorks ?? ""));
      if (s.diagram) {
        totalSvgs++;
        checkXmlSvg(`${id}/guide:${s.id}.diagram`, s.diagram);
        checkTraditional(`${id}/guide:${s.id}.diagram`, s.diagram);
      }
    }
  }

  const extras = await load<TopicExtras>(`lib/extras/${id}.ts`, "extras");
  if (extras) {
    checkTraditional(`extras/${id}`, JSON.stringify(extras));
    for (const [bi, b] of (extras.bonusDiagrams ?? []).entries()) {
      totalSvgs++;
      checkXmlSvg(`extras/${id}.bonusDiagrams[${bi}]`, b.svg);
    }
  }

  const mcqPapers = (await load<Paper[]>(`lib/topics/${id}/mcq.ts`, "mcqPapers")) ?? [];
  const practice = await load<TopicPractice>(`lib/topics/${id}/practice.ts`, "practice");
  const practice2 = (await load<Paper[]>(`lib/topics/${id}/practice2.ts`, "morePapers")) ?? [];

  const qs: [string, Question][] = [
    ...(practice?.quiz ?? []).map((q, i): [string, Question] => [`${id}.quiz[${i}]`, q]),
    ...mcqPapers.flatMap((p) => p.questions.map((q, i): [string, Question] => [`${p.id}[${i}]`, q])),
    ...(practice?.papers ?? []).flatMap((p) => p.questions.map((q, i): [string, Question] => [`${p.id}[${i}]`, q])),
    ...practice2.flatMap((p) => p.questions.map((q, i): [string, Question] => [`${p.id}[${i}]`, q])),
    ...(practice?.challenge ?? []).map((q, i): [string, Question] => [`${id}.challenge[${i}]`, q]),
  ];

  for (const [w, q] of qs) {
    totalTopicQuestions++;
    if (globalIds.has(q.id)) findings.push({ severity: "ERROR", where: w, detail: `Duplicate global ID ${q.id}` });
    globalIds.add(q.id);
    checkTraditional(w, JSON.stringify(q));
    if (q.diagram) {
      totalSvgs++;
      checkXmlSvg(`${w}.diagram`, q.diagram);
    }
    if (q.kind === "mcq") auditMcq(w, q);
  }
}

for (const eid of ["exam-r1", "exam-w1", "exam-r2", "exam-w2"]) {
  const ep = await load<ExamPaper>(`lib/exam/${eid}.ts`, "paper");
  if (!ep) continue;
  ep.questions.forEach((q, i) => {
    const w = `${eid}[${i}]`;
    totalExamQuestions++;
    if (globalIds.has(q.id)) findings.push({ severity: "ERROR", where: w, detail: `Duplicate global ID ${q.id}` });
    globalIds.add(q.id);
    checkTraditional(w, JSON.stringify(q));
    if (q.diagram) {
      totalSvgs++;
      checkXmlSvg(`${w}.diagram`, q.diagram);
    }
    if (q.kind === "mcq") auditMcq(w, q);
  });
}

const errors = findings.filter((f) => f.severity === "ERROR");
const warns = findings.filter((f) => f.severity === "WARN");

console.log(
  JSON.stringify(
    {
      totalVocab,
      totalVocabWithExample,
      totalTopicQuestions,
      totalExamQuestions,
      grandTotalQuestions: totalTopicQuestions + totalExamQuestions,
      totalSvgs,
      errors: errors.length,
      warnings: warns.length,
    },
    null,
    2,
  ),
);

for (const f of findings.slice(0, 80)) {
  console.log(`[${f.severity}] ${f.where}: ${f.detail}`);
}

process.exit(errors.length > 0 ? 1 : 0);
