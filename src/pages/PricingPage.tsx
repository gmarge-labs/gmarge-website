import { motion } from 'motion/react';
import { Check, X, Zap, ArrowRight, Activity, Layers, Shield, Crown } from 'lucide-react';
import { bookingCtaProps } from '../config/links';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

const pricingTiers = [
  {
    name: 'Core Package',
    icon: Activity,
    price: '$3,500–5,000',
    period: 'month',
    description: 'Live dashboard + AI agent monitoring, priced on the number of channels and data sources',
    features: [
      { text: 'Live Streamlit dashboard, refreshed daily', included: true },
      { text: 'AI agent that explains what changed and why', included: true },
      { text: 'Shopify, Meta Ads and GA4 connected', included: true },
      { text: 'Weekly anomaly detection and alerts', included: true },
      { text: 'Reported vs. incremental ROAS view', included: true },
      { text: 'Monthly review call with an analyst', included: true },
      { text: 'Dashboard access for your whole team', included: true },
      { text: 'Additional ad platforms on request', included: true },
      { text: 'Deep-dive studies (see add-ons)', included: false }
    ],
    popular: true,
    cta: 'Book a Discovery Call'
  },
  {
    name: 'Deep-Dive Add-Ons',
    icon: Layers,
    price: 'Per project',
    period: '',
    description: 'Periodic studies that run alongside the core package when a specific question needs answering',
    features: [
      { text: 'Campaign evaluation and post-mortems', included: true },
      { text: 'Incrementality testing (geo and matched-market)', included: true },
      { text: 'Customer segmentation modelling', included: true },
      { text: 'Media mix modelling for larger spends', included: true },
      { text: 'Creative and audience performance analysis', included: true },
      { text: 'Custom data sources and warehouse work', included: true },
      { text: 'Written findings and recommendations', included: true },
      { text: 'Quoted after the discovery call', included: true },
      { text: 'Requires an active core package', included: false }
    ],
    popular: false,
    cta: 'Discuss Scope'
  }
];

const faqs = [
  {
    question: 'Why is the core package a range rather than a fixed price?',
    answer: 'Price moves with the number of data sources and ad platforms we connect, and how much cleanup your existing tracking needs. A brand running Shopify, Meta and GA4 with a healthy pixel sits at the bottom of the range. Add Amazon, TikTok, a subscription platform or a messy attribution setup and it moves up. You get the exact number after the discovery call, before any work starts.'
  },
  {
    question: 'How long until the dashboard is live?',
    answer: 'Usually about two weeks from kickoff. The first week is connecting and reconciling your data sources; the second is building the dashboard around the questions you actually ask. The AI agent layer goes on once the underlying numbers are trustworthy — never before.'
  },
  {
    question: 'Do I need an incrementality test to get value from this?',
    answer: 'No. The core package on its own gives you a live, reconciled view of what the platforms are reporting, which already surfaces double-counting and channel overlap. Incrementality testing is the add-on that turns that into a real number, and most clients run their first test in the second or third month.'
  },
  {
    question: 'Who owns the dashboard and the data?',
    answer: 'You do. It runs on your data, and you keep the dashboard and the underlying models if the engagement ends. We do not resell, pool or benchmark your data against other clients.'
  },
  {
    question: 'Is there a minimum commitment?',
    answer: 'Three months, because the first month is mostly setup and one month of data is not enough to tell signal from noise. After that it is month to month with 30 days notice.'
  },
  {
    question: 'What if the analysis says my spend is working fine?',
    answer: 'Then that is the finding, and you get to keep spending with confidence instead of suspicion. We are not paid on how much budget we move. Plenty of engagements end with a smaller set of changes than the client expected — the value is knowing which of your channels are load-bearing.'
  }
];

export default function PricingPage() {
  const { navigate } = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <FloatingShapes />
      <ParticleField />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0FF] border border-[#BFC0C2] mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Transparent Pricing</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="One Retainer," delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="No Surprises" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                A monthly retainer for the live dashboard and AI agent, plus deep-dive studies scoped
                as you need them. No per-seat fees, no usage meters, no annual lock-in.
              </p>

              <div className="flex items-center gap-6 text-black">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#002B6B]" />
                  <span>Free discovery call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#002B6B]" />
                  <span>3-month minimum, then monthly</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#BFC0C2]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1656164631668-8673eab87b84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByaWNpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjY3NzIzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marketing measurement"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
            {pricingTiers.map((tier, index) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <div className="px-4 py-1 bg-gradient-to-r from-[#002B6B] to-[#004A9F] rounded-full text-white text-sm font-medium">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <Card3D>
                    <div className={`p-8 h-full flex flex-col ${tier.popular ? 'border-2 border-[#002B6B]' : ''}`}>
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#002B6B] to-[#004A9F] flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-2 text-black">{tier.name}</h3>
                      <p className="text-black mb-6">{tier.description}</p>

                      <div className="mb-6">
                        {typeof tier.price === 'number' ? (
                          <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-bold text-[#002B6B]">${tier.price}</span>
                            <span className="text-black">/{tier.period}</span>
                          </div>
                        ) : (
                          <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-4xl font-bold text-[#002B6B]">{tier.price}</span>
                            {tier.period && <span className="text-black">/{tier.period}</span>}
                          </div>
                        )}
                      </div>

                      <ul className="space-y-3 mb-8 flex-grow">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            {feature.included ? (
                              <Check className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-0.5" />
                            ) : (
                              <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                            )}
                            <span className={`text-sm ${feature.included ? 'text-black' : 'text-gray-400'}`}>
                              {feature.text}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <MagneticButton
                        {...bookingCtaProps(navigate)}
                        variant={tier.popular ? 'primary' : 'secondary'}
                        className="w-full"
                      >
                        {tier.cta}
                      </MagneticButton>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              What the <span className="text-[#002B6B]">Retainer Buys You</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Typical figures from D2C engagements — your numbers will differ, and we will tell you honestly if they are likely to be smaller
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '30-40%', label: 'Typical gap between reported and real ROAS' },
              { value: '~2 wks', label: 'From kickoff to live dashboard' },
              { value: 'Daily', label: 'Dashboard refresh and agent read' },
              { value: 'Weekly', label: 'Anomaly checks on every channel' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-8 rounded-2xl bg-white border-2 border-[#BFC0C2]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl font-bold text-[#002B6B] mb-3">{stat.value}</div>
                <div className="text-black">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Frequently Asked <span className="text-[#002B6B]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-2 border-[#BFC0C2] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-lg text-black">{faq.question}</span>
                  <ArrowRight
                    className={`w-5 h-5 text-[#002B6B] transition-transform ${
                      openFaq === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-black leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002B6B] to-[#004A9F] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              Not Sure Which You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book 30 minutes. We will look at your current reporting and tell you what is worth doing first.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton
                {...bookingCtaProps(navigate)}
                variant="secondary"
              >
                Book a Discovery Call
              </MagneticButton>
              <MagneticButton onClick={() => navigate('contact')} variant="outline">
                Send Us a Question
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}