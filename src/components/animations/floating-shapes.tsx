"use client";

import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = [
    { size: 60, x: "10%", y: "20%", duration: 20 },
    { size: 80, x: "80%", y: "30%", duration: 25 },
    { size: 40, x: "50%", y: "70%", duration: 15 },
    { size: 100, x: "20%", y: "80%", duration: 30 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary/5 blur-xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

