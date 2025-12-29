'use client'
import React, { useState, useEffect } from 'react';
import { useBookingModal } from "@/context/BookingModalContext";

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = ['Email', 'Leads', 'Growth', 'Sales'];
  const { openBookingModal } = useBookingModal();

  useEffect(() => {
    const fullText = typingTexts[currentTextIndex];
    let timer;

    if (!isDeleting) {
      // Typing
      if (currentCharIndex < fullText.length) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, currentCharIndex + 1));
          setCurrentCharIndex(currentCharIndex + 1);
        }, 80); // Typing speed
      } else {
        // Finished typing, wait before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // Pause duration
      }
    } else {
      // Deleting
      if (currentCharIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(fullText.substring(0, currentCharIndex - 1));
          setCurrentCharIndex(currentCharIndex - 1);
        }, 50); // Deleting speed
      } else {
        // Finished deleting, move to next text
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % typingTexts.length);
        }, 500); // Pause before next word
      }
    }

    return () => clearTimeout(timer);
  }, [currentCharIndex, isDeleting, currentTextIndex]);

  return (
    <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] min-h-[550px] md:min-h-[550px] flex items-center justify-center px-5 pb-0 pt-24 md:pb-0 md:pt-28">
      <div className="max-w-6xl w-full">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight text-white mb-6 tracking-tight">
          
          Where Legal Expertise Meets Digital Innovation          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-5xl">
          Delivering Scalable, Expert-Driven Solutions for Law Firms & Businesses.</p>

          <div className="flex flex-wrap gap-3 items-center">
          <button
        type="button"
        onClick={openBookingModal}
        className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-white/10 backdrop-blur-md font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white/20 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 border-white/30 hover:border-[#FF9A28] rounded-full group text-white font-dm"
      >
        BOOK A CALL
        <svg
          className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-white/20 text-white ease-linear duration-300 rounded-full border border-white/50 group-hover:border-white p-1.5 rotate-45"
          viewBox="0 0 16 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            className="fill-white group-hover:fill-[#FF9A28]"
          ></path>
        </svg>
      </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </section>
  );
}