import type { BlogPost as DbBlogPost } from "./blog-db"

// The public blog UI expects a specific post shape. This normalizes a raw
// database row into that shape so pages don't need to know about DB columns.
export type ApiBlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  category: string
  tags: string[]
  author: { name: string; role: string }
  publishedAt: string
  readTime: number
  featured: boolean
}

// Estimate reading time from word count (~200 words per minute).
function estimateReadTime(body: string | null): number {
  if (!body) return 1
  const words = body.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
}

export function toApiPost(row: DbBlogPost): ApiBlogPost {
  const body = row.body ?? ""
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? "",
    content: body,
    coverImage: row.cover_image || "/placeholder-blog.jpg",
    category: row.category || "General",
    tags: row.category ? [row.category] : [],
    author: { name: row.author || "Muenot Team", role: "Content Team" },
    publishedAt: row.published_at || row.created_at,
    readTime: estimateReadTime(body),
    featured: false,
  }
}

// Truncate long text into a short, clean summary for card previews and meta.
export function truncateExcerpt(text?: string, maxLength = 180): string {
  if (!text) return ""
  const clean = text.replace(/\s+/g, " ").trim()
  if (clean.length <= maxLength) return clean
  const truncated = clean.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
