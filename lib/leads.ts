import { query, queryOne, isDbConfigured } from "./db"

export type LeadType = "contact" | "estimate"
export type LeadStatus = "new" | "in_progress" | "won" | "lost"

export type Lead = {
  id: number
  type: LeadType
  name: string
  email: string
  company: string | null
  phone: string | null
  message: string | null
  payload: Record<string, unknown> | null
  status: LeadStatus
  created_at: string
}

export async function createLead(input: {
  type: LeadType
  name: string
  email: string
  company?: string | null
  phone?: string | null
  message?: string | null
  payload?: Record<string, unknown> | null
}): Promise<void> {
  if (!isDbConfigured()) return
  await query(
    `INSERT INTO leads (type, name, email, company, phone, message, payload)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      input.type,
      input.name,
      input.email,
      input.company ?? null,
      input.phone ?? null,
      input.message ?? null,
      JSON.stringify(input.payload ?? {}),
    ],
  )
}

export async function getLeads(filter?: { type?: LeadType; status?: LeadStatus }): Promise<Lead[]> {
  if (!isDbConfigured()) return []
  const clauses: string[] = []
  const params: any[] = []
  if (filter?.type) {
    clauses.push("type = ?")
    params.push(filter.type)
  }
  if (filter?.status) {
    clauses.push("status = ?")
    params.push(filter.status)
  }
  const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : ""
  const rows = await query<Lead>(
    `SELECT * FROM leads ${where} ORDER BY created_at DESC LIMIT 500`,
    params,
  )
  return rows.map((r) => ({
    ...r,
    payload: typeof r.payload === "string" ? JSON.parse(r.payload as unknown as string) : r.payload,
  }))
}

export async function getLeadStats(): Promise<{ total: number; new: number; contact: number; estimate: number }> {
  if (!isDbConfigured()) return { total: 0, new: 0, contact: 0, estimate: 0 }
  const row = await queryOne<{ total: number; newCount: number; contact: number; estimate: number }>(
    `SELECT
       COUNT(*) as total,
       SUM(status = 'new') as newCount,
       SUM(type = 'contact') as contact,
       SUM(type = 'estimate') as estimate
     FROM leads`,
  )
  return {
    total: Number(row?.total ?? 0),
    new: Number(row?.newCount ?? 0),
    contact: Number(row?.contact ?? 0),
    estimate: Number(row?.estimate ?? 0),
  }
}

export async function updateLeadStatus(id: number, status: LeadStatus): Promise<void> {
  await query("UPDATE leads SET status = ? WHERE id = ?", [status, id])
}

export async function deleteLead(id: number): Promise<void> {
  await query("DELETE FROM leads WHERE id = ?", [id])
}
