"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle background gradient - mobile optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-32 relative z-10">
        {/* Mobile-first: Stacked layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content - Mobile first */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
            className="w-full space-y-6 md:space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Permanent All-Season Lighting</span>
            </motion.div>

            {/* Headline - Mobile optimized (28-32px) */}
            <motion.h1
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] }}
              className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-[1.2] tracking-tight"
            >
              A Home That{" "}
              <span className="text-primary">Always Shines</span>
            </motion.h1>
            
            {/* Description - Mobile optimized (15-17px) */}
            <motion.p
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[15px] sm:text-lg md:text-xl text-neutral-700 leading-[1.55] max-w-2xl mx-auto lg:mx-0"
            >
              Smart-controlled, energy-efficient LED track lighting that disappears by day and transforms your home at night. Control millions of colors, set schedules, and enjoy year-round beauty—no ladders required.
            </motion.p>

            {/* CTAs - Stacked on mobile, side-by-side on desktop */}
            <motion.div
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start"
            >
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Link href="/get-a-quote">Get a Free Quote</Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-2 hover:border-primary hover:bg-primary/5 transition-all"
              >
                <Link href="/results">See It in Action</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual - Commercial Video */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0 scale-125 origin-center"
          >
            <div className="relative aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 group cursor-pointer" onClick={toggleSound}>
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/commercial-poster.jpg"
              >
                <source src="/commercial.mp4" type="video/mp4" />
              </video>
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              {/* Sound toggle button */}
              <div className="absolute bottom-4 right-4 p-3 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors">
                {isMuted ? (
                  <VolumeX className="h-5 w-5 text-white" />
                ) : (
                  <Volume2 className="h-5 w-5 text-white" />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-neutral-400"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
