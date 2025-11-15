"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      };

      setTrail((prev) => [...prev.slice(-10), newPoint]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
          }}
        />
      ))}
    </div>
  );
}

