import type { Metadata } from "next";
import { client, isSanityConfigured } from "@/lib/sanity";
import { getPostBySlug as getStaticPostBySlug } from "@/lib/blog-data";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  let post = null;
  
  if (isSanityConfigured()) {
    try {
      post = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
          title,
          excerpt,
          "coverImageUrl": coverImage.asset->url
        }`,
        { slug }
      );
    } catch (error) {
      console.error("Error fetching post metadata:", error);
    }
  } else {
    const staticPost = getStaticPostBySlug(slug);
    if (staticPost) {
      post = {
        title: staticPost.title,
        excerpt: staticPost.excerpt,
        coverImageUrl: staticPost.coverImage,
      };
    }
  }

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muenot.com";
  const postUrl = `${siteUrl}/blog/${slug}`;
  const imageUrl = post.coverImageUrl || "/og-image.png";

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
      description: post.excerpt,
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
