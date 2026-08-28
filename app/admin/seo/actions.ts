"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { getWriteClient } from "@/lib/seo";

const SESSION_COOKIE = "seo_admin_session";
const SESSION_VALUE = "authenticated";

export type ActionState = { ok: boolean; message?: string };

function isValidSession(value?: string) {
  return value === SESSION_VALUE;
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return isValidSession(store.get(SESSION_COOKIE)?.value);
}

export async function login(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const password = String(formData.get("password") || "");
  const expected = process.env.SEO_ADMIN_PASSWORD;

  if (!expected) {
    return { ok: false, message: "SEO_ADMIN_PASSWORD is not configured on the server." };
  }
  if (password !== expected) {
    return { ok: false, message: "Incorrect password. Please try again." };
  }

  const store = await cookies();
  store.set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 hours
  });
  return { ok: true };
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function saveSeoSetting(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { ok: false, message: "You are not signed in." };
  }

  const writeClient = getWriteClient();
  if (!writeClient) {
    return {
      ok: false,
      message: "SANITY_API_WRITE_TOKEN is not configured, so edits cannot be saved.",
    };
  }

  const id = String(formData.get("id") || "").trim();
  const pageTitle = String(formData.get("pageTitle") || "").trim();
  const path = String(formData.get("path") || "").trim();
  const metaTitle = String(formData.get("metaTitle") || "").trim();
  const metaDescription = String(formData.get("metaDescription") || "").trim();
  const keywordsRaw = String(formData.get("keywords") || "").trim();
  const noIndex = formData.get("noIndex") === "on";

  if (!pageTitle || !path) {
    return { ok: false, message: "Page label and path are both required." };
  }
  if (!path.startsWith("/")) {
    return { ok: false, message: 'Path must start with "/" (e.g. /services/translation).' };
  }

  const keywords = keywordsRaw
    ? keywordsRaw.split(",").map((k) => k.trim()).filter(Boolean)
    : [];

  const doc = {
    _type: "seoSetting",
    pageTitle,
    path,
    metaTitle: metaTitle || undefined,
    metaDescription: metaDescription || undefined,
    keywords,
    noIndex,
    updatedAt: new Date().toISOString(),
  };

  try {
    if (id) {
      await writeClient.patch(id).set(doc).commit();
    } else {
      await writeClient.create(doc);
    }
    revalidatePath("/admin/seo");
    revalidatePath(path);
    return { ok: true, message: "Saved successfully." };
  } catch (error) {
    console.error("[v0] Error saving SEO setting:", error);
    return { ok: false, message: "Something went wrong while saving. Please try again." };
  }
}

export async function deleteSeoSetting(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  if (!(await isAuthenticated())) {
    return { ok: false, message: "You are not signed in." };
  }

  const writeClient = getWriteClient();
  if (!writeClient) {
    return { ok: false, message: "SANITY_API_WRITE_TOKEN is not configured." };
  }

  const id = String(formData.get("id") || "").trim();
  if (!id) return { ok: false, message: "Missing record id." };

  try {
    await writeClient.delete(id);
    revalidatePath("/admin/seo");
    return { ok: true, message: "Deleted." };
  } catch (error) {
    console.error("[v0] Error deleting SEO setting:", error);
    return { ok: false, message: "Could not delete this record." };
  }
}
