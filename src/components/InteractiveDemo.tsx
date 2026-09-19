import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, LayoutDashboard, Bot, Plug, Bell, TrendingUp, Send } from 'lucide-react';
import { DEMO_SECTION_ID } from '../config/links';
import { useState, useEffect } from 'react';

const messages = [
  { role: 'user', text: 'Why did ROAS drop last week?' },
  { role: 'ai', text: 'Blended ROAS fell from 4.1 to 3.2. About 60% of that is one Meta prospecting campaign whose CPM rose 38% after a creative refresh on the 9th.' },
  { role: 'user', text: 'Is that real, or just noise?' },
  { role: 'ai', text: 'Real. It sits outside the last 12 weeks of normal variance. Your geo holdout shows incremental ROAS held at 2.4 — so the reported drop overstates the actual damage.' },
];

const features = [
  {
    icon: LayoutDashboard,
    title: 'Live Dashboard Monitoring',
    description: 'Your Streamlit dashboard refreshes on its own. The number you see is the number as of this morning, not last month.',
  },
  {
    icon: Bot,
    title: 'AI Agent Interpretation',
    description: 'An agent reads the same data you do and writes the explanation in plain language — what moved, by how much, and why.',
  },
  {
    icon: Plug,
    title: 'Shopify + Meta Ads + GA4',
    description: 'Orders, ad spend, and site behaviour in one place, reconciled against each other instead of three conflicting tabs.',
  },
  {
    icon: Bell,
    title: 'Weekly Anomaly Detection',
    description: 'Creative fatigue, double-firing pixels, budget drifting to the wrong campaign — flagged the week it starts.',
  },
];

export function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState(0);

  return (
    <section id={DEMO_SECTION_ID} className="py-16 sm:py-20 lg:py-24 bg-[#E8F0FF]">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Ask Your Data a Question
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black">
            A live dashboard, plus an AI agent that explains what the numbers are actually saying
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Demo Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Chat Interface Mockup */}
            <motion.div
              className="bg-white border border-[#BFC0C2] rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ boxShadow: '0 0 40px rgba(0, 43, 107, 0.1)' }}
            >
              {/* Window Header */}
              <div className="bg-[#BFC0C2] px-4 py-3 flex items-center gap-2 border-b border-[#BFC0C2]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-[#002B6B]" />
                </div>
                <div className="flex-1 text-center text-black text-sm">
                  Live Dashboard — AI Agent
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-6 space-y-4 min-h-[400px] max-h-[400px] overflow-y-auto bg-white">
                <AnimatePresence>
                  {messages.slice(0, activeDemo + 2).map((message, i) => (
                    <motion.div
                      key={i}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: i * 0.3 }}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-[#002B6B] text-white'
                            : 'bg-[#BFC0C2] text-black border border-[#BFC0C2]'
                        }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {activeDemo < 2 && (
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="bg-[#BFC0C2] px-4 py-3 rounded-2xl border border-[#BFC0C2]">
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-[#002B6B] rounded-full"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Input Field */}
              <div className="px-6 pb-6">
                <div className="bg-[#E8F0FF] rounded-xl px-4 py-3 border border-[#BFC0C2] flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-black" />
                  <input
                    type="text"
                    placeholder="Ask about any metric, campaign, or channel..."
                    className="flex-1 bg-transparent text-black outline-none placeholder-black"
                    disabled
                  />
                  <motion.button
                    className="p-2 rounded-lg bg-[#002B6B] text-white hover:bg-[#002B6B] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Badge */}
            <motion.div
              className="absolute -top-10 -right-10 bg-white border border-[#BFC0C2] rounded-xl p-4 shadow-lg"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-[#002B6B]" />
                <div>
                  <div className="text-sm text-black">Reported vs. Real ROAS</div>
                  <div className="text-2xl font-bold text-[#002B6B]">4:1 → 2.5:1</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Feature Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className={`p-6 rounded-xl border-2 transition-all cursor-pointer ${
                    activeDemo === index
                      ? 'bg-[#002B6B] border-[#002B6B] text-white'
                      : 'bg-white border-[#BFC0C2] hover:border-[#002B6B]'
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  onClick={() => setActiveDemo(index)}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`p-3 rounded-lg ${
                        activeDemo === index
                          ? 'bg-white/20'
                          : 'bg-[#E8F0FF] border border-[#BFC0C2]'
                      }`}
                      animate={activeDemo === index ? { rotate: 360 } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          activeDemo === index ? 'text-white' : 'text-[#002B6B]'
                        }`}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold mb-2 ${
                        activeDemo === index ? 'text-white' : 'text-black'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={activeDemo === index ? 'text-white/90' : 'text-black'}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}