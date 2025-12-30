"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Maximize Efficiency",
    description:
      "Managing operations while delivering exceptional representation is a challenge. Our services, from case acquisition to virtual agents, help your firm enhance efficiency and focus on what matters most - your clients.",
    image: "/cases/case-1.webp",
  },
  {
    id: 2,
    title: "Boost Client Growth",
    description:
      "We complement your efforts with services that drive qualified leads and increase visibility, ensuring your clients achieve their marketing goals.",
    image: "/cases/case-3.webp",
  },
  {
    id: 3,
    title: "Streamline Your Practice",
    description:
      "Whether solo or part of a larger team, our flexible solutions help you reduce administrative burdens and grow your practice.",
    image: "/cases/case2-1.webp",
  },
];

export default function WhoWeHelpSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const currentSlide = slides[currentIndex] || slides[0];

  if (!currentSlide) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
    }),
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-16 md:pt-20 pb-20 bg-[#f8f6f3]">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 px-0 md:px-28">
          <div className="space-y-6 flex flex-col items-center justify-center">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-1 rounded-full bg-[#FF9A28]" />
              <span className="font-dm text-sm font-bold tracking-widest text-[#FF3600] uppercase">
                WHO WE HELP?
              </span>
            </motion.div>
          </div>

          <h2 className="font-marcellus text-4xl md:text-5xl text-slate-900 mt-4">
            Your Partner in Success
          </h2>

          <motion.p
            className="font-dm text-base text-slate-600 leading-relaxed pt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At AdvanceEdge, we offer personalized, results-oriented services to legal 
            professionals. Whether navigating complex cases, growing your client base,
            or streamlining operations, we provide the tools and expertise to drive 
            success. Our solutions are designed for the evolving needs of law firms,
            legal marketing firms, and attorneys across the U.S.
          </motion.p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[550px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="absolute inset-0 flex items-center justify-center px-4"
            >
              <div className="relative w-full max-w-5xl h-full">

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full items-center">

                  {/* Left Box */}
                  <motion.div
                    className="bg-gradient-to-br from-[#FF9A28] to-[#e07d00] rounded-lg p-8 md:p-12 text-white shadow-2xl h-66 md:h-96 flex flex-col justify-center relative z-20 -mr-8 md:-mr-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="font-marcellus text-2xl md:text-4xl mb-4 leading-tight">
                      {currentSlide.title}
                    </h3>

                    <p className="font-dm text-lg md:text-lg text-orange-50 leading-relaxed mb-6 flex-grow">
                      {currentSlide.description}
                    </p>

                    {/* Slide dots */}
                    <div className="flex gap-2 mt-6">
                      {slides.map((_, i) => (
                        <motion.button
                          key={i}
                          onClick={() => {
                            setDirection(i > currentIndex ? 1 : -1);
                            setCurrentIndex(i);
                          }}
                          className={`rounded-full transition-all duration-300 ${
                            i === currentIndex
                              ? "w-3 h-3 bg-white"
                              : "w-2 h-2 bg-orange-200 hover:bg-orange-100"
                          }`}
                          whileHover={{ scale: 1.3 }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Image */}
                  <motion.div
                    className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl ml-0 md:-ml-20"
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Image
                      src={currentSlide.image}
                      alt={currentSlide.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow */}
          <motion.button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous"
          >
            <FaChevronLeft className="text-2xl" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/90 hover:bg-white text-slate-800 rounded-full shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next"
          >
            <FaChevronRight className="text-2xl" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
