"use client";

import * as React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { X, Check } from "lucide-react";

interface ComparisonRow {
  traditional: string;
  permanent: string;
}

interface LightsComparisonProps {
  className?: string;
}

const comparisonData: ComparisonRow[] = [
  {
    traditional: "Climb ladders every season",
    permanent: "One-time installation",
  },
  {
    traditional: "Limited color options",
    permanent: "16 million colors",
  },
  {
    traditional: "Higher energy consumption",
    permanent: "Ultra-low energy use",
  },
  {
    traditional: "Bulbs burn out frequently",
    permanent: "20+ year lifespan",
  },
  {
    traditional: "Storage and maintenance hassle",
    permanent: "Zero maintenance",
  },
  {
    traditional: "Only for holidays",
    permanent: "All-season use",
  },
];

export default function LightsComparison({ className }: LightsComparisonProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const rowVariants = {
    hidden: { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 6,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  const iconVariants = {
    hidden: { 
      opacity: 0, 
      scale: prefersReducedMotion ? 1 : 0.8,
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className={`py-24 lg:py-40 bg-white ${className || ""}`}
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-center mb-20"
        >
          <h2
            id="comparison-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-900 mb-6 tracking-tight"
          >
            Permanent LEDs vs Traditional Holiday Lights
          </h2>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {/* Traditional Lights Card */}
          <motion.div
            variants={cardVariants}
            whileHover={prefersReducedMotion ? {} : {
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="group relative"
          >
            <motion.div
              className="relative h-full rounded-[24px] border-2 p-7 lg:p-8 transition-all duration-300"
              style={{
                borderColor: "rgba(255, 59, 48, 0.35)",
                backgroundColor: "rgba(255, 240, 240, 0.6)",
              }}
              whileHover={prefersReducedMotion ? {} : {
                borderColor: "rgba(255, 59, 48, 0.5)",
                backgroundColor: "rgba(255, 240, 240, 0.8)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-semibold text-red-600 mb-8">
                Traditional Lights
              </h3>

              <ul className="space-y-5">
                {comparisonData.map((row, index) => (
                  <motion.li
                    key={index}
                    variants={rowVariants}
                    className="flex items-start gap-3 group/item"
                    whileHover={prefersReducedMotion ? {} : {
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      variants={iconVariants}
                      className="flex-shrink-0 mt-0.5"
                      whileHover={prefersReducedMotion ? {} : {
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                      }}
                    >
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="h-3 w-3 text-red-600" />
                      </div>
                    </motion.div>
                    <motion.p
                      variants={rowVariants}
                      className="text-base text-neutral-700 leading-relaxed flex-1"
                    >
                      {row.traditional}
                    </motion.p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Permanent LEDs Card */}
          <motion.div
            variants={cardVariants}
            whileHover={prefersReducedMotion ? {} : {
              y: -4,
              transition: { type: "spring", stiffness: 400, damping: 25 },
            }}
            className="group relative"
            custom={1}
          >
            <motion.div
              className="relative h-full rounded-[24px] border-2 p-7 lg:p-8 transition-all duration-300"
              style={{
                borderColor: "rgba(0, 122, 255, 0.45)",
                backgroundColor: "rgba(232, 244, 255, 0.6)",
              }}
              whileHover={prefersReducedMotion ? {} : {
                borderColor: "rgba(0, 122, 255, 0.6)",
                backgroundColor: "rgba(232, 244, 255, 0.8)",
                boxShadow: "0 12px 30px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-8">
                Permanent LEDs
              </h3>

              <ul className="space-y-5">
                {comparisonData.map((row, index) => (
                  <motion.li
                    key={index}
                    variants={rowVariants}
                    className="flex items-start gap-3 group/item"
                    whileHover={prefersReducedMotion ? {} : {
                      x: 4,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      variants={iconVariants}
                      className="flex-shrink-0 mt-0.5"
                      whileHover={prefersReducedMotion ? {} : {
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 15 },
                      }}
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      </div>
                    </motion.div>
                    <motion.p
                      variants={rowVariants}
                      className="text-base text-neutral-700 leading-relaxed flex-1"
                    >
                      {row.permanent}
                    </motion.p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Paired Rows View (Desktop only) - For easy scanning */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:block mt-20"
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
              Side-by-Side Comparison
            </p>
          </div>
          <div className="space-y-3">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + index * 0.08,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                whileHover={prefersReducedMotion ? {} : {
                  backgroundColor: "rgba(0, 0, 0, 0.015)",
                  transition: { duration: 0.2 },
                }}
                className="grid grid-cols-2 gap-8 p-5 rounded-2xl -mx-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="h-3 w-3 text-red-600" />
                  </div>
                  <p className="text-base text-neutral-700">{row.traditional}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-green-600" />
                  </div>
                  <p className="text-base text-neutral-700">{row.permanent}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

