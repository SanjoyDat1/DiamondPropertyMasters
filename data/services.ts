export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  link: string;
}

// Single-service focus: permanent all-season outdoor LED lighting
export const services: Service[] = [
  {
    id: "led-lighting",
    title: "Permanent All-Season LED Lighting",
    description:
      "Discreet track-mounted LEDs that give you year-round control over colors, brightness, and scenes—no more ladders or tangled holiday lights.",
    icon: "Zap",
    features: [
      "App-controlled from anywhere",
      "16M colors & curated scenes",
      "All-season, low-profile track",
      "Energy-efficient, long-life LEDs",
      "Backed by a comprehensive warranty",
    ],
    link: "/permanent-led-lighting",
  },
];
