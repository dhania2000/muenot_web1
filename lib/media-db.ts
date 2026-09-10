import { pool, query, isDbConfigured } from "./db"

/**
 * Images uploaded from the admin dashboard are stored directly in the SQL
 * database (as LONGBLOB bytes) instead of an external blob store, then served
 * back through /api/media/[id].
 */
export const MEDIA_TABLE_DDL = `CREATE TABLE IF NOT EXISTS media (
  id INT AUTO_INCREMENT PRIMARY KEY,
  filename VARCHAR(255) NOT NULL,
  mime_type VARCHAR(128) NOT NULL,
  byte_size INT NOT NULL,
  data LONGBLOB NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4`

export type MediaRow = { id: number; mime_type: string; data: Buffer }

/** Create the media table on demand (idempotent). */
export async function ensureMediaTable(): Promise<void> {
  await pool.query(MEDIA_TABLE_DDL)
}

/** Store an image and return its new row id. */
export async function insertMedia(input: {
  filename: string
  mimeType: string
  byteSize: number
  data: Buffer
}): Promise<number> {
  const [res]: any = await pool.query(
    "INSERT INTO media (filename, mime_type, byte_size, data) VALUES (?, ?, ?, ?)",
    [input.filename, input.mimeType, input.byteSize, input.data],
  )
  return res.insertId as number
}

/** Fetch a stored image by id. */
export async function getMedia(id: number): Promise<MediaRow | null> {
  if (!isDbConfigured() || !Number.isInteger(id) || id <= 0) return null
  const rows = await query<MediaRow>("SELECT id, mime_type, data FROM media WHERE id = ?", [id])
  return rows[0] ?? null
}
