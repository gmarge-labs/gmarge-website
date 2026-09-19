import { motion } from 'motion/react';
import { Target, Users, Award, Rocket, Heart, Globe } from 'lucide-react';
import { BOOKING_URL } from '../config/links';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Marquee } from '../components/Marquee';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { Globe3D } from '../components/Globe3D';
import { LiquidBlob } from '../components/LiquidBlob';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const values = [
  {
    icon: Target,
    title: 'Honest Numbers First',
    description: 'If the incremental number is worse than the reported one, we say so. That is the entire point of hiring us',
    color: 'from-[#002B6B] to-[#004B9B]'
  },
  {
    icon: Users,
    title: 'Built for Founders',
    description: 'Explanations in plain language, not a 40-page deck nobody reads past the summary slide',
    color: 'from-[#004B9B] to-[#002B6B]'
  },
  {
    icon: Award,
    title: 'Measurement Rigour',
    description: 'Holdouts, power calculations, and confidence intervals — not a dashboard that dresses up attribution as causation',
    color: 'from-[#002B6B] to-[#004B9B]'
  },
  {
    icon: Rocket,
    title: 'Live, Not Retrospective',
    description: 'A monthly deck tells you what went wrong three weeks after it went wrong. We would rather flag it on Tuesday',
    color: 'from-[#004B9B] to-[#002B6B]'
  },
  {
    icon: Heart,
    title: 'Your Data Stays Yours',
    description: 'No pooling, no reselling, no benchmarking your performance against other clients. You keep the dashboard',
    color: 'from-[#002B6B] to-[#004B9B]'
  },
  {
    icon: Globe,
    title: 'Small Enough to Care',
    description: 'You talk to the analyst doing the work, not an account manager relaying questions to someone you never meet',
    color: 'from-[#004B9B] to-[#002B6B]'
  },
];

export function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen">
      {/* Merged Hero & Story Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#E8F0FF] to-white">
        <FloatingShapes />
        <ParticleField count={80} />
        
        {/* Subtle Grid Background */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(#002B6B 1px, transparent 1px),
                             linear-gradient(90deg, #002B6B 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Brand Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#BFC0C2] shadow-sm mb-4 sm:mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-[#002B6B]" />
                <span className="text-xs sm:text-sm font-medium text-black">Retail Media Measurement Background</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                About{' '}
                <span className="text-[#002B6B]">
                  G-marge
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-[#002B6B] mb-6 sm:mb-8 font-semibold"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Measurement people who got tired of watching brands optimise toward fiction
              </motion.p>

              {/* Story Content */}
              <motion.div
                className="space-y-4 sm:space-y-6 text-base sm:text-lg text-black leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p>
                  G-marge grew out of eight years of retail media measurement work — incrementality testing,
                  media mix modelling and campaign evaluation for brands spending across Amazon, Walmart and
                  the major ad platforms. The same problem came up on every account: the platform-reported
                  numbers were confidently wrong, and everyone downstream was making decisions on them anyway.
                </p>
                <p>
                  Enterprise brands pay measurement teams to close that gap. D2C brands doing a few hundred
                  thousand a month usually cannot, so they run on whatever Meta tells them. We built this to
                  give those brands the same answer at a price that makes sense at their scale: one live
                  dashboard, an AI agent that reads it daily, and incrementality tests that produce a number
                  you can actually defend.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {[
                  { value: '8 yrs', label: 'In Retail Media Measurement', icon: Users },
                  { value: 'D2C', label: 'Who We Build For', icon: Target },
                  { value: 'Live', label: 'Not Monthly Decks', icon: Rocket },
                  { value: 'Remote', label: 'US and UK Clients', icon: Globe },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-[#BFC0C2] shadow-lg hover:shadow-xl transition-all"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      whileHover={{ y: -5, borderColor: '#002B6B' }}
                    >
                      <Icon className="w-10 h-10 text-[#002B6B] mb-4" />
                      <motion.div
                        className="text-4xl font-bold text-[#002B6B] mb-2"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-black font-medium">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Decorative 3D Globe */}
              <motion.div
                className="absolute -bottom-16 -right-16 w-64 h-64 opacity-30 pointer-events-none"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#002B6B]/20 to-transparent blur-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-black">
              Our{' '}
              <span className="text-[#002B6B]">
                Values
              </span>
            </h2>
            <p className="text-xl text-black">
              What we will and will not do with your marketing data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-8 border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 43, 107, 0.05)' }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-[#E8F0FF] border border-[#BFC0C2] flex items-center justify-center mb-6`}
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <Icon className="w-8 h-8 text-[#002B6B]" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-black">{value.title}</h3>
                  <p className="text-black">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <FloatingShapes />
        <ParticleField count={50} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0FF] border border-[#BFC0C2] mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Users className="w-5 h-5 text-[#002B6B]" />
              <span className="text-sm font-medium text-black">The Three Disciplines</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-black">
              This Work Needs{' '}
              <span className="text-[#002B6B]">
                Measurement Science
              </span>
              ,{' '}<br />
              <span className="text-[#002B6B]">
                AI Engineering
              </span>
              {' '}and{' '}
              <span className="text-[#002B6B]">
                Data Plumbing
              </span>
            </h2>
          </motion.div>

          {/* Expertise Highlights */}
          <div className="space-y-16 mt-16 max-w-6xl mx-auto">
            {/* Data Scientists */}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#BFC0C2]"
                  whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(0, 43, 107, 0.2)' }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src="https://backend.coreops.ai/wp-content/uploads/2025/06/AI-Services-Banner-Dsktp-1.png"
                    alt="Data Scientists at work"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/60 to-transparent" />
                </motion.div>
              </div>
              
              <div className="order-1 lg:order-2">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0FF] border border-[#BFC0C2] mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Target className="w-5 h-5 text-[#002B6B]" />
                  <span className="text-sm font-medium text-black">Causal, Not Correlational</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  <span className="text-[#002B6B]">Measurement Science</span>
                </h3>
                
                <p className="text-lg text-black leading-relaxed mb-6">
                  Attribution tells you which touchpoint was nearby when someone bought. Measurement tells you whether the ad caused the purchase. The difference is usually 30-40% of your reported ROAS, and closing it takes holdout design, power calculations and an honest treatment of uncertainty — not a prettier dashboard.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Geo Holdout & Matched-Market Test Design',
                    'Incrementality & Conversion Lift Studies',
                    'Media Mix Modelling (Bayesian)',
                    'Customer Segmentation & LTV Modelling'
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-black"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#002B6B]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AI Researchers */}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0FF] border border-[#BFC0C2] mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Award className="w-5 h-5 text-[#002B6B]" />
                  <span className="text-sm font-medium text-black">Agents That Explain</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  <span className="text-[#002B6B]">AI Engineering</span>
                </h3>
                
                <p className="text-lg text-black leading-relaxed mb-6">
                  A number on a dashboard still needs someone to read it. We build agent workflows that sit on top of your reconciled data and write the interpretation — which campaign moved, how much of the change it explains, and whether it sits inside normal weekly variance or outside it. The agent never guesses at data it cannot see.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Agentic Workflows Over Live Data',
                    'Plain-Language Performance Narratives',
                    'Anomaly Detection & Alerting',
                    'Natural-Language Querying of Your Metrics'
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-black"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#002B6B]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#BFC0C2]"
                  whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(0, 43, 107, 0.2)' }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src="https://backend.coreops.ai/wp-content/uploads/2025/07/Tax-litigation.png"
                    alt="AI Researchers working on advanced technologies"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/60 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* Software Developers */}
            <motion.div
              className="grid lg:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#BFC0C2]"
                  whileHover={{ scale: 1.02, boxShadow: '0 30px 60px rgba(0, 43, 107, 0.2)' }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src="https://backend.coreops.ai/wp-content/uploads/2025/07/Blog-1-Unveiling-CoreOps-Ai.png"
                    alt="Software Developers building scalable solutions"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/60 to-transparent" />
                </motion.div>
              </div>
              
              <div className="order-1 lg:order-2">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0FF] border border-[#BFC0C2] mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Rocket className="w-5 h-5 text-[#002B6B]" />
                  <span className="text-sm font-medium text-black">The Unglamorous Part</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  <span className="text-[#002B6B]">Data Plumbing</span>
                </h3>
                
                <p className="text-lg text-black leading-relaxed mb-6">
                  None of the above works if the underlying data is wrong. Most engagements start by finding a pixel firing twice, a currency mismatch, or a channel quietly taking credit for organic demand. We connect the sources, reconcile them against your actual orders, and keep the pipeline running so the dashboard stays trustworthy.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Shopify, Meta Ads and GA4 Connectors',
                    'Revenue Reconciliation Against Orders',
                    'Tracking & Pixel Audits',
                    'Streamlit Dashboards and Scheduled Refreshes'
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      className="flex items-center gap-3 text-black"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#002B6B]" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-6 text-black">
              Want to Know Your Real Number?
            </h2>
            <p className="text-xl text-black mb-8">
              Thirty minutes on your current reporting, and an honest read on whether this is worth doing at your spend level
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold hover:bg-[#002B6B] transition-colors"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 43, 107, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (BOOKING_URL) {
                    window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
                  } else {
                    navigate('contact');
                  }
                }}
              >
                Book a Discovery Call
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-[#002B6B] text-[#002B6B] font-semibold hover:bg-[#E8F0FF] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('services')}
              >
                What We Do
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}