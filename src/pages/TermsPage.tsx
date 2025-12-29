import { motion } from 'motion/react';
import { FileText, Scale, AlertTriangle, CheckCircle2, Users, Shield } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const termsHighlights = [
  {
    icon: FileText,
    title: 'Clear Terms',
    description: 'Straightforward and easy-to-understand service agreements and obligations.'
  },
  {
    icon: Scale,
    title: 'Fair Usage',
    description: 'Balanced policies that protect both our business and your interests.'
  },
  {
    icon: Users,
    title: 'User Rights',
    description: 'Your rights and responsibilities when using our AI solutions.'
  },
  {
    icon: Shield,
    title: 'Protection',
    description: 'Legal protections and limitations for all parties involved.'
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
                  <TextReveal text="Service" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                These terms govern your use of G-marge's AI-powered business solutions. 
                Please read them carefully to understand your rights and obligations.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                Last Updated: December 28, 2025
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
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnRyYWN0JTIwZG9jdW1lbnR8ZW58MXx8fHwxNzY2Nzc0MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
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
              <h2 className="text-3xl font-bold mb-6 text-black">1. Acceptance of Terms</h2>
              <p className="text-black mb-4 leading-relaxed">
                By accessing or using G-marge's services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our services.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'You must be at least 18 years old to use our services',
                  'You agree to provide accurate and complete information',
                  'You are responsible for maintaining the security of your account',
                  'You accept all risks associated with using our AI solutions'
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
              <h2 className="text-3xl font-bold mb-6 text-black">2. Services Provided</h2>
              <p className="text-black mb-4 leading-relaxed">
                G-marge provides AI-powered business solutions, including but not limited to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Custom AI chatbots for customer service and support',
                  'Automated appointment scheduling and management',
                  'Business analytics and reporting tools',
                  'Integration with existing business systems',
                  'Training and support for AI implementation'
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
              <h2 className="text-3xl font-bold mb-6 text-black">3. User Responsibilities</h2>
              <p className="text-black mb-4 leading-relaxed">
                As a user of our services, you agree to:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Use our services only for lawful purposes',
                  'Not attempt to gain unauthorized access to our systems',
                  'Not interfere with or disrupt our services',
                  'Not use our services to transmit harmful or malicious content',
                  'Comply with all applicable laws and regulations',
                  'Respect intellectual property rights'
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
              <h2 className="text-3xl font-bold mb-6 text-black">4. Payment Terms</h2>
              <p className="text-black mb-4 leading-relaxed">
                Payment terms for our services:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Fees are charged based on your selected pricing plan',
                  'All fees are exclusive of applicable taxes',
                  'Payment is due in advance on a monthly or annual basis',
                  'Refunds are provided within 30 days of initial purchase',
                  'We reserve the right to modify pricing with 30 days notice',
                  'Failure to pay may result in service suspension'
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
              <h2 className="text-3xl font-bold mb-6 text-black">5. Intellectual Property</h2>
              <p className="text-black mb-4 leading-relaxed">
                All content, features, and functionality of our services are owned by G-marge and protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'You receive a limited license to use our services',
                  'You may not copy, modify, or distribute our software',
                  'Custom solutions created for you remain your property',
                  'We retain all rights to our core technology and platform',
                  'You grant us license to use your feedback for improvements'
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
              <h2 className="text-3xl font-bold mb-6 text-black">6. Limitation of Liability</h2>
              <p className="text-black mb-4 leading-relaxed">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Our services are provided "as is" without warranties',
                  'We are not liable for indirect or consequential damages',
                  'Our total liability is limited to fees paid in the last 12 months',
                  'We do not guarantee uninterrupted or error-free service',
                  'You are responsible for backing up your data'
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
              <h2 className="text-3xl font-bold mb-6 text-black">7. Termination</h2>
              <p className="text-black mb-4 leading-relaxed">
                Either party may terminate the service agreement:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'You may cancel your subscription at any time',
                  'We may suspend or terminate accounts for violations',
                  '30 days written notice required for termination',
                  'All fees paid are non-refundable upon termination',
                  'We will provide data export upon reasonable request',
                  'Certain provisions survive termination'
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
              <h2 className="text-3xl font-bold mb-6 text-black">8. Changes to Terms</h2>
              <p className="text-black mb-4 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify you of material changes 
                via email or through our service. Your continued use after changes constitutes acceptance.
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of businesses transforming their operations with AI
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
