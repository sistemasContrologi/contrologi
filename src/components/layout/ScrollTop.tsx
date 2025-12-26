'use client'

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 100,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.4,
      }}
      className="fixed bottom-8 left-10 z-10 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition-colors cursor-pointer"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  );
}