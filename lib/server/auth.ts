// Family-account auth: scrypt-hashed password + parent PIN, HMAC-signed
// session token in an httpOnly cookie. Next 16: cookies() is async and may
// only be set inside route handlers / server actions.

import { createHmac, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { readJson, writeJson } from "./blob";
import type { Account, Profile } from "../profileTypes";

const COOKIE = "y8zh_session";
const SESSION_DAYS = 90;

export interface StoredAccount extends Account {
  passHash: string; // salt:hash hex
  pinHash: string;
  createdAt: number;
}

function secret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s) throw new Error("AUTH_SECRET is not set");
  return s;
}

export function hashSecret(plain: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(plain, salt, 32).toString("hex");
  return `${salt}:${hash}`;
}

export function verifySecret(plain: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const cand = scryptSync(plain, salt, 32);
  const ref = Buffer.from(hash, "hex");
  return cand.length === ref.length && timingSafeEqual(cand, ref);
}

export function nameSlug(name: string): string {
  return name.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-一-鿿]/g, "");
}

// ---- session token: accountId.expiry.hmac ----

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("hex");
}

export function makeToken(accountId: string): string {
  const exp = Date.now() + SESSION_DAYS * 86400000;
  const payload = `${accountId}.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function parseToken(token: string): string | null {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [accountId, expStr, mac] = parts;
  const payload = `${accountId}.${expStr}`;
  const expected = sign(payload);
  try {
    if (!timingSafeEqual(Buffer.from(mac, "hex"), Buffer.from(expected, "hex"))) return null;
  } catch {
    return null;
  }
  if (Number(expStr) < Date.now()) return null;
  return accountId;
}

export async function setSessionCookie(accountId: string) {
  const jar = await cookies();
  jar.set(COOKIE, makeToken(accountId), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DAYS * 86400,
  });
}

export async function clearSessionCookie() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

// ---- account storage ----

export function accountKey(id: string) {
  return `accounts/${id}.json`;
}
export function accountByNameKey(slug: string) {
  return `accounts/byname/${slug}.json`;
}
export function progressKey(accountId: string, profileId: string) {
  return `progress/${accountId}/${profileId}.json`;
}

export async function getAccount(id: string): Promise<StoredAccount | null> {
  return readJson<StoredAccount>(accountKey(id));
}

export async function saveAccount(acc: StoredAccount): Promise<void> {
  await writeJson(accountKey(acc.id), acc);
}

export async function findAccountIdByName(familyName: string): Promise<string | null> {
  const rec = await readJson<{ id: string }>(accountByNameKey(nameSlug(familyName)));
  return rec?.id ?? null;
}

export async function registerAccountName(familyName: string, id: string): Promise<void> {
  await writeJson(accountByNameKey(nameSlug(familyName)), { id });
}

/** The logged-in account for the current request, or null. */
export async function currentAccount(): Promise<StoredAccount | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE)?.value;
  if (!token) return null;
  const accountId = parseToken(token);
  if (!accountId) return null;
  return getAccount(accountId);
}

/** Public shape (no hashes) sent to the client. */
export function publicAccount(acc: StoredAccount): Account {
  return { id: acc.id, familyName: acc.familyName, profiles: acc.profiles };
}

export function newId(prefix: string): string {
  return `${prefix}_${randomBytes(8).toString("hex")}`;
}

export function newProfile(name: string, avatar: string): Profile {
  return { id: newId("prof"), name: name.trim(), avatar, createdAt: Date.now() };
}
