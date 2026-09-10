import { type NextRequest, NextResponse } from "next/server"
import { getMedia } from "@/lib/media-db"

/** Serve an image stored in the SQL database. */
export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const media = await getMedia(Number(id))
  if (!media) {
    return new NextResponse("Not found", { status: 404 })
  }

  return new NextResponse(new Uint8Array(media.data), {
    headers: {
      "Content-Type": media.mime_type,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
