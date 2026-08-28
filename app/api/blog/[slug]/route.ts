import { NextResponse } from "next/server";
import { isSanityConfigured } from "@/lib/sanity";
import { getPostBySlug, getRelatedPosts, truncateExcerpt } from "@/lib/sanity-queries";

// Server-side fetch for a single post + related posts (avoids browser CORS).
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!isSanityConfigured()) {
    return NextResponse.json({ usingSanity: false, post: null, related: [] });
  }

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ usingSanity: true, post: null, related: [] });
    }

    const related = await getRelatedPosts(post._id, post.tags || [], 3);

    // The detail header shows the excerpt as a subtitle, so keep it short.
    // The full article still renders from `post.content`.
    const trimmedPost = { ...post, excerpt: truncateExcerpt(post.excerpt) };
    const trimmedRelated = related.map((r) => ({
      ...r,
      excerpt: truncateExcerpt(r.excerpt),
    }));

    return NextResponse.json({
      usingSanity: true,
      post: trimmedPost,
      related: trimmedRelated,
    });
  } catch (error) {
    console.error("[v0] /api/blog/[slug] error:", error);
    return NextResponse.json({ usingSanity: false, post: null, related: [] });
  }
}
