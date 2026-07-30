"use client";

import { motion } from "framer-motion";

const DOCS_SECTIONS = [
  {
    title: "Next.js App Router Architecture",
    description: "Component-based architecture utilizing React Server Components, client boundary scoping, and Tailwind CSS design systems.",
  },
  {
    title: "TypeScript Interface Guidelines",
    description: "Strict static typing across API responses, prop interfaces, state hooks, and database models.",
  },
  {
    title: "Autonomous AI Agent Integrations",
    description: "Configuring OpenClaw LLM webhooks, localized model endpoints, and system prompt engineering rules.",
  },
  {
    title: "Technical SEO & Performance Auditing",
    description: "Google Search Console indexation, XML sitemaps, OpenGraph metadata, and Core Web Vitals optimization.",
  },
];

export default function DocumentationPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-5xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 border-b border-border pb-8"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          ENGINEERING GUIDELINES
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Documentation
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl">
          Technical specifications, component guidelines, and full-stack software architecture patterns used across our projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DOCS_SECTIONS.map((doc, idx) => (
          <motion.div
            key={doc.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="rounded-3xl border border-border bg-bg-soft p-8 shadow-sm"
          >
            <span className="text-xs font-mono font-bold text-accent mb-2 block">
              0{idx + 1} // GUIDELINE
            </span>
            <h2 className="text-xl font-bold text-fg mb-3">{doc.title}</h2>
            <p className="text-muted text-sm leading-relaxed">{doc.description}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
