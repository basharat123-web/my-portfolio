"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SparkleIcon, BoltIcon } from "./icons";
import HoverRoll from "./HoverRoll";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-line", { y: 60, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from(".hero-icon", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5")
        .from(".hero-corner", { opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={containerRef} className="relative min-h-screen overflow-hidden">
      <div className="pt-40 sm:pt-44 px-6 text-center">
        <div className="relative inline-block">
          <SparkleIcon className="hero-icon absolute z-10 top-[-6vw] sm:top-[-4vw] lg:-top-14 left-[-6vw] sm:left-[-4vw] lg:-left-16 w-[8vw] sm:w-[5.5vw] lg:w-20 h-[8vw] sm:h-[5.5vw] lg:h-20 -rotate-6" />
          <BoltIcon className="hero-icon absolute z-10 bottom-[-3vw] sm:bottom-[-2vw] lg:-bottom-6 right-[-5vw] sm:right-[-3.5vw] lg:-right-16 w-[5vw] sm:w-[3.5vw] lg:w-14 h-[7vw] sm:h-[5vw] lg:h-20 rotate-6" />

          <h1 className="hero-line font-black uppercase leading-[0.88] tracking-tight text-[15vw] sm:text-[9vw] lg:text-[7.5rem]">
            Software
          </h1>
          <h1 className="hero-line font-black uppercase leading-[0.88] tracking-tight text-[15vw] sm:text-[9vw] lg:text-[7.5rem]">
            Engineer
          </h1>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 bottom-28 sm:bottom-32">
        <div
          id="hero-photo-anchor"
          className="w-[clamp(6rem,14vw,15rem)] aspect-3/4"
        />
      </div>

      <p className="hero-corner absolute bottom-8 left-6 text-sm font-semibold">
        &copy;2026
      </p>
      <p className="hero-corner absolute bottom-8 right-6 sm:right-36 text-xs sm:text-sm tracking-widest text-muted uppercase">
        /Creating since 2020
      </p>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2 items-end">
        <a
          href="#work"
          className="hero-cta rounded-full bg-fg text-bg px-5 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
        >
          <HoverRoll>View My Work</HoverRoll>
        </a>
        <a
          href="/resume.pdf"
          className="hero-cta rounded-full bg-bg-soft border border-border px-5 py-3 text-sm font-medium hover:border-fg transition-colors"
        >
          <HoverRoll>Resume</HoverRoll>
        </a>
      </div>
    </section>
  );
}
