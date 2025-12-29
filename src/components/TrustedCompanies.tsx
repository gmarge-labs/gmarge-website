import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const companies = [
  'TechCorp', 'InnovateLab', 'DataFlow', 'CloudSync', 
  'AIVentures', 'SmartSolutions', 'FutureWorks', 'QuantumLeap'
];

const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'Happy Customers', value: '150+' },
  { label: 'AI Innovations', value: '50+' },
];

export function TrustedCompanies() {
  return (
    <section className="py-24 bg-[#E8F0FF] border-y border-[#BFC0C2]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-black">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-black">
            Join 150+ companies transforming their business with AI
          </p>
        </motion.div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              className="flex items-center justify-center p-6 bg-white rounded-xl border border-[#BFC0C2] hover:border-[#002B6B] transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl font-bold text-black">{company}</div>
            </motion.div>
          ))}
        </div>

        {/* Animated Connection Network */}
        <div className="relative h-64 mb-16">
          <svg className="absolute inset-0 w-full h-full">
            {/* Connection Lines */}
            {companies.map((_, i) => {
              if (i >= companies.length - 1) return null;
              const x1 = (i / (companies.length - 1)) * 100;
              const x2 = ((i + 1) / (companies.length - 1)) * 100;
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={`${x1}%`}
                  y1="50%"
                  x2={`${x2}%`}
                  y2="50%"
                  stroke="#BFC0C2"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                />
              );
            })}

            {/* Nodes */}
            {companies.map((_, i) => {
              const x = (i / (companies.length - 1)) * 100;
              return (
                <motion.circle
                  key={`node-${i}`}
                  cx={`${x}%`}
                  cy="50%"
                  r="8"
                  fill="#002B6B"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  <animate
                    attributeName="r"
                    values="8;12;8"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </motion.circle>
              );
            })}
          </svg>
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl p-8 border border-[#BFC0C2]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-5xl font-bold mb-2 text-[#002B6B]"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-black">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}