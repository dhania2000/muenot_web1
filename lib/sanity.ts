import { createClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";

// Define SanityImageSource type locally (avoids version-specific import issues)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanityImageSource = any;

// Project ID and dataset are public, non-secret values, so they are safe to
// keep as fallbacks. This guarantees the blog reads from Sanity even if the
// NEXT_PUBLIC_SANITY_* env vars are not set in the deployment environment.
const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5juh7797",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false for instant updates (no caching delay)
};

// The Sanity SDK throws at construction time when no projectId is configured,
// so the client and image builder are created lazily. Every caller already
// guards with isSanityConfigured(), which keeps the blog usable without Sanity.
let cachedClient: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (!cachedClient) cachedClient = createClient(sanityConfig);
  return cachedClient;
}

export const client = {
  fetch<T = unknown>(query: string, params?: Record<string, unknown>) {
    return getClient().fetch<T>(query, params);
  },
};

let cachedBuilder: ReturnType<typeof createImageUrlBuilder> | null = null;

export function urlFor(source: SanityImageSource) {
  if (!cachedBuilder) cachedBuilder = createImageUrlBuilder(sanityConfig);
  return cachedBuilder.image(source);
}

// Types
export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: SanityBlock[];
  coverImage: SanityImageSource;
  tags: string[];
  author: {
    name: string;
    role: string;
    image?: SanityImageSource;
  };
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export interface SanityBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: {
    _type: string;
    text: string;
    marks?: string[];
  }[];
  markDefs?: {
    _type: string;
    _key: string;
    href?: string;
  }[];
  listItem?: string;
  level?: number;
}

// Check if Sanity is configured (uses resolved config, which includes the
// public fallback project ID above).
export function isSanityConfigured(): boolean {
  return !!(sanityConfig.projectId && sanityConfig.projectId !== "");
}
