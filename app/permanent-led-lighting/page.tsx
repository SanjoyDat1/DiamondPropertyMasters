import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Smartphone, Shield, Droplet, Thermometer, Palette, Clock, Wifi } from "lucide-react";
import LightsComparison from "@/components/sections/LightsComparison";

export const metadata: Metadata = {
  title: "Permanent LED Lighting | All-Season Smart Outdoor Lighting | Diamond Property Masters",
  description: "Premium permanent outdoor LED lighting with app control, 16M colors, weatherproof IP68 rating, and 5-year warranty. Transform your home year-round.",
};

const features = [
  {
    icon: Palette,
    title: "16 Million Colors",
    description: "Choose from millions of colors or create custom palettes for any occasion.",
  },
  {
    icon: Smartphone,
    title: "App Controlled",
    description: "Full control via Wi-Fi and Bluetooth. 800+ themes, custom patterns, and scheduling.",
  },
  {
    icon: Shield,
    title: "5-Year Warranty",
    description: "Comprehensive all-inclusive warranty covering all components and installation.",
  },
  {
    icon: Droplet,
    title: "IP68 Weatherproof",
    description: "Fully waterproof and dustproof. Rated for extreme weather conditions.",
  },
  {
    icon: Thermometer,
    title: "Extreme Temperature Range",
    description: "Operates flawlessly from -60°C to 60°C, perfect for Calgary's climate.",
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Only 0.96W per LED. Monthly cost typically under $5 for most installations.",
  },
];

export default function PermanentLEDLighting() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Permanent All-Season LED Lighting
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Transform your home with professional-grade permanent LED lighting. Smart-controlled, weatherproof, and designed to last decades. One installation, endless possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/get-a-quote">Get My LED Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/results">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Why Our LED System?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Premium quality, cutting-edge technology, and unmatched reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="border-2 hover:border-primary/20 transition-all">
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Technical Specifications
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">LED Type</h3>
                  <p className="text-neutral-600">RGBW triple-diode with warm white 3000K option</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Lifespan</h3>
                  <p className="text-neutral-600">50,000–60,000 hours (20+ years of typical use)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Power Consumption</h3>
                  <p className="text-neutral-600">~0.96W per LED (extremely energy efficient)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Weather Rating</h3>
                  <p className="text-neutral-600">IP68 (dust and waterproof)</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Temperature Range</h3>
                  <p className="text-neutral-600">-60°C to 60°C operating temperature</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Control</h3>
                  <p className="text-neutral-600">Wi-Fi & Bluetooth app control with 800+ presets</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src="/led_close_up.jpg"
                alt="Close-up view of permanent LED lights installation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <LightsComparison />

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get a free quote within 24 hours. See how permanent LED lighting can enhance your home&apos;s beauty and value.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/get-a-quote">Get My LED Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

