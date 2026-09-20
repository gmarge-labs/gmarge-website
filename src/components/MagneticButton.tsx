import { motion, useMotionValue, useSpring } from 'motion/react';
import type { MotionProps } from 'motion/react';
import { ReactNode, useRef, MouseEvent as ReactMouseEvent, RefObject } from 'react';

/**
 * Call sites have always passed a `variant`, but the component never declared
 * or used it, so any button relying on it for styling rendered as bare text:
 * both /pricing tier CTAs and the /features hero CTA among them. The variants
 * below reuse the class vocabulary of the site's hand-styled buttons.
 *
 * A call site that passes its own className and no variant keeps exactly the
 * styling it had, so the buttons that were already correct do not move.
 */
const VARIANTS = {
  primary: 'px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold transition-colors',
  secondary:
    'px-8 py-4 rounded-full bg-white text-[#002B6B] font-semibold border-2 border-[#002B6B] transition-colors',
  // Both outline call sites sit in the dark navy CTA bands at the foot of a
  // page, where a navy outline is navy-on-navy. White reads there.
  outline:
    'px-8 py-4 rounded-full border-2 border-white text-white font-semibold transition-colors',
} as const;

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof VARIANTS;
  onClick?: () => void;
  /** When set the button renders as a real anchor instead of a <button>. */
  href?: string;
  target?: string;
  rel?: string;
  /**
   * Hover and tap treatments. Call sites passed these long before the
   * component read them, so the hero CTA's scale and glow never ran. They
   * compose with the magnetic x/y spring rather than replacing it.
   */
  whileHover?: MotionProps['whileHover'];
  whileTap?: MotionProps['whileTap'];
}

export function MagneticButton({
  children,
  className = '',
  variant,
  onClick,
  href,
  target,
  rel,
  whileHover,
  whileTap = { scale: 0.95 },
}: MagneticButtonProps) {
  const base = variant ? VARIANTS[variant] : className ? '' : VARIANTS.primary;
  const classes = [base, className].filter(Boolean).join(' ');
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
        className={classes}
        style={{ x: springX, y: springY, display: 'inline-block', textAlign: 'center' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        whileHover={whileHover}
        whileTap={whileTap}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as RefObject<HTMLButtonElement>}
      className={classes}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={whileHover}
      whileTap={whileTap}
    >
      {children}
    </motion.button>
  );
}
