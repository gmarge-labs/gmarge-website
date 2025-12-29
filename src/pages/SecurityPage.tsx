import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileCheck, Server, Key, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data transmitted between clients and our servers is encrypted using industry-standard TLS 1.3 protocol with 256-bit AES encryption.',
    details: [
      'TLS 1.3 encryption in transit',
      'AES-256 encryption at rest',
      'Regular security audits',
      'Zero-knowledge architecture'
    ]
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Built on enterprise-grade cloud infrastructure with multiple layers of security, redundancy, and 99.9% uptime guarantee.',
    details: [
      'AWS/Azure certified data centers',
      'Multi-region redundancy',
      'DDoS protection',
      'Regular penetration testing'
    ]
  },
  {
    icon: Eye,
    title: 'Privacy by Design',
    description: 'We follow privacy-first principles, collecting only essential data and giving you full control over your information.',
    details: [
      'GDPR compliant',
      'CCPA compliant',
      'Data minimization',
      'Right to deletion'
    ]
  },
  {
    icon: FileCheck,
    title: 'Compliance & Certifications',
    description: 'We maintain the highest industry standards and certifications to ensure your data is protected and handled responsibly.',
    details: [
      'SOC 2 Type II certified',
      'ISO 27001 compliant',
      'HIPAA ready',
      'Regular compliance audits'
    ]
  },
  {
    icon: Key,
    title: 'Access Control',
    description: 'Robust authentication and authorization mechanisms ensure only authorized users can access sensitive data.',
    details: [
      'Multi-factor authentication',
      'Role-based access control',
      'Single sign-on (SSO)',
      'Session management'
    ]
  },
  {
    icon: AlertTriangle,
    title: 'Threat Detection',
    description: '24/7 monitoring and advanced threat detection systems identify and neutralize security risks in real-time.',
    details: [
      'Real-time monitoring',
      'Automated threat response',
      'Security incident logging',
      'Intrusion detection systems'
    ]
  }
];

const securityPractices = [
  {
    title: 'Data Encryption',
    description: 'All sensitive data is encrypted both in transit and at rest using military-grade encryption standards.'
  },
  {
    title: 'Regular Audits',
    description: 'Third-party security audits and penetration testing conducted quarterly to identify vulnerabilities.'
  },
  {
    title: 'Incident Response',
    description: 'Dedicated security team with 24/7 incident response protocols and automated alerting systems.'
  },
  {
    title: 'Employee Training',
    description: 'Comprehensive security training for all employees with regular updates on best practices and threats.'
  },
  {
    title: 'Backup & Recovery',
    description: 'Automated daily backups with geo-redundant storage and tested disaster recovery procedures.'
  },
  {
    title: 'Vulnerability Management',
    description: 'Continuous monitoring and patching of systems to address security vulnerabilities promptly.'
  }
];

export default function SecurityPage() {
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
                <Shield className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Enterprise-Grade Security</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Your Data," delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Our Priority" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                We implement industry-leading security measures to protect your data and ensure 
                compliance with global privacy regulations. Your trust is our foundation.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton onClick={() => navigate('contact')}>
                  Request Security Overview
                </MagneticButton>
                <MagneticButton onClick={() => navigate('about')} variant="secondary">
                  Learn More
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
                  src="https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwcHJvdGVjdGlvbnxlbnwxfHx8fDE3NjY2NzcwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Cybersecurity Protection"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
                
                {/* Security Badge */}
                <motion.div
                  className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-[#002B6B] flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">Protected By</div>
                      <div className="text-lg font-bold text-[#002B6B]">256-bit Encryption</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
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
              Comprehensive <span className="text-[#002B6B]">Security Measures</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Multiple layers of protection to keep your data safe and secure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => {
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
                        {feature.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-black">
                            <CheckCircle2 className="w-4 h-4 text-[#002B6B] flex-shrink-0" />
                            <span>{detail}</span>
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

      {/* Security Practices */}
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
              Security <span className="text-[#002B6B]">Best Practices</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Our commitment to security goes beyond technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                className="p-6 rounded-2xl bg-white border-2 border-[#BFC0C2]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-3 h-3 rounded-full bg-[#002B6B] mb-4" />
                <h3 className="text-xl font-bold mb-3 text-black">{practice.title}</h3>
                <p className="text-black">{practice.description}</p>
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
              Questions About Security?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our security team is here to answer any questions about our practices and certifications
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Contact Security Team
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
