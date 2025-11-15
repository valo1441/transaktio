"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
}

const sizeMap = {
  sm: { container: "w-8 h-8", shapes: { circle: 6, hexagon: 5, diamond: 4 } },
  md: { container: "w-10 h-10", shapes: { circle: 8, hexagon: 7, diamond: 6 } },
  lg: { container: "w-12 h-12", shapes: { circle: 10, hexagon: 9, diamond: 8 } },
  xl: { container: "w-16 h-16", shapes: { circle: 14, hexagon: 12, diamond: 10 } },
};

export function Logo({ className, size = "md", animated = true }: LogoProps) {
  const dimensions = sizeMap[size];
  
  // Brand colors: Purple, Blue, Teal gradient
  const colors = {
    circle: {
      fill: "rgba(139, 92, 246, 0.9)", // Purple
      glow: "rgba(139, 92, 246, 0.3)",
    },
    hexagon: {
      fill: "rgba(59, 130, 246, 0.9)", // Blue
      glow: "rgba(59, 130, 246, 0.3)",
    },
    diamond: {
      fill: "rgba(20, 184, 166, 0.9)", // Teal
      glow: "rgba(20, 184, 166, 0.3)",
    },
  };

  const containerVariants = animated
    ? {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, ease: "easeOut" as const },
      }
    : {};

  const shapeVariants = animated
    ? {
        circle: {
          initial: { opacity: 0, scale: 0, x: -10 },
          animate: { opacity: 1, scale: 1, x: 0 },
          transition: { delay: 0.1, duration: 0.4, ease: "easeOut" as const },
        },
        hexagon: {
          initial: { opacity: 0, scale: 0, y: -10 },
          animate: { opacity: 1, scale: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.4, ease: "easeOut" as const },
        },
        diamond: {
          initial: { opacity: 0, scale: 0, x: 10 },
          animate: { opacity: 1, scale: 1, x: 0 },
          transition: { delay: 0.3, duration: 0.4, ease: "easeOut" as const },
        },
      }
    : {};

  const pulseVariants = animated
    ? {
        circle: {
          animate: {
            scale: [1, 1.1, 1],
            opacity: [0.9, 1, 0.9],
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut" as const,
          },
        },
        hexagon: {
          animate: {
            scale: [1, 1.15, 1],
            opacity: [0.9, 1, 0.9],
          },
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 0.5,
          },
        },
        diamond: {
          animate: {
            scale: [1, 1.12, 1],
            opacity: [0.9, 1, 0.9],
          },
          transition: {
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1,
          },
        },
      }
    : {};

  // Calculate positions for centered layout
  const centerX = 20;
  const centerY = 20;
  const spacing = 8;

  return (
    <motion.div
      className={cn("relative", dimensions.container, className)}
      {...containerVariants}
    >
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle (Sphere) - Left */}
        <motion.g
          initial={shapeVariants.circle?.initial}
          animate={{
            ...shapeVariants.circle?.animate,
            ...pulseVariants.circle?.animate,
          }}
          transition={shapeVariants.circle?.transition || pulseVariants.circle?.transition}
        >
          {/* Outer glow */}
          <circle
            cx={centerX - spacing}
            cy={centerY}
            r={dimensions.shapes.circle + 2}
            fill={colors.circle.glow}
            style={{ filter: "blur(2px)" }}
          />
          {/* Main circle */}
          <circle
            cx={centerX - spacing}
            cy={centerY}
            r={dimensions.shapes.circle}
            fill={colors.circle.fill}
            style={{
              filter: "drop-shadow(0 0 4px rgba(139, 92, 246, 0.5))",
            }}
          />
          {/* Inner highlight */}
          <circle
            cx={centerX - spacing - dimensions.shapes.circle * 0.3}
            cy={centerY - dimensions.shapes.circle * 0.3}
            r={dimensions.shapes.circle * 0.4}
            fill="rgba(255, 255, 255, 0.3)"
          />
        </motion.g>

        {/* Hexagon - Center */}
        <motion.g
          initial={shapeVariants.hexagon?.initial}
          animate={{
            ...shapeVariants.hexagon?.animate,
            ...pulseVariants.hexagon?.animate,
          }}
          transition={shapeVariants.hexagon?.transition || pulseVariants.hexagon?.transition}
        >
          {/* Outer glow */}
          <polygon
            points={getHexagonPoints(centerX, centerY, dimensions.shapes.hexagon + 2)}
            fill={colors.hexagon.glow}
            style={{ filter: "blur(2px)" }}
          />
          {/* Main hexagon */}
          <polygon
            points={getHexagonPoints(centerX, centerY, dimensions.shapes.hexagon)}
            fill={colors.hexagon.fill}
            style={{
              filter: "drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))",
            }}
          />
          {/* Inner highlight */}
          <polygon
            points={getHexagonPoints(
              centerX - dimensions.shapes.hexagon * 0.2,
              centerY - dimensions.shapes.hexagon * 0.2,
              dimensions.shapes.hexagon * 0.4
            )}
            fill="rgba(255, 255, 255, 0.3)"
          />
        </motion.g>

        {/* Diamond (Square rotated 45°) - Right */}
        <motion.g
          initial={shapeVariants.diamond?.initial}
          animate={{
            ...shapeVariants.diamond?.animate,
            ...pulseVariants.diamond?.animate,
          }}
          transition={shapeVariants.diamond?.transition || pulseVariants.diamond?.transition}
        >
          {/* Outer glow */}
          <polygon
            points={getDiamondPoints(centerX + spacing, centerY, dimensions.shapes.diamond + 2)}
            fill={colors.diamond.glow}
            style={{ filter: "blur(2px)" }}
          />
          {/* Main diamond */}
          <polygon
            points={getDiamondPoints(centerX + spacing, centerY, dimensions.shapes.diamond)}
            fill={colors.diamond.fill}
            style={{
              filter: "drop-shadow(0 0 4px rgba(20, 184, 166, 0.5))",
            }}
          />
          {/* Inner highlight */}
          <polygon
            points={getDiamondPoints(
              centerX + spacing - dimensions.shapes.diamond * 0.2,
              centerY - dimensions.shapes.diamond * 0.2,
              dimensions.shapes.diamond * 0.4
            )}
            fill="rgba(255, 255, 255, 0.3)"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}

// Helper function to generate hexagon points
function getHexagonPoints(centerX: number, centerY: number, radius: number): string {
  const points: string[] = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6; // Start at top
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

// Helper function to generate diamond points (square rotated 45°)
function getDiamondPoints(centerX: number, centerY: number, size: number): string {
  const halfSize = size / Math.sqrt(2); // Adjust for 45° rotation
  return [
    `${centerX},${centerY - halfSize}`, // Top
    `${centerX + halfSize},${centerY}`, // Right
    `${centerX},${centerY + halfSize}`, // Bottom
    `${centerX - halfSize},${centerY}`, // Left
  ].join(" ");
}

