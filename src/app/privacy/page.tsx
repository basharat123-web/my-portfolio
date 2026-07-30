"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 border-b border-border pb-8"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          LEGAL DOCUMENTATION
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fg mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted text-sm sm:text-base">
          Last updated: July 30, 2026
        </p>
      </motion.div>

      <div className="space-y-8 text-muted text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-fg">1. Information Collection</h2>
          <p>
            When you contact Basharat Hussain through our portfolio inquiry form or client portal, we collect minimal personal information such as your name, email address, and project details to respond effectively to your requests.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-fg">2. Data Usage & AI Workflows</h2>
          <p>
            Any project data, API keys, or environment parameters shared for AI integrations or full-stack software development are held strictly confidential and never shared with third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-fg">3. Analytics & Cookies</h2>
          <p>
            We use privacy-friendly telemetry to analyze web performance and page indexing metrics via Google Search Console. We do not use intrusive tracking cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-fg">4. Contact & Inquiries</h2>
          <p>
            For any questions regarding data privacy or server logs, feel free to submit an inquiry through our{" "}
            <a href="/#contact" className="text-accent underline">
              Contact Form
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
