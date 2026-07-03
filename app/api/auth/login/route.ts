import { NextRequest, NextResponse } from "next/server";
import {
  findAccountIdByName,
  getAccount,
  publicAccount,
  setSessionCookie,
  verifySecret,
} from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as {
    familyName?: string;
    password?: string;
  } | null;
  const familyName = body?.familyName?.trim() ?? "";
  const password = body?.password ?? "";
  const id = await findAccountIdByName(familyName);
  const acc = id ? await getAccount(id) : null;
  if (!acc || !verifySecret(password, acc.passHash))
    return NextResponse.json(
      { error: "Family name or password is wrong." },
      { status: 401 }
    );
  await setSessionCookie(acc.id);
  return NextResponse.json({ account: publicAccount(acc) });
}
