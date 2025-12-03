"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";

export default function Testimonials() {
  return (
    <section
      className="py-12 md:py-16 bg-gradient-to-b from-neutral-50 to-white"
      aria-label="Customer testimonials"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it—hear from homeowners who&apos;ve transformed their properties with us.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <TestimonialSlider testimonials={testimonials} />

        {/* Satisfaction Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mt-4 md:mt-6 mb-10 md:mb-14"
        >
          <Shield className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0" />
          <p className="text-sm md:text-base font-medium text-slate-600">
            100% satisfaction guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
