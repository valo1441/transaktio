"use client";

import { useEffect, useRef, useState } from "react";

interface NetworkNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  pulsePhase: number;
  pulseSpeed: number;
}

export function CryptoNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<NetworkNode[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Only disable if user prefers reduced motion
    if (prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check if mobile (reduce complexity but still render)
    const isMobile = window.innerWidth < 768;
    // Connection distance - reduced on mobile for better performance
    const connectionDistance = isMobile ? 150 : 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize network nodes (blockchain-inspired)
    // Reduced count on mobile for better performance, but still visible
    const nodeCount = isMobile ? 15 : 35;
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw connections first (behind nodes)
      nodesRef.current.forEach((node, i) => {
        // Update position with gentle movement
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep nodes within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Update pulse phase
        node.pulsePhase += node.pulseSpeed;

        // Draw connections to nearby nodes (blockchain network)
        nodesRef.current.slice(i + 1).forEach((other) => {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Connect nodes within range (represents blockchain connections)
          if (distance < connectionDistance) {
            const opacity = 0.15 * (1 - distance / connectionDistance);
            
            // Create gradient for connection line
            const gradient = ctx.createLinearGradient(
              node.x,
              node.y,
              other.x,
              other.y
            );
            gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity})`); // Purple
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * 0.8})`); // Blue
            gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`); // Purple

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Draw nodes (blockchain nodes with pulse effect)
      nodesRef.current.forEach((node) => {
        // Calculate pulse size (subtle breathing effect)
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 1;
        const currentSize = node.size * pulse;

        // Outer glow (pulse effect)
        const glowGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          currentSize * 3
        );
        glowGradient.addColorStop(0, `rgba(139, 92, 246, ${0.3 * pulse})`);
        glowGradient.addColorStop(0.5, `rgba(59, 130, 246, ${0.2 * pulse})`);
        glowGradient.addColorStop(1, "rgba(139, 92, 246, 0)");

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = glowGradient;
        ctx.fill();

        // Node core (solid center)
        const nodeGradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          currentSize
        );
        nodeGradient.addColorStop(0, "rgba(139, 92, 246, 0.9)");
        nodeGradient.addColorStop(0.7, "rgba(59, 130, 246, 0.7)");
        nodeGradient.addColorStop(1, "rgba(139, 92, 246, 0.5)");

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = nodeGradient;
        ctx.fill();

        // Inner highlight
        ctx.beginPath();
        ctx.arc(node.x - currentSize * 0.3, node.y - currentSize * 0.3, currentSize * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ willChange: "transform" }}
    />
  );
}

