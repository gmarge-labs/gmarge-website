import { motion, AnimatePresence } from 'motion/react';
import { LineChart, FlaskConical, Users2, Zap, Database, TrendingUp, Award, Users } from 'lucide-react';
import { bookingCtaProps, BOOKING_IS_EXTERNAL, BOOKING_ANCHOR_STYLE } from '../config/links';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { useRouter } from '../components/Router';
import { useState } from 'react';

const services = [
  {
    icon: LineChart,
    title: 'Live Dashboard + AI Agent',
    description: 'The core engagement. A dashboard that pulls live from your stack, and an agent that reads it every day and tells you what changed.',
    features: [
      'Shopify, Meta Ads, GA4',
      'Daily automatic refresh',
      'Plain-language explanations',
      'Weekly anomaly alerts',
      'Reported vs. incremental view',
      'Monthly analyst review'
    ],
    image: 'https://backend.coreops.ai/wp-content/uploads/2025/07/Blog-2-Architecture-intelligence.png',
    details: 'We connect your order data, ad spend, and site analytics into one reconciled Streamlit dashboard, then put an AI agent on top of it. The agent reads the same numbers you do and writes the explanation: which campaign moved, how much of the change it accounts for, and whether the shift is real or inside normal weekly variance. Live in roughly two weeks.'
  },
  {
    icon: FlaskConical,
    title: 'Incrementality Testing',
    description: 'The honest number. Geo holdouts and matched-market tests that answer what would have happened if you had not run the campaign.',
    features: [
      'Geo holdout design',
      'Matched-market tests',
      'Conversion lift studies',
      'Statistical power checks',
      'Channel overlap analysis',
      'Repeatable test framework'
    ],
    image: 'https://backend.coreops.ai/wp-content/uploads/2025/06/AI-integration.png',
    details: 'Every ad platform grades its own homework, which is why your platform-reported revenue exceeds what Shopify actually recorded. We design holdout tests sized to your spend and seasonality, run them cleanly, and give you a defensible incremental ROAS per channel. In most D2C engagements the real number lands 30-40% below what the platforms claim.'
  },
  {
    icon: Users2,
    title: 'Segmentation & Deep-Dives',
    description: 'Periodic studies on the questions the dashboard raises but cannot answer on its own.',
    features: [
      'Customer segmentation',
      'Campaign evaluation',
      'Creative and audience analysis',
      'Media mix modelling',
      'Retention and LTV cuts',
      'Written recommendations'
    ],
    image: 'https://backend.coreops.ai/wp-content/uploads/2025/07/Integrating-AI-into-legacy.png',
    details: 'Built on your own purchase data, not an industry benchmark. Segmentation separates the customers worth reacquiring from the ones who were always going to buy. Campaign evaluation grades spend against incremental return rather than platform-attributed return. Each study ends with specific recommendations and the confidence behind them.'
  },
];

const additionalServices = [
  { icon: Zap, title: 'Tracking Audit', description: 'Pixel and server-side event checks, double-firing, and the attribution gaps that quietly inflate every report you read' },
  { icon: Database, title: 'Data Pipeline Work', description: 'Warehouse setup, custom connectors, and reconciling ad platform exports against your actual order data' },
  { icon: TrendingUp, title: 'Budget Planning', description: 'Scenario modelling on incremental returns so next quarter\'s allocation is a decision, not a guess' },
];

export function ServicesPage() {
  const { navigate } = useRouter();
  // Real anchor when a booking URL is configured, so popup blockers cannot
  // swallow the click; plain button routing to /contact otherwise.
  const BookingCta = BOOKING_IS_EXTERNAL ? motion.a : motion.button;
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
                <span className="text-xs sm:text-sm font-medium text-black">Incrementality-First</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#BFC0C2]" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#002B6B]" />
                <span className="text-xs sm:text-sm font-medium text-black">Built for D2C</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-[#BFC0C2]" />
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-[#002B6B]" />
                <span className="text-xs sm:text-sm font-medium text-black">Live in ~2 Weeks</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Marketing Measurement
              <br />
              <span className="text-[#002B6B]">
                You Can Actually Trust
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-black max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Live dashboards, honest incrementality numbers, and an AI agent that explains your marketing performance in plain language. Built for D2C e-commerce brands.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <BookingCta
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#002B6B] text-white font-semibold shadow-lg hover:bg-[#002B6B] transition-all"
                style={BOOKING_IS_EXTERNAL ? BOOKING_ANCHOR_STYLE : undefined}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 43, 107, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                {...bookingCtaProps(navigate)}
              >
                Book a Discovery Call
              </BookingCta>
              <motion.button
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-white text-[#002B6B] font-semibold border-2 border-[#002B6B] hover:bg-[#002B6B] hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('solutions')}
              >
                How It Works
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
                        <BookingCta
                          className="px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold hover:bg-[#002B6B] transition-colors"
                          style={BOOKING_IS_EXTERNAL ? BOOKING_ANCHOR_STYLE : undefined}
                          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 43, 107, 0.3)' }}
                          whileTap={{ scale: 0.95 }}
                          {...bookingCtaProps(navigate)}
                        >
                          Book a Discovery Call
                        </BookingCta>
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
              Supporting{' '}
              <span className="text-[#002B6B]">
                Work
              </span>
            </h2>
            <p className="text-xl text-black">
              The groundwork that makes the headline numbers trustworthy
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
              Find Out What Your Data Is Hiding
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Thirty minutes, no deck. We look at your current reporting and tell you where the gap probably is.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BookingCta
                className="px-8 py-4 rounded-full bg-white text-[#002B6B] font-semibold hover:bg-[#E8F0FF] transition-colors"
                style={BOOKING_IS_EXTERNAL ? BOOKING_ANCHOR_STYLE : undefined}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                {...bookingCtaProps(navigate)}
              >
                Book a Discovery Call
              </BookingCta>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('solutions')}
              >
                How It Works
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}