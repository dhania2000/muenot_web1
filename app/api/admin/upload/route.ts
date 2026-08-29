import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { getCurrentUser } from "@/lib/auth"

const MAX_BYTES = 8 * 1024 * 1024 // 8MB
const ALLOWED = ["image/jpeg", "image/png", "image/webp", "image/gif", "image/avif"]

export async function POST(request: NextRequest) {
  // Only authenticated admins may upload.
  const user = await getCurrentUser()
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get("file") as File | null

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }
    if (!ALLOWED.includes(file.type)) {
      return NextResponse.json({ error: "Only image files are allowed" }, { status: 400 })
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "Image must be 8MB or smaller" }, { status: 400 })
    }

    const blob = await put(`blog/${Date.now()}-${file.name}`, file, {
      access: "public",
      addRandomSuffix: true,
    })

    return NextResponse.json({ url: blob.url })
  } catch (error) {
    console.error("[v0] Blog image upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
