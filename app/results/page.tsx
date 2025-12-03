"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ResultsGallery from "@/components/results/ResultsGallery";

export default function Results() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Typography */}
      <section className="relative py-12 md:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 md:mb-6 tracking-tight">
              Our Results
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              See real transformations from homes across Calgary, Vancouver, and Toronto. Every project showcases
              permanent all-season LED lighting installed with care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-6 md:py-8 lg:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <ResultsGallery />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Diamond Property Masters?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">LED Specialists</h3>
              <p className="text-neutral-600">
                We focus exclusively on permanent all-season LED lighting—no generic add-on services, just lighting
                done right.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Premium Installations</h3>
              <p className="text-neutral-600">
                Clean, low-profile track systems, neat cable runs, and meticulous installs that look great day and
                night.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Calgary, Vancouver & Toronto</h3>
              <p className="text-neutral-600">
                Local teams in each city, dedicated to long-term support and service for your permanent LED system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Properly Spaced */}
      <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join homeowners across Calgary, Vancouver, and Toronto who have upgraded to permanent LED lighting.
            Get your free quote today.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/get-a-quote">Get a Free LED Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
