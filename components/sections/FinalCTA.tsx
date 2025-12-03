"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Light Up Your Home All Year?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto">
            Get a free, no-obligation quote within 24 hours. See how permanent LED lighting can transform your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/get-a-quote">Get a Free Quote in 24 Hours</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white/10">
              <Link href="/permanent-led-lighting">Learn More</Link>
            </Button>
          </div>
          <p className="text-sm text-primary-100">
            ✓ Free consultation  ✓ Transparent pricing  ✓ 5-year warranty
          </p>
        </motion.div>
      </div>
    </section>
  );
}

