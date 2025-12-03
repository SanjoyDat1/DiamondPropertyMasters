"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, FileText, Palette, Wrench } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book a Demo",
    description: "Schedule a free consultation to see how permanent LEDs can transform your home.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Receive a Quote",
    description: "Get a detailed, transparent quote within 24 hours. No hidden fees, no surprises.",
  },
  {
    number: "03",
    icon: Palette,
    title: "Design Your Lights",
    description: "Work with our team to design the perfect lighting layout for your home's architecture.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Professional Installation",
    description: "Our certified technicians install your permanent LEDs with precision and care.",
  },
];

export default function Process() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From consultation to installation, we make the process simple and stress-free.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connector line (hidden on mobile, shown on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10" />
                )}
                
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-2xl font-bold text-neutral-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

