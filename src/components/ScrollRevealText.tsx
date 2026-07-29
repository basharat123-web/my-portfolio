"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollRevealText({
  text,
  mode = "words",
  className,
  dimOpacity = 0.25,
}: {
  text: string;
  mode?: "words" | "chars";
  className?: string;
  dimOpacity?: number;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const targets = containerRef.current?.querySelectorAll(".reveal-segment");
      if (!targets || targets.length === 0) return;

      gsap.set(targets, { opacity: dimOpacity });

      gsap.to(targets, {
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top 30%",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [text, mode, dimOpacity]);

  const segments = mode === "chars" ? Array.from(text) : text.split(/(\s+)/);

  return (
    <p ref={containerRef} className={className}>
      {segments.map((seg, i) =>
        seg.trim() === "" ? (
          seg
        ) : (
          <span key={i} className="reveal-segment inline-block">
            {seg}
          </span>
        )
      )}
    </p>
  );
}
