"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, CheckCircle } from "lucide-react";
import QuoteFormWizard from "@/components/quote/QuoteFormWizard";

export default function GetAQuote() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="relative py-12 lg:py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Get Your Permanent LED Quote
            </h1>
            <p className="text-lg text-neutral-600 mb-6">
              Tell us about your home and we&apos;ll send a detailed permanent LED lighting quote within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-neutral-700">
                <Clock className="h-5 w-5 text-primary" />
                <span>24-Hour Quote Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Shield className="h-5 w-5 text-primary" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>No Obligation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <QuoteFormWizard />
        </div>
      </section>
    </div>
  );
}
