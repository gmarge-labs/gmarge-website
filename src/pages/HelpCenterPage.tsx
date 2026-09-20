import { motion } from 'motion/react';
import { HelpCircle, Search, LayoutDashboard, Database, FlaskConical, Mail, Phone, Clock, ArrowRight, ChevronDown, MessageCircle, CreditCard } from 'lucide-react';
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
    icon: LayoutDashboard,
    title: 'What You Get',
    description: 'The live dashboard, the weekly read and what lands each week',
    articles: 3,
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Database,
    title: 'Data and Access',
    description: 'Which accounts we connect to and the permissions we need',
    articles: 3,
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FlaskConical,
    title: 'Incrementality Testing',
    description: 'How a geo holdout works and what spend it needs to be valid',
    articles: 3,
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: CreditCard,
    title: 'Pricing and Billing',
    description: 'What the engagement costs, the minimum term and the notice period',
    articles: 3,
    color: 'from-green-500 to-green-600'
  }
];

const faqCategories = [
  {
    category: 'The Engagement',
    faqs: [
      {
        question: 'What does the core package actually include?',
        answer: 'A live Streamlit dashboard that pulls from Shopify, Meta Ads and GA4 and refreshes daily, so you are looking at yesterday rather than last month. An AI agent reads that dashboard and writes up, in plain language, what changed and why. On top of that you get a weekly anomaly check covering things like creative fatigue, double-firing pixels and budget drift, and incrementality testing to establish what your channels are really contributing. Deep dives such as campaign evaluation, segmentation modelling and media mix modelling are scoped as add-ons.'
      },
      {
        question: 'How long does setup take?',
        answer: 'About two weeks from the day we get access to a dashboard you can use every morning. The first few days are connections and data checks, then we rebuild the reporting so Shopify, Meta and GA4 reconcile against each other, then we hand it over and start the weekly rhythm. Badly broken tracking can add a week, and we tell you that in week one rather than at the end.'
      },
      {
        question: 'What happens if the findings are underwhelming?',
        answer: 'Then we say so. If a holdout shows your platform numbers are close to the truth, that is a real answer: you can keep spending with more confidence instead of paying someone to reallocate budget that did not need reallocating. We would rather hand you a boring result than dress one up. After the three-month minimum, if the work is not paying for itself, you stop and keep the dashboard.'
      }
    ]
  },
  {
    category: 'Data and Testing',
    faqs: [
      {
        question: 'What data access do you need?',
        answer: 'Shopify, Meta Ads and GA4 at minimum, plus any other channel carrying real spend. We ask for read-only access wherever the platform supports it, granted through the platform\'s own user or partner permissions rather than a shared login. We do not need customer names, email addresses or payment details, and we would rather not hold them.'
      },
      {
        question: 'What does an incrementality test involve?',
        answer: 'We hold a channel back in a set of matched regions while it keeps running everywhere else, then compare what actually happened in the held-out markets against the control markets. A holdout usually runs two to four weeks. The output is an estimate of the revenue a channel caused, rather than the revenue it claimed. Published lift studies consistently find incremental ROAS well below the platform-reported figure, though the size of the gap varies enormously by channel — which is why the number worth having is yours, not a benchmark.'
      },
      {
        question: 'How much spend do I need for a test to be meaningful?',
        answer: 'Enough spend and enough orders in the test window that the result is signal rather than noise. In practice that means a channel with steady, concentrated spend and a few hundred orders across the holdout period. We run the power check before committing to anything, and if your volume will not support a clean read we tell you and test a different channel or a different question.'
      }
    ]
  },
  {
    category: 'Ownership, Billing and Support',
    faqs: [
      {
        question: 'Who owns the dashboard and the data?',
        answer: 'You do. The dashboard, the data model and the underlying data are yours from day one. If the engagement ends you keep all of it, and we hand over the code and the connection setup so your team or another consultant can carry on running it.'
      },
      {
        question: 'How does billing work?',
        answer: 'The core package is $3,500 to $5,000 a month depending on channel count and how much work the data needs. Add-ons are scoped and quoted per project before anything starts. There is a three-month minimum, then it runs month to month with 30 days notice on either side. Invoiced monthly in advance.'
      },
      {
        question: 'How do I get support between the weekly reads?',
        answer: 'Email the G-marge team members assigned to your account. Anything urgent, such as a broken connection or a number that looks wrong, gets picked up the same working day. Everything else is folded into the next weekly read so you are not chasing answers in fragments. Most clients also set up a shared Slack or Teams channel in week one.'
      }
    ]
  }
];

const contactOptions = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Reach the team assigned to your account',
    contact: 'halimabl@gmarge.com',
    responseTime: 'Same working day',
    action: 'Send Email'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'For anything easier to talk through',
    contact: '+1 207 900 7700',
    responseTime: 'Mon-Fri, 9AM-6PM EST',
    action: 'Call Now'
  },
  {
    icon: MessageCircle,
    title: 'Shared Channel',
    description: 'Slack or Teams with your team',
    contact: 'Set up in week one',
    responseTime: 'Questions answered as they come',
    action: 'Ask About Setup'
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
                <span className="text-sm font-medium text-black">Straight Answers</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Questions," delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Answered" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                What the engagement includes, what access we need, how testing works and what it
                costs. If something is not covered here, ask and we'll answer plainly.
              </p>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search the questions below..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-[#BFC0C2] focus:border-[#002B6B] focus:outline-none text-black"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {['Setup', 'Data Access', 'Incrementality', 'Billing'].map((tag) => (
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
                  src="/images/help-center.jpg"
                  alt="Client Questions"
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
                      <div className="text-2xl font-bold text-[#002B6B]">2 weeks</div>
                      <div className="text-sm text-gray-600">Typical Time to Live</div>
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
              Browse by <span className="text-[#002B6B]">Topic</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              The questions that come up most, before and during an engagement
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
                        <span className="text-sm text-gray-600">{category.articles} questions</span>
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
              Ask Us <span className="text-[#002B6B]">Directly</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              You get the people doing the work, not a ticket queue
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
              Still Not Sure If This Fits Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Tell us what you spend and where, and we'll tell you honestly whether a test would be worth running
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Talk to Us
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
