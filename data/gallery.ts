export type GalleryCategory =
  | "completed-projects"
  | "led-lighting"
  | "golf-event"
  | "ads";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  location?: "Calgary" | "Vancouver" | "Toronto";
  type?: "image" | "video";
  title?: string;
};

// Real completed project photos from public/Completed Photos/
export const completedPhotos: GalleryItem[] = [
  { id: "dpm-4", src: "/Completed Photos/DPM-4.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-5", src: "/Completed Photos/DPM-5.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-6", src: "/Completed Photos/DPM-6.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-7", src: "/Completed Photos/DPM-7.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-8", src: "/Completed Photos/DPM-8.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-10", src: "/Completed Photos/DPM-10.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-11", src: "/Completed Photos/DPM-11.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-12", src: "/Completed Photos/DPM-12.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-13", src: "/Completed Photos/DPM-13.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-14", src: "/Completed Photos/DPM-14.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-15", src: "/Completed Photos/DPM-15.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-16", src: "/Completed Photos/DPM-16.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-17", src: "/Completed Photos/DPM-17.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-18", src: "/Completed Photos/DPM-18.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-19", src: "/Completed Photos/DPM-19.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-20", src: "/Completed Photos/DPM-20.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-21", src: "/Completed Photos/DPM-21.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-22", src: "/Completed Photos/DPM-22.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-23", src: "/Completed Photos/DPM-23.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-24", src: "/Completed Photos/DPM-24.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-25", src: "/Completed Photos/DPM-25.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-26", src: "/Completed Photos/DPM-26.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-27", src: "/Completed Photos/DPM-27.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
  { id: "dpm-28", src: "/Completed Photos/DPM-28.jpg", alt: "Completed LED installation project in Toronto", category: "completed-projects", location: "Toronto" },
  { id: "dpm-29", src: "/Completed Photos/DPM-29.jpg", alt: "Completed LED installation project in Calgary", category: "completed-projects", location: "Calgary" },
  { id: "dpm-30", src: "/Completed Photos/DPM-30.jpg", alt: "Completed LED installation project in Vancouver", category: "completed-projects", location: "Vancouver" },
];

// LED lighting photos
export const ledInstallationPhotos: GalleryItem[] = [
  { id: "led-1", src: "/led_installation(1).jpg", alt: "LED track installation close-up", category: "led-lighting", location: "Calgary" },
  { id: "led-2", src: "/led_installation(2).jpg", alt: "LED track system installation", category: "led-lighting", location: "Calgary" },
  { id: "led-3", src: "/led_close_up.jpg", alt: "Close-up view of permanent LED lights", category: "led-lighting", location: "Calgary" },
];

// Golf event photos
export const golfEventPhotos: GalleryItem[] = [
  { id: "golf-1", src: "/gold_event(1).jpg", alt: "Golf event LED lighting display", category: "golf-event", location: "Calgary" },
  { id: "golf-2", src: "/golf_event(2).jpg", alt: "Golf event lighting showcase", category: "golf-event", location: "Calgary" },
  { id: "golf-3", src: "/golf_event(3).jpg", alt: "Golf event LED lighting setup", category: "golf-event", location: "Calgary" },
  { id: "golf-4", src: "/golf_event(40.jpg", alt: "Golf event lighting display", category: "golf-event", location: "Calgary" },
  { id: "golf-5", src: "/golf_event(5).png", alt: "Golf event LED display", category: "golf-event", location: "Calgary" },
];

// Video ads - actual video files from public folder
const adsItems: GalleryItem[] = [
  { id: "ad-1", src: "/ad(1).MOV", alt: "Diamond Property Masters LED Lighting Ad 1", category: "ads", type: "video", title: "LED Lighting Ad 1" },
  { id: "ad-2", src: "/ad(2).MOV", alt: "Diamond Property Masters LED Lighting Ad 2", category: "ads", type: "video", title: "LED Lighting Ad 2" },
  { id: "ad-3", src: "/ad(3).MOV", alt: "Diamond Property Masters LED Lighting Ad 3", category: "ads", type: "video", title: "LED Lighting Ad 3" },
  { id: "commercial", src: "/commercial.mp4", alt: "Diamond Property Masters Commercial", category: "ads", type: "video", title: "Commercial" },
];

// All gallery items combined
export const GALLERY_ITEMS: GalleryItem[] = [
  ...completedPhotos,
  ...ledInstallationPhotos,
  ...golfEventPhotos,
  ...adsItems,
];

// Category labels for filter bar
export const CATEGORY_LABELS: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "completed-projects", label: "Completed Projects" },
  { id: "led-lighting", label: "LED Lighting" },
  { id: "golf-event", label: "Golf Event" },
  { id: "ads", label: "Ads" },
  { id: "all", label: "All" },
];
