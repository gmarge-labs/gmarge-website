import { motion, AnimatePresence } from 'motion/react';
import { Building2, X, CheckCircle, ArrowRight } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { LiquidBlob } from '../components/LiquidBlob';
import { useRouter } from '../components/Router';
import { useState } from 'react';

const solutions = [
  {
    icon: Building2,
    title: 'Custom Small Business Solutions',
    description: 'Personalized AI systems designed specifically for small businesses across all industries',
    features: ['24/7 Customer Service', 'Booking & Scheduling', 'Inventory Management', 'Payment Processing', 'Customer Analytics', 'Multi-Channel Support'],
    color: 'from-[#002B6B] to-[#004B9B]',
    stats: { roi: '18.5x', time: '68%', accuracy: '99%' },
    image: 'https://images.unsplash.com/photo-1762341114881-669da93fef88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBtb2Rlcm58ZW58MXx8fHwxNzY2OTM0NTY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    fullDescription: 'Every small business is unique, and so are our AI solutions. We specialize in creating custom AI assistants tailored to your specific industry, workflow, and business goals. Whether you run a cleaning company, restaurant, hair salon, carpentry business, retail store, coffee shop, photography studio, or any other small business, we build intelligent solutions that integrate seamlessly into your operations and grow with you. Our AI solutions handle everything from customer interactions and appointment scheduling to inventory tracking and payment processing - all available 24/7 to help you capture more business and serve your customers better. Featured success story: Sparkleville Cleaning Company achieved an 18.5x ROI with our custom chatbot, increasing bookings by 85% while reducing response times from hours to seconds.',
    useCases: [
      'G-marge Cleaning Services System : 24/7 booking automation, instant quote generation based on service type and area, customer inquiry handling, service customization, special request management, appointment scheduling, and automated follow-ups - proven 18.5x ROI and 85% booking increase',
      'G-marge Customised Tailoring System: 24/7 booking automation, instant quote generation based on fabric type and garment style, custom measurement collection, fitting appointment coordination, alteration request management, fabric selection guidance, automated progress updates, customer preference preservation, and premium service upselling - proven ROI increase with 85%+ booking growth',
      'G-marge Corporate Wears for US/Europe: Instant bulk order quote generation, size matrix management with employee profile integration, multi-location order consolidation, customization options, bulk order tracking and inventory coordination, employee reorder self-service portal, seasonal renewal automation, contract management, compliance documentation, and regional delivery scheduling - streamlines enterprise apparel operations with reduced administrative overhead and improved employee satisfaction',
    ],
    benefits: [
      'Get a solution built specifically for YOUR business type and workflow',
      'Serve customers 24/7 without hiring additional staff or answering late-night calls',
      'Never miss a booking or inquiry - capture business even when you\'re closed',
      'Reduce operational costs by automating repetitive administrative tasks',
      'Scale your business capacity without proportional increases in labor costs',
      'Improve customer satisfaction with instant responses and zero wait times',
      'Free up your time to focus on what you do best - your craft and growing your business',
      'Integrate with your existing tools: POS systems, booking software, payment processors, and more',
      'Gain valuable insights from customer data and interaction patterns',
      'Provide consistent, professional service every time - no more miscommunications or missed details'
    ],
    technologies: ['Natural Language Processing', 'Machine Learning', 'Custom API Integration', 'Cloud Infrastructure', 'SMS/Email Automation', 'Payment Gateway Integration', 'CRM Connectivity', 'Analytics Dashboard']
  },
];

export function SolutionsPage() {
  const { navigate } = useRouter();
  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900">
        <FloatingShapes />
        <ParticleField count={60} />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Industry{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
              Tailored AI solutions designed for your industry's unique challenges and opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Centered Card */}
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            
            return (
              <motion.div
                key={solution.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
                  whileHover={{
                    y: -8,
                    boxShadow: '0 25px 50px rgba(0, 43, 107, 0.15)',
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Premium Header Section with Image */}
                  <div className="relative h-96 sm:h-[28rem] overflow-hidden">
                    <motion.img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${solution.color} opacity-30`} />
                    
                    {/* Floating Stats Badge */}
                    <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                      <div className="flex gap-6">
                        <div className="text-center">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                            {solution.stats.roi}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">ROI</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                            {solution.stats.accuracy}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Accuracy</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-10 sm:p-12 lg:p-14">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-6 mb-8">
                      <motion.div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-3xl sm:text-4xl font-bold mb-3 text-gray-900">{solution.title}</h3>
                        <p className="text-lg text-gray-600">{solution.description}</p>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
                      {solution.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          className="flex items-center gap-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color} flex-shrink-0`} />
                          <span className="text-sm font-medium text-gray-800">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Industry Solutions */}
                    <div className="mb-10">
                      <h4 className="text-2xl font-bold mb-6 text-gray-900">Industry Products</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {solution.useCases.map((useCase, i) => {
                          const [title, description] = useCase.split(': ');
                          const isFeatured = title.includes('Sparkleville');
                          
                          return (
                            <motion.div
                              key={i}
                              className={`p-5 rounded-xl border-2 transition-all ${
                                isFeatured 
                                  ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50' 
                                  : 'border-gray-200 bg-white hover:border-blue-300'
                              }`}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.1 }}
                              whileHover={{ y: -3 }}
                            >
                              <div className="flex items-start gap-3">
                                <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                  isFeatured ? 'text-emerald-600' : 'text-blue-600'
                                }`} />
                                <div>
                                  <h5 className={`font-bold mb-2 ${
                                    isFeatured ? 'text-emerald-900' : 'text-gray-900'
                                  }`}>
                                    {title}
                                  </h5>
                                  <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full sm:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r ${solution.color} text-white font-bold text-lg shadow-xl mx-auto block`}
                      whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0, 43, 107, 0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSolution(solution)}
                    >
                      Explore Full Details →
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-black">
              A proven methodology for successful AI implementation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your challenges and goals' },
              { step: '02', title: 'Design', description: 'Architect the perfect solution' },
              { step: '03', title: 'Deploy', description: 'Implement and integrate seamlessly' },
              { step: '04', title: 'Deliver', description: 'Ongoing support and optimization' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.div
                  className="text-6xl font-bold bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  {item.step}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-black">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Find the Perfect Solution
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Let's identify which solution best fits your industry and business needs
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-4 rounded-full bg-white text-blue-900 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('contact')}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('services')}
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Details Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3, type: 'spring' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`relative bg-gradient-to-br ${selectedSolution.color} p-8 rounded-t-3xl`}>
                <button
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setSelectedSolution(null)}
                >
                  <X className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-4 mb-4">
                  {(() => {
                    const Icon = selectedSolution.icon;
                    return (
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedSolution.title}
                    </h2>
                    <p className="text-white/90 text-lg">{selectedSolution.description}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white">{selectedSolution.stats.roi}</div>
                    <div className="text-white/80 text-sm">Average ROI</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white">{selectedSolution.stats.time}</div>
                    <div className="text-white/80 text-sm">Time Saved</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white">{selectedSolution.stats.accuracy}</div>
                    <div className="text-white/80 text-sm">Accuracy Rate</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Featured Image */}
                <motion.div 
                  className="mb-8 rounded-2xl overflow-hidden"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={selectedSolution.image} 
                    alt={selectedSolution.title}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>

                {/* Overview */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-black">Overview</h3>
                  <p className="text-black text-lg leading-relaxed">
                    {selectedSolution.fullDescription}
                  </p>
                </div>

                {/* Use Cases & Benefits */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                      <CheckCircle className={`w-6 h-6 bg-gradient-to-r ${selectedSolution.color} bg-clip-text text-transparent`} />
                      Real-World Use Cases
                    </h3>
                    <ul className="space-y-3">
                      {selectedSolution.useCases.map((useCase, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selectedSolution.color} mt-2 flex-shrink-0`} />
                          <span className="text-black">{useCase}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-black flex items-center gap-2">
                      <ArrowRight className={`w-6 h-6 bg-gradient-to-r ${selectedSolution.color} bg-clip-text text-transparent`} />
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {selectedSolution.benefits.map((benefit, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-black">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-black">Core Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedSolution.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        className={`px-4 py-2 rounded-full bg-gradient-to-r ${selectedSolution.color} text-white font-medium`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-gray-200">
                  <motion.button
                    className={`px-8 py-4 rounded-full bg-gradient-to-r ${selectedSolution.color} text-white font-semibold shadow-lg`}
                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedSolution(null);
                      navigate('contact');
                    }}
                  >
                    Schedule a Consultation
                  </motion.button>
                  <motion.button
                    className="px-8 py-4 rounded-full border-2 border-[#BFC0C2] text-black font-semibold hover:bg-[#E8F0FF] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSolution(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}