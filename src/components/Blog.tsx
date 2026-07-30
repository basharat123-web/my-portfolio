"use client";

import { motion } from "framer-motion";

const POSTS = [
  {
    slug: "migrating-from-wordpress-to-custom-nextjs-saas",
    date: "July 2026",
    title: "Migrating from WordPress to Custom Next.js SaaS",
    excerpt: "Why component-based Next.js architectures outperform traditional CMS platforms in speed, SEO indexation, and scalability.",
  },
  {
    slug: "building-an-autonomous-whatsapp-ai-agent-with-openclaw",
    date: "May 2026",
    title: "Building an Autonomous WhatsApp AI Agent with OpenClaw",
    excerpt: "Configuring localized model endpoints, environment parameters, and persona rules for localized automated chat agents.",
  },
  {
    slug: "building-scalable-mern-stack-apps-with-typescript",
    date: "April 2026",
    title: "Building Scalable MERN Stack Apps with TypeScript",
    excerpt: "How end-to-end type safety between React, Express, Node.js, and MongoDB eliminates runtime errors.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-14 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm tracking-widest text-muted uppercase mb-3">
              Thoughts & Technical Writings
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl">
              Engineering Insights
            </h2>
          </div>
          <a
            href="/blog"
            className="hidden sm:inline-flex text-xs font-semibold text-muted hover:text-fg transition-colors"
          >
            View all articles →
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              href={`/blog/${post.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group block rounded-2xl border border-border bg-bg-soft p-6 transition-all duration-300 hover:border-fg/30"
            >
              <p className="text-xs font-mono text-muted mb-3">{post.date}</p>
              <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors leading-snug">
                {post.title} ↗
              </h3>
              <p className="text-muted text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
