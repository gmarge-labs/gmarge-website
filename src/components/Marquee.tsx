import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export function Marquee({ items, direction = 'left', speed = 30, className = '' }: MarqueeProps) {
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}