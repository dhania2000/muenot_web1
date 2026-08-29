"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { pool, queryOne } from "@/lib/db"
import { ensureSchema } from "@/lib/schema"
import {
  adminCount,
  createSession,
  destroySession,
  hashPassword,
  requireUser,
  verifyPassword,
} from "@/lib/auth"
import { updateLeadStatus, deleteLead, type LeadStatus } from "@/lib/leads"
import { saveSection, type SectionKey } from "@/lib/content"
import { upsertBlogPost, deleteBlogPost } from "@/lib/blog-db"
import { upsertSeo, deleteSeo } from "@/lib/seo-db"

type ActionState = { error?: string; success?: string } | null

// ---------------- Auth ----------------

export async function initialSetupAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").toLowerCase().trim()
  const password = String(formData.get("password") ?? "")

  if (!name || !email || !password) return { error: "All fields are required." }
  if (password.length < 8) return { error: "Password must be at least 8 characters." }

  try {
    await ensureSchema()
    if ((await adminCount()) > 0) {
      return { error: "An admin account already exists. Please sign in." }
    }
    await pool.query(
      "INSERT INTO admin_users (email, name, password_hash, role) VALUES (?, ?, ?, 'owner')",
      [email, name, hashPassword(password)],
    )
    const user = await queryOne<{ id: number }>("SELECT id FROM admin_users WHERE email = ?", [email])
    if (user) await createSession(user.id)
  } catch (error: any) {
    console.error("[v0] initialSetupAction error:", error)
    return { error: error?.message ?? "Setup failed." }
  }
  redirect("/admin")
}

export async function loginAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const email = String(formData.get("email") ?? "").toLowerCase().trim()
  const password = String(formData.get("password") ?? "")
  if (!email || !password) return { error: "Email and password are required." }

  try {
    await ensureSchema()
    const user = await queryOne<{ id: number; password_hash: string }>(
      "SELECT id, password_hash FROM admin_users WHERE email = ?",
      [email],
    )
    if (!user || !verifyPassword(password, user.password_hash)) {
      return { error: "Invalid email or password." }
    }
    await createSession(user.id)
  } catch (error: any) {
    console.error("[v0] loginAction error:", error)
    return { error: error?.message ?? "Login failed." }
  }
  redirect("/admin")
}

export async function logoutAction() {
  await destroySession()
  redirect("/admin/login")
}

// ---------------- Leads ----------------

export async function setLeadStatusAction(formData: FormData) {
  await requireUser()
  const id = Number(formData.get("id"))
  const status = String(formData.get("status")) as LeadStatus
  await updateLeadStatus(id, status)
  revalidatePath("/admin/leads")
}

export async function deleteLeadAction(formData: FormData) {
  await requireUser()
  const id = Number(formData.get("id"))
  await deleteLead(id)
  revalidatePath("/admin/leads")
}

// ---------------- Content ----------------

export async function saveContentAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireUser()
  const section = String(formData.get("section")) as SectionKey
  const raw = String(formData.get("data") ?? "")
  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    return { error: "Invalid JSON. Please fix the syntax and try again." }
  }
  try {
    await saveSection(section, parsed as any)
  } catch (error: any) {
    console.error("[v0] saveContentAction error:", error)
    return { error: error?.message ?? "Failed to save." }
  }
  revalidatePath("/", "layout")
  return { success: "Saved. Changes are live on the site." }
}

// ---------------- Blog ----------------

export async function saveBlogAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireUser()
  const idRaw = formData.get("id")
  const id = idRaw ? Number(idRaw) : undefined
  const title = String(formData.get("title") ?? "").trim()
  const slug =
    String(formData.get("slug") ?? "").trim() ||
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  if (!title) return { error: "Title is required." }
  if (!slug) return { error: "Slug is required." }

  try {
    await upsertBlogPost({
      id,
      slug,
      title,
      excerpt: String(formData.get("excerpt") ?? "") || null,
      body: String(formData.get("body") ?? "") || null,
      cover_image: String(formData.get("cover_image") ?? "") || null,
      author: String(formData.get("author") ?? "") || null,
      category: String(formData.get("category") ?? "") || null,
      published: formData.get("published") === "on",
    })
  } catch (error: any) {
    console.error("[v0] saveBlogAction error:", error)
    return { error: error?.message ?? "Failed to save post." }
  }
  revalidatePath("/admin/blog")
  revalidatePath("/blog")
  return { success: "Post saved." }
}

export async function deleteBlogAction(formData: FormData) {
  await requireUser()
  await deleteBlogPost(Number(formData.get("id")))
  revalidatePath("/admin/blog")
  revalidatePath("/blog")
}

// ---------------- SEO ----------------

export async function saveSeoAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireUser()
  const idRaw = formData.get("id")
  const path = String(formData.get("path") ?? "").trim()
  const page_title = String(formData.get("page_title") ?? "").trim()
  if (!path) return { error: "Path is required (e.g. /services)." }
  if (!page_title) return { error: "Page title is required." }

  try {
    await upsertSeo({
      id: idRaw ? Number(idRaw) : undefined,
      path,
      page_title,
      meta_title: String(formData.get("meta_title") ?? "") || null,
      meta_description: String(formData.get("meta_description") ?? "") || null,
      keywords: String(formData.get("keywords") ?? "") || null,
      og_image: String(formData.get("og_image") ?? "") || null,
      no_index: formData.get("no_index") === "on",
    })
  } catch (error: any) {
    console.error("[v0] saveSeoAction error:", error)
    return { error: error?.message ?? "Failed to save SEO." }
  }
  revalidatePath("/admin/seo-settings")
  revalidatePath(path)
  return { success: "SEO settings saved." }
}

export async function deleteSeoAction(formData: FormData) {
  await requireUser()
  await deleteSeo(Number(formData.get("id")))
  revalidatePath("/admin/seo-settings")
}

// ---------------- Users ----------------

export async function createUserAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const current = await requireUser()
  if (current.role !== "owner") return { error: "Only owners can manage admin accounts." }

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").toLowerCase().trim()
  const password = String(formData.get("password") ?? "")
  const role = String(formData.get("role") ?? "editor") === "owner" ? "owner" : "editor"

  if (!name || !email || !password) return { error: "All fields are required." }
  if (password.length < 8) return { error: "Password must be at least 8 characters." }

  try {
    const existing = await queryOne("SELECT id FROM admin_users WHERE email = ?", [email])
    if (existing) return { error: "An account with that email already exists." }
    await pool.query(
      "INSERT INTO admin_users (email, name, password_hash, role) VALUES (?, ?, ?, ?)",
      [email, name, hashPassword(password), role],
    )
  } catch (error: any) {
    console.error("[v0] createUserAction error:", error)
    return { error: error?.message ?? "Failed to create user." }
  }
  revalidatePath("/admin/users")
  return { success: "Admin account created." }
}

export async function deleteUserAction(formData: FormData) {
  const current = await requireUser()
  if (current.role !== "owner") return
  const id = Number(formData.get("id"))
  if (id === current.id) return // can't delete yourself
  await pool.query("DELETE FROM admin_users WHERE id = ?", [id])
  revalidatePath("/admin/users")
}
