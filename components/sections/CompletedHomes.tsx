"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion, PanInfo } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { completedPhotos } from "@/data/gallery";

// Type for gallery images
type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  location?: string;
  label?: string;
};

// Transform completed photos to GalleryImage format
const completedHomes: GalleryImage[] = completedPhotos.slice(0, 20).map((photo, index) => ({
  id: photo.id,
  src: photo.src,
  alt: photo.alt || `Completed LED installation project ${index + 1}`,
  location: "Calgary, AB",
  label: "Full Wrap",
}));

export default function CompletedHomes() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [cardWidth, setCardWidth] = React.useState(320);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  // Calculate card width based on viewport
  React.useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const width = window.innerWidth < 768 
          ? containerWidth - 16 // Mobile: full width minus padding
          : Math.min(containerWidth * 0.85, 600); // Desktop: 85% of container, max 600px
        setCardWidth(width);
      }
    };
    
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  // Handle drag end - snap to nearest card
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    
    // Determine direction based on drag distance and velocity
    const threshold = cardWidth * 0.25; // 25% of card width
    let direction = 0;
    
    if (Math.abs(offset) > threshold || Math.abs(velocity) > 400) {
      direction = offset > 0 ? -1 : 1;
    }

    const newIndex = currentIndex + direction;
    navigateToIndex(newIndex);
  };

  // Navigate to specific index with infinite loop
  const navigateToIndex = React.useCallback((index: number) => {
    setIsTransitioning(true);
    let newIndex = index;
    
    // Infinite loop logic
    if (newIndex < 0) {
      newIndex = completedHomes.length - 1;
    } else if (newIndex >= completedHomes.length) {
      newIndex = 0;
    }
    
    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-advance carousel (smooth infinite loop)
  React.useEffect(() => {
    if (prefersReducedMotion || isDragging || isTransitioning) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % completedHomes.length);
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion, isDragging, isTransitioning]);

  // Navigation handlers
  const goToNext = () => {
    navigateToIndex(currentIndex + 1);
  };

  const goToPrev = () => {
    navigateToIndex(currentIndex - 1);
  };

  // Create infinite loop by duplicating items
  const displayItems = [
    completedHomes[completedHomes.length - 1], // Last item first (for seamless loop)
    ...completedHomes,
    completedHomes[0], // First item last (for seamless loop)
  ];

  // Adjust index for display
  const displayIndex = currentIndex + 1; // +1 because we added an item at the start

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-3 md:mb-4 tracking-tight">
            Homes That Shine Year-Round
          </h2>
          <p className="text-[15px] sm:text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto leading-[1.55]">
            See real homes transformed with permanent LED lighting. Every installation is a testament to quality and craftsmanship.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div ref={containerRef} className="relative">
          {/* Carousel Wrapper - Mobile optimized with snap scrolling */}
          <div 
            className="relative overflow-hidden"
            style={{ 
              touchAction: "pan-x",
              WebkitOverflowScrolling: "touch"
            }}
          >
            <motion.div
              className="flex"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              dragMomentum={false}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={handleDragEnd}
              animate={{
                x: -displayIndex * cardWidth,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.8,
              }}
            >
              {displayItems.map((item, index) => {
                const isActive = Math.abs(index - displayIndex) <= 1;
                return (
                  <motion.div
                    key={`${item.id}-${index}`}
                    className="flex-shrink-0 px-2"
                    style={{ width: cardWidth }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1 : 0.95
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden bg-neutral-100 group cursor-pointer shadow-lg">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 600px"
                        priority={isActive}
                        loading={isActive ? "eager" : "lazy"}
                      />
                      {/* Overlay with info - Always visible on mobile, hover on desktop */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:from-black/60 md:via-transparent md:to-transparent md:group-hover:from-black/70 md:group-hover:via-black/30 transition-all duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-300">
                          {item.label && (
                            <div className="inline-block px-3 py-1.5 rounded-full bg-primary text-white text-xs md:text-sm font-semibold mb-2 shadow-lg">
                              {item.label}
                            </div>
                          )}
                          {item.location && (
                            <p className="text-white text-sm md:text-base font-medium drop-shadow-lg">
                              {item.location}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Arrows - Desktop only */}
          <div className="hidden md:flex items-center justify-between absolute inset-y-0 left-0 right-0 pointer-events-none">
            <button
              onClick={goToPrev}
              className="pointer-events-auto ml-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors min-h-[48px] min-w-[48px]"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 text-neutral-900" />
            </button>
            <button
              onClick={goToNext}
              className="pointer-events-auto mr-4 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors min-h-[48px] min-w-[48px]"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 text-neutral-900" />
            </button>
          </div>

          {/* Dots Indicator - Mobile optimized */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {completedHomes.slice(0, Math.min(completedHomes.length, 12)).map((_, index) => {
              const isActive = currentIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => navigateToIndex(index)}
                  className={`flex-shrink-0 h-2 rounded-full transition-all duration-300 min-w-[8px] min-h-[8px] ${
                    isActive
                      ? "w-8 bg-primary"
                      : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 md:mt-12"
        >
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="h-14 px-8 text-base font-semibold"
          >
            <Link href="/results" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
