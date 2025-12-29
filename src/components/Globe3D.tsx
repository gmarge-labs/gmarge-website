import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function Globe3D() {
  const [dots, setDots] = useState<Array<{ x: number; y: number; scale: number; delay: number }>>([]);

  useEffect(() => {
    const generatedDots = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 0.5 + 0.5,
      delay: Math.random() * 2,
    }));
    setDots(generatedDots);
  }, []);

  return (
    <div className="relative w-96 h-96">
      {/* Globe Container */}
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-600/20"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Grid Lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`lat-${i}`}
            className="absolute left-0 right-0 border-t border-blue-600/10"
            style={{
              top: `${(i + 1) * 12.5}%`,
              transform: `rotateX(${i * 22.5}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`long-${i}`}
            className="absolute top-0 bottom-0 left-1/2 border-l border-blue-600/10"
            style={{
              transform: `translateX(-50%) rotateY(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        {/* Animated Dots */}
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              transform: `translateZ(${dot.scale * 50}px)`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: dot.delay,
            }}
          />
        ))}
      </motion.div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700/20 to-indigo-600/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
    </div>
  );
}