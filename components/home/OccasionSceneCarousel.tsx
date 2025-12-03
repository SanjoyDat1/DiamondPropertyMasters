"use client";

import * as React from "react";
import { motion, useReducedMotion, PanInfo } from "framer-motion";
import { OccasionScene, occasionScenes } from "@/data/occasions";
import { OccasionSceneCard } from "@/components/home/OccasionSceneCard";

// Autoplay timings (ms)
const AUTOPLAY_INTERVAL = 3800;
const AUTOPLAY_RESUME_DELAY = 5000;

// Mobile-first cinematic scene carousel.
export const OccasionSceneCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isInteracting, setIsInteracting] = React.useState(false);
  const [cardsPerView, setCardsPerView] = React.useState(1);
  const prefersReducedMotion = useReducedMotion();

  // Responsive cards-per-view
  React.useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width >= 1280) setCardsPerView(3); // 3 cards on large desktop
      else if (width >= 1024) setCardsPerView(2.2); // 2 + peek
      else if (width >= 768) setCardsPerView(1.3); // 1 + peek
      else setCardsPerView(1); // full card on mobile
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Autoplay: advance unless user recently interacted
  React.useEffect(() => {
    if (prefersReducedMotion) return;

    let timeout: NodeJS.Timeout | null = null;
    const schedule = () => {
      if (timeout) clearTimeout(timeout);
      if (isInteracting) return;
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % occasionScenes.length);
      }, AUTOPLAY_INTERVAL);
    };

    schedule();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isInteracting, prefersReducedMotion]);

  const markInteraction = () => {
    if (prefersReducedMotion) return;
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), AUTOPLAY_RESUME_DELAY);
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info;
    const threshold = 60;
    let direction = 0;

    if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > 500) {
      direction = offset.x > 0 ? -1 : 1;
    }

    if (direction !== 0) {
      setCurrentIndex((prev) => {
        const next = prev + direction;
        if (next < 0) return occasionScenes.length - 1;
        if (next >= occasionScenes.length) return 0;
        return next;
      });
    }

    markInteraction();
  };

  const translatePercent = -(currentIndex * (100 / cardsPerView));

  return (
    <div className="w-full" aria-roledescription="carousel" aria-label="Lighting occasions scenes">
      {/* Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex"
          style={{
            transform: `translateX(${translatePercent}%)`,
            transition: prefersReducedMotion
              ? undefined
              : "transform 0.45s ease-in-out",
          }}
          drag="x"
          dragElastic={0.18}
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={markInteraction}
          onDragEnd={handleDragEnd}
        >
          {occasionScenes.map((scene: OccasionScene, index) => {
            const isActive = index === currentIndex;
            const basis = `${100 / cardsPerView}%`;

            return (
              <div
                key={scene.id}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ flexBasis: basis, maxWidth: basis }}
              >
                <div className="aspect-[16/9] md:aspect-[21/9] w-full">
                  <OccasionSceneCard scene={scene} isActive={isActive} />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Dots indicator */}
      <div className="mt-4 flex justify-center gap-2">
        {occasionScenes.map((scene, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={scene.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 w-2 rounded-full transition-all duration-300 min-h-[8px] min-w-[8px] ${
                isActive ? "bg-primary w-5" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Show ${scene.name} lighting scene`}
            />
          );
        })}
      </div>
    </div>
  );
};
