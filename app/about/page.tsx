import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { stats, trustBadges } from "@/data/stats";
import { Calendar, CheckCircle, Ruler, Star, Shield, BadgeCheck, Droplet, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Diamond Property Masters | Permanent LED Lighting",
  description:
    "Learn about Diamond Property Masters. Specializing in permanent all-season outdoor LED lighting for homes in Calgary, Vancouver, and Toronto.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  CheckCircle,
  Ruler,
  Star,
  Shield,
  BadgeCheck,
  Droplet,
  Thermometer,
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              About Diamond Property Masters
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              We design and install permanent all-season outdoor LED lighting for homes in Calgary, Vancouver, and
              Toronto—delivering clean installs, smart control, and year-round curb appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">Our Story</h2>
            <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
              Founded in 2018, Diamond Property Masters began with a simple mission: give homeowners a safer,
              smarter alternative to traditional holiday lights. No more ladders, tangled strings, or seasonal
              installs—just permanent, low-profile track lighting that looks incredible all year.
            </p>
            <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
              Today, our team focuses exclusively on permanent LED lighting. From subtle warm white for everyday
              evenings to bold holiday colors and game-day scenes, we design systems that feel effortless to use
              and beautiful to live with.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We believe in quality materials, professional installation, and exceptional customer service. Every
              project is backed by our warranty, and local teams in Calgary, Vancouver, and Toronto provide
              long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">By The Numbers</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = iconMap[stat.icon || "CheckCircle"];
              return (
                <Card key={stat.label} className="text-center border-2">
                  <CardContent className="pt-6">
                    {Icon && <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />}
                    <div className="text-4xl lg:text-5xl font-bold mb-2 text-primary">{stat.value}</div>
                    <div className="text-sm sm:text-base text-neutral-600">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Trust & Credentials</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Your peace of mind is our priority. We’re fully licensed, insured, and committed to precision on
              every LED install.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {trustBadges.map((badge) => {
              const Icon = iconMap[badge.icon || "Shield"];
              return (
                <Card key={badge.text} className="border-2 hover:border-primary/20 transition-all">
                  <CardContent className="pt-6 text-center">
                    {Icon && <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />}
                    <p className="text-sm font-medium text-neutral-900">{badge.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-2 border-primary/20">
              <CardContent className="pt-6">
                <p className="text-neutral-700">
                  <strong>Insurance:</strong> Fully insured<br />
                  <strong>Status:</strong> Registered and incorporated<br />
                  <strong>Service Areas:</strong> Calgary, Vancouver, and Toronto
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Quality</h3>
              <p className="text-neutral-600">
                We use premium LEDs, track systems, and components to ensure a clean look and long life.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Efficiency</h3>
              <p className="text-neutral-600">
                Our teams work quickly and carefully, minimizing disruption while delivering precise installs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Local Support</h3>
              <p className="text-neutral-600">
                Local teams in Calgary, Vancouver, and Toronto are here for design, install, and follow-up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Talk to Our LED Team</h2>
          <p className="text-xl text-primary-100 mb-8">
            Ready to upgrade your home with permanent LEDs? Get in touch for a free consultation and quote.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/get-a-quote">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
