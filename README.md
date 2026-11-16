# Year 8 Chinese Lab · 中文实验室

Interactive Mandarin Chinese learning platform (Simplified Characters 简体中文 + Pinyin 拼音 + English) built on the Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 Language Lab v2 engine for Year 8 students at **Tanglin Trust School, Singapore** (Cambridge IGCSE 0547 Foreign Language Mandarin pathway).

## Curriculum (4 Strands · 12 Topics)

1. **Foundations (基础桥梁 — Y7→Y8 Bridge)**
   - `greetings-routine` — Self-Introduction, Family & Daily Routine (`自我介绍与日常`)
   - `time-measure-words` — Dates, Time & Measure Words (`时间与量词`)
2. **Term 1 · Weather & Health (第一学期)**
   - `weather` — Weather & Forecasts (`天气`)
   - `seasons` — Four Seasons & Clothing (`四季与穿着`)
   - `illness` — Illness, Body & Seeing the Doctor (`生病与看病`)
3. **Term 2 · Hobbies & Leisure (第二学期)**
   - `hobbies` — Hobbies, Sports & Music (`爱好与运动`)
   - `leisure-plans` — Free Time, Frequency & Weekend Plans (`周末与计划`)
4. **Term 3 · Food & Grammar (第三学期 + 核心语法)**
   - `vegetables-fruits` — Vegetables, Fruits & Market Shopping (`蔬菜与水果`)
   - `three-meals` — Three Meals a Day & Drinks (`一日三餐`)
   - `eating-out` — Eating Out & Ordering at a Restaurant (`出去吃饭`)
   - `sentence-patterns` — Mandarin Sentence Patterns & Connectors (`句型与连词`)
   - `tenses-particles` — Time & Aspect Particles in Mandarin (`时态与助词`)

## Key Features

- **Vocabulary Lab (~950 words/phrases)**: Simplified Hanzi, tone-marked Pinyin, English, part of speech, contextual example sentences, radical/classifier/sandhi notes, Web Speech API `zh-CN` audio (`🔊 0.9x` + `🐢 0.55x`), Pinyin challenge toggle, flip flashcards, and 3-way self-tests.
- **Smart Mandarin Answer Checker**: Full-width/half-width punctuation normalisation, accepts Simplified Hanzi or toned/numbered Pinyin (`xià yǔ` / `xia4 yu3`), tone-slip `"close"` nudge, and antonym guard.
- **Problem-First Lessons & 1,300+ Questions**: Discovery puzzles, inline SVG diagrams, step-by-step worked examples, Quick Quizzes, 3 MCQ papers + 3 Practice papers + 8 AoPS-style Challenge questions per topic, plus 4 Cross-Topic IGCSE 0547 Big Exam papers.
- **Procedural Drills & 24 Interactive Explorables**: Unlimited generated drills and 2 interactive React widgets per topic.
- **60s Fluency Sprint, Daily 5, Spaced Repetition, Certificates, Laoshi Mei (`梅老师`) Socratic AI Tutor, Family Accounts + PIN Parent Dashboard, PWA, and 《哎呀！一家人》 Ai-Ya! Family Sitcom Engine**.

## Commands

```bash
npm run dev        # Start local dev server
npm test           # Run unit + content validation tests
npm run validate   # Validate all 12 topics, drills, vocab & exam papers
npm run lint       # ESLint check
npm run build      # Production Next.js build
```
