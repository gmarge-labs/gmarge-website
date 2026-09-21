import { motion } from 'motion/react';
import { Plug, Database, RefreshCw, ShieldCheck, Terminal, Store, CheckCircle2, Copy } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

const apiFeatures = [
  {
    icon: Plug,
    title: 'Platforms We Connect',
    description: 'Shopify, Meta Ads and GA4 come as standard. Anything else is added during setup if you run on it.',
    benefits: ['Shopify', 'Meta Ads', 'GA4', 'On request: Google Ads, TikTok, Klaviyo, Amazon Ads']
  },
  {
    icon: Database,
    title: 'What We Pull',
    description: 'Order-level sales, ad spend and delivery, and site behaviour. Nothing beyond what is needed to tie an order to a channel.',
    benefits: ['Orders, refunds and discounts', 'Spend, impressions and clicks', 'Sessions and landing pages', 'No payment or card details']
  },
  {
    icon: RefreshCw,
    title: 'How Often It Refreshes',
    description: 'The dashboard updates every morning. Anomaly checks run weekly, and holdout tests read out on their own schedule.',
    benefits: ['Daily automated pull', 'Overnight refresh window', 'Weekly anomaly checks', 'Platform lag shown on screen']
  },
  {
    icon: ShieldCheck,
    title: 'Storage And Exit',
    description: 'Your data sits in a warehouse we run for the engagement, hosted in the UK or EU. When the work ends, it goes.',
    benefits: ['UK or EU hosted warehouse', 'Read-only access wherever possible', 'Deleted within 30 days of exit', 'Full export handed over first']
  }
];

const endpoints = [
  {
    method: 'DAILY',
    path: 'shopify / orders, refunds, customers',
    description: 'The revenue source of truth for every chart',
    color: 'bg-green-500'
  },
  {
    method: 'DAILY',
    path: 'meta-ads / spend, delivery, attributed sales',
    description: 'Cost side, plus what the platform claims it caused',
    color: 'bg-blue-500'
  },
  {
    method: 'DAILY',
    path: 'ga4 / sessions, channels, landing pages',
    description: 'Site behaviour and channel grouping',
    color: 'bg-green-500'
  },
  {
    method: 'ON REQUEST',
    path: 'google-ads, tiktok-ads / spend, delivery',
    description: 'Added at setup if you run spend there',
    color: 'bg-yellow-500'
  },
  {
    method: 'ON REQUEST',
    path: 'klaviyo, amazon-ads / sends, spend, sales',
    description: 'Email and SMS, and Amazon ad performance',
    color: 'bg-red-500'
  },
  {
    method: 'WEEKLY',
    path: 'holdout tests / geo-level spend and revenue',
    description: 'Region-level data behind incrementality read-outs',
    color: 'bg-blue-500'
  }
];

const codeExample = `Access we ask for at setup, read-only where the
platform allows it.

Shopify     Staff account or custom app with read
            access to orders, customers and products

Meta Ads    Partner access to the ad account at
            Analyst level. No page, no billing

GA4         Viewer access to the property

Optional    Google Ads, TikTok Ads, Klaviyo,
            Amazon Ads on the same read-only pattern

Never       Card details, payment methods, admin
            rights, or the ability to spend money
            on your behalf

Leaving     Revoke access whenever you want. We hand
            over a full export and delete the
            warehouse within 30 days of the final
            invoice`;

export default function APIPage() {
  const { navigate } = useRouter();
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
                <Store className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Integrations &amp; Data</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Connected To" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Your Stack" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                We read from the tools you already run on. Shopify, Meta Ads and GA4 as standard,
                pulled daily into one place, with read-only access and a clear exit.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton onClick={() => navigate('contact')}>
                  Check Your Setup
                </MagneticButton>
                <MagneticButton onClick={() => navigate('documentation')} variant="secondary">
                  Read The Methodology
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
                  src="/images/integrations.jpg"
                  alt="Shopify, Meta Ads and GA4 connected as standard; Google Ads, TikTok, Klaviyo and Amazon Ads on request"
                  className="w-full aspect-[3/2] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Features */}
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
              What We <span className="text-[#002B6B]">Connect</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              The data behind the dashboard, and the rules we hold ourselves to around it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {apiFeatures.map((feature, index) => {
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
                    <div className="p-6 h-full">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#002B6B] to-[#004A9F] flex items-center justify-center mb-6">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-black">
                        {feature.title}
                      </h3>
                      
                      <p className="text-black mb-4 text-sm leading-relaxed">
                        {feature.description}
                      </p>

                      <ul className="space-y-2">
                        {feature.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-xs text-black">
                            <CheckCircle2 className="w-3 h-3 text-[#002B6B] flex-shrink-0" />
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

      {/* Endpoints */}
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
              Sources And <span className="text-[#002B6B]">Cadence</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              What we pull from each platform, and how often it lands in the dashboard
            </p>
          </motion.div>

          <div className="space-y-4">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={`${endpoint.method}-${endpoint.path}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <span className={`${endpoint.color} text-white px-3 py-1 rounded-lg text-sm font-mono font-bold w-fit`}>
                    {endpoint.method}
                  </span>
                  <code className="font-mono text-[#002B6B] font-medium flex-grow">
                    {endpoint.path}
                  </code>
                  <span className="text-black text-sm">{endpoint.description}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Access <span className="text-[#002B6B]">We Need</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border-2 border-[#BFC0C2] overflow-hidden"
          >
            <div className="bg-gray-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Terminal className="w-5 h-5 text-[#002B6B]" />
                <h3 className="font-bold text-black">What we ask for, and what we never ask for</h3>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#BFC0C2] hover:bg-[#E8F0FF] transition-colors"
              >
                {copied ? (
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
                <code>{codeExample}</code>
              </pre>
            </div>
          </motion.div>
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
              Not Sure What You Can Connect?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Send us the tools you run on and we will tell you what we can read, what we cannot, and how long setup takes
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton onClick={() => navigate('contact')} variant="secondary">
                Talk To Us
              </MagneticButton>
              <MagneticButton onClick={() => navigate('documentation')} variant="outline">
                Read The Methodology
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
