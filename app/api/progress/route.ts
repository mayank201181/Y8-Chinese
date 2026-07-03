import { NextRequest, NextResponse } from "next/server";
import { currentAccount, progressKey } from "@/lib/server/auth";
import { readJson, writeJson } from "@/lib/server/blob";
import type { ProgressDoc } from "@/lib/profileTypes";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  const profileId = req.nextUrl.searchParams.get("profileId") ?? "";
  if (!acc.profiles.some((p) => p.id === profileId))
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  const progress = await readJson<ProgressDoc>(progressKey(acc.id, profileId));
  return NextResponse.json({ progress });
}

export async function POST(req: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  const body = (await req.json().catch(() => null)) as {
    profileId?: string;
    progress?: ProgressDoc;
  } | null;
  const profileId = body?.profileId ?? "";
  if (!acc.profiles.some((p) => p.id === profileId))
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  if (!body?.progress || body.progress.version !== 1)
    return NextResponse.json({ error: "Bad progress doc" }, { status: 400 });
  // last-write-wins guard: don't clobber a newer doc
  const key = progressKey(acc.id, profileId);
  const existing = await readJson<ProgressDoc>(key);
  if (existing && existing.updatedAt > body.progress.updatedAt)
    return NextResponse.json({ progress: existing, stale: true });
  await writeJson(key, body.progress);
  return NextResponse.json({ ok: true });
}
