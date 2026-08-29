import type { Metadata } from "next";
import { getSeoByPath } from "./seo-db";

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
