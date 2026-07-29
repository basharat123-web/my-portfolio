"use client";

import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";

const BLOG_ARTICLES = [
  {
    slug: "wordpress-to-nextjs-saas-migration",
    date: "July 2026",
    readTime: "6 min read",
    title: "Migrating from WordPress to Custom Next.js SaaS Architecture",
    category: "Full-Stack & SaaS",
    excerpt:
      "Why component-based Next.js architectures outperform traditional CMS platforms in speed, SEO indexation, server-side logic, and long-term maintainability.",
    content:
      "Transitioning from WordPress to a custom Next.js App Router architecture allowed us to achieve near-instant page load times, strict TypeScript type safety, and direct control over database schemas without plugin bloat.",
  },
  {
    slug: "building-whatsapp-ai-agent-openclaw",
    date: "May 2026",
    readTime: "8 min read",
    title: "Building an Autonomous WhatsApp AI Agent with OpenClaw",
    category: "AI & Automation",
    excerpt:
      "A complete guide on configuring localized model endpoints, environment variables, and persona parameters for localized automated chat agents.",
    content:
      "OpenClaw provides a lightweight framework to connect LLMs to WhatsApp webhooks. By tuning localized endpoints and system prompt rules, we built a virtual assistant that handles customer queries autonomously.",
  },
  {
    slug: "vector-design-commercial-print-formatting",
    date: "March 2026",
    readTime: "5 min read",
    title: "Commercial Print Formatting & Vector Troubleshooting Best Practices",
    category: "Graphic Design",
    excerpt:
      "Resolving font corruptions, canvas setups, and color profile conversions in CorelDRAW & Adobe Photoshop for flawless commercial print production.",
    content:
      "Print production demands precise resolution and vector fidelity. Learn how to diagnose canvas setups, embed font glyphs properly, and handle CMYK conversions without color shift.",
  },
  {
    slug: "technical-seo-management-google-search-console-rankmath",
    date: "January 2026",
    readTime: "7 min read",
    title: "Technical SEO Management: Search Console, Rank Math & Ahrefs",
    category: "SEO & Traffic",
    excerpt:
      "How to optimize keyword impressions, indexing metrics, XML sitemap structures, and site authority for tech blogs and web platforms.",
    content:
      "Technical SEO is the foundation of organic visibility. Inspecting indexing coverage in Google Search Console alongside Rank Math audit scores ensures maximum search ranking potential.",
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
          B&S SOLUTION NETWORK
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Technical Writing & Blog
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          Articles and technical insights by Basharat Hussain on full-stack web development, Next.js SaaS architecture, AI automation, and technical SEO.
        </p>
      </motion.div>

      {/* Blog Listing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_ARTICLES.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between rounded-3xl border border-border bg-bg-soft p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-muted mb-4 font-medium">
                <span className="px-3 py-1 rounded-full bg-border/60 text-fg">
                  {post.category}
                </span>
                <span>
                  {post.date} • {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-fg mb-3 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h2>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-border/60 flex items-center justify-between">
              <a
                href={`/blog#${post.slug}`}
                className="text-xs font-semibold tracking-wider text-fg uppercase flex items-center gap-1 group-hover:text-accent transition-colors"
              >
                <HoverRoll>Read Full Article →</HoverRoll>
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
