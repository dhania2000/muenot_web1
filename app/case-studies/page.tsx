"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Target } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SparklesCore } from "@/components/ui/sparkles";
import { Spotlight } from "@/components/ui/spotlight";

const caseStudies = [
  {
    title: "AI-Powered Data Labeling at Scale",
    client: "TechCorp",
    industry: "Technology",
    description:
      "Delivered 5M+ annotated images with 99.5% accuracy for autonomous vehicle training, reducing model training time by 40%.",
    metrics: [
      { icon: Target, value: "99.5%", label: "Accuracy" },
      { icon: TrendingUp, value: "40%", label: "Faster Training" },
    ],
    gradient: "from-primary to-primary",
    tag: "AI Data Services",
  },
  {
    title: "Global E-Learning Platform Launch",
    client: "GlobalEd",
    industry: "Education",
    description:
      "Created 500+ hours of multilingual e-learning content across 15 languages, achieving 85% course completion rates.",
    metrics: [
      { icon: Users, value: "100K+", label: "Learners" },
      { icon: TrendingUp, value: "85%", label: "Completion" },
    ],
    gradient: "from-blue-600 to-accent",
    tag: "E-Learning",
  },
  {
    title: "Enterprise Digital Transformation",
    client: "FinanceHub",
    industry: "Finance",
    description:
      "Built a custom fintech platform processing $2B+ transactions annually with 99.99% uptime and full regulatory compliance.",
    metrics: [
      { icon: Clock, value: "99.99%", label: "Uptime" },
      { icon: TrendingUp, value: "$2B+", label: "Processed" },
    ],
    gradient: "from-emerald-600 to-teal-600",
    tag: "Technology",
  },
  {
    title: "Multilingual Content Expansion",
    client: "MediaGroup",
    industry: "Media",
    description:
      "Localized streaming content into 25 languages, expanding global reach to 50+ countries and increasing viewership by 3x.",
    metrics: [
      { icon: Target, value: "25", label: "Languages" },
      { icon: TrendingUp, value: "3x", label: "Viewership" },
    ],
    gradient: "from-pink-600 to-rose-600",
    tag: "Localization",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgba(168, 85, 247, 0.5)"
        />

        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="caseStudiesSparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={50}
            className="w-full h-full"
            particleColor="#a855f7"
          />
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4">
              Success Stories That
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-400 to-primary">
                Drive Results
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
              Explore how we&apos;ve helped organizations achieve remarkable outcomes
              through our comprehensive solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-secondary/50 to-secondary/20 border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  {/* Gradient Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${study.gradient}`}
                  />

                  {/* Tag */}
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${study.gradient} text-foreground mb-4`}
                  >
                    {study.tag}
                  </span>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-primary mb-3">
                    {study.client} • {study.industry}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <metric.icon className="w-4 h-4 text-primary" />
                        <div>
                          <div className="text-lg font-bold text-foreground">
                            {metric.value}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {metric.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
