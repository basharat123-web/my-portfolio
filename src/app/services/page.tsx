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
];

export default function ServicesPage() {
  return (
    <main className="pt-32 pb-28 px-6 max-w-4xl mx-auto min-h-screen">
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
          Comprehensive technology solutions focused on full-stack web development, modern frontend architectures, and high-performance backend systems.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-8 mb-16">
        {SERVICES_DETAILED.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col justify-between rounded-3xl border border-border bg-bg-soft p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">
                {service.subtitle}
              </span>
              <h2 className="text-3xl font-bold text-fg mb-4">
                {service.title}
              </h2>
              <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                {service.description}
              </p>

              {/* Deliverables list */}
              <h3 className="text-sm font-bold uppercase tracking-wider text-fg/80 mb-4">
                Key Deliverables:
              </h3>
              <ul className="space-y-3 mb-6 text-sm sm:text-base text-fg/90">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
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
          Whether you need a full web platform, an interactive UI, or a robust backend, let's discuss your project goals.
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
