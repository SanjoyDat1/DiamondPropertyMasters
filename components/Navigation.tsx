"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/permanent-led-lighting", label: "Permanent All-Season Lighting" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const menuRef = React.useRef<HTMLDivElement>(null);

  // Scroll lock: Prevent body scrolling when menu is open
  // This ensures the page behind the menu cannot be scrolled
  React.useEffect(() => {
    if (mobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      // Lock body scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  // Focus trap: Keep focus within menu when open
  React.useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      firstFocusable?.focus();
    }
  }, [mobileMenuOpen]);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top App Bar - Sticky Navigation */}
      <nav 
        className="sticky top-0 z-[100] w-full border-b border-neutral-200 bg-white/95 backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 md:h-16 items-center justify-between">
            {/* Logo - Left side */}
            <Link 
              href="/" 
              className="flex items-center gap-2 min-h-[48px] min-w-[48px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/logo.PNG"
                alt="Diamond Property Masters"
                width={40}
                height={40}
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
              />
              <div className="text-lg md:text-2xl font-bold text-neutral-900">
                <span className="hidden sm:inline">Diamond Property Masters</span>
                <span className="sm:hidden">DPM</span>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary min-h-[48px] flex items-center",
                    pathname === item.href
                      ? "text-primary"
                      : "text-neutral-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm">
                <Link href="/get-a-quote">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile Hamburger Button - Only visible on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-3 text-neutral-700 hover:bg-neutral-100 min-h-[48px] min-w-[48px] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop - Dark overlay covering entire screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[999] md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />
            
            {/* Menu Panel - Full screen white panel */}
            <motion.div
              ref={menuRef}
              id="mobile-nav-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ opacity: prefersReducedMotion ? 0 : 0, y: prefersReducedMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: prefersReducedMotion ? 0 : 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={{ 
                duration: prefersReducedMotion ? 0 : 0.3,
                ease: [0.25, 0.8, 0.25, 1]
              }}
              className="fixed inset-0 bg-white z-[1000] md:hidden overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full min-h-screen">
                {/* Top Bar - Logo and Close Button */}
                <div className="flex items-center justify-between px-4 sm:px-6 pt-4 pb-4 border-b border-neutral-200 bg-white sticky top-0 z-10">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2 min-h-[48px]"
                    onClick={closeMenu}
                  >
                    <Image
                      src="/logo.PNG"
                      alt="Diamond Property Masters"
                      width={40}
                      height={40}
                      className="h-8 w-8 object-contain"
                    />
                    <div className="text-lg font-bold text-neutral-900">
                      DPM
                    </div>
                  </Link>
                  <button
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center rounded-lg p-3 text-neutral-700 hover:bg-neutral-100 min-h-[48px] min-w-[48px] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Menu Content - Scrollable area */}
                <div className="flex-1 px-4 sm:px-6 pt-6 pb-8">
                  {/* Primary CTA - Prominent placement near top */}
                  <div className="mb-8">
                    <Button 
                      asChild 
                      className="w-full h-14 text-base font-semibold rounded-xl shadow-lg"
                    >
                      <Link href="/get-a-quote" onClick={closeMenu}>
                        Get a Free Quote
                      </Link>
                    </Button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="space-y-2" aria-label="Mobile navigation">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: prefersReducedMotion ? 0 : 0.3,
                          delay: prefersReducedMotion ? 0 : index * 0.05
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className={cn(
                            "block rounded-xl px-4 py-4 text-lg font-semibold transition-colors min-h-[56px] flex items-center",
                            pathname === item.href
                              ? "bg-primary/10 text-primary"
                              : "text-neutral-900 hover:bg-neutral-100 active:bg-neutral-200"
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  {/* Secondary Links Section */}
                  <div className="mt-8 pt-8 border-t border-neutral-200">
                    <Link
                      href="/get-a-quote"
                      onClick={closeMenu}
                      className="block py-3 text-base font-medium text-neutral-600 hover:text-primary transition-colors min-h-[44px] flex items-center"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
