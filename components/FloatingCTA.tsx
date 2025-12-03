"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-4 sm:right-6 z-[90] md:hidden"
    >
      <Button 
        asChild 
        size="lg" 
        className="rounded-full shadow-2xl h-14 min-h-[56px] px-6 text-base font-semibold"
      >
        <Link href="/get-a-quote" className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <span>Get Quote</span>
        </Link>
      </Button>
    </motion.div>
  );
}

