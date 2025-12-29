import { motion } from 'motion/react';
import { Brain, MessageSquare, BarChart3, Zap, Shield, Globe, Clock, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const coreFeatures = [
  {
    icon: Brain,
    title: 'Advanced AI Models',
    description: 'Powered by cutting-edge machine learning algorithms and neural networks that continuously learn and improve from interactions.',
    benefits: ['GPT-4 Integration', 'Custom Model Training', 'Multi-language Support', 'Contextual Understanding']
  },
  {
    icon: MessageSquare,
    title: 'Conversational AI',
    description: 'Natural language processing that understands context, intent, and sentiment to provide human-like interactions.',
    benefits: ['Natural Dialogue Flow', 'Sentiment Analysis', 'Intent Recognition', '24/7 Availability']
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards and reports that provide actionable insights into customer behavior and business performance.',
    benefits: ['Custom Dashboards', 'Performance Metrics', 'Conversion Tracking', 'ROI Measurement']
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized infrastructure ensures instant responses and seamless user experiences across all devices.',
    benefits: ['Sub-second Response', 'Global CDN', 'Auto-scaling', 'Load Balancing']
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance standards to protect your data and customer information.',
    benefits: ['End-to-End Encryption', 'SOC 2 Compliant', 'GDPR Ready', 'Regular Audits']
  },
  {
    icon: Globe,
    title: 'Omnichannel Support',
    description: 'Deploy AI solutions across multiple platforms including web, mobile, messaging apps, and voice assistants.',
    benefits: ['Web Integration', 'Mobile Apps', 'WhatsApp & SMS', 'Voice Channels']
  }
];

const additionalFeatures = [
  {
    icon: Clock,
    title: 'Appointment Scheduling',
    description: 'Automated booking and calendar management integrated with your existing systems.'
  },
  {
    icon: Users,
    title: 'Customer Segmentation',
    description: 'AI-powered customer profiling and personalized marketing recommendations.'
  },
  {
    icon: Sparkles,
    title: 'Personalization Engine',
    description: 'Tailored experiences based on user behavior, preferences, and historical data.'
  }
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
                <span className="text-sm font-medium text-black">Powerful AI Features</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Features That" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Transform Business" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                Discover the comprehensive suite of AI-powered features designed to automate workflows, 
                enhance customer experiences, and drive measurable business growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton onClick={() => navigate('contact')}>
                  Get Started
                </MagneticButton>
                <MagneticButton onClick={() => navigate('solutions')} variant="secondary">
                  View Solutions
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
                  src="https://images.unsplash.com/photo-1658401598980-c2276a6aba14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3klMjBmZWF0dXJlcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjY3NzIzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="AI Features Dashboard"
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
                      <div className="text-2xl font-bold text-[#002B6B]">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
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
                      <div className="text-2xl font-bold text-[#002B6B]">&lt;0.5s</div>
                      <div className="text-sm text-gray-600">Response Time</div>
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
              Core <span className="text-[#002B6B]">Capabilities</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Enterprise-grade features that power intelligent automation and customer engagement
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
              And <span className="text-[#002B6B]">Much More</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Additional features designed to streamline operations and enhance customer satisfaction
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses already transforming their operations with AI
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Schedule a Demo
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
