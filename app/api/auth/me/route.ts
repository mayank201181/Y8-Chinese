import { NextResponse } from "next/server";
import { currentAccount, publicAccount } from "@/lib/server/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const acc = await currentAccount();
  if (!acc) return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  return NextResponse.json({ account: publicAccount(acc) });
}
