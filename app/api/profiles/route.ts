import { NextRequest, NextResponse } from "next/server";
import {
  currentAccount,
  newProfile,
  progressKey,
  publicAccount,
  saveAccount,
} from "@/lib/server/auth";
import { deleteJson } from "@/lib/server/blob";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  const body = (await req.json().catch(() => null)) as {
    name?: string;
    avatar?: string;
  } | null;
  const name = body?.name?.trim();
  if (!name) return NextResponse.json({ error: "Please enter a name." }, { status: 400 });
  if (acc.profiles.length >= 6)
    return NextResponse.json({ error: "Maximum 6 profiles." }, { status: 400 });
  const prof = newProfile(name, body?.avatar || "🐼");
  acc.profiles = [...acc.profiles, prof];
  await saveAccount(acc);
  return NextResponse.json({ account: publicAccount(acc), profile: prof });
}

export async function PATCH(req: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  const body = (await req.json().catch(() => null)) as {
    profileId?: string;
    name?: string;
    avatar?: string;
  } | null;
  const prof = acc.profiles.find((p) => p.id === body?.profileId);
  if (!prof) return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  if (body?.name?.trim()) prof.name = body.name.trim();
  if (body?.avatar) prof.avatar = body.avatar;
  await saveAccount(acc);
  return NextResponse.json({ account: publicAccount(acc) });
}

export async function DELETE(req: NextRequest) {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  const body = (await req.json().catch(() => null)) as { profileId?: string } | null;
  const prof = acc.profiles.find((p) => p.id === body?.profileId);
  if (!prof) return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  acc.profiles = acc.profiles.filter((p) => p.id !== prof.id);
  await saveAccount(acc);
  await deleteJson(progressKey(acc.id, prof.id));
  return NextResponse.json({ account: publicAccount(acc) });
}
