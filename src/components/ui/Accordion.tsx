"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
  icon?: LucideIcon;
};

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full xl:max-w-[70%] mx-auto divide-y divide-gray-300 border-b border-gray-300 bg-white">
      {items.map((item, index) => {
        const Icon = item.icon;
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                {Icon && <Icon className="text-accent" size={20} />}
                <span className="font-bold text-lg text-primary">{item.title}</span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="text-primary" size={25} />
              </motion.div>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3 text-secondary border-t-[0.5px] border-gray-200">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
