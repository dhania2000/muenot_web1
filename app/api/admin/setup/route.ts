import { NextResponse } from "next/server"
import { pool, isDbConfigured } from "@/lib/db"
import { ensureSchema, TABLE_COUNT } from "@/lib/schema"
import { adminCount, hashPassword } from "@/lib/auth"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  if (!isDbConfigured()) {
    return NextResponse.json({ ok: false, error: "DATABASE_URL is not set." }, { status: 400 })
  }

  try {
    await ensureSchema()

    const count = await adminCount()
    let createdOwner = false

    // Create the first owner account from the request body if none exist yet.
    if (count === 0) {
      const body = await request.json().catch(() => null)
      if (body?.email && body?.password && body?.name) {
        await pool.query(
          "INSERT INTO admin_users (email, name, password_hash, role) VALUES (?, ?, ?, 'owner')",
          [String(body.email).toLowerCase().trim(), String(body.name).trim(), hashPassword(String(body.password))],
        )
        createdOwner = true
      }
    }

    return NextResponse.json({
      ok: true,
      tablesCreated: TABLE_COUNT,
      seeded: true,
      adminAccounts: await adminCount(),
      createdOwner,
    })
  } catch (error: any) {
    console.error("[v0] setup error:", error)
    return NextResponse.json({ ok: false, error: error?.message ?? "Setup failed" }, { status: 500 })
  }
}

export async function GET() {
  if (!isDbConfigured()) {
    return NextResponse.json({ ok: false, configured: false })
  }
  try {
    const count = await adminCount()
    return NextResponse.json({ ok: true, configured: true, adminAccounts: count })
  } catch {
    return NextResponse.json({ ok: true, configured: true, adminAccounts: 0, schemaReady: false })
  }
}
