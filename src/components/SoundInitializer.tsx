"use client";

import { useEffect } from "react";
import { playHoverSound, playClickSound } from "@/utils/sound";

export default function SoundInitializer() {
  useEffect(() => {
    let lastTarget: Element | null = null;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      // Find nearest interactive element: a, button, card, group, role=button
      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], .group, .card, [data-sound="hover"]'
      );

      if (interactive && interactive !== lastTarget) {
        lastTarget = interactive;
        playHoverSound();
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (target && lastTarget && !lastTarget.contains(target)) {
        lastTarget = null;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], .group, .card, [data-sound="click"]'
      );

      if (interactive) {
        playClickSound();
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
