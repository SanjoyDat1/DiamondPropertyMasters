export type OccasionScene = {
  id: string;
  name: string;        // e.g. "Christmas"
  tag: string;         // e.g. "Holiday"
  tagline: string;     // short phrase
  description: string; // one sentence
  imageUrl: string;    // Unsplash / Pexels URL
  accentColor: string; // hex color used for pill / glow
};

// Cinematic scenes for "Lights for every moment" section.
// Image URLs are from Unsplash and can be swapped with client photography later.
export const occasionScenes: OccasionScene[] = [
  {
    id: "christmas",
    name: "Christmas",
    tag: "Holiday",
    tagline: "Classic red & green",
    description: "Cozy, timeless colors for holiday nights.",
    imageUrl:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    accentColor: "#22c55e", // green
  },
  {
    id: "halloween",
    name: "Halloween",
    tag: "Holiday",
    tagline: "Spooky orange & purple",
    description: "Set the perfect eerie glow for trick-or-treaters.",
    imageUrl:
      "https://images.unsplash.com/photo-1604627448880-ef6e4cba01d5?auto=format&fit=crop&w=1600&q=80",
    accentColor: "#f97316", // orange
  },
  {
    id: "diwali",
    name: "Diwali",
    tag: "Festival",
    tagline: "Festive gold & amber",
    description: "Warm, welcoming light for celebrations and gatherings.",
    imageUrl:
      "https://images.unsplash.com/photo-1605478371310-a9f1e96b6c3a?auto=format&fit=crop&w=1600&q=80",
    accentColor: "#facc15", // amber
  },
  {
    id: "gameday",
    name: "Game Day",
    tag: "Game Night",
    tagline: "Team colors on demand",
    description: "Show your colors with vibrant, dynamic lighting.",
    imageUrl:
      "https://images.unsplash.com/photo-1507578220436-731cc4134d99?auto=format&fit=crop&w=1600&q=80",
    accentColor: "#38bdf8", // sky blue
  },
  {
    id: "everyday",
    name: "Everyday Warm White",
    tag: "Everyday",
    tagline: "Elegant everyday evenings",
    description: "Soft warm white lighting for nightly curb appeal.",
    imageUrl:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
    accentColor: "#fbbf24", // warm amber
  },
];
