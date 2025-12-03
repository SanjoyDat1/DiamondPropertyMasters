"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, Snowflake, Heart, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "Ultimate Convenience",
    description:
      "No more climbing ladders or storing bulky holiday lights. Control everything from your phone.",
  },
  {
    icon: Snowflake,
    title: "All-Season Use",
    description:
      "Perfect for every occasion—holidays, celebrations, or everyday warm white ambiance.",
  },
  {
    icon: Sparkles,
    title: "Curb Appeal",
    description:
      "Transform your home's exterior and increase property value with professional lighting.",
  },
  {
    icon: Heart,
    title: "Safety First",
    description:
      "Eliminate the risk of ladder accidents. Our permanent installation means you never climb again.",
  },
];

export default function WhyLEDs() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-center mb-4 md:mb-6"
        >
          <motion.h2
            className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4 tracking-tight"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Why Permanent LEDs?
          </motion.h2>
          <motion.p
            className="text-[15px] sm:text-lg md:text-xl text-neutral-700 max-w-3xl mx-auto leading-[1.55]"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            One installation, endless possibilities. Your home can celebrate every season and occasion with the tap of a button.
          </motion.p>
        </motion.div>

        {/* Benefits - Mobile: Single column, Desktop: Grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                className="group"
              >
                <div className="relative p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-neutral-200/60 shadow-sm h-full">
                  <div className="relative z-10">
                    <div className="mb-4 md:mb-6">
                      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 w-fit">
                        <Icon className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-neutral-900 mb-2 md:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-[15px] md:text-base text-neutral-700 leading-[1.55]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
