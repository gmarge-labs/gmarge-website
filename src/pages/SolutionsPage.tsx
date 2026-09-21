import { motion, AnimatePresence } from 'motion/react';
import { Gauge, X, CheckCircle, ArrowRight } from 'lucide-react';
import { bookingCtaProps, BOOKING_IS_EXTERNAL, BOOKING_ANCHOR_STYLE } from '../config/links';
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
    icon: Gauge,
    title: 'The Measurement Engagement',
    description: 'One live dashboard, one AI agent, and a standing answer to the question of what your marketing spend is actually doing',
    features: ['Shopify Orders', 'Meta Ads Spend', 'GA4 Behaviour', 'Incremental ROAS', 'Anomaly Alerts', 'Monthly Review'],
    color: 'from-[#002B6B] to-[#004B9B]',
    stats: { roi: '—', time: '~2 wks', accuracy: 'Daily' },
    image: '/images/solutions.jpg',
    imageAlt:
      'Engagement timeline: connect and reconcile, dashboard live, holdout test, weekly read-outs, quarterly deep dives',
    fullDescription: 'Most D2C brands are running on numbers that three different systems disagree about. Meta claims credit for an order. Google claims the same order. GA4 last-click tells a third story, and the sum of platform-reported revenue exceeds what Shopify actually banked. Decisions get made anyway, because the alternative is making no decision at all. This engagement replaces that with one reconciled view. We connect your order data, ad spend and site analytics into a live Streamlit dashboard, put an AI agent on top that reads it daily and writes the explanation in plain language, and run incrementality tests alongside it to establish what your spend is genuinely causing rather than merely witnessing. Real ROAS almost always sits below the platform-reported figure, but by how much is specific to your channel mix. Knowing that number does not mean spending less. It means spending the same money where it actually works.',
    useCases: [
      'Week 1 — Connect and reconcile: we wire up Shopify, Meta Ads and GA4, then reconcile platform-reported revenue against your actual orders. This step alone usually surfaces double-counting, a mis-firing pixel, or a channel taking credit for demand it never created.',
      'Week 2 — Dashboard and agent go live: the Streamlit dashboard is built around the questions you actually ask, not a generic template. The AI agent layer goes on once the underlying numbers are trustworthy, never before. You get access for your whole team.',
      'Month 2 onward — Incrementality testing: we design a geo holdout or matched-market test sized to your spend and seasonality, run it cleanly for six weeks, and give you a defensible incremental ROAS per channel that you can take to a board meeting.',
      'Ongoing — Weekly anomaly detection: creative fatigue, a prospecting campaign quietly eating retargeting budget, a tracking change on the site. You get the alert on Tuesday instead of finding it in the month-end review.',
      'Quarterly — Deep-dive studies: customer segmentation, campaign evaluation against incremental return, media mix modelling for larger spends. Scoped as the dashboard raises questions it cannot answer on its own.',
    ],
    benefits: [
      'One reconciled number instead of three systems disagreeing',
      'See reported and incremental ROAS side by side, per channel',
      'Plain-language explanation of every movement, written daily',
      'Anomalies flagged the week they start, not a month later',
      'Budget decisions backed by a holdout test rather than platform attribution',
      'No dashboard-building or maintenance work for your team',
      'Defensible figures for board and investor conversations',
      'Runs on your own data, in your own stack — you keep it if we part ways',
      'Segmentation built on your actual purchase history, not industry benchmarks',
      'Honest advice about when a finding is too small to act on',
    ],
    technologies: ['Streamlit', 'Python', 'Shopify API', 'Meta Marketing API', 'GA4 / BigQuery', 'Geo Holdout Design', 'Bayesian MMM', 'LLM Agent Layer']
  },
];

export function SolutionsPage() {
  const { navigate } = useRouter();
  // Real anchor when a booking URL is configured, so popup blockers cannot
  // swallow the click; plain button routing to /contact otherwise.
  const BookingCta = BOOKING_IS_EXTERNAL ? motion.a : motion.button;
  // typed off the data it holds; plain useState(null) inferred `never`,
  // which made every property read on it a type error
  const [selectedSolution, setSelectedSolution] = useState<(typeof solutions)[number] | null>(null);

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
              How It{' '}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Works
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto">
              From three conflicting dashboards to one number you can defend — here is what the engagement actually involves
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
                  <div className="relative aspect-[16/5] overflow-hidden">
                    <motion.img
                      src={solution.image}
                      alt={solution.imageAlt}
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
                          <div className="text-xs text-gray-600 mt-1">ROAS Gap</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-3xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                            {solution.stats.accuracy}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">Refresh</div>
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
                      <h4 className="text-2xl font-bold mb-6 text-gray-900">What Happens, Week by Week</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {solution.useCases.map((useCase, i) => {
                          const [title, description] = useCase.split(': ');
                          const isFeatured = title.includes('Month 2');
                          
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
              The{' '}
              <span className="bg-gradient-to-r from-blue-800 to-indigo-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-black">
              Four steps, about two weeks to live, then it runs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Connect', description: 'Wire up Shopify, Meta Ads and GA4' },
              { step: '02', title: 'Reconcile', description: 'Find where the platforms disagree' },
              { step: '03', title: 'Interpret', description: 'Dashboard and AI agent go live' },
              { step: '04', title: 'Test', description: 'Holdouts turn reported into real' },
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
              See Where Your Gap Is
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Thirty minutes on your current reporting setup, and an honest read on whether this is worth doing at your spend level
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <BookingCta
                className="px-8 py-4 rounded-full bg-white text-blue-900 font-semibold"
                style={BOOKING_IS_EXTERNAL ? BOOKING_ANCHOR_STYLE : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                {...bookingCtaProps(navigate)}
              >
                Book a Discovery Call
              </BookingCta>
              <motion.button
                className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('services')}
              >
                What We Do
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
                  aria-label="Close"
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
                    <div className="text-white/80 text-sm">Typical ROAS Gap</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white">{selectedSolution.stats.time}</div>
                    <div className="text-white/80 text-sm">Time to Live</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-white">{selectedSolution.stats.accuracy}</div>
                    <div className="text-white/80 text-sm">Data Refresh</div>
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
                    alt={selectedSolution.imageAlt}
                    className="w-full aspect-[16/5] object-cover"
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
                      What Happens, Week by Week
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