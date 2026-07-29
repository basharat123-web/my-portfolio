"use client";

import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Basharat's technical migration from WordPress to Next.js drastically improved our load speeds and SEO indexing metrics.",
    name: "BH Tech Hub Team",
    role: "Core Collaborators",
  },
  {
    quote: "High-quality vector illustrations and commercial print layouts. Font issues and canvas setups were resolved fast.",
    name: "AR Graphics Team",
    role: "Print & Graphics Lead",
  },
  {
    quote: "The automated WhatsApp AI agent powered by OpenClaw was configured cleanly and runs localized smoothly.",
    name: "AI Project Client",
    role: "Automation Client",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm tracking-widest text-muted uppercase mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight max-w-xl mb-14">
          What people say
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name + t.quote.slice(0, 10)}
              variants={item}
              className="rounded-2xl border border-border bg-bg-soft p-8"
            >
              <p className="text-fg mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-sm">
                <p className="font-medium">{t.name}</p>
                <p className="text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
