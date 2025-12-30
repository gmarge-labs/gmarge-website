import { motion, AnimatePresence } from 'motion/react';
import { Code2, Bot, Lightbulb, Zap, Database, TrendingUp, Award, Users } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { useRouter } from '../components/Router';
import { useState } from 'react';

const services = [
  {
    icon: Code2,
    title: 'End-to-End Development',
    description: 'Custom AI solutions built from the ground up. We handle everything from architecture design to deployment and scaling.',
    features: [
      'Custom AI Models',
      'Scalable Infrastructure',
      'Integration Services',
      'Ongoing Support',
      'Performance Optimization',
      'Quality Assurance'
    ],
    image: 'https://backend.coreops.ai/wp-content/uploads/2025/07/Blog-2-Architecture-intelligence.png',
    details: 'Our development team brings years of expertise in building enterprise-grade AI solutions. We follow industry best practices and agile methodologies to deliver solutions that scale with your business.'
  },
  {
    icon: Bot,
    title: 'Ready-to-Deploy AI Solutions',
    description: 'Quick-start AI tools designed for small businesses. Get your custom chatbot or automation system up and running fast.',
    features: [
      'Instant Deployment',
      'Pre-trained Models',
      'Industry Solutions',
      'Quick ROI',
      'Regular Updates',
      'Technical Support'
    ],
    image: 'https://backend.coreops.ai/wp-content/uploads/2025/06/AI-Services-Banner-Dsktp-1.png',
    details: 'Launch your AI solution in days, not months. Our ready-to-deploy chatbots and automation tools are specifically designed for small businesses like restaurants, salons, and service providers who need practical solutions without the complexity.'
  },
  {
    icon: Lightbulb,
    title: 'Strategic Consulting',
    description: 'Expert guidance to navigate your AI transformation. We help you identify opportunities and create actionable roadmaps.',
    features: [
      'AI Strategy',
      'Use Case Discovery',
      'ROI Analysis',
      'Implementation Planning',
      'Change Management',
      'Training Programs'
    ],
    image: 'https://backend.coreops.ai/wp-content/uploads/2025/07/Integrating-AI-into-legacy.png',
    details: 'Transform your organization with data-driven insights. Our consultants help you identify high-impact AI opportunities and build a roadmap for successful implementation.'
  },
];

const additionalServices = [
  { icon: Zap, title: 'AI Automation', description: 'Automate tasks, workflows with enterprise-grade security and privacy compliance' },
  { icon: Database, title: 'Data Science', description: 'ML optimization, computer vision, data pipelines, and seamless cloud integration solutions' },
  { icon: TrendingUp, title: 'Growth Strategy', description: 'Quality-driven processes, enhanced user experience, and sustainable growth' },
];

export function ServicesPage() {
  const { navigate } = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#E8F0FF] to-white">
        <FloatingShapes />
        <ParticleField count={60} />
        
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Trust Badge */}
            <motion.div
              className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white border border-[#BFC0C2] shadow-sm mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#002B6B]" />
                <span className="text-xs sm:text-sm font-medium text-black">Enterprise-Grade Solutions</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#BFC0C2]" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#002B6B]" />
                <span className="text-xs sm:text-sm font-medium text-black">500+ Clients</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#BFC0C2]" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#002B6B]" />
                <span className="text-xs sm:text-sm font-medium text-black">98% Success Rate</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Professional AI Solutions
              <br />
              <span className="text-[#002B6B]">
                Engineered for Excellence
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-black max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Empowering small businesses with cutting-edge artificial intelligence solutions that drive transformation and measurable business outcomes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#002B6B] text-white font-semibold shadow-lg hover:bg-[#002B6B] transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 43, 107, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
              >
                Get Started
              </motion.button>
              <motion.button
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-[#002B6B] font-semibold border-2 border-[#002B6B] hover:bg-[#002B6B] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('solutions')}
              >
                View Solutions
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Services with Overlapping Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.title}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Content Card */}
                    <motion.div
                      className={`relative z-20 ${isEven ? '' : 'lg:col-start-2'}`}
                      initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <motion.div
                        className="bg-white rounded-2xl p-10 shadow-xl border border-[#BFC0C2] hover:border-[#002B6B] transition-all"
                        animate={{
                          x: hoveredIndex === index ? (isEven ? 20 : -20) : 0,
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        {/* Icon */}
                        <motion.div
                          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#002B6B] mb-6"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <h2 className="text-4xl font-bold mb-4 text-black">{service.title}</h2>
                        <p className="text-xl text-black mb-4">{service.description}</p>
                        <p className="text-black mb-6 leading-relaxed">{service.details}</p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={feature}
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3, delay: i * 0.1 }}
                            >
                              <motion.div
                                className="w-2 h-2 rounded-full bg-[#002B6B]"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                              <span className="text-black">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* CTA Button */}
                        <motion.button
                          className="px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold hover:bg-[#002B6B] transition-colors"
                          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 43, 107, 0.3)' }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate('contact')}
                        >
                          Get Started
                        </motion.button>
                      </motion.div>
                    </motion.div>
                    
                    {/* Image Card - Overlapping */}
                    <motion.div
                      className={`relative ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                      initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      <motion.div
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        animate={{
                          x: hoveredIndex === index ? (isEven ? -20 : 20) : 0,
                        }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        {/* Image with Overlay */}
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2 }}
                        />
                        
                        {/* Gradient Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/90 via-[#002B6B]/40 to-transparent"
                          initial={{ opacity: 0.6 }}
                          animate={{
                            opacity: hoveredIndex === index ? 0.3 : 0.6,
                          }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-24 bg-[#E8F0FF]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#6E6F72]">
              Additional{' '}
              <span className="text-[#002B6B]">
                Capabilities
              </span>
            </h2>
            <p className="text-xl text-black">
              Comprehensive solutions for all your AI needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-xl p-6 border border-[#BFC0C2] hover:border-[#002B6B] transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 43, 107, 0.1)' }}
                >
                  <Icon className="w-12 h-12 text-[#002B6B] mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-black">{service.title}</h3>
                  <p className="text-black">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#002B6B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our services can transform your business
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-full bg-white text-[#002B6B] font-semibold hover:bg-[#E8F0FF] transition-colors"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
              >
                Contact Us
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('solutions')}
              >
                View Solutions
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}