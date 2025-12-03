"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Zap, Droplet, Thermometer, Palette, Clock } from "lucide-react";

const advantages = [
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Comprehensive protection on all components. We stand behind our work with industry-leading coverage.",
    color: "from-blue-500/10 to-blue-600/5",
    iconColor: "text-blue-600",
  },
  {
    icon: Droplet,
    title: "IP68 Weatherproof",
    description: "Fully sealed against water, dust, and extreme weather. Rated for year-round outdoor use in any climate.",
    color: "from-cyan-500/10 to-cyan-600/5",
    iconColor: "text-cyan-600",
  },
  {
    icon: Thermometer,
    title: "Extreme Temperature Rated",
    description: "Operates flawlessly from -40°F to 140°F. Built for Calgary's harsh winters and hot summers.",
    color: "from-orange-500/10 to-orange-600/5",
    iconColor: "text-orange-600",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Ultra-low power consumption. Save up to 80% compared to traditional holiday lighting.",
    color: "from-yellow-500/10 to-yellow-600/5",
    iconColor: "text-yellow-600",
  },
  {
    icon: Palette,
    title: "16 Million Colors",
    description: "Full spectrum control with millions of color options. Create any mood or match any occasion.",
    color: "from-purple-500/10 to-purple-600/5",
    iconColor: "text-purple-600",
  },
  {
    icon: Clock,
    title: "20+ Year Lifespan",
    description: "Built to last decades, not seasons. Professional-grade LEDs designed for permanent installation.",
    color: "from-green-500/10 to-green-600/5",
    iconColor: "text-green-600",
  },
];

export default function KeyAdvantages() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-gradient-to-b from-white via-neutral-50/30 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4 tracking-tight">
            Built to Last, Designed to Impress
          </h2>
          <p className="text-[15px] sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-[1.55]">
            Professional-grade permanent LED lighting engineered for durability, performance, and stunning visual impact.
          </p>
        </motion.div>

        {/* Grid: Mobile 1 column, Tablet 2 columns, Desktop 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                whileHover={prefersReducedMotion ? {} : {
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="group"
              >
                <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-neutral-200/60 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  
                  <div className="relative z-10">
                    <div className="mb-4 md:mb-6">
                      <motion.div
                        className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${advantage.color} w-fit`}
                        whileHover={prefersReducedMotion ? {} : {
                          scale: 1.1,
                          rotate: [0, -5, 5, 0]
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`h-6 w-6 md:h-8 md:w-8 ${advantage.iconColor}`} />
                      </motion.div>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 mb-2 md:mb-3 group-hover:text-neutral-800 transition-colors">
                      {advantage.title}
                    </h3>
                    <p className="text-[15px] md:text-base text-neutral-700 leading-[1.55]">
                      {advantage.description}
                    </p>
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 overflow-hidden"
                    initial={false}
                  >
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.6) 50%, transparent 60%)",
                      }}
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

