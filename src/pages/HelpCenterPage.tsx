import { motion } from 'motion/react';
import { HelpCircle, Search, MessageCircle, Book, Video, Mail, Phone, Clock, ArrowRight, ChevronDown } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

const supportCategories = [
  {
    icon: MessageCircle,
    title: 'Getting Started',
    description: 'Learn the basics and set up your first AI chatbot',
    articles: 12,
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Book,
    title: 'Integration & Setup',
    description: 'Connect G-marge AI to your website and platforms',
    articles: 18,
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for common tasks',
    articles: 8,
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: HelpCircle,
    title: 'Troubleshooting',
    description: 'Solutions to common problems and errors',
    articles: 24,
    color: 'from-green-500 to-green-600'
  }
];

const faqCategories = [
  {
    category: 'General Questions',
    faqs: [
      {
        question: 'What is G-marge AI?',
        answer: 'G-marge AI is a comprehensive platform that provides AI-powered chatbots and automation solutions specifically designed for small businesses. We help businesses automate customer interactions, generate leads, and improve customer service 24/7.'
      },
      {
        question: 'How does the AI chatbot work?',
        answer: 'Our chatbot uses advanced natural language processing (NLP) and machine learning to understand customer queries and provide intelligent responses. It learns from every interaction to continuously improve its accuracy and relevance.'
      },
      {
        question: 'Can I customize the chatbot for my business?',
        answer: 'Absolutely! Every chatbot is fully customizable to match your brand, industry, and specific business needs. You can customize the personality, responses, appearance, and integration points.'
      }
    ]
  },
  {
    category: 'Technical Support',
    faqs: [
      {
        question: 'How do I integrate the chatbot on my website?',
        answer: 'Integration is simple with our JavaScript snippet. Just copy the code from your dashboard and paste it before the closing </body> tag on your website. We also provide plugins for WordPress, Shopify, and other popular platforms.'
      },
      {
        question: 'What browsers are supported?',
        answer: 'Our chatbot works on all modern browsers including Chrome, Firefox, Safari, and Edge. We ensure compatibility with both desktop and mobile browsers.'
      },
      {
        question: 'Is there an API available?',
        answer: 'Yes! We provide a comprehensive REST API for developers who want to build custom integrations or connect G-marge AI to their existing systems. API access is available on Professional and Enterprise plans.'
      }
    ]
  },
  {
    category: 'Billing & Pricing',
    faqs: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for Enterprise customers.'
      },
      {
        question: 'Can I change my plan anytime?',
        answer: 'Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes take effect immediately, and we prorate charges accordingly.'
      },
      {
        question: 'Do you offer refunds?',
        answer: 'We offer a 14-day money-back guarantee on all plans. If you\'re not satisfied within the first 14 days, contact us for a full refund.'
      }
    ]
  }
];

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Get help via email',
    contact: 'halimabl@gmarge.com',
    responseTime: 'Within 24 hours',
    action: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Talk to our team',
    contact: '+1 207 900 7700',
    responseTime: 'Mon-Fri, 9AM-6PM EST',
    action: 'Call Now'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with support',
    contact: 'Available on website',
    responseTime: 'Average 5 min response',
    action: 'Start Chat'
  }
];

export default function HelpCenterPage() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

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
                <HelpCircle className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">24/7 Support</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="How Can We" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Help You?" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                Find answers to your questions, explore our knowledge base, or reach out to our 
                support team. We're here to help you succeed.
              </p>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[#BFC0C2] focus:border-[#002B6B] focus:outline-none text-black"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {['Setup Guide', 'Integration', 'Billing', 'API Docs'].map((tag) => (
                  <button
                    key={tag}
                    className="px-4 py-2 rounded-full bg-gray-100 hover:bg-[#E8F0FF] text-sm text-black transition-colors"
                  >
                    {tag}
                  </button>
                ))}
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
                  src="https://images.unsplash.com/photo-1709715357479-591f9971fb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWxwfGVufDF8fHx8MTc2NjY5NDk1OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Customer Support"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
                
                {/* Support Stats */}
                <motion.div
                  className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-[#002B6B]" />
                    <div>
                      <div className="text-2xl font-bold text-[#002B6B]">&lt;5min</div>
                      <div className="text-sm text-gray-600">Avg Response</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Categories */}
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
              Browse by <span className="text-[#002B6B]">Category</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Find helpful resources organized by topic
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card3D>
                    <div className="p-6 h-full cursor-pointer">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-black">
                        {category.title}
                      </h3>
                      
                      <p className="text-black mb-4 text-sm leading-relaxed">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{category.articles} articles</span>
                        <ArrowRight className="w-5 h-5 text-[#002B6B]" />
                      </div>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
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

          {faqCategories.map((category, catIndex) => (
            <div key={category.category} className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-black">{category.category}</h3>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const faqId = `${catIndex}-${faqIndex}`;
                  const isExpanded = expandedFaq === faqId;

                  return (
                    <motion.div
                      key={faqId}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                      className="border-2 border-[#BFC0C2] rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(faqId)}
                        className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-bold text-lg text-black pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-[#002B6B] flex-shrink-0 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isExpanded && (
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
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Options */}
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
              Still Need <span className="text-[#002B6B]">Help?</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our support team is ready to assist you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card3D>
                    <div className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#002B6B] to-[#004A9F] flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 text-black">
                        {option.title}
                      </h3>
                      
                      <p className="text-black mb-4">{option.description}</p>
                      
                      <div className="mb-4">
                        <div className="font-bold text-[#002B6B] mb-1">{option.contact}</div>
                        <div className="text-sm text-gray-600">{option.responseTime}</div>
                      </div>

                      <MagneticButton
                        onClick={() => navigate('contact')}
                        variant="secondary"
                        className="w-full"
                      >
                        {option.action}
                      </MagneticButton>
                    </div>
                  </Card3D>
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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our support team and we'll help you find the answer
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Contact Support
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
