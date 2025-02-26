"use client";

import { motion } from "framer-motion";

interface BuildingTextProps {
  text: string;
  className?: string;
}

export function BuildingText({ text, className = "" }: BuildingTextProps) {
  const letters = Array.from(text);

  // Her harf için tuğla parçaları
  const brickParts = 3; // Her harf kaç parçaya bölünsün

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.02 * i },
    }),
  };

  const brick = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  return (
    <motion.div
      className={`flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <div key={index} className="relative inline-block">
          {letter === " " ? (
            <span className="mr-2">&nbsp;</span>
          ) : (
            <div className="relative">
              {[...Array(brickParts)].map((_, partIndex) => (
                <motion.div
                  key={partIndex}
                  variants={brick}
                  className="absolute left-0 bg-clip-text text-transparent"
                  style={{
                    top: `${(partIndex / brickParts) * 100}%`,
                    height: `${100 / brickParts}%`,
                    clipPath: `inset(${(partIndex / brickParts) * 100}% 0 ${100 - ((partIndex + 1) / brickParts) * 100}% 0)`,
                    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                    willChange: "transform",
                    color: "currentColor",
                    backgroundImage: "linear-gradient(180deg, currentColor 0%, currentColor 100%)",
                  }}
                >
                  {letter}
                </motion.div>
              ))}
              <span className="invisible">{letter}</span>
            </div>
          )}
        </div>
      ))}
    </motion.div>
  );
} 