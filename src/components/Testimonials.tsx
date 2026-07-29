"use client";

import { motion } from "framer-motion";
import DocumentCard from "./DocumentCard";

const TESTIMONIALS = [
  {
    quote: "Basharat's technical migration from WordPress to Next.js drastically improved our load speeds and SEO indexing metrics.",
    name: "BH Tech Hub Team",
    role: "Core Collaborators",
    date: "JULY 2026",
    folderColor: "from-[#2b52a1] to-[#1d3b7a]",
    accentColor: "bg-[#183063]",
  },
  {
    quote: "High-quality vector illustrations and commercial print layouts. Font issues and canvas setups were resolved fast.",
    name: "AR Graphics Team",
    role: "Print & Graphics Lead",
    date: "MARCH 2026",
    folderColor: "from-[#2a2a2a] to-[#171717]",
    accentColor: "bg-[#0f0f0f]",
  },
  {
    quote: "The automated WhatsApp AI agent powered by OpenClaw was configured cleanly and runs localized smoothly.",
    name: "AI Project Client",
    role: "Automation Client",
    date: "MAY 2026",
    folderColor: "from-[#1e40af] to-[#1e3a8a]",
    accentColor: "bg-[#172554]",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold tracking-widest text-muted uppercase mb-3">
          TESTIMONIALS & CASE FILES
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl mb-4">
          What people say
        </h2>
        <p className="text-muted text-sm sm:text-base max-w-md mb-14">
          Interactive document folders containing client feedback and verified project reports. Hover or click a file to open.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={item}>
              <DocumentCard
                quote={t.quote}
                name={t.name}
                role={t.role}
                date={t.date}
                folderColor={t.folderColor}
                accentColor={t.accentColor}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

