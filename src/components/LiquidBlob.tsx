import { motion } from 'motion/react';

interface LiquidBlobProps {
  className?: string;
  color?: string;
  size?: number;
}

export function LiquidBlob({ className = '', color = 'emerald', size = 400 }: LiquidBlobProps) {
  const colorVariants = {
    blue: 'from-[#002B6B] to-[#004B9B]',
    indigo: 'from-[#004B9B] to-[#002B6B]',
    primary: 'from-[#002B6B] to-[#001B48]',
  };

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, rgba(0, 43, 107, 0.3) 0%, rgba(0, 75, 155, 0.1) 100%)`,
      }}
      animate={{
        scale: [1, 1.2, 1.1, 1.3, 1],
        x: [0, 30, -20, 40, 0],
        y: [0, -40, 20, -30, 0],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}