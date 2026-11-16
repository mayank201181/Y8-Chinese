import test from "node:test";
import assert from "node:assert/strict";
import {
  applyToneToSyllable,
  canonPinyin,
  isOppositeMandarin,
  normMandarin,
  numberedToTonedPinyin,
  stripPinyinTones,
} from "../lib/chinese/pinyin.ts";
import {
  MEASURE_WORDS,
  PARTICLE_DRILL_BANK,
  clockAccepted,
  numberToHanzi,
  quantityPhrase,
} from "../lib/chinese/grammar.ts";
import { SPRINT_MODES, sprintItem } from "../lib/sprint.ts";
import { checkAnswer } from "../lib/answerCheck.ts";
import { makeRng } from "../lib/drills/rng.ts";

test("Pinyin tone placement rules (a/e first, ou -> o, else last vowel, ü/v/u:)", () => {
  assert.equal(applyToneToSyllable("ma", 1), "mā");
  assert.equal(applyToneToSyllable("ma", 2), "má");
  assert.equal(applyToneToSyllable("ma", 3), "mǎ");
  assert.equal(applyToneToSyllable("ma", 4), "mà");
  assert.equal(applyToneToSyllable("ma", 5), "ma");
  assert.equal(applyToneToSyllable("hao", 3), "hǎo");
  assert.equal(applyToneToSyllable("hei", 1), "hēi");
  assert.equal(applyToneToSyllable("gou", 3), "gǒu");
  assert.equal(applyToneToSyllable("liu", 2), "liú");
  assert.equal(applyToneToSyllable("gui", 4), "guì");
  assert.equal(applyToneToSyllable("kuai", 4), "kuài");
  assert.equal(applyToneToSyllable("nv", 3), "nǚ");
  assert.equal(applyToneToSyllable("lu:", 4), "lǜ");
  assert.equal(applyToneToSyllable("lve", 4), "lüè");
});

test("numberedToTonedPinyin & canonPinyin handle multi-syllable strings", () => {
  assert.equal(numberedToTonedPinyin("xia4 yu3"), "xià yǔ");
  assert.equal(numberedToTonedPinyin("xia4yu3"), "xiàyǔ");
  assert.equal(numberedToTonedPinyin("lv4 cha2"), "lǜ chá");
  assert.equal(canonPinyin("Xià yǔ!"), "xiàyǔ");
  assert.equal(canonPinyin("xia4 yu3"), "xiàyǔ");
  assert.equal(stripPinyinTones("xià yǔ"), "xiayu");
  assert.equal(stripPinyinTones("nǚ hái"), "nuhai");
});

test("normMandarin & antonym guard", () => {
  assert.equal(normMandarin("今天下雨。"), "今天下雨");
  assert.equal(normMandarin("今天 下雨 ！"), "今天下雨");
  assert.equal(isOppositeMandarin(["热"], "冷"), true);
  assert.equal(isOppositeMandarin(["贵"], "便宜"), true);
  assert.equal(isOppositeMandarin(["热"], "热"), false);
});

test("Mandarin numbers, 二 vs 两 rule, and clock times", () => {
  assert.equal(numberToHanzi(0), "零");
  assert.equal(numberToHanzi(2), "二");
  assert.equal(numberToHanzi(10), "十");
  assert.equal(numberToHanzi(12), "十二");
  assert.equal(numberToHanzi(20), "二十");
  assert.equal(numberToHanzi(25), "二十五");
  assert.equal(numberToHanzi(108), "一百零八");
  assert.equal(numberToHanzi(235), "二百三十五");

  assert.equal(quantityPhrase(2, "本", "书"), "两本书");
  assert.equal(quantityPhrase(12, "本", "书"), "十二本书");
  assert.equal(quantityPhrase(20, "个", "人"), "二十个人");

  assert.ok(clockAccepted(2, 0).includes("两点"));
  assert.ok(clockAccepted(7, 30).includes("七点半"));
  assert.ok(clockAccepted(7, 30).includes("七点三十分"));
  assert.ok(clockAccepted(8, 15).includes("八点一刻"));
  assert.ok(clockAccepted(7, 45).includes("差一刻八点"));
});

test("MEASURE_WORDS & PARTICLE_DRILL_BANK & Sprint modes self-check", () => {
  assert.ok(MEASURE_WORDS.length >= 14);
  assert.ok(PARTICLE_DRILL_BANK.length >= 18);
  const rng = makeRng(42);
  for (const mode of SPRINT_MODES) {
    for (let i = 0; i < 20; i++) {
      const it = sprintItem(mode, rng);
      assert.ok(it.prompt.length > 0);
      assert.ok(it.answer.length > 0);
      assert.equal(checkAnswer({ type: "text", accept: it.answer }, it.answer[0]).status, "correct");
    }
  }
});
