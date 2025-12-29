import { motion } from 'motion/react';
import { Target, Users, Award, Rocket, Heart, Globe } from 'lucide-react';
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
    title: 'Mission-Driven',
    description: 'We exist to democratize AI and make it accessible to businesses of all sizes',
    color: 'from-[#002B6B] to-[#004B9B]'
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Your success is our success. We partner with you every step of the way',
    color: 'from-[#004B9B] to-[#002B6B]'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in everything we do, from code to customer service',
    color: 'from-[#002B6B] to-[#004B9B]'
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'We push boundaries and stay ahead of the curve in AI technology',
    color: 'from-[#004B9B] to-[#002B6B]'
  },
  {
    icon: Heart,
    title: 'Ethical AI',
    description: 'We build responsible AI solutions that respect privacy and promote fairness',
    color: 'from-[#002B6B] to-[#004B9B]'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'We aim to create positive change that extends beyond business metrics',
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
                <span className="text-xs sm:text-sm font-medium text-black">Innovation-Driven AI Partner</span>
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
                Building the Future of Intelligent Business Solutions
              </motion.p>

              {/* Story Content */}
              <motion.div
                className="space-y-4 sm:space-y-6 text-base sm:text-lg text-black leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p>
                  G-marge is a forward-thinking AI development company founded by experienced AI researchers, software engineers, and business strategists. We empower organizations of all sizes to harness the transformative potential of artificial intelligence.
                </p>
                <p>
                  We combine deep technical expertise with innovative thinking to create AI solutions that are powerful, practical, ethical, and designed for real-world impact.
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
                  { value: '100%', label: 'Client Focused', icon: Users },
                  { value: '24/7', label: 'Support Available', icon: Target },
                  { value: 'AI-First', label: 'Approach', icon: Rocket },
                  { value: 'Global', label: 'Reach', icon: Globe },
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
              The principles that guide everything we do
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
              <span className="text-sm font-medium text-black">World-Class Expertise</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-black">
              A Team of{' '}
              <span className="text-[#002B6B]">
                Data Scientists
              </span>
              ,{' '}<br />
              <span className="text-[#002B6B]">
                AI Researchers
              </span>
              {' '}and{' '}
              <span className="text-[#002B6B]">
                Software Developers
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
                  <span className="text-sm font-medium text-black">Data-Driven Insights</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  <span className="text-[#002B6B]">Data Scientists</span>
                </h3>
                
                <p className="text-lg text-black leading-relaxed mb-6">
                  Our data scientists are experienced analysts who transform raw data into actionable business intelligence. Using advanced machine learning algorithms, statistical modeling, and predictive analytics, they uncover patterns and insights that drive strategic decision-making.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Machine Learning & AI Model Development',
                    'Statistical Analysis & Data Visualization',
                    'Predictive Analytics & Forecasting',
                    'Business Intelligence & Reporting'
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
                  <span className="text-sm font-medium text-black">Cutting-Edge Research</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  <span className="text-[#002B6B]">AI Researchers</span>
                </h3>
                
                <p className="text-lg text-black leading-relaxed mb-6">
                  Our AI researchers are dedicated to exploring and implementing the latest advancements in artificial intelligence. They stay at the forefront of emerging technologies, from natural language processing to computer vision, ensuring our solutions leverage the most innovative approaches available.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Natural Language Processing (NLP)',
                    'Computer Vision & Image Recognition',
                    'Deep Learning & Neural Networks',
                    'Conversational AI & Chatbots'
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
                  <span className="text-sm font-medium text-black">Enterprise-Grade Development</span>
                </motion.div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                  <span className="text-[#002B6B]">Software Developers</span>
                </h3>
                
                <p className="text-lg text-black leading-relaxed mb-6">
                  Our software developers are skilled engineers who build robust, scalable applications using modern technology stacks and industry best practices. They transform AI concepts into production-ready solutions that are reliable, maintainable, and designed to grow with your business.
                </p>
                
                <ul className="space-y-3">
                  {[
                    'Full-Stack Web Application Development',
                    'API Development & System Integration',
                    'Cloud Infrastructure & DevOps',
                    'Quality Assurance & Performance Testing'
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
              Join Our Journey
            </h2>
            <p className="text-xl text-black mb-8">
              Let's build the future of AI together
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold hover:bg-[#002B6B] transition-colors"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 43, 107, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
              >
                Get in Touch
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-[#002B6B] text-[#002B6B] font-semibold hover:bg-[#E8F0FF] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('services')}
              >
                Our Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}