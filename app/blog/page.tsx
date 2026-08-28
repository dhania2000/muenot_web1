"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { formatDate } from "@/lib/sanity-queries";
import { urlFor, SanityPost } from "@/lib/sanity";

// Fallback data when Sanity is not configured
import {
  getAllPosts as getStaticPosts,
  getFeaturedPosts as getStaticFeaturedPosts,
  formatDate as staticFormatDate,
  BlogPost,
} from "@/lib/blog-data";

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState<(SanityPost | BlogPost)[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<(SanityPost | BlogPost)[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingSanity, setUsingSanity] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      try {
        // Fetch from our server-side API (avoids browser->Sanity CORS).
        const res = await fetch("/api/blog");
        const data = await res.json();

        if (data.usingSanity && data.posts.length > 0) {
          setUsingSanity(true);
          setPosts(data.posts);
          setFeaturedPosts(data.featured);
        } else {
          // Use static data as fallback
          setUsingSanity(false);
          setPosts(getStaticPosts());
          setFeaturedPosts(getStaticFeaturedPosts());
        }
      } catch (error) {
        console.error("[v0] Error loading blog posts:", error);
        setUsingSanity(false);
        setPosts(getStaticPosts());
        setFeaturedPosts(getStaticFeaturedPosts());
      }

      setLoading(false);
    }

    fetchData();
  }, []);

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  // Filter posts based on search
  const filteredPosts = posts.filter((post) => {
    const title = post.title.toLowerCase();
    const excerpt = post.excerpt?.toLowerCase() || "";
    return (
      !searchQuery ||
      title.includes(searchQuery.toLowerCase()) ||
      excerpt.includes(searchQuery.toLowerCase())
    );
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      // Show all pages if 5 or less
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push("...");
      }
      
      // Show pages around current page
      for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push("...");
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  // Helper to get image URL
  const getImageUrl = (post: SanityPost | BlogPost): string => {
    if (usingSanity) {
      const sanityPost = post as SanityPost;
      return sanityPost.coverImage
        ? urlFor(sanityPost.coverImage).width(800).height(450).url()
        : "/placeholder-blog.jpg";
    }
    return (post as BlogPost).coverImage;
  };

  // Helper to get slug
  const getSlug = (post: SanityPost | BlogPost): string => {
    if (usingSanity) {
      return (post as SanityPost).slug.current;
    }
    return (post as BlogPost).slug;
  };

  // Helper to get date
  const getFormattedDate = (post: SanityPost | BlogPost): string => {
    if (usingSanity) {
      return formatDate((post as SanityPost).publishedAt);
    }
    return staticFormatDate((post as BlogPost).publishedAt);
  };

  // Helper to get read time
  const getReadTime = (post: SanityPost | BlogPost): number => {
    return post.readTime || 5;
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-border bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid-lines opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/8 blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Blog</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">
              Insights &
              <br />
              <span className="text-primary">Industry Updates</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4 text-pretty">
              Stay informed with the latest trends, insights, and news from the world of
              AI, e-learning, technology, and localization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Search Bar */}
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Loading Skeleton */}
      {loading && (
        <>
          {/* Featured Skeleton */}
          <section className="relative py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="h-8 w-48 bg-secondary/50 rounded-lg mb-8 animate-pulse" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="animate-pulse">
                    <div className="h-48 sm:h-64 rounded-2xl bg-secondary/50 mb-4" />
                    <div className="h-6 bg-secondary/50 rounded-lg mb-2 w-3/4" />
                    <div className="h-4 bg-secondary/30 rounded-lg mb-4 w-full" />
                    <div className="flex gap-4">
                      <div className="h-4 bg-secondary/30 rounded w-24" />
                      <div className="h-4 bg-secondary/30 rounded w-20" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Skeleton */}
          <section className="relative py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center mb-8">
                <div className="h-8 w-32 bg-secondary/50 rounded-lg animate-pulse" />
                <div className="h-4 w-20 bg-secondary/30 rounded animate-pulse" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border animate-pulse"
                  >
                    <div className="h-40 sm:h-48 rounded-xl bg-secondary/50 mb-4" />
                    <div className="h-5 bg-secondary/50 rounded-lg mb-2 w-4/5" />
                    <div className="h-4 bg-secondary/30 rounded-lg mb-1 w-full" />
                    <div className="h-4 bg-secondary/30 rounded-lg mb-4 w-2/3" />
                    <div className="flex justify-between">
                      <div className="h-4 bg-secondary/30 rounded w-24" />
                      <div className="h-4 bg-secondary/30 rounded w-16" />
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="h-4 bg-secondary/30 rounded w-28" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Featured Posts */}
      {!loading && !searchQuery && featuredPosts.length > 0 && currentPage === 1 && (
        <section className="relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl sm:text-2xl font-bold text-foreground mb-8"
            >
              Featured Articles
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={usingSanity ? (post as SanityPost)._id : (post as BlogPost).id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${getSlug(post)}`}>
                    <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden mb-4">
                      <Image
                        src={getImageUrl(post)}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary text-foreground text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {getFormattedDate(post)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {getReadTime(post)} min read
                      </span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      {!loading && (
        <section className="relative py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {searchQuery ? `Search Results for "${searchQuery}"` : "All Articles"}
              </h2>
              <span className="text-muted-foreground text-sm">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
                {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
              </span>
            </motion.div>

            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground text-lg">
                  No articles found. Try a different search term.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {currentPosts.map((post, index) => (
                    <motion.article
                      key={usingSanity ? (post as SanityPost)._id : (post as BlogPost).id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group"
                    >
                      <Link href={`/blog/${getSlug(post)}`}>
                        <div className="h-full p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-primary/30 transition-all duration-300">
                          {/* Cover Image */}
                          <div className="relative h-40 sm:h-48 rounded-xl overflow-hidden mb-4">
                            <Image
                              src={getImageUrl(post)}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>

                          {/* Title */}
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          {/* Meta */}
                          <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {getFormattedDate(post)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {getReadTime(post)} min
                            </span>
                          </div>

                          {/* Read More */}
                          <div className="mt-4 pt-4 border-t border-border">
                            <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read Article
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 mt-12"
                  >
                    {/* Previous Button */}
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Page Numbers */}
                    <div className="flex items-center gap-1">
                      {getPageNumbers().map((page, index) => (
                        <button
                          key={index}
                          onClick={() => typeof page === "number" && setCurrentPage(page)}
                          disabled={page === "..."}
                          className={`min-w-[40px] h-10 rounded-lg text-sm font-medium transition-all ${
                            page === currentPage
                              ? "bg-primary text-foreground"
                              : page === "..."
                              ? "bg-transparent text-muted-foreground cursor-default"
                              : "bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    {/* Next Button */}
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      aria-label="Next page"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
