import { query, queryOne, isDbConfigured } from "./db"
import { SECTION_SEEDS, type SectionKey } from "./content-schema"

/**
 * Flexible JSON content store. Each marketing section of the site is a row in
 * `site_content` keyed by section name. The hardcoded arrays act as the seed
 * (loaded at setup) AND as a runtime fallback so the public site never breaks,
 * even if the database is unreachable or a row is missing.
 */

export { SECTION_SEEDS, SECTION_LABELS, type SectionKey } from "./content-schema"

export async function getSection<K extends SectionKey>(
  section: K,
): Promise<(typeof SECTION_SEEDS)[K]> {
  const fallback = SECTION_SEEDS[section]
  if (!isDbConfigured()) return fallback
  try {
    const row = await queryOne<{ data: unknown }>(
      "SELECT data FROM site_content WHERE section = ?",
      [section],
    )
    if (!row || row.data == null) return fallback
    // mysql2 returns JSON columns already parsed
    const data = typeof row.data === "string" ? JSON.parse(row.data) : row.data
    return data as (typeof SECTION_SEEDS)[K]
  } catch (error) {
    console.error(`[v0] getSection(${section}) error, using fallback:`, error)
    return fallback
  }
}

export async function saveSection<K extends SectionKey>(
  section: K,
  data: (typeof SECTION_SEEDS)[K],
): Promise<void> {
  await query(
    `INSERT INTO site_content (section, data) VALUES (?, CAST(? AS JSON))
     ON DUPLICATE KEY UPDATE data = VALUES(data)`,
    [section, JSON.stringify(data)],
  )
}

/** Seed any missing sections with the hardcoded defaults. Idempotent. */
export async function seedContent(): Promise<void> {
  for (const key of Object.keys(SECTION_SEEDS) as SectionKey[]) {
    await query(
      `INSERT IGNORE INTO site_content (section, data) VALUES (?, CAST(? AS JSON))`,
      [key, JSON.stringify(SECTION_SEEDS[key])],
    )
  }
}
