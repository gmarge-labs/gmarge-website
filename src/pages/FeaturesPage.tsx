import { motion } from 'motion/react';
import { Brain, Bot, BarChart3, Zap, Shield, Plug, Bell, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { DEMO_URL, scrollToDemo, bookingCtaProps } from '../config/links';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const coreFeatures = [
  {
    icon: BarChart3,
    title: 'Live Dashboard Monitoring',
    description: 'A Streamlit dashboard that pulls fresh from your stack every day, so the number on screen is today\'s number rather than last month\'s.',
    benefits: ['Daily automatic refresh', 'Built around your questions', 'Team-wide access', 'Yours to keep']
  },
  {
    icon: Bot,
    title: 'AI Agent Interpretation',
    description: 'An agent reads the same data you do and writes the explanation in plain language — what moved, how much of the change it accounts for, and whether it matters.',
    benefits: ['Plain-language summaries', 'Change attribution', 'Signal vs. noise checks', 'Ask it follow-up questions']
  },
  {
    icon: Plug,
    title: 'Shopify + Meta Ads + GA4',
    description: 'Orders, ad spend and site behaviour reconciled against each other in one place, instead of three tabs telling three different stories.',
    benefits: ['Shopify order data', 'Meta Marketing API', 'GA4 and BigQuery', 'More platforms on request']
  },
  {
    icon: Bell,
    title: 'Weekly Anomaly Detection',
    description: 'Creative fatigue, double-firing pixels, budget drifting to the wrong campaign. Flagged the week it starts, not in the month-end review.',
    benefits: ['Channel-level alerts', 'Variance-aware thresholds', 'Tracking break detection', 'Weekly digest']
  },
  {
    icon: Brain,
    title: 'Incrementality Measurement',
    description: 'Geo holdouts and matched-market tests that separate the sales your ads caused from the ones they merely witnessed.',
    benefits: ['Holdout test design', 'Statistical power checks', 'Per-channel incremental ROAS', 'Repeatable each quarter']
  },
  {
    icon: Shield,
    title: 'Your Data Stays Yours',
    description: 'Everything runs on your own data in your own stack. We do not pool it, resell it, or benchmark it against other clients.',
    benefits: ['No data resale', 'No cross-client pooling', 'You keep the dashboard', 'Access revoked on request']
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: 'Customer Segmentation',
    description: 'Models built on your own purchase history that separate customers worth reacquiring from those who were always going to buy.'
  },
  {
    icon: Zap,
    title: 'Campaign Evaluation',
    description: 'Post-mortems that grade spend against incremental return rather than the credit the platform assigned itself.'
  },
  {
    icon: Sparkles,
    title: 'Media Mix Modelling',
    description: 'For larger spends, a Bayesian MMM that handles saturation and carryover across channels and offline effects.'
  },
];

export default function FeaturesPage() {
  const { navigate } = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <FloatingShapes />
      <ParticleField />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F0FF] border border-[#BFC0C2] mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">What You Get</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Everything In" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="The Core Package" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                A live dashboard, an AI agent that reads it for you, and the incrementality work that turns
                platform-reported numbers into ones you can defend. All included in the monthly retainer.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton {...bookingCtaProps(navigate)}>
                  Book a Discovery Call
                </MagneticButton>
                <MagneticButton onClick={() => navigate('solutions')} variant="secondary">
                  How It Works
                </MagneticButton>
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
                  src="/images/features.jpg"
                  alt="Marketing performance dashboard"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
                
                {/* Floating Stats */}
                <motion.div
                  className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#002B6B] flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#002B6B]">Daily</div>
                      <div className="text-sm text-gray-600">Data Refresh</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#002B6B] flex items-center justify-center">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#002B6B]">~2 wks</div>
                      <div className="text-sm text-gray-600">To Go Live</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
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
              What's <span className="text-[#002B6B]">Included</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Six things the core retainer covers, every month, with no usage meters or per-seat fees
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card3D>
                    <div className="p-8 h-full">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#002B6B] to-[#004A9F] flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        {feature.title}
                      </h3>
                      
                      <p className="text-black mb-6 leading-relaxed">
                        {feature.description}
                      </p>

                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-black">
                            <CheckCircle2 className="w-4 h-4 text-[#002B6B] flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Deep-Dive <span className="text-[#002B6B]">Add-Ons</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Periodic studies scoped per project, run alongside the core package when a specific question needs answering
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  className="relative p-8 rounded-2xl border-2 border-[#BFC0C2] bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Icon className="w-12 h-12 text-[#002B6B] mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                  <p className="text-black">{feature.description}</p>
                </motion.div>
              );
            })}
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
              Want to See It Running?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Take a look at the live dashboard and the agent explaining a real ROAS drop.
            </p>
            <MagneticButton
              onClick={() => {
                if (DEMO_URL) {
                  window.open(DEMO_URL, '_blank', 'noopener,noreferrer');
                } else {
                  navigate('home');
                  setTimeout(scrollToDemo, 400);
                }
              }}
              variant="secondary"
            >
              See a Demo
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
