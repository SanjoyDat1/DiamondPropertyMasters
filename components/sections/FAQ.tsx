"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to know about permanent LED lighting and our services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}

