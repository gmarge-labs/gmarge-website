import { motion, useMotionValue, useTransform } from 'motion/react';
import { FloatingShapes } from './FloatingShapes';
import { ParticleField } from './ParticleField';
import { TextReveal } from './TextReveal';
import { MagneticButton } from './MagneticButton';
import { Globe3D } from './Globe3D';
import { AINeuron } from './AINeuron';
import { useRouter } from './Router';
import { useEffect } from 'react';

export function Hero() {
  const { navigate } = useRouter();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 2);
      mouseY.set((clientY / innerHeight - 0.5) * 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const x1 = useTransform(mouseX, [-1, 1], [-20, 20]);
  const y1 = useTransform(mouseY, [-1, 1], [-20, 20]);
  const x2 = useTransform(mouseX, [-1, 1], [20, -20]);
  const y2 = useTransform(mouseY, [-1, 1], [20, -20]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated Background */}
      <FloatingShapes />
      <ParticleField count={80} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#BFC0C2 1px, transparent 1px),
                           linear-gradient(90deg, #BFC0C2 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We Create{' '}
              <span className="text-[#002B6B]">
                Intelligent
              </span>
              {' '}AI Agents
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-black mb-6 sm:mb-8 max-w-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business with cutting-edge AI solutions. From development to deployment, we build intelligent agents that deliver real results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <MagneticButton
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#002B6B] text-white relative overflow-hidden hover:bg-[#002B6B] transition-colors text-center"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 43, 107, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('contact')}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Get Started</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Animated Graphics */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
          <AINeuron />
        </div>
      </div>
    </section>
  );
}