"use client";

// Xiaolong the dragon: a dismissible corner helper that nudges the learner
// toward the most useful next step (reviews, streak, daily goal) or shares a
// rotating Mandarin fun tip.

import React, { useState } from "react";
import Link from "next/link";
import { todayKey, useStore } from "@/lib/store";
import { Zh, speakChinese } from "@/lib/chinese";

const FUN_TIPS: { hanzi: string; pinyin: string; meaning: string; note: string }[] = [
  {
    hanzi: "加油",
    pinyin: "jiā yóu",
    meaning: "keep going!",
    note: "Literally “add oil” — it's what Chinese crowds chant to cheer you on.",
  },
  {
    hanzi: "马马虎虎",
    pinyin: "mǎma hūhū",
    meaning: "so-so",
    note: "Literally “horse horse tiger tiger” — the best answer to 你好吗 ever.",
  },
  {
    hanzi: "好久不见",
    pinyin: "hǎojiǔ bújiàn",
    meaning: "long time no see",
    note: "English borrowed this phrase word-for-word from Chinese!",
  },
  {
    hanzi: "热狗",
    pinyin: "règǒu",
    meaning: "hot dog",
    note: "Literally “hot” + “dog” — some words translate straight across.",
  },
  {
    hanzi: "电脑",
    pinyin: "diànnǎo",
    meaning: "computer",
    note: "Literally “electric brain”. Chinese builds new words from old blocks.",
  },
  {
    hanzi: "熊猫",
    pinyin: "xióngmāo",
    meaning: "panda",
    note: "Literally “bear cat”. Which do you think it is more of?",
  },
  {
    hanzi: "小心",
    pinyin: "xiǎoxīn",
    meaning: "be careful",
    note: "Literally “small heart” — keep your heart small and watch your step!",
  },
  {
    hanzi: "一鸣惊人",
    pinyin: "yī míng jīng rén",
    meaning: "to amaze with a first try",
    note: "A quiet bird that stuns everyone with one song — that could be you in class.",
  },
];

export default function Mascot() {
  const { status, progress, dueReviews } = useStore();
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || status !== "ready") return null;

  const today = todayKey();
  const due = dueReviews().length;
  const minutesToday = progress.analytics.perDayMinutes[today] ?? 0;
  const goal = Math.max(1, progress.goalMinutes);

  let body: React.ReactNode;
  if (due > 0) {
    body = (
      <p className="text-sm text-slate-700">
        🔁 <strong>{due}</strong> {due === 1 ? "card is" : "cards/questions are"} ripe
        for review — reviewing at just the right moment is how memories stick!{" "}
        <Link href="/review" className="font-bold text-rose-600 underline">
          Review now →
        </Link>
      </p>
    );
  } else if (progress.streak.lastDay !== today && progress.streak.count > 0) {
    body = (
      <p className="text-sm text-slate-700">
        🔥 Keep your <strong>{progress.streak.count}-day streak</strong> alive! Even
        five minutes today counts — pick any topic and go.
      </p>
    );
  } else if (minutesToday < goal) {
    body = (
      <p className="text-sm text-slate-700">
        ⏳ You're at <strong>{minutesToday}</strong> of your{" "}
        <strong>{goal}-minute</strong> goal today.{" "}
        {minutesToday === 0
          ? "A quick flashcard round is a great way to start!"
          : "So close — one more activity and you're there!"}
      </p>
    );
  } else if (minutesToday >= goal && minutesToday < goal * 2) {
    body = (
      <p className="text-sm text-slate-700">
        🎉 Daily goal smashed — <strong>{minutesToday} minutes</strong> today!{" "}
        <Zh hanzi="太棒了" pinyin="tài bàng le" /> (awesome)! Anything extra now is
        bonus brain-power.
      </p>
    );
  } else {
    const tip = FUN_TIPS[new Date().getDate() % FUN_TIPS.length];
    body = (
      <div className="text-sm text-slate-700">
        <p>
          ✨ Fun one: <Zh hanzi={tip.hanzi} pinyin={tip.pinyin} className="text-base" />{" "}
          = <strong>{tip.meaning}</strong>
          <button
            type="button"
            className="ml-1.5 align-middle"
            onClick={() => speakChinese(tip.hanzi)}
            aria-label={`Listen to ${tip.hanzi}`}
            title="Listen"
          >
            🔊
          </button>
        </p>
        <p className="mt-1 text-xs text-slate-500">{tip.note}</p>
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-30 flex max-w-xs items-end gap-2">
      <div className="pointer-events-auto pop-in relative rounded-2xl border border-rose-200 bg-white p-3 pr-8 shadow-lg">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute right-1.5 top-1.5 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          aria-label="Dismiss helper"
          title="Dismiss"
        >
          ✕
        </button>
        <p className="mb-1 text-xs font-bold text-rose-500">Xiǎolóng says…</p>
        {body}
        {/* bubble tail */}
        <span className="absolute -right-1.5 bottom-4 h-3 w-3 rotate-45 border-b border-r border-rose-200 bg-white" />
      </div>
      <span
        className="pointer-events-auto floaty select-none text-4xl drop-shadow"
        role="img"
        aria-label="Xiaolong the dragon mascot"
        title="Xiǎolóng 小龙"
      >
        🐉
      </span>
    </div>
  );
}
