"use client";

import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { GalleryCategory, GalleryItem, GALLERY_ITEMS, CATEGORY_LABELS } from "@/data/gallery";

// Helper to check if item is a video
const isVideo = (item: GalleryItem): boolean => {
  return item.type === "video" || 
    item.src.endsWith(".mp4") || 
    item.src.endsWith(".MOV") || 
    item.src.endsWith(".mov");
};

export default function ResultsGallery() {
  const [currentCategory, setCurrentCategory] = useState<GalleryCategory | "all">("completed-projects");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Filter items based on current category
  const filteredItems = React.useMemo(() => {
    if (currentCategory === "all") {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === currentCategory);
  }, [currentCategory]);

  // Safe index calculation
  const safeIndex = lightboxIndex !== null 
    ? Math.min(Math.max(lightboxIndex, 0), filteredItems.length - 1)
    : null;
  
  const currentItem = safeIndex !== null ? filteredItems[safeIndex] : null;

  // Lightbox handlers
  const openLightbox = useCallback((index: number) => {
    setImageLoaded(false);
    setImageError(false);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    setImageLoaded(false);
    setImageError(false);
  }, []);

  const nextImage = useCallback(() => {
    if (safeIndex !== null && filteredItems.length > 1) {
      setImageLoaded(false);
      setImageError(false);
      setLightboxIndex((safeIndex + 1) % filteredItems.length);
    }
  }, [safeIndex, filteredItems.length]);

  const prevImage = useCallback(() => {
    if (safeIndex !== null && filteredItems.length > 1) {
      setImageLoaded(false);
      setImageError(false);
      setLightboxIndex((safeIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [safeIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  // Prefetch next and previous images for performance
  useEffect(() => {
    if (safeIndex === null || filteredItems.length <= 1) return;

    const preloadImage = (index: number) => {
      const item = filteredItems[index];
      if (!item) return;
      const img = new window.Image();
      img.src = item.src;
    };

    // Preload next and previous
    preloadImage((safeIndex + 1) % filteredItems.length);
    preloadImage((safeIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [safeIndex, filteredItems]);

  return (
    <div className="w-full">
      {/* Filter Bar */}
      <div className="mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 min-w-max md:justify-center">
          {CATEGORY_LABELS.map((cat) => {
            const isActive = currentCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setCurrentCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all min-h-[44px] ${
                  isActive
                    ? "bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              No projects in this category yet. Check back soon.
            </div>
          ) : (
            <>
              {/* Mobile: Horizontal Slider */}
              <section className="block md:hidden w-full">
                <div
                  className="relative overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory"
                  style={{
                    height: "min(60vh, 420px)",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  <div className="flex gap-4 h-full px-4">
                    {filteredItems.map((item, index) => {
                      const itemIsVideo = isVideo(item);
                      return (
                        <div
                          key={item.id}
                          className="snap-center shrink-0 w-[80%] max-w-xs h-full flex items-center"
                          onClick={() => openLightbox(index)}
                        >
                          <div className="relative w-full h-[calc(100%-24px)] rounded-2xl overflow-hidden shadow-lg bg-slate-900 cursor-pointer group">
                            {itemIsVideo ? (
                              <>
                                {/* Video thumbnail background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                                {/* Play button */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <Play className="h-8 w-8 text-white ml-1" fill="white" />
                                  </div>
                                  {item.title && (
                                    <p className="mt-3 text-white text-sm font-medium">{item.title}</p>
                                  )}
                                </div>
                              </>
                            ) : (
                              <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 768px) 80vw, 400px"
                                className="object-cover"
                                loading="lazy"
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* Desktop: Grid Layout */}
              <section className="hidden md:block w-full">
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredItems.map((item, index) => {
                    const itemIsVideo = isVideo(item);
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.03 }}
                        className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-900 cursor-pointer group"
                        onClick={() => openLightbox(index)}
                      >
                        {itemIsVideo ? (
                          <>
                            {/* Video thumbnail background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                            {/* Play button */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                                <Play className="h-10 w-10 text-white ml-1" fill="white" />
                              </div>
                              {item.title && (
                                <p className="mt-4 text-white text-base font-medium">{item.title}</p>
                              )}
                            </div>
                          </>
                        ) : (
                          <>
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 1024px) 50vw, 25vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </section>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <div className="fixed inset-0 z-[9999]">
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/90"
              onClick={closeLightbox}
            />

            {/* Foreground content */}
            <div className="relative z-10 flex h-full w-full items-center justify-center">
              {/* Close Button */}
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Navigation Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Content Container */}
              <div
                className="relative flex h-full w-full max-h-[85vh] max-w-[90vw] items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                {isVideo(currentItem) ? (
                  /* Video Player */
                  <motion.div
                    key={currentItem.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex items-center justify-center w-full h-full"
                  >
                    <video
                      src={currentItem.src}
                      controls
                      autoPlay
                      playsInline
                      className="max-w-full max-h-full w-auto h-auto rounded-lg"
                      style={{ maxHeight: "80vh" }}
                    >
                      Your browser does not support the video tag.
                    </video>
                    {currentItem.title && (
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 text-white text-sm">
                        {currentItem.title}
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <>
                    {/* Loading Spinner */}
                    {!imageLoaded && !imageError && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-12 w-12 animate-spin rounded-full border-3 border-white/30 border-t-white" />
                      </div>
                    )}

                    {/* Error State */}
                    {imageError && (
                      <div className="flex flex-col items-center justify-center text-white">
                        <p className="text-sm">Unable to load this image.</p>
                        <button
                          onClick={() => {
                            setImageError(false);
                            setImageLoaded(false);
                          }}
                          className="mt-2 text-xs text-white/70 underline hover:text-white"
                        >
                          Try again
                        </button>
                      </div>
                    )}

                    {/* Image */}
                    {currentItem.src && !imageError && (
                      <motion.div
                        key={currentItem.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: imageLoaded ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative flex items-center justify-center w-full h-full"
                      >
                        <Image
                          src={currentItem.src}
                          alt={currentItem.alt}
                          width={1400}
                          height={1050}
                          className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                          onLoad={() => setImageLoaded(true)}
                          onError={() => setImageError(true)}
                          priority
                        />
                      </motion.div>
                    )}
                  </>
                )}
              </div>

              {/* Counter */}
              {filteredItems.length > 1 && safeIndex !== null && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
                  {safeIndex + 1} / {filteredItems.length}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

