import { client, SanityPost, isSanityConfigured } from "./sanity";

// Since the schema has no dedicated excerpt field, the query derives the
// excerpt from the full body text. Truncate it to a short, clean summary for
// use in card previews, the detail-page subtitle, and meta descriptions.
export function truncateExcerpt(text?: string, maxLength = 180): string {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLength) return clean;
  const truncated = clean.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

// GROQ Queries
// The Studio schema uses `mainImage`, `body`, and `categories`, so we alias
// them to the field names the frontend expects (`coverImage`, `content`,
// `tags`). `excerpt`, `readTime`, and `featured` don't exist in the schema, so
// they are derived from the body text or defaulted.
const postFields = `
  _id,
  title,
  slug,
  "excerpt": pt::text(body),
  "content": body,
  "coverImage": mainImage,
  "tags": coalesce(categories[]->title, []),
  "author": author->{name, "role": coalesce(role, ""), image},
  publishedAt,
  "readTime": round(length(pt::text(body)) / 900) + 1,
  "featured": coalesce(featured, false)
`;

// Get all published posts (sorted by date)
export async function getAllPosts(): Promise<SanityPost[]> {
  if (!isSanityConfigured()) {
    return [];
  }

  try {
    return await client.fetch(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        ${postFields}
      }`
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

// Get featured posts
export async function getFeaturedPosts(): Promise<SanityPost[]> {
  if (!isSanityConfigured()) {
    return [];
  }

  try {
    return await client.fetch(
      `*[_type == "post" && featured == true && defined(slug.current)] | order(publishedAt desc) {
        ${postFields}
      }`
    );
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  if (!isSanityConfigured()) {
    return null;
  }

  try {
    return await client.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        ${postFields}
      }`,
      { slug }
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Search posts
export async function searchPosts(searchQuery: string): Promise<SanityPost[]> {
  if (!isSanityConfigured() || !searchQuery) {
    return [];
  }

  try {
    return await client.fetch(
      `*[_type == "post" && defined(slug.current) && (
        title match $searchTerm ||
        pt::text(body) match $searchTerm ||
        count(categories[]->title[@ match $searchTerm]) > 0
      )] | order(publishedAt desc) {
        ${postFields}
      }`,
      { searchTerm: `*${searchQuery}*` }
    );
  } catch (error) {
    console.error("Error searching posts:", error);
    return [];
  }
}

// Get related posts (by tags)
export async function getRelatedPosts(
  currentPostId: string,
  tags: string[],
  limit: number = 3
): Promise<SanityPost[]> {
  if (!isSanityConfigured()) {
    return [];
  }

  try {
    // If no tags, get latest posts instead
    if (!tags || tags.length === 0) {
      return await client.fetch(
        `*[_type == "post" && _id != $currentPostId && defined(slug.current)] | order(publishedAt desc) [0...$limit] {
          ${postFields}
        }`,
        { currentPostId, limit }
      );
    }

    return await client.fetch(
      `*[_type == "post" && _id != $currentPostId && defined(slug.current) && count((categories[]->title)[@ in $tags]) > 0] | order(publishedAt desc) [0...$limit] {
        ${postFields}
      }`,
      { currentPostId, tags, limit }
    );
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
  }
}

// Format date helper
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Convert Sanity block content to HTML
export function blockContentToHtml(blocks: SanityPost["content"]): string {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      if (block._type !== "block" || !block.children) {
        return "";
      }

      const text = block.children.map((child) => child.text).join("");

      switch (block.style) {
        case "h1":
          return `<h1 class="text-3xl font-bold text-white mt-8 mb-4">${text}</h1>`;
        case "h2":
          return `<h2 class="text-2xl font-bold text-white mt-8 mb-4">${text}</h2>`;
        case "h3":
          return `<h3 class="text-xl font-semibold text-white mt-6 mb-3">${text}</h3>`;
        case "h4":
          return `<h4 class="text-lg font-semibold text-white mt-4 mb-2">${text}</h4>`;
        case "blockquote":
          return `<blockquote class="border-l-4 border-violet-500 pl-4 italic text-muted-foreground my-4">${text}</blockquote>`;
        default:
          if (block.listItem === "bullet") {
            return `<li class="text-muted-foreground ml-6 mb-2">${text}</li>`;
          }
          if (block.listItem === "number") {
            return `<li class="text-muted-foreground ml-6 mb-2">${text}</li>`;
          }
          return text ? `<p class="text-muted-foreground leading-relaxed mb-4">${text}</p>` : "";
      }
    })
    .join("");
}
