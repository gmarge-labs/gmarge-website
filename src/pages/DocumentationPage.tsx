import { motion } from 'motion/react';
import { BookOpen, Database, FlaskConical, LayoutDashboard, Bot, AlertTriangle, Scale, Terminal, ArrowRight, Copy, CheckCircle2 } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

const documentationSections = [
  {
    icon: Database,
    title: 'Data Foundations',
    description: 'Where every number on the dashboard comes from, and what happens to it before you see it',
    topics: [
      'Shopify as the revenue source of truth',
      'Meta Ads and GA4 daily pulls',
      'Deduplication, refunds and currency',
      'Refreshed daily, timestamped on screen'
    ],
    link: '#data-foundations'
  },
  {
    icon: FlaskConical,
    title: 'Holdout Test Design',
    description: 'How we design geo holdouts and matched-market tests to measure what advertising actually caused',
    topics: [
      'Choosing and matching regions',
      'Holdout size and test length',
      'Pre-period and post-period reads',
      'What a result can and cannot prove'
    ],
    link: '#holdout-design'
  },
  {
    icon: LayoutDashboard,
    title: 'How The Dashboard Is Built',
    description: 'A Streamlit dashboard wired to your own data, built around decisions rather than vanity charts',
    topics: [
      'One agreed definition per metric',
      'Blended and channel-level views',
      'Reported and incremental side by side',
      'Live in about two weeks'
    ],
    link: '#dashboard'
  },
  {
    icon: Bot,
    title: 'What The Agent Does',
    description: 'The AI agent reads the same numbers you do and explains in plain language what changed and why',
    topics: [
      'Daily written read-out',
      'Cites the figures behind each claim',
      'Flags what is worth a closer look',
      'Does not move budget or place ads'
    ],
    link: '#agent'
  },
  {
    icon: AlertTriangle,
    title: 'Weekly Anomaly Checks',
    description: 'The quiet failures that drain budget for weeks before anyone notices them in a monthly report',
    topics: [
      'Creative fatigue and frequency creep',
      'Double-firing and broken pixels',
      'Budget drift between campaigns',
      'Feed, tracking and consent breakages'
    ],
    link: '#anomalies'
  },
  {
    icon: Scale,
    title: 'Reported vs Incremental',
    description: 'Platform-reported ROAS and real ROAS are different numbers. We report both and show the gap',
    topics: [
      'Why platforms over-claim credit',
      'The typical 30-40% gap',
      'Holdout-adjusted ROAS',
      'What to change once you know'
    ],
    link: '#reported-vs-incremental'
  }
];

const codeExamples = [
  {
    title: 'Geo Holdout Test Design',
    language: 'text',
    code: `Test        Meta Ads geo holdout
Duration    4 weeks live, plus a 2-week post-period

Treatment   Half of regions, spend left unchanged
Holdout     Half of regions, Meta spend paused

Matched on  pre-period revenue, order volume,
            seasonality, share of new customers

Outcome     total Shopify revenue in each group,
            not platform-attributed revenue

Read-out    actual revenue in treatment regions
            against what the matched holdout regions
            say would have happened anyway`
  },
  {
    title: 'Reported vs Incremental ROAS',
    language: 'text',
    code: `Worked example, illustrative indexed figures

Meta Ads, last 30 days
  Spend                        100
  Platform-reported revenue    400
  Platform-reported ROAS       4.0x

Holdout read-out
  Incremental revenue          260
  Incremental ROAS             2.6x

  Gap to reported              35%
  Typical range we see         30-40%

The difference is revenue the platform claimed
that would have arrived without the ad spend:
returning customers, organic search, direct.`
  },
  {
    title: 'Weekly Anomaly Read-out',
    language: 'text',
    code: `Weekly checks, three flags raised

[high]    Purchase pixel firing twice on the
          checkout page since the theme update.
          Platform conversions over-counted until
          it is fixed. Dashboard uses Shopify.

[high]    Creative fatigue on the lead prospecting
          video. Frequency climbing and cost per
          purchase rising for a second week.

[medium]  Budget drift. Planned prospecting spend
          has been sitting in retargeting since the
          last campaign edit.`
  }
];

const quickLinks = [
  { title: 'How we define a conversion', path: '#definitions' },
  { title: 'Holdout test checklist', path: '#holdout-checklist' },
  { title: 'Metric definitions', path: '#metrics' },
  { title: 'Limits of the agent', path: '#agent-limits' },
  { title: 'Data lag and refresh times', path: '#refresh' },
  { title: 'Deep-dive add-ons', path: '#add-ons' }
];

export default function DocumentationPage() {
  const { navigate } = useRouter();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
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
                <BookOpen className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Methodology</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="How We" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Measure" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                The methods behind the dashboard, the holdout tests and the weekly read-outs.
                Written so you can check our working rather than take the numbers on trust.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton onClick={() => navigate('contact')}>
                  Book a Walkthrough
                </MagneticButton>
                <MagneticButton onClick={() => window.open('#data-foundations', '_self')} variant="secondary">
                  Start With The Data
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
                  src="https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBkb2N1bWVudGF0aW9uJTIwY29kaW5nfGVufDF8fHx8MTc2Njc3MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Marketing measurement methodology"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
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
              The <span className="text-[#002B6B]">Method</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Six parts, from raw order data to the decision you make on Monday
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card3D>
                    <a href={section.link} className="block p-8 h-full hover:no-underline">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#002B6B] to-[#004A9F] flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-black">
                        {section.title}
                      </h3>
                      
                      <p className="text-black mb-6 leading-relaxed">
                        {section.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {section.topics.map((topic) => (
                          <li key={topic} className="flex items-center gap-2 text-sm text-black">
                            <ArrowRight className="w-4 h-4 text-[#002B6B] flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-[#002B6B] font-medium flex items-center gap-2 group">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </a>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Worked <span className="text-[#002B6B]">Examples</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              What a test design, a ROAS reconciliation and a weekly flag actually look like
            </p>
          </motion.div>

          <div className="space-y-8">
            {codeExamples.map((example, index) => (
              <motion.div
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl border-2 border-[#BFC0C2] overflow-hidden"
              >
                <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Terminal className="w-5 h-5 text-[#002B6B]" />
                    <h3 className="font-bold text-black">{example.title}</h3>
                  </div>
                  <button
                    onClick={() => copyCode(example.code, index)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#BFC0C2] hover:bg-[#E8F0FF] transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#002B6B]" />
                        <span className="text-sm text-[#002B6B]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-black" />
                        <span className="text-sm text-black">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-[#1e1e1e] p-6 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Common <span className="text-[#002B6B]">Questions</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <motion.a
                key={link.title}
                href={link.path}
                className="p-4 rounded-xl border-2 border-[#BFC0C2] bg-white hover:shadow-lg transition-all duration-300 flex items-center justify-between group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                <span className="font-medium text-black">{link.title}</span>
                <ArrowRight className="w-5 h-5 text-[#002B6B] group-hover:translate-x-1 transition-transform" />
              </motion.a>
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
              Want This Run On Your Numbers?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We will show you where your reported performance and your real performance part company
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Talk To Us
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
