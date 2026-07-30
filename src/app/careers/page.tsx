"use client";

import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";

export default function CareersPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 border-b border-border pb-8 text-center"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          JOIN OUR TEAM
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Careers & Collaboration
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          We are always looking for talented Full-Stack Developers, Frontend Engineers, and AI Integration Specialists to collaborate on BH Tech Hub projects.
        </p>
      </motion.div>

      <div className="space-y-6">
        <div className="rounded-3xl border border-border bg-bg-soft p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-fg mb-1">Frontend Engineer (Next.js & React)</h2>
            <p className="text-xs text-accent font-semibold uppercase tracking-wider">Remote / Freelance</p>
            <p className="text-sm text-muted mt-2">Specializing in Next.js App Router, Tailwind CSS, and Framer Motion micro-interactions.</p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-xs font-semibold shrink-0"
          >
            <HoverRoll>Apply Now →</HoverRoll>
          </a>
        </div>

        <div className="rounded-3xl border border-border bg-bg-soft p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-fg mb-1">Backend & AI Specialist (Node.js & OpenClaw)</h2>
            <p className="text-xs text-accent font-semibold uppercase tracking-wider">Remote / Project-Based</p>
            <p className="text-sm text-muted mt-2">Integrating localized LLMs, automated WhatsApp agents, and REST API microservices.</p>
          </div>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-xs font-semibold shrink-0"
          >
            <HoverRoll>Apply Now →</HoverRoll>
          </a>
        </div>
      </div>
    </main>
  );
}
