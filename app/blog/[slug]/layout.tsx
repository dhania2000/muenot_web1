import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/lib/blog-db";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muenot.co.in";
  const postUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = post.cover_image || "/og-image.png";

  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: "article",
      url: postUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || undefined,
      images: [imageUrl],
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
