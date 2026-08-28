import type { Metadata } from "next";
import { createClient } from "@sanity/client";
import { client, isSanityConfigured, urlFor, type SanityImageSource } from "./sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5juh7797";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

export interface SeoSetting {
  _id: string;
  pageTitle: string;
  path: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogImage?: SanityImageSource;
  noIndex?: boolean;
  updatedAt?: string;
}

const seoFields = `
  _id,
  pageTitle,
  path,
  metaTitle,
  metaDescription,
  keywords,
  ogImage,
  noIndex,
  updatedAt
`;

// A write-enabled client. Only instantiated on the server when a token exists.
// The SANITY_API_WRITE_TOKEN is required for the admin dashboard to save edits.
let cachedWriteClient: ReturnType<typeof createClient> | null = null;

export function getWriteClient() {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) return null;
  if (!cachedWriteClient) {
    cachedWriteClient = createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
    });
  }
  return cachedWriteClient;
}

// Fetch every SEO record for the admin dashboard list.
export async function getAllSeoSettings(): Promise<SeoSetting[]> {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(
      `*[_type == "seoSetting"] | order(path asc) { ${seoFields} }`
    );
  } catch (error) {
    console.error("Error fetching SEO settings:", error);
    return [];
  }
}

// Fetch a single page's SEO record by its route path.
export async function getSeoSettingByPath(path: string): Promise<SeoSetting | null> {
  if (!isSanityConfigured()) return null;
  try {
    return await client.fetch(
      `*[_type == "seoSetting" && path == $path][0] { ${seoFields} }`,
      { path }
    );
  } catch (error) {
    console.error("Error fetching SEO setting:", error);
    return null;
  }
}

// Convert a stored SEO record into Next.js Metadata. Falls back to the passed
// defaults so pages stay well-described even before an editor customises them.
export async function buildMetadataFromSeo(
  path: string,
  fallback: Metadata = {}
): Promise<Metadata> {
  const seo = await getSeoSettingByPath(path);
  if (!seo) return fallback;

  const title = seo.metaTitle || (fallback.title as string | undefined);
  const description = seo.metaDescription || fallback.description || undefined;
  const ogImageUrl = seo.ogImage
    ? urlFor(seo.ogImage).width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    ...fallback,
    title,
    description,
    keywords: seo.keywords && seo.keywords.length ? seo.keywords : fallback.keywords,
    robots: seo.noIndex ? { index: false, follow: false } : fallback.robots,
    openGraph: {
      ...(fallback.openGraph || {}),
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(ogImageUrl ? { images: [{ url: ogImageUrl, width: 1200, height: 630 }] } : {}),
    },
  };
}
