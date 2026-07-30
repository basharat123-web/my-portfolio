"use client";

import { motion } from "framer-motion";

const RELEASES = [
  {
    version: "v2.4.0",
    date: "July 30, 2026",
    title: "Full-Stack Portfolio Architecture & Subpages",
    changes: [
      "Added dynamic individual project detail pages for AI, SaaS, and Desktop apps",
      "Created dedicated footer legal, documentation, and support routes",
      "Optimized mobile navigation dropdown and GSAP 3D card scroll morphing",
    ],
  },
  {
    version: "v2.1.0",
    date: "July 2026",
    title: "OpenClaw WhatsApp AI Assistant & Next.js SaaS Migration",
    changes: [
      "Deployed automated WhatsApp AI assistant with localized endpoints",
      "Migrated legacy WordPress blog infrastructure to custom Next.js App Router",
    ],
  },
  {
    version: "v1.0.0",
    date: "2025",
    title: "BH Tech Hub Launch",
    changes: [
      "Initial launch of BH Tech Hub and B&S Solution Network tech blog platform",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 border-b border-border pb-8"
      >
        <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">
          SYSTEM UPDATES
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          Changelog
        </h1>
        <p className="text-muted text-base sm:text-lg">
          Continuous updates, releases, and feature deployments by Basharat Hussain.
        </p>
      </motion.div>

      <div className="space-y-12">
        {RELEASES.map((release) => (
          <div key={release.version} className="border-b border-border pb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-mono font-bold text-accent px-3 py-1 rounded-md bg-accent/10 border border-accent/20">
                {release.version}
              </span>
              <span className="text-xs font-mono text-muted">{release.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-fg mb-4">{release.title}</h2>
            <ul className="space-y-2 text-sm text-muted">
              {release.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
