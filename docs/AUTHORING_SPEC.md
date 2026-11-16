# Year 8 Chinese Lab (`中文实验室`) — Authoring Contract & Validation Spec

All work MUST stay strictly inside `/Users/mayankrawat/Downloads/year8-workspace/Year8chinese`.
NEVER run `git commit`, `git add`, or `node scripts/gen-registry.mjs` (the coordinator handles git & registry generation).
ONLY create/edit the exact files assigned to your role!

## 1. Curriculum & Tone
- Target learner: **Year 8 (age 12–13) at Tanglin Trust School, Singapore** studying **Mandarin Chinese (Foreign Language / Cambridge IGCSE 0547 pathway)**.
- Always use **Simplified Chinese characters (简体中文)**, accurate **tone-marked Pinyin** (e.g. `xià yǔ`, `nǚhái`, `lǜchá` — NEVER raw digits like `xia4 yu3` in display text or vocab), and **British English** (`favourite`, `colour`, `practise`, `centre`, `mum`, `holiday`, `trousers`, `jumper`, `trainers`).
- Weave natural **Singapore + China** real-life contexts throughout (Singapore MRT, Orchard Road `乌节路`, Sentosa `圣淘沙`, East Coast Park `东海岸公园`, hawker centres `小贩中心`, wet markets `巴刹`, chicken rice `鸡饭`, tropical rain vs Beijing `北京` / Harbin `哈尔滨` / Shanghai `上海` four seasons, RMB `元/块` & SGD `新币`).

## 2. Exact Section IDs (`lib/topics/meta.ts`)
Read `/Users/mayankrawat/Downloads/year8-workspace/Year8chinese/lib/topics/meta.ts` FIRST!
- `guide.id`, `guide.title`, `guide.strand`, `guide.icon` MUST match `TOPIC_META` in `lib/topics/meta.ts`!
- `guide.guide` MUST have the exact 5 `SectionPlan` `id`s in the **exact order** listed in `TOPIC_META`.
- Every question's `guideRef` and every drill's `guideRef` MUST be one of that topic's 5 section `id`s, and every one of the 5 sections must be referenced by at least one question.

## 3. Per-Topic File Contract (for Topic Authors)

### A. `lib/vocab/<id>.ts`
Exports `export const vocab: VocabGroup[] = [ ... ];` (`import type { VocabGroup } from "../types.ts";`).
- **5 to 6 `VocabGroup`s**, **74–82 total `VocabItem`s** per topic (validator requires `>= 4` groups and `>= 70` unique `hanzi` items!).
- Every `VocabItem`:
  ```ts
  {
    hanzi: "下雨",               // Plain Simplified Hanzi (NO markdown * or {{ }}!), unique across the file
    pinyin: "xià yǔ",            // Tone-marked Pinyin (NO digits 1-5!)
    english: "to rain",          // Clear British English gloss
    pos: "verb",                 // e.g. "noun", "verb", "adjective", "adverb", "measure word", "phrase", "connector", "particle"
    example: {                   // Include on at least 50% of items!
      hanzi: "今天下午会下雨。",
      pinyin: "Jīntiān xiàwǔ huì xià yǔ.",
      en: "It will rain this afternoon.",
    },
    notes: "Verb-object phrase (下 = fall, 雨 = rain); 'heavy rain' inserts 大 in the middle: 下大雨.", // Classifier, radical, sandhi or grammar tip
  }
  ```

### B. `lib/topics/<id>/guide.ts`
Exports `export const guide: TopicGuide = { ... };` (`import type { TopicGuide } from "../../types.ts";`).
- Each of the 5 `GuideSection`s MUST include ALL of:
  - `id` (exact match to `meta.ts`), `heading`
  - `discovery: { problem, idea }` — AoPS/linguistic puzzle BEFORE the rule!
  - `body` — Clear, engaging markdown-lite explanation using **bold** for Hanzi, *italics* for Pinyin (`**下雨** (*xià yǔ*)`), pipe tables (`| Hanzi | Pinyin | English |`), bullet points, and `>` callouts.
  - `diagram` & `diagramCaption` — Include **3 to 5 inline `<svg>` diagrams per topic**!
    - **SVG Rules (enforced by validator!)**:
      - Must start with `<svg viewBox="0 0 640 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="...">` and end with `</svg>`.
      - NO backticks inside the SVG string, NO `${`, NO `<script>`, NO `onClick=` handlers, and escape `&` as `&amp;` and `<`/`>` inside `<text>`!
      - Use clean CSS/hex colours (`#c81e1e`, `#b45309`, `#0d9488`, `#15803d`, `#1e293b`, `#f8fafc`, `#fef3c7`, `#fee2e2`, `#e0f2fe`), rounded `<rect rx="12">`, arrows, and clear Hanzi + Pinyin + English labels!
  - `workedExamples` — 1 to 2 per section, each with `title`, `problem`, `steps: string[]`, `answer`, AND `yourTurn: { question, answer: AnswerSpec, solution }`!
    - Note on `AnswerSpec` (`type: "text"`): always list BOTH Simplified Hanzi AND toned Pinyin variants (and English if asking for English) in `accept`, e.g. `accept: ["我早上七点起床", "Wǒ zǎoshang qī diǎn qǐchuáng"]` (the checker automatically normalises punctuation/case and converts tone numbers `xia4 yu3`, and gives a tone-nudge on toneless Pinyin!).
  - `keyPoints: string[]` (3–5 crisp takeaways)
  - `whyItWorks: string` (linguistic/radical/structural insight — why Mandarin works this way!)
  - `strategies: string[]` (2–3 named strategies)
  - `thinkDeeper?: string` (AoPS extension question)
- `learn: LearnSmart` MUST satisfy validator minimums:
  - `flashcards`: **12–16** `{ front, back }`
  - `mustKnow`: **8–10** `"Can you…?"` checklist strings
  - `misconceptions`: **5–7** `{ wrong, right }` common English-speaker traps
  - `examMistakes`: **6–8** strings (IGCSE 0547 traps)
  - `mnemonics`: **3–4** `{ topic, device, explanation }` (radicals, tone sandhi, word-order memory hooks)
  - `realWorld`: **4–5** `{ title, detail, emoji }` (Singapore & China connections)
  - `videos`: **3–4** `{ title, channel, url }` — `url` MUST start with `https://www.youtube.com/results?search_query=`!
  - `formulas`: **4–6** `{ name, formula, note }` key sentence frames (feeds the Grammar Sheet `/formulas`).

### C. `lib/topics/<id>/mcq.ts`
Exports `export const mcqPapers: Paper[] = [ ... ];` (`import type { Paper } from "../../types.ts";`).
- **Exactly 3 papers**: `${id}-m1`, `${id}-m2`, `${id}-m3`.
- **Exactly 15 MCQ questions per paper** = **45 MCQs total**!
- Question IDs MUST be `${id}-m1-q01` .. `${id}-m1-q15`, `${id}-m2-q01` .. `${id}-m2-q15`, `${id}-m3-q01` .. `${id}-m3-q15`.
- Every MCQ:
  - `kind: "mcq"`, `difficulty: "warmup" | "core" | "challenge"`
  - `guideRef`: valid section `id` from `meta.ts`
  - `options`: **4 distinct strings**. **NEVER** write `"All of the above"` or `"None of the above"`.
  - `answerIndex`: `0 | 1 | 2 | 3` — **DOUBLE-CHECK** that `options[answerIndex]` is genuinely the 100% unambiguously correct answer, and spread `0, 1, 2, 3` evenly across the 45 MCQs!
  - `hints`: 1–2 hints for `warmup`, **2–3 hints** for `core` and `challenge` (validator requires `>= 2` hints on `core` and `challenge`!).
  - `explanation`: Explain WHY the right option is right AND why the tempting distractor fails. **NEVER** write `"Option A"`, `"Choice B"`, `"the first option"`, `"the second choice"` (options shuffle in UI — quote the Chinese words instead!).

### D. `lib/topics/<id>/practice.ts` & `lib/topics/<id>/practice2.ts`
- `practice.ts` exports `export const practice: TopicPractice = { quiz, papers, challenge };`:
  - `quiz`: **Exactly 10 questions** (`${id}-quiz-q01` .. `${id}-quiz-q10`), mixing `mcq` and `short`.
  - `papers`: **2 papers** `${id}-p1` and `${id}-p2`, each with **14 questions** (`${id}-p1-q01` .. `${id}-p1-q14` and `${id}-p2-q01` .. `${id}-p2-q14`). Mix ~12 `short` auto-marked questions (Hanzi/Pinyin translation, fill-in-the-blank, sentence unscrambles, reading comprehension, number/price calculations, with helpful `traps` on common errors!) + **2 `written` IGCSE 0547 roleplay / 80–130 character writing tasks** per paper!
    - Note on `WrittenQ`: `marks` MUST equal `markScheme.length` (e.g. `marks: 5` with 5 `MarkPoint`s), and every `markScheme[i].keywords` array MUST be non-empty and **100% lowercase** (Hanzi has no case, Pinyin/English keywords must be lowercase)!
  - `challenge`: **Exactly 8 questions** (`${id}-ch-q01` .. `${id}-ch-q08`), ALL with `difficulty: "challenge"` and **2–4 progressive hints** (`mcq` or `short` — AoPS-style linguistic deciphering, tone/radical logic, multi-clause translation puzzles, comparative timetable/menu reasoning).
- `practice2.ts` exports `export const morePapers: Paper[] = [ ... ];`:
  - **1 paper** `${id}-p3` with **14 questions** (`${id}-p3-q01` .. `${id}-p3-q14`), mixing ~12 `short` + 2 `written` IGCSE 0547 tasks!

### E. `lib/extras/<id>.ts`
Exports `export const extras: TopicExtras = { hook, didYouKnow, activities, history };` (`import type { TopicExtras } from "../types.ts";`).
- Engaging `hook` (1–2 sentences), 4 rich `didYouKnow` bullets (Singapore + Chinese culture/linguistics), 2 `activities` (`{ title, emoji, materials, steps, maths }` where `maths` explains the Mandarin practised), and `history: { title, story }`.

### F. `lib/drills/<id>.ts`
Exports `export const drills: Drill[] = [ ... ];` (`import type { Drill } from "./types.ts";`).
- **3 to 4 procedural drills** covering the topic's non-stretch sections:
  - Drill `id` MUST be `"${topicId}.<slug>"`, `topicId: "${topicId}"`, `guideRef` = valid section `id`, `level`: `1 | 2 | 3`.
  - `generate(rng, tier)` MUST be deterministic from `rng` (`rng.pick`, `rng.int`, `rng.shuffle`, `rng.bool` — NEVER `Math.random()`!) and MUST produce **at least 18+ distinct `prompt`s** across 200 seeds for EVERY tier (`1`, `2`, `3`)! Combine randomized subjects (`我`, `妈妈`, `哥哥`, `姐姐`, `小明`, `美美`, `爸爸`, `老师`), times/days, places, nouns, classifiers, numbers, or adjectives so the combinatorial pool has 30–100+ unique prompts per tier!
  - Every generated `DrillItem` must pass `specSelfCheck(item.answer)` and include `solution: string[]` and `hint`.

## 4. Mandatory Self-Validation Before Reporting Done!
Run from `/Users/mayankrawat/Downloads/year8-workspace/Year8chinese`:
```bash
node scripts/validate-topic.ts <topicId>
node scripts/validate-drills.ts <topicId>
node scripts/typecheck-file.mjs lib/vocab/<topicId>.ts lib/topics/<topicId>/guide.ts lib/topics/<topicId>/mcq.ts lib/topics/<topicId>/practice.ts lib/topics/<topicId>/practice2.ts lib/extras/<topicId>.ts lib/drills/<topicId>.ts
```
Fix EVERY issue until all commands print `OK — no issues` and `Type check OK`!
