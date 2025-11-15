"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonPulseProps {
  children: ReactNode;
  className?: string;
}

export function ButtonPulse({ children, className = "" }: ButtonPulseProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-md bg-primary/20 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

