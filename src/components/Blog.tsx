"use client";

import { motion } from "framer-motion";

const POSTS = [
  {
    date: "July 2026",
    title: "Migrating from WordPress to Custom Next.js SaaS",
    excerpt: "Why component-based Next.js architectures outperform traditional CMS platforms in speed, SEO indexation, and scalability.",
  },
  {
    date: "May 2026",
    title: "Building an Autonomous WhatsApp AI Agent with OpenClaw",
    excerpt: "Configuring localized model endpoints, environment parameters, and persona rules for localized automated chat agents.",
  },
  {
    date: "March 2026",
    title: "Commercial Print Formatting & Vector Design Best Practices",
    excerpt: "Resolving font corruptions, canvas setups, and color profile conversions in CorelDRAW & Adobe Photoshop.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted uppercase mb-4">
          Thoughts
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl mb-14">
          Writing, occasionally
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {POSTS.map((post, i) => (
            <motion.a
              key={post.title}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              className="group block border-b border-border pb-6"
            >
              <p className="text-sm text-muted mb-2">{post.date}</p>
              <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-muted text-sm">{post.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
