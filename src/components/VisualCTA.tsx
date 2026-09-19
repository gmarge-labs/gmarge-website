import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';
import { useRouter } from './Router';
import { BOOKING_URL, DEMO_URL, scrollToDemo } from '../config/links';
import { Globe3D } from './Globe3D';
import { LiquidBlob } from './LiquidBlob';

export function VisualCTA() {
  const { navigate } = useRouter();

  return (
    <section className="relative py-20 sm:py-24 lg:py-28 bg-[#002B6B] overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px),
                           linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm backdrop-blur-sm border border-white/30">
                Stop Guessing
              </span>
            </motion.div>

            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Start Measuring What's Real
            </h2>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Book a 30-minute discovery call. We'll look at your current reporting, show you where the
              reported and incremental numbers are likely to diverge, and tell you honestly whether this is
              worth doing for a brand your size.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                className="group relative px-8 py-4 rounded-full bg-white text-[#002B6B] font-semibold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (BOOKING_URL) {
                    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
                  } else {
                    navigate('contact');
                  }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#002B6B] to-[#004B9B]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-white transition-colors">Book a Discovery Call</span>
              </motion.button>

              <motion.button
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-[#002B6B] transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (DEMO_URL) {
                    window.open(DEMO_URL, '_blank', 'noopener,noreferrer');
                  } else {
                    scrollToDemo();
                  }
                }}
              >
                See a Demo
              </motion.button>
            </div>

            {/* Feature Highlights */}
            <motion.div
              className="mt-12 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: CheckCircle, label: 'Free discovery call' },
                { icon: Zap, label: 'Live in about 2 weeks' },
                { icon: Shield, label: 'Your data stays yours' },
                { icon: TrendingUp, label: 'Incrementality-first' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-2 text-white/90"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                    <span>{item.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* 3D Cube Visualization */}
            <div className="relative w-full h-[500px]">
              {/* Center Circle with Pulse */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>

              {/* Floating Data Points */}
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const radius = 150;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm border border-white/50"
                    style={{
                      transform: `translate(${200 + x}px, ${200 + y}px)`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                );
              })}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {[...Array(4)].map((_, i) => {
                  const angle = (i / 4) * Math.PI * 2;
                  const radius = 150;
                  const x1 = 250;
                  const y1 = 250;
                  const x2 = 250 + Math.cos(angle) * radius;
                  const y2 = 250 + Math.sin(angle) * radius;

                  return (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(255, 255, 255, 0.2)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  );
                })}
              </svg>

              {/* Orbital Rings */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={`ring-${i}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20"
                  style={{
                    width: `${200 + i * 60}px`,
                    height: `${200 + i * 60}px`,
                  }}
                  animate={{
                    rotate: i % 2 === 0 ? 360 : -360,
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {/* Nodes on the ring */}
                  {[...Array(6)].map((_, nodeIndex) => {
                    const angle = (nodeIndex / 6) * Math.PI * 2;
                    const x = Math.cos(angle) * 50;
                    const y = Math.sin(angle) * 50;

                    return (
                      <motion.div
                        key={nodeIndex}
                        className="absolute w-2 h-2 rounded-full bg-white"
                        style={{
                          top: '50%',
                          left: '50%',
                          marginLeft: `${x}%`,
                          marginTop: `${y}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: nodeIndex * 0.2,
                        }}
                      />
                    );
                  })}
                </motion.div>
              ))}

              {/* Glow Effect */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="w-80 h-80 rounded-full bg-white/10 blur-3xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <motion.path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="#FFFFFF"
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </svg>
      </div>
    </section>
  );
}