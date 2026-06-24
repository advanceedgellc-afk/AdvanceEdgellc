'use client'
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingTexts = ['Email', 'Leads', 'Growth', 'Sales'];

  useEffect(() => {
    const fullText = typingTexts[currentTextIndex];
    let timer: ReturnType<typeof setTimeout>;

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
    <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] min-h-[450px] md:min-h-[450px] flex items-center justify-center px-5 pb-0 pt-24 md:pb-0 md:pt-28">
      <div className="max-w-6xl w-full">
        <div className="animate-fadeIn">
          <h1   className="text-4xl md:text-5xl lg:text-5xl text-center font-light  text-white  tracking-tight">
          Medical Record Retrieval            
          </h1>          
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