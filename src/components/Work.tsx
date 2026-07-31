"use client";

import { motion } from "framer-motion";
import HoverRoll from "./HoverRoll";
import FramerProjectHover from "./FramerProjectHover";

export default function Work() {
  return (
    <section id="work" className="px-4 sm:px-6 py-16 sm:py-28 border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-10 sm:mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-widest text-muted uppercase mb-2"
            >
              SELECTED WORK & CASE STUDIES
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-fg"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.a
            href="/work"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-full border border-border bg-bg-soft px-5 py-2.5 text-xs font-semibold text-fg hover:border-fg transition-all shadow-sm flex items-center gap-1.5"
          >
            <HoverRoll>View All Work ↗</HoverRoll>
          </motion.a>
        </div>

        {/* Framer Expanded Card Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <FramerProjectHover />
        </motion.div>
      </div>
    </section>
  );
}
