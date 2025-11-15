"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";

interface CounterAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  easing?: "easeInQuad" | "easeInCubic" | "easeInQuart" | "easeInExpo" | "easeOutQuart" | "easeOutExpo" | "easeInOutQuad" | "easeInOutCubic" | "easeInOutQuart" | "easeInOutExpo";
}

// Easing functions - Accelerating (ease-in)
const easeInQuad = (t: number): number => t * t;
const easeInCubic = (t: number): number => t * t * t;
const easeInQuart = (t: number): number => t * t * t * t;
const easeInExpo = (t: number): number => t === 0 ? 0 : Math.pow(2, 10 * (t - 1));

// Easing functions - Decelerating (ease-out)
const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
const easeOutExpo = (t: number): number => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

// Easing functions - Accelerating and Decelerating (ease-in-out)
const easeInOutQuad = (t: number): number => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const easeInOutCubic = (t: number): number => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeInOutQuart = (t: number): number => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
const easeInOutExpo = (t: number): number => {
  if (t === 0) return 0;
  if (t === 1) return 1;
  return t < 0.5 
    ? Math.pow(2, 20 * t - 10) / 2
    : (2 - Math.pow(2, -20 * t + 10)) / 2;
};

export function CounterAnimation({ 
  end, 
  start = 0,
  duration = 2, 
  prefix = "", 
  suffix = "",
  className = "",
  easing = "easeInCubic"
}: CounterAnimationProps) {
  const [count, setCount] = useState(start);
  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);
  const { ref, inView } = useInView({ triggerOnce: true });
  const measureRef = useRef<HTMLSpanElement>(null);

  // Calculate the maximum width needed to prevent layout shifts
  // Use both start and end values to ensure we reserve enough space
  const maxWidthText = useMemo(() => {
    const startText = `${prefix}${start.toLocaleString()}${suffix}`;
    const endText = `${prefix}${end.toLocaleString()}${suffix}`;
    // Use the longer text to reserve space
    return startText.length > endText.length ? startText : endText;
  }, [start, end, prefix, suffix]);

  // Measure the width of the maximum text to set min-width
  useEffect(() => {
    // Use requestAnimationFrame to ensure DOM is ready
    const measureWidth = () => {
      if (measureRef.current) {
        const width = measureRef.current.offsetWidth;
        if (width > 0) {
          setMinWidth(width);
        }
      }
    };
    
    // Try immediately and also on next frame
    measureWidth();
    requestAnimationFrame(measureWidth);
  }, [maxWidthText]);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = start;

    // Select the appropriate easing function
    const easingFunction = 
      easing === "easeInQuad" ? easeInQuad :
      easing === "easeInCubic" ? easeInCubic :
      easing === "easeInQuart" ? easeInQuart :
      easing === "easeInExpo" ? easeInExpo :
      easing === "easeOutQuart" ? easeOutQuart :
      easing === "easeOutExpo" ? easeOutExpo :
      easing === "easeInOutQuad" ? easeInOutQuad :
      easing === "easeInOutCubic" ? easeInOutCubic :
      easing === "easeInOutQuart" ? easeInOutQuart :
      easing === "easeInOutExpo" ? easeInOutExpo :
      easeInCubic;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easedProgress = easingFunction(progress);
      setCount(Math.floor(startValue + (end - startValue) * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, start, duration, easing]);

  const currentText = `${prefix}${count.toLocaleString()}${suffix}`;

  return (
    <span 
      className={className}
      style={{ 
        display: 'inline-grid',
        minWidth: minWidth ? `${minWidth}px` : undefined,
      }}
    >
      {/* Hidden element to measure and reserve space */}
      <span 
        ref={measureRef}
        className="invisible inline-block pointer-events-none col-start-1 row-start-1"
        aria-hidden="true"
        style={{ whiteSpace: 'nowrap' }}
      >
        {maxWidthText}
      </span>
      {/* Visible animated counter - overlays the hidden text */}
      <motion.span
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="inline-block col-start-1 row-start-1"
      >
        {currentText}
      </motion.span>
    </span>
  );
}

