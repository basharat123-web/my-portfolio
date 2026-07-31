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
        .from(".hero-line", { y: 50, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from(".hero-icon", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.5")
        .from(".hero-badge", { y: 20, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.5 }, "-=0.3");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Centered Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Availability Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-bg-soft/80 backdrop-blur-md text-xs font-mono text-fg mb-6 sm:mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Freelance & SaaS Projects</span>
        </div>

        {/* Headline */}
        <div className="relative inline-block my-2 sm:my-4">
          <SparkleIcon className="hero-icon absolute z-10 -top-6 -left-6 sm:-top-10 sm:-left-12 lg:-top-12 lg:-left-16 w-8 h-8 sm:w-14 sm:h-14 lg:w-20 lg:h-20 -rotate-6 text-accent" />
          <BoltIcon className="hero-icon absolute z-10 -bottom-4 -right-6 sm:-bottom-8 sm:-right-12 lg:-bottom-10 lg:-right-14 w-6 h-6 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rotate-6 text-accent" />

          <h1 className="hero-line font-black uppercase leading-[0.9] tracking-tight text-[12vw] sm:text-[9vw] lg:text-[7.5rem] text-fg">
            Web
          </h1>
          <h1 className="hero-line font-black uppercase leading-[0.9] tracking-tight text-[12vw] sm:text-[9vw] lg:text-[7.5rem] text-fg">
            Developer
          </h1>
        </div>

        {/* 3D Document Folder Photo Anchor */}
        <div className="hero-badge my-6 sm:my-8 flex justify-center items-center w-full">
          <div
            id="hero-photo-anchor"
            className="w-[150px] sm:w-[220px] aspect-3/4 shadow-2xl rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Subtitle */}
        <p className="hero-line text-sm sm:text-lg md:text-xl text-muted font-medium max-w-2xl leading-relaxed mt-2 mb-8">
          Hi, I&apos;m <span className="text-fg font-bold">Basharat Hussain</span>. I build scalable Next.js SaaS platforms, full-stack web applications, and autonomous AI automation agents.
        </p>

        {/* Action Buttons */}
        <div className="hero-cta flex flex-wrap items-center justify-center gap-4">
          <a
            href="/#work"
            className="rounded-full bg-fg text-bg px-7 py-3.5 text-xs sm:text-sm font-semibold hover:opacity-90 transition-all shadow-md"
          >
            <HoverRoll>View My Work →</HoverRoll>
          </a>
          <a
            href="/#contact"
            className="rounded-full border border-border bg-bg-soft text-fg px-7 py-3.5 text-xs sm:text-sm font-semibold hover:border-fg transition-all shadow-sm"
          >
            <HoverRoll>Let&apos;s Talk</HoverRoll>
          </a>
        </div>
      </div>

      {/* Floating View Work Sticky Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
        <a
          href="/#work"
          className="hero-cta rounded-full bg-fg text-bg px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity shadow-xl"
        >
          <HoverRoll>View My Work</HoverRoll>
        </a>
      </div>
    </section>
  );
}
