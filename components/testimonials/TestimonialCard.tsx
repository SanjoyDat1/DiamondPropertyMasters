"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const rating = testimonial.rating ?? 5;
  const quote = testimonial.quote || testimonial.text;

  return (
    <blockquote className="relative p-6 md:p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(15,23,42,0.08)] w-full max-w-4xl mx-auto">
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-primary text-primary"
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Quote Text */}
      <p className="text-slate-700 leading-relaxed mb-6 text-base md:text-lg">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Footer */}
      <footer className="flex flex-col">
        <div className="font-semibold text-neutral-900 text-base md:text-lg">
          {testimonial.name}
        </div>
        <div className="text-sm text-slate-500 mt-1">
          {testimonial.role ? `${testimonial.role}, ` : ""}
          {testimonial.location}
        </div>
      </footer>
    </blockquote>
  );
}

