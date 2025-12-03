import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Permanent LED Lighting Services | Diamond Property Masters",
  description:
    "Premium permanent all-season outdoor LED lighting for homes in Calgary, Vancouver, and Toronto. Smart app control, custom scenes, and professional installation.",
};

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-white to-accent/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Permanent LED Lighting Services
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              All-season, app-controlled permanent outdoor LEDs for homes in Calgary, Vancouver, and Toronto.
              One clean installation, endless lighting scenes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="h-full border-2 hover:border-primary/20 transition-all hover:shadow-xl"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                {service.features && (
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-neutral-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
            Ready to Light Your Home Year-Round?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Book your permanent LED installation in Calgary, Vancouver, or Toronto. Get a free, no-obligation
            quote in under 24 hours.
          </p>
          <Button asChild size="lg">
            <Link href="/get-a-quote">Get a Free LED Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
