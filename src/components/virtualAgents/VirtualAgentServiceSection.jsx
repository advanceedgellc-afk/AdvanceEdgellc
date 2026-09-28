"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useBookingModal } from "@/context/BookingModalContext";

export default function VirtualAgentSection() {

    const { openBookingModal } = useBookingModal();
  
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Animate counters
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCount1((prev) => (prev < 70 ? prev + 1 : 70));
    }, 30);

    const timer2 = setInterval(() => {
      setCount2((prev) => (prev < 50 ? prev + 1 : 50));
    }, 30);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <section className="bg-[#fffaf1] py-20 px-5 md:px-0 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 ">
          {/* LEFT: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 order-2 md:order-1"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg h-96 md:h-[450px]">
              <Image
                src="/virtualAgents/Agent-as-service.webp"
                alt="Virtual Agent Team"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Buttons */}
            <div className=" flex items-center  flex-col gap-4 pt-10">
              <div className="gap-2">
            <button
                type="button"
                onClick={openBookingModal}
                className="inline-flex justify-center gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md font-semibold border-gray-50  isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FF9A28] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2  rounded-full group text-gray-800 font-dm"
              >
                BOOK A CALL
                <svg
                  className="w-7 h-7 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1.5 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-1 md:order-2"
          >
            {/* Header Tag */}
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF9A28]"></span>
              <span className="text-sm font-bold tracking-widest text-[#FF9A28] uppercase">
                What is VAAS
              </span>
              <span className="w-3 h-3 rounded-full bg-[#FF9A28]"></span>
            </div>

            {/* Main Heading */}
            <h2 className="font-marcellus text-4xl md:text-5xl leading-tight text-slate-900">
              Virtual Agent as a Service
            </h2>

            {/* Description */}
            <p className="font-dm text-base md:text-lg text-slate-600 leading-relaxed">
              VAAS is a cost-effective legal staffing solution that provides trained virtual professionals to handle critical law firm functions. Instead of spending on full-time hires, you get on-demand support at a fraction of the cost.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] mt-1">✓</span>
                <p className="font-dm text-slate-700">Reduce Overhead</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] mt-1">✓</span>
                <p className="font-dm text-slate-700">Boost Productivity</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#FF9A28] mt-1">✓</span>
                <p className="font-dm text-slate-700">Improve Case Outcomes</p>
              </div>
            </div>

            {/* Stats Section with Circular Progress */}
            <div className="grid grid-cols-2 gap-8 pt-4 w-full md:w-[60%]">
              {/* Stat 1 - Cost Savings */}
              <motion.div
                className="flex flex-col items-center opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "400ms",
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#FF9A28"
                      strokeWidth="3"
                      strokeDasharray={`${Math.PI * 2 * 56}`}
                      strokeDashoffset={`${Math.PI * 2 * 56 * (1 - count1 / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">
                      {count1}%
                    </span>
                  </div>
                </div>
                <p className="text-center text-gray-800 text-base font-light">
                  Cost Savings
                </p>
              </motion.div>

              {/* Stat 2 - Workload Reduction */}
              <motion.div
                className="flex flex-col items-center opacity-0 animate-fadeInUp"
                style={{
                  animationDelay: "500ms",
                  animationFillMode: "forwards",
                }}
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="#FF9A28"
                      strokeWidth="3"
                      strokeDasharray={`${Math.PI * 2 * 56}`}
                      strokeDashoffset={`${Math.PI * 2 * 56 * (1 - count2 / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">
                      {count2}%
                    </span>
                  </div>
                </div>
                <p className="text-center text-gray-800 text-base font-light">
                  Workload Reduction
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
