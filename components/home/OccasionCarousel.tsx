"use client";

import * as React from "react";
import { OccasionSceneCarousel } from "@/components/home/OccasionSceneCarousel";

// Backwards-compatible wrapper so existing imports of OccasionCarousel continue to work.
// Internally this just renders the new cinematic OccasionSceneCarousel.
export const OccasionCarousel: React.FC = () => {
  return <OccasionSceneCarousel />;
};
