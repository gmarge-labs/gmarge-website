import { motion } from 'motion/react';
import { FileText, Scale, AlertTriangle, CheckCircle2, Database, Shield } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const termsHighlights = [
  {
    icon: FileText,
    title: 'Scope in Writing',
    description: 'Each engagement is set out in a statement of work that lists what we will deliver and when.'
  },
  {
    icon: Scale,
    title: 'Retainer and Add-Ons',
    description: 'A monthly retainer covers the core work. Deep dives are scoped and priced per project.'
  },
  {
    icon: Database,
    title: 'You Keep the Dashboard',
    description: 'Dashboards, models and reports built for you are yours, along with the data behind them.'
  },
  {
    icon: Shield,
    title: 'Clear Limits',
    description: 'What we measure, what we cannot promise, and how liability is capped.'
  }
];

export default function TermsPage() {
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
                <Scale className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Terms of Service</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Terms of" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Engagement" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                These terms cover consulting engagements with G-marge, a marketing measurement consultancy for
                direct-to-consumer e-commerce brands, and your use of this website.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                Draft pending legal review. These terms have not been reviewed by a lawyer and will change before they are final.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                This is the current version of these terms. We will publish any change here before it takes effect.
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
                  src="/images/terms.jpg"
                  alt="Legal Agreement"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Terms Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {termsHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#E8F0FF] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#002B6B]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">{highlight.title}</h3>
                  <p className="text-sm text-black">{highlight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            {/* Acceptance of Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">1. Agreement and Scope</h2>
              <p className="text-black mb-4 leading-relaxed">
                These terms apply when you engage G-marge for measurement consulting and when you use this website. Where a
                signed statement of work says something different, that document takes priority for that engagement.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'The person accepting these terms confirms they can bind their company',
                  'Each engagement is defined by a statement of work listing deliverables, timing and fees',
                  'Work outside that statement of work is quoted and agreed in writing before it starts',
                  'These terms apply to every engagement unless we agree otherwise in writing'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">2. Services We Provide</h2>
              <p className="text-black mb-4 leading-relaxed">
                We provide marketing measurement consulting. A core engagement usually includes:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'A live dashboard, built in Streamlit, pulling from Shopify, Meta Ads and GA4 and refreshed daily',
                  'An AI agent that reads the dashboard and explains what changed and the likely reasons',
                  'Incrementality testing, including geo holdouts and matched-market tests',
                  'Deep-dive add-ons: campaign evaluation, segmentation modelling and media mix modelling',
                  'Working sessions to walk through the results and agree what to do next'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">3. Your Responsibilities</h2>
              <p className="text-black mb-4 leading-relaxed">
                The work depends on access and information from you. You agree to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Grant read access to the ad and commerce platforms in scope and keep it in place during the engagement',
                  'Confirm you are entitled to grant that access and to share the data it contains',
                  'Tell us about things that move the numbers: promotions, site changes, tracking changes, stock issues',
                  'Check that any cost, margin or offline data you send us is accurate and complete',
                  'Name someone on your side who can answer questions and approve tests',
                  'Accept that holdout tests involve deliberately withholding spend from part of your audience'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <AlertTriangle className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">4. Fees, Retainer and Add-Ons</h2>
              <p className="text-black mb-4 leading-relaxed">
                Fees are set in the statement of work. Unless it says otherwise:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'The core retainer is between $3,500 and $5,000 per month, depending on scope',
                  'Deep-dive add-ons are scoped and quoted per project before that work starts',
                  'Invoices are issued monthly in advance, on the payment terms set out in your statement of work',
                  'Fees exclude sales tax, VAT or equivalent, which is added where it applies',
                  'Third-party costs you ask us to buy, such as data or hosting, are passed through at cost',
                  'We may pause work on overdue invoices after giving written notice'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">5. Intellectual Property and Confidentiality</h2>
              <p className="text-black mb-4 leading-relaxed">
                You keep what we build for you. We keep the general methods and tooling we bring to every engagement.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Dashboards, models, test designs and reports built for you are yours once the related fees are paid',
                  'Your platform data, and the data held in your dashboard, remain yours throughout',
                  'We keep our general methods, know-how, code libraries, templates and reusable tooling',
                  'Where reusable tooling sits inside your deliverables, you get a perpetual licence to keep using it',
                  'Each side keeps the other confidential information private and uses it only for the engagement'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <Shield className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">6. No Guaranteed Results and Liability</h2>
              <p className="text-black mb-4 leading-relaxed">
                Measurement work is meant to improve the decisions you make. It does not guarantee a commercial outcome.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'We do not promise any specific revenue, ROAS, growth rate or cost saving',
                  'Test and model results carry uncertainty, which we report alongside the numbers',
                  'We depend on third-party platforms and cannot guarantee their data is complete or available',
                  'Neither side is liable for indirect or consequential loss, or for lost profits',
                  'Our total liability is capped at the fees paid in the three months before the claim'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <AlertTriangle className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">7. Term, Minimum and Notice</h2>
              <p className="text-black mb-4 leading-relaxed">
                Engagements run monthly after an initial minimum term:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'The initial term is three months from the start date in the statement of work',
                  'After the initial term the engagement continues month to month',
                  'Either side may end it with 30 days written notice',
                  'Fees for work done and for the notice period remain payable',
                  'Either side may end it sooner for a material breach not fixed within 30 days of notice',
                  'On exit we hand over the dashboard and its data and remove our platform access'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-black">8. Governing Law and Changes</h2>
              <p className="text-black mb-4 leading-relaxed">
                These terms are governed by the law named in your statement of work, and the courts of that jurisdiction
                have exclusive jurisdiction over any dispute. We may update these terms; the version that applies
                to an engagement is the one published here when its statement of work is signed, and we will tell you in
                writing before a change affects work already under way. The contracting entity and its registration details are set out in your statement of work.
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
              Questions About These Terms?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We walk through scope, fees and notice periods before anything is signed
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Contact Us Today
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
