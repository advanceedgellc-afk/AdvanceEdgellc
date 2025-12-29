"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

interface AnimatedButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export default function AnimatedButton({
  href,
  label,
  icon = <FaArrowDown />,
}: AnimatedButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex justify-center"
    >
      <Link href={href}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group px-8 py-4 font-dm font-bold text-lg uppercase tracking-widest overflow-hidden rounded-full transition-all duration-300"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9A28] to-[#e88720] group-hover:from-[#e88720] group-hover:to-[#cc761a] transition-all duration-500" />

          {/* Animated Top-to-Bottom Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center gap-3 text-white">
            <span>{label}</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-xl"
            >
              {icon}
            </motion.div>
          </div>

          {/* Border Glow */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#FF9A28] opacity-0 group-hover:opacity-100"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(255, 154, 40, 0.4)",
                "0 0 0 10px rgba(255, 154, 40, 0.2)",
                "0 0 0 0 rgba(255, 154, 40, 0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.button>
      </Link>
    </motion.div>
  );
}
