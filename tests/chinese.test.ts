import test from "node:test";
import assert from "node:assert/strict";
import {
  applyToneToSyllable,
  canonPinyin,
  canonPinyinFlexible,
  isOppositeMandarin,
  normMandarin,
  numberedToTonedPinyin,
  parseChineseNumber,
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

test("erhua tone-numbered Pinyin, 一/不 sandhi, neutral vs citation tones, and bilingual input", () => {
  assert.equal(numberedToTonedPinyin("yi1 dianr3"), "yī diǎnr");
  assert.equal(numberedToTonedPinyin("yi4dianr3"), "yìdiǎnr");
  assert.equal(canonPinyinFlexible("yì bēi bīngshuǐ", { hasYi: true }), canonPinyinFlexible("yī bēi bīngshuǐ", { hasYi: true }));
  assert.equal(canonPinyinFlexible("qǐng bú yào", { hasBu: true }), canonPinyinFlexible("qǐng bù yào", { hasBu: true }));
  assert.equal(canonPinyinFlexible("zǎoshàng qī diǎn"), canonPinyinFlexible("zǎoshang qī diǎn"));
  assert.equal(canonPinyinFlexible("késòu"), canonPinyinFlexible("késou"));

  // Bilingual "Hanzi (Pinyin)" passes only when BOTH parts match
  const sunny = { type: "text" as const, accept: ["晴天", "qíngtiān"] };
  assert.equal(checkAnswer(sunny, "晴天 (qíngtiān)").status, "correct");
  assert.equal(checkAnswer(sunny, "晴天 (yīntiān)").status, "incorrect");

  // Minimal-pair & polyphone traps stay distinct (东西 dōngxi vs dōngxī; 暖和 nuǎnhuo vs *nuǎnhé*)
  assert.notEqual(canonPinyinFlexible("dōngxī"), canonPinyinFlexible("dōngxi"));
  assert.notEqual(checkAnswer({ type: "text", accept: ["暖和", "nuǎnhuo"] }, "nuǎnhé").status, "correct");
});

test("Chinese numerals & Mandarin units in number answers + adversarial confusable guards", () => {
  assert.equal(parseChineseNumber("零"), 0);
  assert.equal(parseChineseNumber("两"), 2);
  assert.equal(parseChineseNumber("十三"), 13);
  assert.equal(parseChineseNumber("三百四十五分钟"), 345);
  assert.equal(parseChineseNumber("零下十三度"), -13);
  assert.equal(parseChineseNumber("十九块五"), 19.5);
  assert.equal(parseChineseNumber("十五元六角"), 15.6);

  assert.equal(checkAnswer({ type: "number", value: 19, display: "19 元" }, "19 元").status, "correct");
  assert.equal(checkAnswer({ type: "number", value: 42, display: "42 新币" }, "42新币").status, "correct");
  assert.equal(checkAnswer({ type: "number", value: 6, display: "6 (六片)" }, "6 (六片)").status, "correct");
  assert.equal(checkAnswer({ type: "number", value: 12 }, "十二片").status, "correct");

  // Confusable & opposite Hanzi/Pinyin pairs must NEVER be marked correct
  const adversarial: [string[], string][] = [
    [["热", "rè"], "冷"],
    [["热", "rè"], "lěng"],
    [["贵", "guì"], "便宜"],
    [["早饭", "zǎofàn"], "晚饭"],
    [["穿", "chuān"], "戴"],
    [["穿", "chuān"], "dài"],
    [["打", "dǎ"], "踢"],
    [["二", "èr"], "两"],
    [["不", "bù"], "没"],
    [["了", "le"], "过"],
    [["买", "mǎi"], "卖"],
    [["买", "mǎi"], "mài"],
    [["水饺", "shuǐjiǎo"], "睡觉"],
    [["水饺", "shuǐjiǎo"], "shuìjiào"],
    [["妈妈", "māma"], "马"],
    [["妈妈", "māma"], "mǎ"],
  ];
  for (const [acc, wrong] of adversarial) {
    assert.notEqual(
      checkAnswer({ type: "text", accept: acc }, wrong).status,
      "correct",
      `Expected "${wrong}" NOT to be marked correct for ${JSON.stringify(acc)}`,
    );
  }
});
