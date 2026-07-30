"use client";

import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";

export default function SupportPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 border-b border-border pb-8 text-center"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          HELP & INQUIRIES
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Client Support
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-lg mx-auto">
          Need technical assistance with a Next.js app, MERN backend, or AI integration? Get in touch directly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="rounded-3xl border border-border bg-bg-soft p-8">
          <h2 className="text-xl font-bold text-fg mb-3">Technical Inquiries</h2>
          <p className="text-muted text-sm leading-relaxed mb-6">
            For code reviews, architecture consultations, or custom SaaS software development projects.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-6 py-3 text-xs font-semibold"
          >
            <HoverRoll>Submit Inquiry →</HoverRoll>
          </a>
        </div>

        <div className="rounded-3xl border border-border bg-bg-soft p-8">
          <h2 className="text-xl font-bold text-fg mb-3">BH Tech Hub Support</h2>
          <p className="text-muted text-sm leading-relaxed mb-6">
            Direct assistance for platform users, blog subscribers, and collaborative team members.
          </p>
          <a
            href="mailto:support@bhtechhub.com"
            className="inline-flex items-center gap-2 rounded-full bg-bg border border-border text-fg px-6 py-3 text-xs font-semibold"
          >
            <HoverRoll>Email Support</HoverRoll>
          </a>
        </div>
      </div>
    </main>
  );
}
