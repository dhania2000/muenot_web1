import mysql from "mysql2/promise"

// Single shared connection pool across hot reloads in dev.
const globalForDb = globalThis as unknown as {
  _mysqlPool?: mysql.Pool
}

function createPool() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error("DATABASE_URL is not set. Add your MySQL connection string in Project Settings > Vars.")
  }
  return mysql.createPool(url)
}

export const pool: mysql.Pool = globalForDb._mysqlPool ?? createPool()

if (process.env.NODE_ENV !== "production") {
  globalForDb._mysqlPool = pool
}

/**
 * Run a parameterized query and return typed rows.
 */
export async function query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  const [rows] = await pool.execute(sql, params)
  return rows as T[]
}

/**
 * Run a query and return the first row, or null.
 */
export async function queryOne<T = any>(sql: string, params: any[] = []): Promise<T | null> {
  const rows = await query<T>(sql, params)
  return rows[0] ?? null
}

export function isDbConfigured() {
  return Boolean(process.env.DATABASE_URL)
}
