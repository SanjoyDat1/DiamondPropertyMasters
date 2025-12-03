import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Diamond Property Masters
            </h3>
            <p className="text-sm leading-relaxed">
              Permanent all-season outdoor LED lighting for homes in Calgary, Vancouver, and Toronto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition-colors block min-h-[44px] flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/permanent-led-lighting"
                  className="hover:text-primary transition-colors block min-h-[44px] flex items-center"
                >
                  LED Lighting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors block min-h-[44px] flex items-center"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/results"
                  className="hover:text-primary transition-colors block min-h-[44px] flex items-center"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors block min-h-[44px] flex items-center"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/get-a-quote"
                  className="hover:text-primary transition-colors block min-h-[44px] flex items-center"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Locations</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="font-semibold text-white">Calgary (Head Office)</p>
                <p className="text-neutral-400 text-xs mb-1">Calgary & Area</p>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+15875812767" className="hover:text-primary transition-colors">
                    +1 (587) 581-2767
                  </a>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+14034623003" className="hover:text-primary transition-colors">
                    +1 (403) 462-3003
                  </a>
                </div>
              </li>
              <li className="pt-3 border-t border-neutral-800">
                <p className="font-semibold text-white">Vancouver</p>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+17786683315" className="hover:text-primary transition-colors">
                    +1 (778) 668-3315
                  </a>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:van@diamondpropertymasters.ca" className="hover:text-primary transition-colors">
                    van@diamondpropertymasters.ca
                  </a>
                </div>
              </li>
              <li className="pt-3 border-t border-neutral-800">
                <p className="font-semibold text-white">Toronto</p>
                <div className="flex items-center gap-2 mt-1">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+16478778449" className="hover:text-primary transition-colors">
                    +1 (647) 877-8449
                  </a>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a href="mailto:yyz@diamondpropertymasters.ca" className="hover:text-primary transition-colors">
                    yyz@diamondpropertymasters.ca
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Serving Calgary, Vancouver, and Toronto with permanent LED lighting.</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <a
                  href="mailto:info@diamondpropertymasters.ca"
                  className="hover:text-primary transition-colors"
                >
                  info@diamondpropertymasters.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 border-t border-neutral-800 pt-6 md:pt-8 text-center text-sm space-y-2">
          <p>© {new Date().getFullYear()} Diamond Property Masters. All rights reserved.</p>
          <p className="text-xs text-neutral-500">
            Fully insured & incorporated. Proudly lighting homes in Calgary, Vancouver, and Toronto.
          </p>
        </div>
      </div>
    </footer>
  );
}
