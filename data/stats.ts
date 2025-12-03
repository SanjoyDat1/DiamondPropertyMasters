export interface Stat {
  value: string;
  label: string;
  icon?: string;
}

export const stats: Stat[] = [
  {
    value: "2018",
    label: "In Business Since",
    icon: "Calendar",
  },
  {
    value: "450+",
    label: "Jobs Completed",
    icon: "CheckCircle",
  },
  {
    value: "62,000+",
    label: "Feet of LEDs Installed",
    icon: "Ruler",
  },
  {
    value: "100%",
    label: "Customer Satisfaction",
    icon: "Star",
  },
];

export const trustBadges = [
  {
    text: "5-Year All-Inclusive Warranty",
    icon: "Shield",
  },
  {
    text: "Fully Insured & Incorporated",
    icon: "BadgeCheck",
  },
  {
    text: "IP68-Rated LEDs",
    icon: "Droplet",
  },
  {
    text: "-60°C to 60°C Tolerance",
    icon: "Thermometer",
  },
];

