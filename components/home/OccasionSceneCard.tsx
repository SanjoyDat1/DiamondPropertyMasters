"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { OccasionScene } from "@/data/occasions";

interface Props {
  scene: OccasionScene;
  isActive: boolean;
}

// Cinematic scene card used in the occasions carousel.
// - Full-bleed photo with dark gradient overlay
// - Bottom-left text block with tag, title, tagline, description
export const OccasionSceneCard: React.FC<Props> = ({ scene, isActive }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="relative w-full h-full rounded-3xl overflow-hidden bg-slate-900 border border-white/5 shadow-[0_18px_45px_rgba(15,23,42,0.45)]"
      initial={{ opacity: 0.8, scale: 0.96 }}
      animate={{
        opacity: isActive ? 1 : 0.85,
        scale: isActive ? 1.02 : 0.97,
      }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45, ease: "easeInOut" }}
    >
      {/* Background image */}
      <div className="relative w-full h-full bg-slate-950">
        <Image
          src={scene.imageUrl}
          alt={scene.description}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

        {/* Accent edge glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            boxShadow: isActive
              ? `0 0 0 1px ${scene.accentColor}40`
              : "0 0 0 1px rgba(148, 163, 184, 0.4)",
          }}
        />

        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16 flex flex-col items-start gap-2">
          {/* Tag pill */}
          <div
            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-slate-950 shadow-sm"
            style={{ backgroundColor: scene.accentColor }}
          >
            {scene.tag}
          </div>

          {/* Title + tagline */}
          <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight">
            {scene.name}
          </h3>
          <p className="text-sm text-white/80 leading-snug">
            {scene.tagline}
          </p>
          <p className="mt-1 text-xs sm:text-sm text-white/70 max-w-md leading-snug">
            {scene.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
};
