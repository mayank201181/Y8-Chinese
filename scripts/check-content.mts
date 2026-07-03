import { TOPICS, QUESTION_INDEX } from "../lib/topicIndex";
console.log("topics", TOPICS.length, "questions", Object.keys(QUESTION_INDEX).length);
let mcq = 0, qa = 0;
for (const k in QUESTION_INDEX) (QUESTION_INDEX[k].kind === "mcq" ? mcq++ : qa++);
console.log("mcq", mcq, "qa", qa);
// duplicate detection: count raw questions vs index size
let raw = 0;
const seen = new Set<string>(); const dupes: string[] = [];
for (const t of TOPICS) {
  const all = [
    ...t.quiz.mcq, ...t.quiz.qa,
    ...t.questionBank.mcqPapers.flatMap(p => p.questions),
    ...t.questionBank.qaPapers.flatMap(p => p.questions),
  ];
  raw += all.length;
  for (const q of all) { if (seen.has(q.id)) dupes.push(q.id); seen.add(q.id); }
  console.log(
    t.id.padEnd(14),
    "guide:" + t.guide.length,
    "vocab:" + t.learn.vocab.length,
    "quiz:" + t.quiz.mcq.length + "+" + t.quiz.qa.length,
    "bankM:" + t.questionBank.mcqPapers.map((p: { questions: unknown[] }) => p.questions.length).join("/"),
    "bankQ:" + t.questionBank.qaPapers.map((p: { questions: unknown[] }) => p.questions.length).join("/")
  );
  // answerIndex bounds
  for (const q of [...t.quiz.mcq, ...t.questionBank.mcqPapers.flatMap(p => p.questions)]) {
    if (q.answerIndex < 0 || q.answerIndex >= q.options.length)
      console.log("BAD answerIndex:", q.id);
  }
}
console.log("raw", raw, "dupes:", dupes.length ? dupes : "none");
