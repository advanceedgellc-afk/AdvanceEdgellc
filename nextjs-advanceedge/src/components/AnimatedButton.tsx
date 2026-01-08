"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowDown } from "lucide-react";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type MotionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // Allow motion props without strict typing
  whileHover?: any;
  whileTap?: any;
};

const LazyMotionButton = dynamic<MotionButtonProps>(
  () =>
    import("framer-motion").then(
      (mod) => mod.motion.button as React.ComponentType<MotionButtonProps>
    ),
  { ssr: false }
);

interface AnimatedButtonProps {
  href: string;
  label: string;
  icon?: ReactNode;
}

export default function AnimatedButton({
  href,
  label,
  icon = <ArrowDown className="w-5 h-5" />,
}: AnimatedButtonProps) {
  return (
    <div className="flex justify-center">
      <Link href={href}>
        <LazyMotionButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-8 py-4 font-dm font-bold text-lg uppercase tracking-widest overflow-hidden rounded-full transition-all duration-300"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A28] to-[#e88720] group-hover:from-[#e88720] group-hover:to-[#cc761a] transition-all duration-500" />

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center gap-3 text-white">
            <span>{label}</span>
            <div className="text-xl group-hover:translate-y-1 transition-transform duration-300">
              {icon}
            </div>
          </div>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#FF9A28]/50 transition-all duration-300" />
        </LazyMotionButton>
      </Link>
    </div>
  );
}
