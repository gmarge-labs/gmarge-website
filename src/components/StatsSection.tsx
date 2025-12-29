import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { TrendingUp, Package, DollarSign, Calendar, Award } from 'lucide-react';

function AnimatedCounter({ target, duration = 2000, decimals = 0 }: { target: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count.toFixed(decimals)}</>;
}

export function StatsSection() {
  return (
    <section className="py-24 bg-[#E8F0FF]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 text-black">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-xl text-black">
            Real results from real companies using G-marge AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1: Years of Experience */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-[#BFC0C2] hover:border-[#002B6B] transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-[#002B6B]" />
              <motion.div
                className="w-16 h-16 rounded-full border-4 border-[#BFC0C2] relative"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    borderTopColor: '#002B6B',
                  }}
                />
              </motion.div>
            </div>
            
            <div className="text-5xl font-bold text-black mb-2">
              <AnimatedCounter target={8} />+
            </div>
            <div className="text-black mb-4">Years of Excellence</div>
            
            {/* Circular Timeline */}
            <div className="relative w-full h-16 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 60">
                <motion.circle
                  cx="100"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke="rgba(191, 192, 194, 0.3)"
                  strokeWidth="2"
                />
                <motion.circle
                  cx="100"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeDasharray="157"
                  initial={{ strokeDashoffset: 157 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const x = 100 + Math.cos((angle * Math.PI) / 180) * 25;
                  const y = 30 + Math.sin((angle * Math.PI) / 180) * 25;
                  return (
                    <motion.circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="3"
                      fill="#002B6B"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                    />
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Stat 2: Projects */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-[#BFC0C2] hover:border-[#002B6B] transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="w-8 h-8 text-[#002B6B]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-[#002B6B] to-[#004B9B] opacity-20"
              />
            </div>
            
            <div className="text-5xl font-bold text-black mb-2">
              <AnimatedCounter target={150} />+
            </div>
            <div className="text-black mb-4">Happy Clients</div>
            
            {/* Mini Bar Chart */}
            <div className="flex items-end gap-1 h-16">
              {[40, 60, 45, 80, 70, 90, 100].map((height, i) => (
                <motion.div
                  key={i}
                  className="flex-1 bg-gradient-to-t from-[#002B6B] to-[#004B9B] rounded-t"
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                >
                  {i === 6 && (
                    <motion.div
                      className="w-full h-full relative"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stat 3: Products */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-[#BFC0C2] hover:border-[#002B6B] transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <Package className="w-8 h-8 text-[#002B6B]" />
              <motion.div
                className="w-16 h-16 rounded-full border-4 border-[#BFC0C2] relative"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-transparent"
                  style={{
                    borderTopColor: '#002B6B',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
            
            <div className="text-5xl font-bold text-black mb-2">
              <AnimatedCounter target={25} />+
            </div>
            <div className="text-black mb-4">Products Launched</div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-[#BFC0C2] border border-[#BFC0C2]"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Stat 4: ROI */}
          <motion.div
            className="bg-white rounded-2xl p-8 border border-[#BFC0C2] hover:border-[#002B6B] transition-colors"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-[#002B6B]" />
              <Award className="w-8 h-8 text-[#002B6B]" />
            </div>
            
            <div className="text-5xl font-bold text-black mb-2">
              <AnimatedCounter target={15.6} decimals={1} />x
            </div>
            <div className="text-black mb-4">Average ROI</div>
            
            {/* Line Graph */}
            <svg className="w-full h-16" viewBox="0 0 200 60">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#002B6B" />
                  <stop offset="100%" stopColor="#004B9B" />
                </linearGradient>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M 0,50 L 30,45 L 60,35 L 90,30 L 120,20 L 150,15 L 180,10 L 200,5"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
              <motion.path
                d="M 0,50 L 30,45 L 60,35 L 90,30 L 120,20 L 150,15 L 180,10 L 200,5 L 200,60 L 0,60 Z"
                fill="url(#areaGradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}