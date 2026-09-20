import { motion, AnimatePresence } from 'motion/react';
import { Search, Activity, Target, ChevronDown, ChevronUp, X } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from './Router';
import { Card3D } from './Card3D';

const services = [
  {
    icon: Search,
    title: 'See the Truth',
    description: 'Platform ROAS vs. real incrementality — the gap costs you money every month',
    features: ['Reported vs. real ROAS', 'Incrementality testing', 'Holdout design', 'Channel overlap analysis'],
    color: 'from-blue-700 to-indigo-600',
    detailedDescription: 'Every ad platform grades its own homework. Meta claims credit for a purchase it merely touched. Google claims the same purchase. Your GA4 last-click model tells a third story. Add them up and your platforms report more revenue than your Shopify account ever received. We close that gap with incrementality measurement: geo holdouts, matched-market tests, and conversion-lift studies that answer one question — what would have happened if we had not run this campaign? A holdout can show Meta reporting 4:1 where the incremental number is nearer 2.5:1 — the gap is specific to your account, which is why it is measured rather than assumed. That is not a reason to stop spending. It is the number you need before you decide where the next dollar goes.',
    benefits: ['Reported vs. incremental ROAS, side by side', 'Holdout and geo-test design that fits your spend', 'Cross-channel overlap and double-counting exposed', 'A defensible number for your board deck', 'Test results you can rerun each quarter'],
  },
  {
    icon: Activity,
    title: 'Live Monitoring',
    description: 'Your dashboard updates automatically — and the AI agent tells you what changed and why',
    features: ['Always-on dashboard', 'AI-written explanations', 'Weekly anomaly detection', 'Shopify + Meta + GA4'],
    color: 'from-indigo-600 to-blue-500',
    detailedDescription: 'A static monthly deck tells you what went wrong three weeks after it went wrong. Your dashboard pulls live from Shopify, Meta Ads, and GA4, so the numbers on screen are the numbers as of this morning. On top of it sits an AI agent that reads the same data you do and writes the explanation in plain language: which campaign moved, how much of the change it accounts for, whether the shift is real or inside normal weekly variance. It flags anomalies before they compound — a creative fatiguing, a pixel firing twice, a prospecting campaign quietly eating the retargeting budget. You get the alert on Tuesday instead of finding it in the month-end review.',
    benefits: ['Live data, not a month-old snapshot', 'Plain-language explanation of every movement', 'Anomalies flagged the week they start', 'No dashboard-building work for your team', 'Built on your own data, in your own stack'],
  },
  {
    icon: Target,
    title: 'Actionable Insights',
    description: 'Not just data — a clear recommendation for what to do next',
    features: ['Budget reallocation', 'Campaign evaluation', 'Segmentation modelling', 'Quarterly deep-dives'],
    color: 'from-blue-600 to-indigo-500',
    detailedDescription: 'Most analytics products stop at the chart and leave the decision to you. We do not. Every finding comes with a recommendation, the size of the expected effect, and the confidence behind it — move this much budget from prospecting to retargeting, pause this creative, raise the bid on this segment. Periodic deep-dives go further: full campaign evaluation, incrementality tests designed around your seasonality, and customer segmentation models that separate the buyers worth reacquiring from the ones who were always going to buy anyway. You make the call. We make sure the call is an informed one.',
    benefits: ['Specific budget moves, with expected impact', 'Campaign evaluation against incremental return', 'Segmentation built on your own purchase data', 'Quarterly deep-dives on the questions that matter', 'Recommendations your team can act on the same day'],
  },
];

export function ServicesSection() {
  const { navigate } = useRouter();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedService((prev: string | null) => (prev === title ? null : title));
  }; 

  const selectedServiceObj = services.find(s => s.title === expandedService) || null;
  const SelectedIcon = selectedServiceObj?.icon;

  const modalJSX = selectedServiceObj ? (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setExpandedService(null)}
        key="service-modal"
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full my-8 max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.95, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 50 }}
          transition={{ duration: 0.3, type: 'spring' }}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Header (deep blue to match Close button) */}
          <div className="relative bg-[#002B6B] p-6 rounded-t-3xl">
            <button
              aria-label="Close"
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
              onClick={() => setExpandedService(null)}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                {SelectedIcon && <SelectedIcon className="w-6 h-6 text-white" />}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedServiceObj.title}</h2>
                <p className="text-white/90">{selectedServiceObj.description}</p>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-3">Overview</h3>
              <p className="text-black leading-relaxed">{selectedServiceObj.detailedDescription || selectedServiceObj.description}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-3">Key Benefits</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedServiceObj.benefits?.map((b, i) => (
                  <li key={i} className="text-sm text-gray-700">• {b}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-3">Features</h4>
              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                {selectedServiceObj.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button className="px-6 py-3 rounded-2xl bg-[#002B6B] text-white" onClick={() => setExpandedService(null)}>Close</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  ) : null;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black">
            See What's Actually Driving Revenue
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black max-w-3xl mx-auto">
            Three things every D2C founder needs from their marketing data — and rarely gets from the ad platforms
          </p>
        </motion.div>

        <AnimatePresence>
          {expandedService && (
            <motion.div
              key="services-backdrop"
              className="fixed inset-0 bg-black/20 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedService(null)}
            />
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto overflow-visible">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.title;
            return (
              <motion.div
                key={service.title}
                className={`group relative h-full overflow-visible ${isExpanded ? 'z-50 md:col-span-2' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24, delay: index * 0.02 }}
                layout
                onClick={() => { if (isExpanded) setExpandedService(null); }}
              >
                <Card3D
                  key={service.title}
                  className={`relative z-50 bg-white border border-[#BFC0C2] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#002B6B] transition-colors hover:shadow-lg h-full flex flex-col justify-between ${isExpanded ? 'shadow-2xl' : ''}`}
                  style={{ transformOrigin: 'center' }}
                  initial={{}}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#E8F0FF] border border-[#BFC0C2] flex items-center justify-center mb-5 sm:mb-6">
                    <Icon className="w-8 h-8 text-[#002B6B]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-black mb-6">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 text-black"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-[#002B6B] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>



                  <motion.button
                    className="w-full px-6 py-3 rounded-full bg-[#002B6B] text-white hover:bg-[#004B9B] transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); toggleExpand(service.title); }}
                  >
                    {isExpanded ? (
                      <>
                        Show Less
                        <ChevronUp className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Learn More
                        <ChevronDown className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </Card3D>
              </motion.div>
            );
          })}
        </div>

        {modalJSX}

      </div>
    </section>
  );
}