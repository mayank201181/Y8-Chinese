import { NextRequest, NextResponse } from "next/server";
import {
  StoredAccount,
  findAccountIdByName,
  hashSecret,
  newId,
  publicAccount,
  registerAccountName,
  saveAccount,
  setSessionCookie,
} from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as {
    familyName?: string;
    password?: string;
    pin?: string;
  } | null;
  const familyName = body?.familyName?.trim();
  const password = body?.password ?? "";
  const pin = body?.pin ?? "";
  if (!familyName || familyName.length < 2)
    return NextResponse.json({ error: "Please enter a family name." }, { status: 400 });
  if (password.length < 6)
    return NextResponse.json(
      { error: "Password needs at least 6 characters." },
      { status: 400 }
    );
  if (!/^\d{4,6}$/.test(pin))
    return NextResponse.json(
      { error: "Parent PIN must be 4–6 digits." },
      { status: 400 }
    );
  const existing = await findAccountIdByName(familyName);
  if (existing)
    return NextResponse.json(
      { error: "That family name is taken — try logging in instead." },
      { status: 409 }
    );
  const acc: StoredAccount = {
    id: newId("acct"),
    familyName,
    profiles: [],
    passHash: hashSecret(password),
    pinHash: hashSecret(pin),
    createdAt: Date.now(),
  };
  await saveAccount(acc);
  await registerAccountName(familyName, acc.id);
  await setSessionCookie(acc.id);
  return NextResponse.json({ account: publicAccount(acc) });
}
