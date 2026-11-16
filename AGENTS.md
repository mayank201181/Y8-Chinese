# Year 8 Chinese Lab · 中文实验室 — Agent & Developer Guide

- **Engine**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 (Language Lab v2).
- **Curriculum**: Tanglin Trust School (Singapore) Year 8 Mandarin Chinese (Foreign Language / IGCSE 0547 pathway) — 12 topics across 4 strands (`lib/topics/meta.ts`).
- **Registry generation**: Run `npm run gen` (`node scripts/gen-registry.mjs`) after adding topic, vocab, drill, widget, or exam files.
- **Validation**:
  - Single topic: `node scripts/validate-topic.ts <topicId>`
  - Single drill module: `node scripts/validate-drills.ts <topicId>`
  - Single exam paper: `node scripts/validate-exam.ts <examId>`
  - Everything: `npm run validate` and `npm test`
