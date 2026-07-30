"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 border-b border-border pb-8"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          LEGAL TERMS
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-fg mb-4">
          Terms of Service
        </h1>
        <p className="text-muted text-sm sm:text-base">
          Last updated: July 30, 2026
        </p>
      </motion.div>

      <div className="space-y-8 text-muted text-sm sm:text-base leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-fg">1. Agreement to Terms</h2>
          <p>
            By accessing or hiring full-stack software development services provided by Basharat Hussain (BH Tech Hub), you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-fg">2. Intellectual Property Rights</h2>
          <p>
            All custom codebase, repository commits, Next.js components, and API integration deliverables developed for clients remain 100% owned by the client upon full project completion and final payment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-fg">3. Service Deliverables & Code Quality</h2>
          <p>
            All engineering work is conducted with strict TypeScript type safety, Next.js App Router best practices, and automated testing to ensure zero runtime errors prior to deployment.
          </p>
        </section>
      </div>
    </main>
  );
}
