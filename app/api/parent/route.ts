import { NextRequest, NextResponse } from "next/server";
import { currentAccount, progressKey, verifySecret } from "@/lib/server/auth";
import { readJson } from "@/lib/server/blob";
import type { ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  const body = (await req.json().catch(() => null)) as { pin?: string } | null;
  if (!body?.pin || !verifySecret(body.pin, acc.pinHash))
    return NextResponse.json({ error: "Wrong PIN" }, { status: 403 });
  const learners = await Promise.all(
    acc.profiles.map(async (p) => ({
      profile: p,
      progress: await readJson<ProgressDoc>(progressKey(acc.id, p.id)),
    }))
  );
  return NextResponse.json({ learners });
}
