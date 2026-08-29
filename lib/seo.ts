import type { Metadata } from "next";
import { getSeoByPath, getAllSeo, type SeoRow } from "./seo-db";

// UI-facing shape consumed by the admin dashboard/editor. It normalises the
// snake_case database row (`SeoRow`) into the camelCase record the components
// expect, and turns the comma-separated `keywords` column into a string array.
export interface SeoSetting {
  _id: string;
  pageTitle: string;
  path: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex: boolean;
  updatedAt?: string;
}

function rowToSetting(row: SeoRow): SeoSetting {
  return {
    _id: String(row.id),
    pageTitle: row.page_title,
    path: row.path,
    metaTitle: row.meta_title || undefined,
    metaDescription: row.meta_description || undefined,
    keywords: row.keywords
      ? row.keywords.split(",").map((k) => k.trim()).filter(Boolean)
      : undefined,
    ogImage: row.og_image || undefined,
    noIndex: row.no_index === 1 || row.no_index === true,
    updatedAt: row.updated_at,
  };
}

// Fetch every SEO record for the admin dashboard.
export async function getAllSeoSettings(): Promise<SeoSetting[]> {
  const rows = await getAllSeo();
  return rows.map(rowToSetting);
}

// Convert a stored SEO record into Next.js Metadata. Falls back to the passed
// defaults so pages stay well-described even before an editor customises them.
export async function buildMetadataFromSeo(
  path: string,
  fallback: Metadata = {}
): Promise<Metadata> {
  const seo = await getSeoByPath(path);
  if (!seo) return fallback;

  const title = seo.meta_title || (fallback.title as string | undefined);
  const description = seo.meta_description || fallback.description || undefined;
  const keywords = seo.keywords
    ? seo.keywords.split(",").map((k) => k.trim()).filter(Boolean)
    : undefined;
  const ogImageUrl = seo.og_image || undefined;
  const noIndex = seo.no_index === 1 || seo.no_index === true;

  return {
    ...fallback,
    title,
    description,
    keywords: keywords && keywords.length ? keywords : fallback.keywords,
    robots: noIndex ? { index: false, follow: false } : fallback.robots,
    openGraph: {
      ...(fallback.openGraph || {}),
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(ogImageUrl ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] } : {}),
    },
  };
}
