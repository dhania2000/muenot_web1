import { query, queryOne, isDbConfigured } from "./db"

export type SeoRow = {
  id: number
  path: string
  page_title: string
  meta_title: string | null
  meta_description: string | null
  keywords: string | null
  og_image: string | null
  no_index: 0 | 1 | boolean
  updated_at: string
}

export async function getAllSeo(): Promise<SeoRow[]> {
  if (!isDbConfigured()) return []
  return query<SeoRow>("SELECT * FROM seo_settings ORDER BY path ASC")
}

export async function getSeoByPath(path: string): Promise<SeoRow | null> {
  if (!isDbConfigured()) return null
  try {
    return await queryOne<SeoRow>("SELECT * FROM seo_settings WHERE path = ?", [path])
  } catch (error) {
    console.error("[v0] getSeoByPath error:", error)
    return null
  }
}

export async function upsertSeo(input: {
  id?: number
  path: string
  page_title: string
  meta_title?: string | null
  meta_description?: string | null
  keywords?: string | null
  og_image?: string | null
  no_index: boolean
}): Promise<void> {
  await query(
    `INSERT INTO seo_settings (path, page_title, meta_title, meta_description, keywords, og_image, no_index)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE
       page_title = VALUES(page_title),
       meta_title = VALUES(meta_title),
       meta_description = VALUES(meta_description),
       keywords = VALUES(keywords),
       og_image = VALUES(og_image),
       no_index = VALUES(no_index)`,
    [
      input.path,
      input.page_title,
      input.meta_title ?? null,
      input.meta_description ?? null,
      input.keywords ?? null,
      input.og_image ?? null,
      input.no_index ? 1 : 0,
    ],
  )
}

export async function deleteSeo(id: number): Promise<void> {
  await query("DELETE FROM seo_settings WHERE id = ?", [id])
}
