"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ArchitectTextProps {
  text: string;
  className?: string;
}

export function ArchitectText({ text, className = "" }: ArchitectTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -90
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const gridVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.08,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Mimari grid arka plan */}
      <motion.div 
        className="absolute inset-0"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="architectGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <path d="M 0 20 L 40 20 M 20 0 L 20 40" fill="none" stroke="currentColor" strokeWidth="0.25"/>
            <circle cx="20" cy="20" r="1" fill="currentColor"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#architectGrid)" />
        </svg>
      </motion.div>

      {/* Animasyonlu metin */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative flex flex-wrap justify-center perspective-1000"
      >
        {letters.map((letter, index) => (
          <motion.div
            key={index}
            className="relative mx-1"
            variants={letterVariants}
            style={{ transformStyle: "preserve-3d" }}
          >
            {letter === " " ? (
              <span className="w-4">&nbsp;</span>
            ) : (
              <>
                {/* Harf */}
                <span className="relative z-10 text-current block">
                  {letter}
                </span>
                
                {/* Alt çizgi */}
                <svg
                  className="absolute -bottom-2 left-0"
                  width="100%"
                  height="2"
                  viewBox="0 0 100 2"
                >
                  <motion.line
                    x1="0"
                    y1="1"
                    x2="100"
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    variants={lineVariants}
                  />
                </svg>

                {/* Dikey çizgiler */}
                <svg
                  className="absolute -bottom-6 left-0"
                  width="100%"
                  height="24"
                  viewBox="0 0 100 24"
                >
                  {/* Sol dikey çizgi */}
                  <motion.line
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    variants={lineVariants}
                  />
                  {/* Sağ dikey çizgi */}
                  <motion.line
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    variants={lineVariants}
                  />
                  {/* Alt yatay çizgi */}
                  <motion.line
                    x1="0"
                    y1="24"
                    x2="100"
                    y2="24"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    variants={lineVariants}
                  />
                </svg>
              </>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 