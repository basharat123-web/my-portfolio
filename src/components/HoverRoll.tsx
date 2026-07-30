"use client";

import { motion } from "framer-motion";
import { playHoverSound, playClickSound } from "@/utils/sound";

const container = {
  rest: { transition: { staggerChildren: 0.025 } },
  hover: { transition: { staggerChildren: 0.025 } },
};

const charFront = {
  rest: { y: "0%" },
  hover: { y: "-100%" },
};

const charBack = {
  rest: { y: "100%" },
  hover: { y: "0%" },
};

export default function HoverRoll({ children }: { children: string }) {
  const chars = Array.from(children);

  return (
    <motion.span
      className="relative inline-flex"
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={container}
      onMouseEnter={playHoverSound}
      onClick={playClickSound}
    >
      {chars.map((char, i) => (
        <span key={i} className="relative inline-block overflow-hidden">
          <motion.span
            className="block"
            variants={charFront}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {char === " " ? " " : char}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute inset-0 block"
            variants={charBack}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function HoverRollIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative block w-full h-full overflow-hidden pointer-events-none">
      <motion.span
        className="absolute inset-0 flex items-center justify-center w-full h-full"
        variants={{
          rest: { y: "0%" },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center w-full h-full"
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}


