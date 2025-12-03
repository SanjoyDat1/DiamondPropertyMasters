"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, CheckCircle, Ruler, Star, Shield, BadgeCheck, Droplet, Thermometer } from "lucide-react";
import { stats, trustBadges } from "@/data/stats";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  CheckCircle,
  Ruler,
  Star,
  Shield,
  BadgeCheck,
  Droplet,
  Thermometer,
};

export default function Stats() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Subtle background gradient - mobile optimized */}
      <div className="absolute inset-0 opacity-10 md:opacity-20">
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(circle at 30% 50%, rgba(14, 165, 233, 0.3), transparent 50%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats - Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon || "CheckCircle"];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.8, 0.25, 1]
                }}
                className="text-center"
              >
                {Icon && (
                  <div className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 mb-3 md:mb-4">
                    <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                  </div>
                )}
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Badges - Mobile: Single column, Desktop: Grid */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {trustBadges.map((badge, index) => {
            const Icon = iconMap[badge.icon || "Shield"];
            return (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.25, 0.8, 0.25, 1]
                }}
                className="flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-xl md:rounded-2xl bg-neutral-800/60 backdrop-blur-sm border border-neutral-700/50"
              >
                {Icon && (
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                )}
                <span className="text-xs md:text-sm font-semibold text-white">{badge.text}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

