"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ScrollDownArrow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only when scrolled down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Shrink button when near top (between 50-300px)
      if (window.scrollY > 50 && window.scrollY <= 300) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 bottom-8 z-40 group"
        >
          {/* Rotating border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-0 rounded-full border-2 border-transparent 
            border-b-[#FF9A28] border-l-[#FF9A28] ${
              isSmall ? "opacity-50" : "opacity-100"
            }`}
          />

          {/* Main button */}
          <motion.div
            whileHover={{ scale: isSmall ? 1.1 : 1.15 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              width: isSmall ? 48 : 50,
              height: isSmall ? 48 : 50,
            }}
            transition={{ duration: 0.3 }}
            className="relative bg-gradient-to-br from-[#FF9A28] to-[#e78920] rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Glow effect */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255,154,40,0.5)",
                  "0 0 40px rgba(255,154,40,0.8)",
                  "0 0 20px rgba(255,154,40,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full"
            />

            {/* Arrow icon with bounce animation */}
            <motion.div
              animate={{ y: [8, 0, 8] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className={`relative z-10 text-white ${
                isSmall ? "text-lg" : "text-2xl"
              }`}
            >
              <FaArrowUp />
            </motion.div>

            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-full"
              animate={{
                y: ["100%", "-100%"],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            />
          </motion.div>

          {/* Tooltip - hidden when small */}
          {!isSmall && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#FF9A28] text-white px-4 py-2 rounded-lg font-dm font-semibold whitespace-nowrap text-sm shadow-lg pointer-events-none"
            >
              Back to Top
            </motion.div>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
