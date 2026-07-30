"use client";

import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";

const BLOG_ARTICLES = [
  {
    slug: "migrating-from-wordpress-to-custom-nextjs-saas",
    date: "July 2026",
    readTime: "5 min read",
    title: "Migrating from WordPress to Custom Next.js SaaS Architecture",
    category: "Web Development & Performance",
    excerpt:
      "Why component-based Next.js architectures outperform traditional CMS platforms in speed, SEO indexation, server-side logic, and long-term maintainability.",
  },
  {
    slug: "building-an-autonomous-whatsapp-ai-agent-with-openclaw",
    date: "May 2026",
    readTime: "7 min read",
    title: "Building an Autonomous WhatsApp AI Agent with OpenClaw",
    category: "AI & Automation",
    excerpt:
      "A complete guide on configuring localized model endpoints, environment variables, and persona parameters for localized automated chat agents.",
  },
  {
    slug: "building-scalable-mern-stack-apps-with-typescript",
    date: "April 2026",
    readTime: "6 min read",
    title: "Building Scalable MERN Stack Applications with TypeScript Type Safety",
    category: "Full-Stack Engineering",
    excerpt:
      "How end-to-end interface contracts between React, Node.js, Express, and MongoDB eliminate runtime crashes and accelerate development.",
  },
];

export default function BlogPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 border-b border-border pb-10"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          TECHNICAL WRITINGS & ARTICLES
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Engineering Insights
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          Technical writings by Basharat Hussain on full-stack web development, Next.js SaaS architecture, MERN stack type safety, and AI automation.
        </p>
      </motion.div>

      {/* Blog Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOG_ARTICLES.map((post, index) => (
          <motion.a
            key={post.slug}
            href={`/blog/${post.slug}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-bg-soft p-8 shadow-sm hover:shadow-xl transition-all duration-300 block"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-muted mb-4 font-medium">
                <span className="px-3 py-1 rounded-full bg-border/60 text-fg">
                  {post.category}
                </span>
                <span>
                  {post.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-fg mb-3 group-hover:text-accent transition-colors leading-snug">
                {post.title} ↗
              </h2>

              <p className="text-muted text-sm leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-border/60 flex items-center justify-between">
              <span className="text-xs font-semibold tracking-wider text-fg uppercase flex items-center gap-1 group-hover:text-accent transition-colors">
                <HoverRoll>Read Full Article →</HoverRoll>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
