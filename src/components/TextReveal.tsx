import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface TextRevealProps {
  /** Text to reveal. Alternative to passing the string as children. */
  text?: string;
  children?: ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, children, className = '', delay = 0 }: TextRevealProps) {
  const content = text ?? (typeof children === 'string' ? children : '');
  const words = content.split(' ').filter(Boolean);

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.05,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
