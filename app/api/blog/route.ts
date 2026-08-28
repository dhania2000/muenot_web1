import { NextResponse } from "next/server";
import { isSanityConfigured, type SanityPost } from "@/lib/sanity";
import { getAllPosts, getFeaturedPosts, truncateExcerpt } from "@/lib/sanity-queries";

// Fetch blog posts from Sanity on the server so the browser never calls the
// Sanity API directly (which would fail CORS on unlisted preview origins).
export async function GET() {
  if (!isSanityConfigured()) {
    return NextResponse.json({ usingSanity: false, posts: [], featured: [] });
  }

  try {
    const [posts, featured] = await Promise.all([
      getAllPosts(),
      getFeaturedPosts(),
    ]);

    const withShortExcerpt = (list: SanityPost[]) =>
      list.map((post) => ({ ...post, excerpt: truncateExcerpt(post.excerpt) }));

    return NextResponse.json({
      usingSanity: true,
      posts: withShortExcerpt(posts),
      featured: withShortExcerpt(featured),
    });
  } catch (error) {
    console.error("[v0] /api/blog error:", error);
    return NextResponse.json({ usingSanity: false, posts: [], featured: [] });
  }
}
