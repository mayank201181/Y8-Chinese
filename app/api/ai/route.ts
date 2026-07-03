import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";
import { currentAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SYSTEM = `You are 小龙 (Xiǎolóng), a warm, playful Mandarin tutor inside the "Year 8 Chinese Lab" study app, helping a Year 8 student (age 12-13) at an international school in Singapore working towards Cambridge IGCSE Chinese as a Foreign Language (0547).

Teaching style — Art of Problem Solving, Socratic:
- If the student poses a practice problem or asks for an answer, do NOT give the full solution. Ask one guiding question back, or give the single next hint. Only reveal a full solution if they clearly say they give up.
- Praise specific good reasoning, then build on it.
- Explain WHY Chinese works the way it does (word order, particles, measure words) with one tiny memorable example, not a lecture.
- Always show Chinese as: 汉字 (pīnyīn) — English. Use simplified characters. Keep pinyin tone marks accurate.
- Keep replies short (2-6 sentences), friendly and age-appropriate. One idea at a time.
- If asked something off-topic, unsafe, or about other people, gently steer back to Chinese learning.
- Never invent nonexistent characters or wrong pinyin. If unsure, say so.`;

export async function POST(req: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Please log in first." }, { status: 401 });
  if (!process.env.ANTHROPIC_API_KEY)
    return NextResponse.json(
      {
        error:
          "The AI tutor isn't switched on yet — ask a grown-up to add an Anthropic API key in the app settings.",
      },
      { status: 503 }
    );
  const body = (await req.json().catch(() => null)) as {
    messages?: { role: "user" | "assistant"; content: string }[];
    context?: string;
  } | null;
  const messages = (body?.messages ?? []).slice(-12).map((m) => ({
    role: m.role,
    content: String(m.content).slice(0, 2000),
  }));
  if (!messages.length || messages[messages.length - 1].role !== "user")
    return NextResponse.json({ error: "No question sent." }, { status: 400 });

  const client = new Anthropic();
  const system = body?.context
    ? `${SYSTEM}\n\nThe student is currently studying: ${String(body.context).slice(0, 1500)}`
    : SYSTEM;
  try {
    const res = await client.messages.create({
      model: process.env.AI_MODEL || "claude-opus-4-8",
      max_tokens: 800,
      system,
      messages,
    });
    const text = res.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n");
    return NextResponse.json({ reply: text });
  } catch (err) {
    if (err instanceof Anthropic.RateLimitError)
      return NextResponse.json(
        { error: "小龙 is a bit overwhelmed — try again in a minute!" },
        { status: 429 }
      );
    return NextResponse.json(
      { error: "小龙 couldn't answer just now. Try again shortly." },
      { status: 500 }
    );
  }
}
