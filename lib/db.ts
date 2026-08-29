import mysql from "mysql2/promise"

// Single shared connection pool across hot reloads in dev.
const globalForDb = globalThis as unknown as {
  _mysqlPool?: mysql.Pool
}

/**
 * Lazily create (and cache) the connection pool. This is intentionally NOT run
 * at import time: modules that only *conditionally* touch the database (guarded
 * by `isDbConfigured()`) must be importable even when DATABASE_URL is unset,
 * otherwise a missing env var would crash every page that imports them.
 */
export function getPool(): mysql.Pool {
  if (globalForDb._mysqlPool) return globalForDb._mysqlPool
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error("DATABASE_URL is not set. Add your MySQL connection string in Project Settings > Vars.")
  }
  const pool = mysql.createPool(url)
  if (process.env.NODE_ENV !== "production") {
    globalForDb._mysqlPool = pool
  }
  return pool
}

/**
 * Backwards-compatible `pool` export. It's a Proxy so that simply importing this
 * module never opens a connection or throws — the real pool is created on the
 * first property access (e.g. `pool.query(...)`).
 */
export const pool: mysql.Pool = new Proxy({} as mysql.Pool, {
  get(_target, prop, receiver) {
    const real = getPool()
    const value = Reflect.get(real as object, prop, receiver)
    return typeof value === "function" ? value.bind(real) : value
  },
})

/**
 * Run a parameterized query and return typed rows.
 */
export async function query<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  const [rows] = await getPool().execute(sql, params)
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
