import React from 'react';
import { motion } from 'motion/react';

export function GoldSprinkles() {
  const particles = Array.from({ length: 45 }).map((_, i) => ({
    id: i,
    size: Math.random() * 2.5 + 1.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[0]">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute bg-primary rounded-full blur-[0.5px]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
            boxShadow: `0 0 ${p.size * 3}px rgba(249,231,191,0.9)`
          }}
          animate={{
            y: [`${p.y}vh`, `${p.y - 20}vh`],
            opacity: [0, Math.random() * 0.5 + 0.3, 0]
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}
