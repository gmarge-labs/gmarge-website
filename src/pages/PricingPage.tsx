import { motion } from 'motion/react';
import { Check, X, Zap, ArrowRight, MessageSquare, BarChart3, Shield, Crown } from 'lucide-react';
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
    name: 'Starter',
    icon: MessageSquare,
    price: 299,
    period: 'month',
    description: 'Perfect for small businesses getting started with AI',
    features: [
      { text: 'Up to 1,000 conversations/month', included: true },
      { text: 'Basic chatbot integration', included: true },
      { text: 'Email support', included: true },
      { text: 'Standard analytics dashboard', included: true },
      { text: 'Single website integration', included: true },
      { text: 'Advanced AI models', included: false },
      { text: 'Custom branding', included: false },
      { text: 'Priority support', included: false },
      { text: 'Multi-channel deployment', included: false }
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    icon: BarChart3,
    price: 799,
    period: 'month',
    description: 'For growing businesses ready to scale',
    features: [
      { text: 'Up to 5,000 conversations/month', included: true },
      { text: 'Advanced chatbot customization', included: true },
      { text: 'Priority email & chat support', included: true },
      { text: 'Advanced analytics & reporting', included: true },
      { text: 'Up to 3 website integrations', included: true },
      { text: 'Advanced AI models (GPT-4)', included: true },
      { text: 'Custom branding', included: true },
      { text: 'WhatsApp & SMS integration', included: true },
      { text: 'API access', included: false }
    ],
    popular: true,
    cta: 'Start Free Trial'
  }
];

const faqs = [
  {
    question: 'What happens after my free trial ends?',
    answer: 'Your free trial lasts 14 days with full access to your chosen plan. After the trial, you can choose to subscribe or downgrade to our free tier with limited features.'
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for Starter and Professional plans. Enterprise customers receive personalized onboarding with no additional charges.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'All plans include email support. Professional plans add priority chat support, while Enterprise customers get a dedicated account manager and phone support.'
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access until the end of your billing period.'
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
                <TextReveal text="Simple Pricing," delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Powerful Results" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                Choose the perfect plan for your business. All plans include a 14-day free trial 
                with no credit card required. Scale as you grow.
              </p>

              <div className="flex items-center gap-6 text-black">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#002B6B]" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#002B6B]" />
                  <span>No credit card required</span>
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
                  alt="Pricing Strategy"
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
                          <div className="text-4xl font-bold text-[#002B6B]">{tier.price}</div>
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
                        onClick={() => navigate('contact')}
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
              Proven <span className="text-[#002B6B]">Return on Investment</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our clients see measurable results within the first 30 days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '18.5x', label: 'Average ROI' },
              { value: '67%', label: 'Cost Reduction' },
              { value: '24/7', label: 'Availability' },
              { value: '94%', label: 'Customer Satisfaction' }
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton onClick={() => navigate('contact')} variant="secondary">
                Start Free Trial
              </MagneticButton>
              <MagneticButton onClick={() => navigate('contact')} variant="outline">
                Contact Sales
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}