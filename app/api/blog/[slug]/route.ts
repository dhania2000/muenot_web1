import { NextResponse } from "next/server"
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog-db"
import { toApiPost, truncateExcerpt } from "@/lib/blog-transform"

export const dynamic = "force-dynamic"

// Server-side fetch for a single post + related posts, served from MySQL.
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params

  try {
    const row = await getBlogPostBySlug(slug)

    if (!row || !row.published) {
      return NextResponse.json({ usingDb: true, post: null, related: [] })
    }

    const post = toApiPost(row)

    // Related = other published posts in the same category (fallback: latest).
    const all = (await getBlogPosts({ publishedOnly: true }))
      .filter((r) => r.slug !== slug)
      .map(toApiPost)
    const sameCategory = all.filter((p) => p.category === post.category)
    const related = (sameCategory.length ? sameCategory : all)
      .slice(0, 3)
      .map((r) => ({ ...r, excerpt: truncateExcerpt(r.excerpt) }))

    return NextResponse.json({
      usingDb: true,
      post: { ...post, excerpt: truncateExcerpt(post.excerpt) },
      related,
    })
  } catch (error) {
    console.error("[v0] /api/blog/[slug] error:", error)
    return NextResponse.json({ usingDb: false, post: null, related: [] })
  }
}
