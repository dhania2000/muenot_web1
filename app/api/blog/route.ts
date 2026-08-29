import { NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/blog-db"
import { toApiPost, truncateExcerpt } from "@/lib/blog-transform"

export const dynamic = "force-dynamic"

// Serve blog posts from the MySQL database. The public blog pages consume this
// endpoint so the browser never needs a direct database connection.
export async function GET() {
  try {
    const rows = await getBlogPosts({ publishedOnly: true })
    const posts = rows.map(toApiPost)
    const featured = posts.slice(0, 2)

    const withShortExcerpt = (list: ReturnType<typeof toApiPost>[]) =>
      list.map((post) => ({ ...post, excerpt: truncateExcerpt(post.excerpt) }))

    return NextResponse.json({
      usingDb: true,
      posts: withShortExcerpt(posts),
      featured: withShortExcerpt(featured),
    })
  } catch (error) {
    console.error("[v0] /api/blog error:", error)
    return NextResponse.json({ usingDb: false, posts: [], featured: [] })
  }
}
