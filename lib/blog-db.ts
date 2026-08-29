import { query, queryOne, isDbConfigured } from "./db"

export type BlogPost = {
  id: number
  slug: string
  title: string
  excerpt: string | null
  body: string | null
  cover_image: string | null
  author: string | null
  category: string | null
  published: 0 | 1 | boolean
  published_at: string | null
  created_at: string
  updated_at: string
}

export async function getBlogPosts(opts?: { publishedOnly?: boolean }): Promise<BlogPost[]> {
  if (!isDbConfigured()) return []
  const where = opts?.publishedOnly ? "WHERE published = 1" : ""
  return query<BlogPost>(
    `SELECT * FROM blog_posts ${where} ORDER BY COALESCE(published_at, created_at) DESC`,
  )
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isDbConfigured()) return null
  return queryOne<BlogPost>("SELECT * FROM blog_posts WHERE slug = ?", [slug])
}

export async function upsertBlogPost(input: {
  id?: number
  slug: string
  title: string
  excerpt?: string | null
  body?: string | null
  cover_image?: string | null
  author?: string | null
  category?: string | null
  published: boolean
}): Promise<void> {
  const publishedAt = input.published ? new Date() : null
  if (input.id) {
    await query(
      `UPDATE blog_posts SET slug=?, title=?, excerpt=?, body=?, cover_image=?, author=?, category=?, published=?,
        published_at = CASE WHEN ? = 1 AND published_at IS NULL THEN NOW() WHEN ? = 0 THEN NULL ELSE published_at END
       WHERE id=?`,
      [
        input.slug,
        input.title,
        input.excerpt ?? null,
        input.body ?? null,
        input.cover_image ?? null,
        input.author ?? null,
        input.category ?? null,
        input.published ? 1 : 0,
        input.published ? 1 : 0,
        input.published ? 1 : 0,
        input.id,
      ],
    )
  } else {
    await query(
      `INSERT INTO blog_posts (slug, title, excerpt, body, cover_image, author, category, published, published_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        input.slug,
        input.title,
        input.excerpt ?? null,
        input.body ?? null,
        input.cover_image ?? null,
        input.author ?? null,
        input.category ?? null,
        input.published ? 1 : 0,
        publishedAt,
      ],
    )
  }
}

export async function deleteBlogPost(id: number): Promise<void> {
  await query("DELETE FROM blog_posts WHERE id = ?", [id])
}
