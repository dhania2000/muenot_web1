import "server-only"
import { cookies } from "next/headers"
import { randomBytes, scryptSync, timingSafeEqual } from "crypto"
import { query, queryOne } from "./db"

export const SESSION_COOKIE = "muenot_admin_session"
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

export type AdminUser = {
  id: number
  email: string
  name: string
  role: "owner" | "editor"
  created_at: string
}

// ---- Password hashing (scrypt, no external deps) ----

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex")
  const derived = scryptSync(password, salt, 64).toString("hex")
  return `${salt}:${derived}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, key] = stored.split(":")
  if (!salt || !key) return false
  const keyBuffer = Buffer.from(key, "hex")
  const derived = scryptSync(password, salt, 64)
  if (keyBuffer.length !== derived.length) return false
  return timingSafeEqual(keyBuffer, derived)
}

// ---- Session management ----

function newToken() {
  return randomBytes(32).toString("hex")
}

export async function createSession(userId: number): Promise<string> {
  const token = newToken()
  const expires = new Date(Date.now() + SESSION_TTL_MS)
  await query("INSERT INTO admin_sessions (token, user_id, expires_at) VALUES (?, ?, ?)", [
    token,
    userId,
    expires,
  ])
  const store = await cookies()
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    expires,
  })
  return token
}

export async function destroySession(): Promise<void> {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE)?.value
  if (token) {
    try {
      await query("DELETE FROM admin_sessions WHERE token = ?", [token])
    } catch {
      // ignore
    }
  }
  store.delete(SESSION_COOKIE)
}

export async function getCurrentUser(): Promise<AdminUser | null> {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE)?.value
  if (!token) return null
  try {
    const row = await queryOne<AdminUser & { expires_at: string }>(
      `SELECT u.id, u.email, u.name, u.role, u.created_at, s.expires_at
       FROM admin_sessions s
       JOIN admin_users u ON u.id = s.user_id
       WHERE s.token = ?`,
      [token],
    )
    if (!row) return null
    if (new Date(row.expires_at).getTime() < Date.now()) {
      await query("DELETE FROM admin_sessions WHERE token = ?", [token])
      return null
    }
    return { id: row.id, email: row.email, name: row.name, role: row.role, created_at: row.created_at }
  } catch (error) {
    console.error("[v0] getCurrentUser error:", error)
    return null
  }
}

export async function requireUser(): Promise<AdminUser> {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error("UNAUTHORIZED")
  }
  return user
}

/** How many admin accounts exist. Used to gate first-time setup. */
export async function adminCount(): Promise<number> {
  const row = await queryOne<{ count: number }>("SELECT COUNT(*) as count FROM admin_users")
  return row?.count ?? 0
}
