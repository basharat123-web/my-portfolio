"use client";

import { motion } from "framer-motion";
import HoverRoll from "@/components/HoverRoll";

const SERVICES_DETAILED = [
  {
    title: "Full-Stack Web Development",
    subtitle: "MERN Stack & Next.js App Router Architecture",
    description:
      "End-to-end web application development built with strict TypeScript type safety, Next.js server components, scalable REST/GraphQL APIs, and component-based SaaS architectures. Transitioning legacy CMS setups to high-speed Next.js platforms.",
    deliverables: [
      "Custom Next.js App Router & MERN Stack Applications",
      "TypeScript Type Systems & Clean Code Architecture",
      "API Integrations & Database Schema Design (MySQL / MongoDB)",
      "Performance & Page Load Speed Optimization",
    ],
  },
  {
    title: "Digital Graphic Design & Vector Work",
    subtitle: "Adobe Photoshop & CorelDRAW Specialist",
    description:
      "Professional graphic illustration, commercial print formatting, UI/UX layouts, and vector troubleshooting. Resolving font corruptions, canvas setups, and color profile conversions for commercial print production.",
    deliverables: [
      "Commercial Marketing Materials & Print Formats",
      "Vector Illustration & Logo Assets via CorelDRAW",
      "UI/UX Layout Mockups & Web Assets via Photoshop",
      "Color Profile & Resolution Diagnostics",
    ],
  },
  {
    title: "Technical SEO & Analytics Management",
    subtitle: "Search Console, Rank Math & Ahrefs Auditing",
    description:
      "Comprehensive technical SEO management to maximize organic traffic, indexation speed, and domain authority. Implementing sitemap structures, metadata optimization, and keyword impression tracking.",
    deliverables: [
      "Technical SEO Auditing via Ahrefs & Rank Math",
      "Google Search Console Indexing & Impression Tracking",
      "Structured Data & OpenGraph Metadata Configuration",
      "Content Strategy & Keyword Targeting",
    ],
  },
  {
    title: "Hardware & Systems Optimization",
    subtitle: "Diagnostics, Power & Solar Environment Setup",
    description:
      "Local development environment setup, computer hardware diagnostics, drive formatting, system file corruption recovery, and industrial power & solar inverter system configuration.",
    deliverables: [
      "Local Dev Environment Setup & Variable Configuration",
      "Hardware Diagnostics & File Corruption Repairs",
      "Industrial Power & Solar Inverter Configuration",
      "System Recovery & Diagnostic Drive Formatting",
    ],
  },
];

export default function ServicesPage() {
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
          SERVICES & CAPABILITIES
        </p>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-fg mb-4">
          What I Can Build For You
        </h1>
        <p className="text-muted text-base sm:text-lg max-w-2xl leading-relaxed">
          Comprehensive technology solutions ranging from full-stack web development and AI automation to graphic illustration and technical SEO management.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {SERVICES_DETAILED.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-border bg-bg-soft p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
                {service.subtitle}
              </span>
              <h2 className="text-2xl font-bold text-fg mb-4">
                {service.title}
              </h2>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Deliverables list */}
              <h3 className="text-xs font-bold uppercase tracking-wider text-fg/80 mb-3">
                Key Deliverables:
              </h3>
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-fg/90">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center bg-bg-soft border border-border rounded-3xl p-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-3">
          Need a Custom Solution?
        </h2>
        <p className="text-muted text-sm sm:text-base max-w-md mx-auto mb-6">
          Whether you need a full web platform, AI agent integration, or print design, let’s discuss your project goals.
        </p>
        <a
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full bg-fg text-bg px-8 py-4 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <HoverRoll>Get In Touch</HoverRoll>
        </a>
      </div>
    </main>
  );
}
