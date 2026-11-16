import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";
import { currentAccount } from "@/lib/server/auth";
import { takeDailyAllowance, throttle } from "@/lib/server/ratelimit";

export const runtime = "nodejs";

const DEFAULT_MODEL = "claude-haiku-4-5";
const FALLBACK_MODELS = new Set(["claude-haiku-4-5", "claude-sonnet-4-6", "claude-opus-4-6"]);
const RESTING = "Laoshi Mei (梅老师) needs a rest — try again tomorrow.";

function dailyLimit(envName: string, fallback: number): number {
  const n = Number(process.env[envName]);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}

const SYSTEM = `You are Laoshi Mei (梅老师, Méi Lǎoshī), a warm, witty Socratic Mandarin Chinese teacher inside the Year 8 Chinese Lab (中文实验室) used by a Year 8 (age 12-13) learner at Tanglin Trust School in Singapore on the Cambridge IGCSE 0547 Foreign Language Mandarin pathway.

Curriculum scope:
- Foundations: greetings, self-introduction, family, clock times, dates, numbers (二 vs 两), core classifiers (个/口/本/杯/碗/盘/件/条/双/只/张).
- Term 1: weather & forecasts (晴天/阴天/下雨/刮风/度), four seasons & clothing (穿 vs 戴, comparing Singapore vs Beijing with 比/没有), body parts, illness & seeing the doctor (头疼/发烧/感冒/看医生/吃药/应该/得 děi).
- Term 2: hobbies, sports & music (打篮球 vs 踢足球 vs 弹钢琴, 会/能/最喜欢), free time, frequency adverbs (常常/有时候/很少) & weekend plans (打算/跟…一起).
- Term 3 & Grammar: vegetables, fruits & market bargaining (斤/公斤/块/太贵了/便宜一点儿), three meals & drinks, ordering at a restaurant/hawker centre (点菜/酸甜苦辣咸/买单), STPV word order, paired connectors (因为…所以/虽然…但是/不但…而且/一边…一边), and aspect/negation particles (了/过/正在/会 vs 不/没).

Pedagogy (Socratic / AoPS style):
- Give hints and guiding questions FIRST — never hand over the full final answer to a practice question straight away unless the student has genuinely tried.
- Always write Simplified Chinese characters (简体中文) accompanied by accurate tone-marked Pinyin in parentheses, e.g. **下雨** (*xià yǔ*), plus a concise British English gloss.
- Highlight WHY Mandarin patterns work: STPV word order (Subject + Time + Place + Verb), why adjectives take 很 instead of 是 (*今天很热*, never *今天是热*), why 比 never takes 很, why 有 is negated with 没 (*没有*), and radical/character clues (e.g. 氵 water radical in 河/汤/渴/游泳).
- Double-check every character, tone mark (including third-tone sandhi notes when relevant, e.g. 你好 nǐ hǎo, 不客气 bú kèqi), and measure word.

Style & safety:
- Concise: 2–6 sentences. Use **bold** for key Hanzi, *italics* for Pinyin, and simple "- " bullets if helpful. No headings, no code blocks.
- If checking a student's 80–130 character paragraph, praise one natural phrase and point out at most two clear improvements.
- Only help with Mandarin Chinese, language learning and study skills. Kindly steer anything else back to Chinese. Never ask for personal data.`;

interface ChatTurn {
  role: "user" | "assistant";
  content: string;
}

function cleanTurns(raw: unknown): ChatTurn[] {
  if (!Array.isArray(raw)) return [];
  const turns = raw
    .filter((m): m is ChatTurn => !!m && typeof m === "object" && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }))
    .slice(-10);
  while (turns.length && turns[0].role !== "user") turns.shift();
  const out: ChatTurn[] = [];
  for (const t of turns) {
    if (out.length && out[out.length - 1].role === t.role) out[out.length - 1] = { role: t.role, content: `${out[out.length - 1].content}\n\n${t.content}` };
    else out.push(t);
  }
  return out;
}

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Laoshi Mei (梅老师) isn't switched on for this site yet — ask a grown-up to add an AI key." }, { status: 503 });
  }
  const account = await currentAccount().catch(() => null);
  if (!account) return NextResponse.json({ error: "Laoshi Mei (梅老师) is available once you're signed in to a family account." }, { status: 401 });
  if (!throttle(`ai:${account.id}`, 30, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Laoshi Mei needs a short tea break — try again in a few minutes." }, { status: 429 });
  }

  const body = await req.json().catch(() => ({}));
  const turns = cleanTurns(body.messages);
  if (!turns.length || turns[turns.length - 1].role !== "user") return NextResponse.json({ error: "Ask a question first." }, { status: 400 });
  const context = typeof body.context === "string" ? body.context.slice(0, 4000) : "";

  try {
    const allowed =
      (await takeDailyAllowance(`ai-${account.id}`, dailyLimit("AI_ACCOUNT_DAILY_LIMIT", 100))) &&
      (await takeDailyAllowance("ai-site", dailyLimit("AI_DAILY_LIMIT", 300)));
    if (!allowed) return NextResponse.json({ error: RESTING }, { status: 429 });
  } catch {
    return NextResponse.json({ error: "Laoshi Mei couldn't answer just now. Please try again." }, { status: 503 });
  }

  const messages: Anthropic.Beta.BetaMessageParam[] = turns.map((t, i) => ({
    role: t.role,
    content: i === 0 && context ? `What I'm working on in the app:\n${context}\n\n---\n\n${t.content}` : t.content,
  }));

  const model = process.env.AI_MODEL || DEFAULT_MODEL;
  const client = new Anthropic();
  try {
    const useFallback = FALLBACK_MODELS.has(model);
    const response = await client.beta.messages.create({
      model,
      max_tokens: 2000,
      system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
      output_config: { effort: "low" },
      messages,
      ...(useFallback ? { betas: ["server-side-fallback-2026-07-01"], fallbacks: "default" as const } : {}),
    });
    if (response.stop_reason === "refusal") {
      return NextResponse.json({ reply: "你好 (*nǐ hǎo*)! Let's keep our chat focused on Mandarin Chinese. Which phrase or question are you working on?" });
    }
    const reply = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    return NextResponse.json({ reply: reply || "哎呀 (*āiyā*), I lost my train of thought — could you ask that again?" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) {
      return NextResponse.json({ error: "Lots of learners are asking Laoshi Mei right now — try again in a minute." }, { status: 429 });
    }
    if (error instanceof Anthropic.APIError) {
      console.error("AI tutor API error", error.status, error.message);
      return NextResponse.json({ error: "Laoshi Mei couldn't answer just now. Please try again." }, { status: 502 });
    }
    console.error("AI tutor error", error);
    return NextResponse.json({ error: "Laoshi Mei couldn't answer just now. Please try again." }, { status: 500 });
  }
}
