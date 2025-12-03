"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  value,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-neutral-200">
      <button
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-primary"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold pr-8">{question}</span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        )}
      >
        <p className="text-neutral-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ id: string; question: string; answer: string }>;
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  return (
    <div className={cn("w-full", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openItem === item.id}
          onToggle={() =>
            setOpenItem(openItem === item.id ? null : item.id)
          }
        />
      ))}
    </div>
  );
}

