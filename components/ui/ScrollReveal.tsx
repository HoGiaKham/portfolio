"use client";

import { motion, Variants } from "framer-motion"; 
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0 
}: ScrollRevealProps) {
  
  // BƯỚC 2: Gắn kiểu ': Variants' vào đây để TypeScript hết báo lỗi
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}