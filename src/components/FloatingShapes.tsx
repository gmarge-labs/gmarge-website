import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    { size: '64px', x: 80, y: 20, floatY: -30, floatX: 0, duration: 8 },
    { size: '48px', x: 20, y: 60, floatY: 40, floatX: 0, duration: 6 },
    { size: '32px', x: 33, y: 50, floatY: -20, floatX: 20, duration: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            background: 'radial-gradient(circle, #002B6B 0%, transparent 70%)',
          }}
          animate={{
            y: [0, shape.floatY, 0],
            x: [0, shape.floatX, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
}