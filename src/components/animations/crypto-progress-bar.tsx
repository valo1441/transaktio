"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

interface CryptoProgressBarProps {
  current: number;
  total: number;
  label?: ReactNode;
  showPercentage?: boolean;
  duration?: number;
  className?: string;
}

export function CryptoProgressBar({
  current,
  total,
  label,
  showPercentage = true,
  duration = 2,
  className = "",
}: CryptoProgressBarProps) {
  const percentage = (current / total) * 100;
  const [displayPercentage, setDisplayPercentage] = useState(0);

  useEffect(() => {
    // Animate percentage display smoothly with ease-in-out
    const startTime = Date.now();
    const startValue = 0;
    
    // Ease-in-out cubic function for smooth acceleration and deceleration
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 
        ? 4 * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };
    
    const animatePercentage = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Apply ease-in-out cubic for smooth acceleration and deceleration
      const eased = easeInOutCubic(progress);
      const currentValue = startValue + (percentage - startValue) * eased;
      setDisplayPercentage(Math.floor(currentValue));
      
      if (progress < 1) {
        requestAnimationFrame(animatePercentage);
      } else {
        setDisplayPercentage(Math.floor(percentage));
      }
    };
    
    animatePercentage();
  }, [percentage, duration]);

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Header with label and percentage */}
      <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
        {label && (
          <span className="flex items-center gap-1.5">
            {label}
          </span>
        )}
        {showPercentage && (
          <motion.span
            className="font-semibold text-primary tabular-nums"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            {displayPercentage}%
          </motion.span>
        )}
      </div>

      {/* Progress bar container */}
      <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden border border-slate-600/30">
        {/* Animated gradient fill */}
        <motion.div
          className="relative h-full rounded-full overflow-hidden"
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration, 
            delay: 0.2, 
            ease: [0.4, 0, 0.2, 1] // Cubic bezier for smooth ease-in-out
          }}
        >
          {/* Main gradient fill */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/80" />
          
          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Glowing edge effect */}
          <motion.div
            className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-primary to-transparent opacity-60"
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

        </motion.div>

        {/* Animated glow behind progress bar */}
        <motion.div
          className="absolute inset-0 rounded-full blur-sm opacity-0"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent 70%)",
          }}
          animate={{
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Milestone markers */}
        {[25, 50, 75, 100].map((milestone) => {
          if (milestone > percentage) return null;
          return (
            <motion.div
              key={milestone}
              className="absolute top-0 bottom-0 w-0.5 bg-primary/50"
              style={{ left: `${milestone}%` }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{
                delay: (milestone / 100) * duration + 0.2,
                duration: 0.3,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

