import { MetadataRoute } from "next";
import { client, isSanityConfigured } from "@/lib/sanity";
import { getAllPosts as getStaticPosts } from "@/lib/blog-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muenot.com";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic blog posts
  let blogPosts: MetadataRoute.Sitemap = [];

  if (isSanityConfigured()) {
    try {
      const posts = await client.fetch(
        `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
          "slug": slug.current,
          publishedAt
        }`
      );

      blogPosts = posts.map((post: { slug: string; publishedAt: string }) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
    } catch (error) {
      console.error("Error fetching posts for sitemap:", error);
    }
  } else {
    // Fallback to static posts
    const staticPosts = getStaticPosts();
    blogPosts = staticPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  }

  return [...staticPages, ...blogPosts];
}
