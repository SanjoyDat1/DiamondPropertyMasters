"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Testimonial } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const AUTOPLAY_INTERVAL = 6000; // 6 seconds
const PAUSE_RESUME_DELAY = 5000; // 5 seconds after interaction

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = React.useState(false);
  const [direction, setDirection] = React.useState(0);
  const prefersReducedMotion = useReducedMotion();
  const autoplayTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  const goToSlide = (index: number, newDirection?: number) => {
    if (index < 0) {
      setCurrentIndex(testimonials.length - 1);
      setDirection(-1);
    } else if (index >= testimonials.length) {
      setCurrentIndex(0);
      setDirection(1);
    } else {
      setCurrentIndex(index);
      if (newDirection !== undefined) {
        setDirection(newDirection);
      }
    }
    pauseAutoplay();
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1, 1);
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1, -1);
  };

  const pauseAutoplay = () => {
    setIsAutoplayPaused(true);
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    pauseTimerRef.current = setTimeout(() => {
      setIsAutoplayPaused(false);
    }, PAUSE_RESUME_DELAY);
  };

  // Autoplay logic
  React.useEffect(() => {
    if (prefersReducedMotion || isAutoplayPaused) return;

    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        setDirection(1);
        return next;
      });
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplayPaused, testimonials.length, prefersReducedMotion]);

  // Cleanup timers on unmount
  React.useEffect(() => {
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -40 : 40,
      opacity: 0,
    }),
  };

  // Touch/Drag handlers
  const handleDragEnd = (_: any, info: any) => {
    const diff = info.offset.x;
    const threshold = 50; // Minimum drag distance

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  return (
    <div className="relative w-full" aria-label="Customer testimonials">
      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={prefersReducedMotion ? {} : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onDragStart={() => pauseAutoplay()}
            className="w-full cursor-grab active:cursor-grabbing"
            aria-live="polite"
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows (Desktop) */}
        {testimonials.length > 1 && (
          <>
            <button
              onClick={() => {
                prevSlide();
                pauseAutoplay();
              }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center transition-all opacity-70 hover:opacity-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-neutral-900" />
            </button>
            <button
              onClick={() => {
                nextSlide();
                pauseAutoplay();
              }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 hover:bg-white shadow-lg items-center justify-center transition-all opacity-70 hover:opacity-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-neutral-900" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const newDirection = index > currentIndex ? 1 : -1;
                goToSlide(index, newDirection);
              }}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <motion.div
                className={`h-1.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-slate-300"
                }`}
                animate={{
                  width: index === currentIndex ? 32 : 8,
                  opacity: index === currentIndex ? 1 : 0.5,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

