"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ledInstallationPhotos, golfEventPhotos, completedPhotos } from "@/data/gallery";

// Get a preview selection of images
const previewItems = [
  ...ledInstallationPhotos.slice(0, 2),
  ...golfEventPhotos.slice(0, 2),
  ...completedPhotos.slice(0, 2),
];

export default function GalleryPreview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4">
            Real Results
          </h2>
          <p className="text-[15px] sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-[1.55]">
            See how we&apos;ve transformed homes across Calgary with permanent LED lighting and professional services.
          </p>
        </motion.div>

        {/* Mobile: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1,
                ease: [0.25, 0.8, 0.25, 1]
              }}
              className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer bg-neutral-100"
            >
              <Image
                src={item.src}
                alt={item.title || item.alt || "Gallery preview"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button asChild size="lg" className="h-14 px-8 text-base font-semibold">
            <Link href="/results">View Full Gallery</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

