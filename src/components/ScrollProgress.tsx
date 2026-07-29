"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-accent"
      />
    </div>
  );
}
