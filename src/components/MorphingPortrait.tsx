"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MorphingPortrait() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const container = document.getElementById("scroll-morph-container");
      const startAnchor = document.getElementById("hero-photo-anchor");
      const endAnchor = document.getElementById("about-photo-anchor");
      const card = cardRef.current;
      const rotator = rotatorRef.current;
      if (!container || !startAnchor || !endAnchor || !card || !rotator) return;

      let to = { left: 0, top: 0, width: 0, height: 0 };

      const measure = () => {
        const containerRect = container.getBoundingClientRect();
        const startRect = startAnchor.getBoundingClientRect();
        const endRect = endAnchor.getBoundingClientRect();

        gsap.set(card, {
          position: "absolute",
          left: startRect.left - containerRect.left,
          top: startRect.top - containerRect.top,
          width: startRect.width,
          height: startRect.height,
        });

        to = {
          left: endRect.left - containerRect.left,
          top: endRect.top - containerRect.top,
          width: endRect.width,
          height: endRect.height,
        };
      };

      measure();

      const trigger = {
        trigger: "#top",
        start: "top top",
        endTrigger: "#about",
        end: "center center",
        scrub: 1,
        invalidateOnRefresh: true,
      };

      const isMobile = window.innerWidth < 640;

      const tl = gsap.timeline({ scrollTrigger: trigger });

      if (isMobile) {
        // Mobile curve: swings out to the right mid-scroll with 3D rotation, then settles into About section
        tl.to(card, {
          left: () => (startRect.left - containerRect.left) + 85,
          top: () => (startRect.top - containerRect.top) + (endRect.top - startRect.top) * 0.45,
          rotateZ: 14,
          duration: 0.5,
          ease: "power1.inOut",
        }).to(card, {
          left: () => to.left,
          top: () => to.top,
          width: () => to.width,
          height: () => to.height,
          rotateZ: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
      } else {
        // Desktop direct morphing path
        tl.to(card, {
          left: () => to.left,
          top: () => to.top,
          width: () => to.width,
          height: () => to.height,
          duration: 1,
          ease: "none",
        });
      }

      gsap.to(rotator, {
        rotateY: 180,
        ease: "none",
        scrollTrigger: trigger,
      });

      const onResize = () => {
        measure();
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);

      return () => window.removeEventListener("resize", onResize);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className="z-30 perspective-distant pointer-events-none"
    >
      <div ref={rotatorRef} className="relative w-full h-full transform-3d">
        {/* Front Face (Hero Section - Dark Portrait) */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black border border-white/10 backface-hidden">
          <img
            src="/basharat-dark.jpg"
            alt="Basharat Hussain"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Back Face (About Section - Original Color Portrait, flipped 180deg) */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-bg-soft border border-border/80 backface-hidden transform-[rotateY(180deg)]">
          <img
            src="/basharat.png"
            alt="Basharat Hussain"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
