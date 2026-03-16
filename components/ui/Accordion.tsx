"use client";

import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-sand rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-soft-brown hover:bg-sand/50 transition-colors"
            >
              <span className="font-medium text-sm">{item.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-300 flex-shrink-0 ml-2
                  ${isOpen ? "rotate-180" : "rotate-0"}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden
                ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <div className="px-4 pb-3 text-sm text-soft-brown/80">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
