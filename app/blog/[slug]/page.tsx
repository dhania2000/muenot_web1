"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Share2,
  User,
} from "lucide-react";
import { useState, useEffect } from "react";
import { formatDate, type ApiBlogPost } from "@/lib/blog-transform";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<ApiBlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<ApiBlogPost[]>([]);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);

      try {
        // Fetch from our server-side API (reads from the MySQL database).
        const res = await fetch(`/api/blog/${slug}`);
        const data = await res.json();
        setPost(data.post ?? null);
        setRelatedPosts(data.related || []);
      } catch (error) {
        console.error("[v0] Error loading blog post:", error);
        setPost(null);
        setRelatedPosts([]);
      }

      setLoading(false);
    }

    fetchPost();
  }, [slug]);

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post?.title || "";

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "copy":
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
  };

  // Helper functions
  const getFormattedDate = (): string => {
    if (!post) return "";
    return formatDate(post.publishedAt);
  };

  const getTags = (): string[] => {
    if (!post) return [];
    return post.tags || [];
  };

  const getAuthor = (): { name: string; role: string } => {
    if (!post) return { name: "", role: "" };
    return post.author;
  };

  const getContent = (): string => {
    if (!post) return "";
    // Convert simple markdown-like content to HTML
    return post.content
      .split("\n")
      .map((line) => {
        if (line.startsWith("## ")) {
          return `<h2 class="text-2xl font-bold text-foreground mt-8 mb-4">${line.slice(3)}</h2>`;
        }
        if (line.startsWith("### ")) {
          return `<h3 class="text-xl font-semibold text-foreground mt-6 mb-3">${line.slice(4)}</h3>`;
        }
        if (line.startsWith("- ")) {
          return `<li class="text-muted-foreground ml-6 mb-2">${line.slice(2)}</li>`;
        }
        if (line.trim() === "") {
          return "";
        }
        return `<p class="text-muted-foreground leading-relaxed mb-4">${line}</p>`;
      })
      .join("");
  };

  const getRelatedSlug = (relatedPost: ApiBlogPost): string => relatedPost.slug;

  const getRelatedImageUrl = (relatedPost: ApiBlogPost): string =>
    relatedPost.coverImage || "/placeholder-blog.jpg";

  // Loading skeleton
  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Skeleton */}
        <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button Skeleton */}
            <div className="mb-6 sm:mb-8">
              <div className="h-5 w-28 bg-secondary/50 rounded animate-pulse" />
            </div>

            {/* Meta Skeleton */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6 animate-pulse">
              <div className="h-5 w-32 bg-secondary/50 rounded" />
              <div className="h-5 w-24 bg-secondary/50 rounded" />
            </div>

            {/* Title Skeleton */}
            <div className="mb-4 sm:mb-6 animate-pulse">
              <div className="h-10 sm:h-14 bg-secondary/50 rounded-lg mb-2 w-full" />
              <div className="h-10 sm:h-14 bg-secondary/50 rounded-lg w-3/4" />
            </div>

            {/* Excerpt Skeleton */}
            <div className="mb-6 sm:mb-8 animate-pulse">
              <div className="h-5 bg-secondary/30 rounded mb-2 w-full" />
              <div className="h-5 bg-secondary/30 rounded w-4/5" />
            </div>

            {/* Author Skeleton */}
            <div className="flex items-center gap-3 sm:gap-4 animate-pulse">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary/50" />
              <div>
                <div className="h-5 w-32 bg-secondary/50 rounded mb-1" />
                <div className="h-4 w-24 bg-secondary/30 rounded" />
              </div>
            </div>
          </div>
        </section>

        {/* Cover Image Skeleton */}
        <section className="relative mb-8 sm:mb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl bg-secondary/50 animate-pulse" />
          </div>
        </section>

        {/* Content Skeleton */}
        <section className="relative py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-4">
              {/* Paragraph skeletons */}
              <div className="h-4 bg-secondary/30 rounded w-full" />
              <div className="h-4 bg-secondary/30 rounded w-full" />
              <div className="h-4 bg-secondary/30 rounded w-5/6" />
              <div className="h-4 bg-secondary/30 rounded w-full" />
              <div className="h-4 bg-secondary/30 rounded w-4/5" />
              
              {/* Heading skeleton */}
              <div className="h-8 bg-secondary/50 rounded w-2/3 mt-8" />
              
              <div className="h-4 bg-secondary/30 rounded w-full" />
              <div className="h-4 bg-secondary/30 rounded w-full" />
              <div className="h-4 bg-secondary/30 rounded w-3/4" />
              
              {/* Another heading skeleton */}
              <div className="h-7 bg-secondary/50 rounded w-1/2 mt-6" />
              
              <div className="h-4 bg-secondary/30 rounded w-full" />
              <div className="h-4 bg-secondary/30 rounded w-5/6" />
              <div className="h-4 bg-secondary/30 rounded w-full" />
              <div className="h-4 bg-secondary/30 rounded w-2/3" />

              {/* Tags Skeleton */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-secondary/50 rounded" />
                  <div className="h-6 w-16 bg-secondary/30 rounded-full" />
                  <div className="h-6 w-20 bg-secondary/30 rounded-full" />
                  <div className="h-6 w-14 bg-secondary/30 rounded-full" />
                </div>
              </div>

              {/* Share Section Skeleton */}
              <div className="mt-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 bg-secondary/50 rounded" />
                    <div className="h-5 w-32 bg-secondary/50 rounded" />
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="h-9 w-20 bg-secondary/50 rounded-lg" />
                    <div className="h-9 w-20 bg-secondary/50 rounded-lg" />
                    <div className="h-9 w-24 bg-secondary/50 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts Skeleton */}
        <section className="relative py-12 sm:py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-8 w-40 bg-secondary/50 rounded-lg mb-6 sm:mb-8 animate-pulse" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border animate-pulse"
                >
                  <div className="h-32 sm:h-40 rounded-lg sm:rounded-xl bg-secondary/50 mb-4" />
                  <div className="h-5 bg-secondary/50 rounded mb-2 w-4/5" />
                  <div className="h-4 bg-secondary/30 rounded mb-1 w-full" />
                  <div className="h-4 bg-secondary/30 rounded w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // Not found state
  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-foreground hover:bg-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const author = getAuthor();
  const coverImageUrl = post.coverImage || "/placeholder-blog.jpg";

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Article Header */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-14 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>
            <Link
              href="/blog"
              className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark sm:mb-14"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              Back to insights
            </Link>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
              >
                <span>{post.category}</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="flex items-center gap-2 text-muted-foreground normal-case tracking-normal">
                  <Calendar className="size-4" /> {getFormattedDate()}
                </span>
                <span className="flex items-center gap-2 text-muted-foreground normal-case tracking-normal">
                  <Clock className="size-4" /> {post.readTime || 5} min read
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="max-w-4xl text-balance text-2xl font-semibold leading-[1.15] text-foreground sm:text-3xl lg:text-4xl"
              >
                {post.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg"
              >
                {post.excerpt}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="flex items-center gap-3 border-l-2 border-accent pl-4"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <User className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{author.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{author.role}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="relative mb-8 sm:mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative h-[240px] overflow-hidden rounded-2xl border border-border bg-primary shadow-[0_24px_60px_-28px_color-mix(in_oklab,var(--primary)_45%,transparent)] sm:h-[360px] md:h-[460px] lg:h-[540px]"
          >
            <Image
              src={coverImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div
              dangerouslySetInnerHTML={{ __html: getContent() }}
            />

            {/* Tags */}
            {getTags().length > 0 && (
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-5 h-5 text-primary" />
                  {getTags().map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary/50 text-xs sm:text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium text-sm sm:text-base">Share this article</span>
                </div>
                <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg bg-[#1DA1F2] text-foreground text-xs sm:text-sm hover:opacity-90 transition-opacity"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg bg-[#0077B5] text-foreground text-xs sm:text-sm hover:opacity-90 transition-opacity"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg bg-primary text-foreground text-xs sm:text-sm hover:opacity-90 transition-opacity"
                  >
                    {copied ? "Copied!" : "Copy Link"}
                  </button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="relative py-12 sm:py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8"
            >
              Related Articles
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${getRelatedSlug(relatedPost)}`}>
                    <div className="h-full p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-primary/30 transition-all duration-300">
                      <div className="relative h-32 sm:h-40 rounded-lg sm:rounded-xl overflow-hidden mb-4">
                        <Image
                          src={getRelatedImageUrl(relatedPost)}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
