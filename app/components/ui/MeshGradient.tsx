"use client";

import { motion } from "framer-motion";

export function MeshGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-bg-primary" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -right-1/4 w-3/4 h-3/4 bg-accent-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-1/4 -left-1/4 w-3/4 h-3/4 bg-accent-secondary/20 rounded-full blur-[120px]"
      />
    </div>
  );
}
