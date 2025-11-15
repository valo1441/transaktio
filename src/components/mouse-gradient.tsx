"use client";

import { useEffect, useState } from "react";

export function MouseGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Primary gradient that follows mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1000"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, transparent 50%)`,
        }}
      />
      {/* Secondary subtle gradient for depth */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-1500"
        style={{
          opacity: isVisible ? 0.5 : 0,
          background: `radial-gradient(circle 800px at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.08) 0%, transparent 60%)`,
        }}
      />
    </>
  );
}

