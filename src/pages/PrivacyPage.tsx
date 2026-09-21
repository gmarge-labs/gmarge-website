import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const privacyPrinciples = [
  {
    icon: Lock,
    title: 'Read-Only Access',
    description: 'We ask for read access to your ad and commerce platforms, and only to the accounts needed for the work.'
  },
  {
    icon: Eye,
    title: 'Plain Descriptions',
    description: 'This page lists the data we touch, the providers that process it, and how long it is kept.'
  },
  {
    icon: Shield,
    title: 'Your Data Stays Yours',
    description: 'You keep the dashboard and the data behind it when an engagement ends, and you can withdraw our access at any time.'
  }
];

export default function PrivacyPage() {
  const { navigate } = useRouter();

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
                <Shield className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Privacy Policy</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="How We Handle" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Your Data" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                G-marge is a marketing measurement consultancy for direct-to-consumer e-commerce brands.
                This policy covers the client platform data we access during an engagement and the personal data this website collects.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                Draft pending legal review. This policy has not been reviewed by a lawyer and will change before it is final.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                This is the current version of this policy. We will publish any change here before it takes effect.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#BFC0C2]">
                <ImageWithFallback
                  src="/images/privacy.jpg"
                  alt="Order table with customer names and emails masked, keeping only channel, revenue and date"
                  className="w-full aspect-[3/2] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Privacy Principles */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {privacyPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#E8F0FF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#002B6B]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">{principle.title}</h3>
                  <p className="text-sm text-black">{principle.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            {/* Information We Collect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">1. Data We Access and Collect</h2>

              <h3 className="text-2xl font-bold mb-4 text-black">Client Platform Data</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Shopify: orders, line items, discounts and refunds, which can include customer names, email addresses and delivery addresses',
                  'Meta Ads: spend, impressions, clicks and reported conversions at campaign, ad set and ad level',
                  'GA4: sessions, traffic sources, landing pages and on-site events',
                  'Files you send us, such as cost and margin data, promotion calendars or results from earlier tests'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-black">Personal Data This Website Collects</h3>
              <ul className="space-y-3 mb-6">
                {[
                  'Contact form entries: your name, email address, company and the message you write',
                  'Email you send us about an enquiry or an engagement, and our replies',
                  'Technical data your browser sends, such as IP address, device type and browser version'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* How We Use Your Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">2. Why We Use It and Lawful Basis</h2>
              <p className="text-black mb-4 leading-relaxed">
                For data from your platforms you remain the controller and we act on your written instructions. For
                enquiries sent through this site we decide how the data is used. Where data protection law of this kind
                applies, we rely on performance of the contract for engagement data, legitimate interests for enquiries,
                and legal obligation for billing records.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'To build and refresh the dashboard that reports your Shopify, Meta Ads and GA4 results',
                  'To let the reporting agent read that dashboard and write up what changed and why',
                  'To design and measure incrementality tests, including geo holdouts and matched-market tests',
                  'To run agreed deep dives: campaign evaluation, segmentation modelling and media mix modelling',
                  'To answer enquiries sent through the contact form and to send proposals and scopes of work',
                  'To keep the records we need for invoicing, accounting and tax'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">3. Sharing, Sub-Processors and Transfers</h2>
              <p className="text-black mb-4 leading-relaxed">
                We do not sell personal data, and we do not use one client's data to build models for another. A small
                number of providers process data on our behalf, and some of them operate outside your country, including in
                the United States. Where transfer safeguards are required we put the relevant contractual terms in place.
                We will name the specific providers behind these categories, and the safeguards covering any
                transfer, on request.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Cloud hosting and database providers that run the dashboard and store the data it reads',
                  'The platforms you connect, which remain the source of the data: Shopify, Meta and Google',
                  'An AI model provider that processes dashboard summaries to produce written explanations',
                  'Business tools we use for email, file storage, accounting and invoicing',
                  'Professional advisers, or authorities, where disclosure is required by law',
                  'Our website host, which receives and stores contact-form submissions before they reach our inbox',
                  'Contractors working under written confidentiality and data-protection terms, who may be located outside your country'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <AlertCircle className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">4. Access and Security</h2>
              <p className="text-black mb-4 leading-relaxed">
                We keep access narrow and remove it when it is no longer needed:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'We request read access only, and only to the accounts and properties the work needs',
                  'Access is limited to the people working on your engagement',
                  'Credentials and API tokens are held in a password manager, not in documents or email',
                  'Data moves over encrypted connections and the dashboard sits behind a login',
                  'You can withdraw our access from your own platform admin at any time'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <Lock className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Your Rights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">5. Retention and Your Rights</h2>
              <p className="text-black mb-4 leading-relaxed">
                Client platform data stays in place for as long as the engagement runs. When it ends, the dashboard and the
                data in it stay with you, and we delete our own working copies once the handover is complete, confirming in
                writing when it is done. Enquiries and email are kept only as long as we need them to answer you and
                keep a record of the conversation, and billing records for as long as tax law requires. Depending on where you live, you may have these rights over personal data we hold about you:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Access: ask for a copy of the personal data we hold about you',
                  'Correction: ask us to fix data that is wrong or out of date',
                  'Deletion: ask us to delete data we no longer have a reason to keep',
                  'Portability: ask for your data in a common machine-readable format',
                  'Objection: object to processing we base on legitimate interests',
                  'Complaint: raise a complaint with your data protection authority'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-black leading-relaxed">
                Privacy questions and requests go to{' '}
                <a href="mailto:halimabl@gmarge.com" className="text-[#002B6B] underline">
                  halimabl@gmarge.com
                </a>
              </p>
            </motion.div>

            {/* Cookies and Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">6. Cookies and Site Analytics</h2>
              <p className="text-black mb-4 leading-relaxed">
                This site sets no analytics or advertising cookies and does not track you across other websites. Our
                host keeps standard server request logs, such as IP address and page requested, to serve the site and
                keep it secure. You can block or clear cookies at any time in your browser settings.
              </p>
            </motion.div>
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
              Questions About Privacy?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ask us exactly what data an engagement touches before you grant any access
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Contact Us
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
