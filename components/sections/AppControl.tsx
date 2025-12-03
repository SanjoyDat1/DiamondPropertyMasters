"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Smartphone, Palette, Clock, Wifi, Bluetooth, Sun } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "16 Million Colors",
    description: "Choose from millions of colors or create custom palettes.",
  },
  {
    icon: Clock,
    title: "800+ Themes & Presets",
    description: "Pre-designed themes for holidays, seasons, and special occasions.",
  },
  {
    icon: Sun,
    title: "Sunset Scheduling",
    description: "Automatically turn on at sunset and off at your preferred time.",
  },
  {
    icon: Smartphone,
    title: "Custom Patterns",
    description: "Create and save your own lighting patterns and animations.",
  },
  {
    icon: Wifi,
    title: "Wi-Fi & Bluetooth",
    description: "Control remotely via Wi-Fi or directly with Bluetooth.",
  },
  {
    icon: Clock,
    title: "Dimmable Brightness",
    description: "Adjust brightness to match your mood and save energy.",
  },
];

export default function AppControl() {
  return (
    <section className="py-24 lg:py-40 bg-gradient-to-b from-white via-neutral-50/30 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Features */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
                Complete Control in Your Pocket
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed font-light">
                Our intuitive mobile app puts the power of professional lighting at your fingertips. Control every aspect of your home&apos;s lighting from anywhere.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.12,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, type: "spring", stiffness: 400 }
                    }}
                    className="group relative"
                  >
                    <motion.div
                      className="relative p-7 rounded-2xl bg-white border-2 border-neutral-200/60 shadow-sm hover:shadow-2xl transition-all duration-500 h-full"
                      whileHover={{
                        borderColor: "rgba(14, 165, 233, 0.4)",
                        boxShadow: "0 20px 40px -12px rgba(14, 165, 233, 0.2)",
                      }}
                    >
                      {/* Gradient overlay on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: "linear-gradient(135deg, rgba(14, 165, 233, 0.05), rgba(14, 165, 233, 0.1))",
                        }}
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          className="mb-4"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: [0, -5, 5, 0]
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 w-fit">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </motion.div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 overflow-hidden"
                        initial={false}
                      >
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.6) 50%, transparent 60%)",
                          }}
                          animate={{
                            x: ["-100%", "200%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            <motion.div 
              className="relative w-full max-w-sm scale-[0.65] origin-center"
            >
              {/* Phone frame */}
              <motion.div 
                className="relative aspect-[9/19] bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[3rem] p-2 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    "0 25px 50px -12px rgba(14, 165, 233, 0.3)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* App Recording Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/app_recording.MOV" type="video/quicktime" />
                    <source src="/app_recording.MOV" type="video/mp4" />
                  </video>
                </div>
              </motion.div>

              {/* Floating glow effect */}
              <motion.div
                className="absolute -z-10 -inset-8 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[3rem] blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

