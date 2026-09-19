import { motion, useMotionValue, useSpring } from 'motion/react';
import { ReactNode, useRef, MouseEvent as ReactMouseEvent, RefObject } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  /** When set the button renders as a real anchor instead of a <button>. */
  href?: string;
  target?: string;
  rel?: string;
}

export function MagneticButton({ children, className = '', onClick, href, target, rel }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Anchor variant: same wrapper, classes and motion treatment, but a real
  // link so popup blockers cannot swallow the click. display/textAlign restore
  // the two <button> defaults an <a> does not have.
  if (href) {
    return (
      <motion.a
        ref={buttonRef as RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={className}
        style={{ x: springX, y: springY, display: 'inline-block', textAlign: 'center' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as RefObject<HTMLButtonElement>}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
