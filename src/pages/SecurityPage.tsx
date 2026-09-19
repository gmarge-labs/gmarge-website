import { motion } from 'motion/react';
import { Shield, Lock, EyeOff, FileCheck, Server, Key, Plug, CheckCircle2 } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { Card3D } from '../components/Card3D';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const securityFeatures = [
  {
    icon: Plug,
    title: 'How We Connect',
    description: 'We connect to your platforms through their own APIs and permission systems, with read-only access wherever the platform supports it. No shared logins, no screen sharing, no exports passed around over email.',
    details: [
      'Read-only access where the platform allows it',
      'Access granted through your own user permissions',
      'No shared or personal account credentials',
      'Every connection revocable by you at any time'
    ]
  },
  {
    icon: Lock,
    title: 'Encryption',
    description: 'Your data is encrypted in transit and at rest. Platform credentials and API tokens are held in a managed secrets store, never in code, spreadsheets or chat messages.',
    details: [
      'TLS for every connection in transit',
      'Encrypted storage at rest',
      'API tokens held in a managed secrets store',
      'No credentials in code or documents'
    ]
  },
  {
    icon: Server,
    title: 'Where Your Data Lives',
    description: 'Each client gets their own isolated database and dashboard instance on managed cloud infrastructure. Your data is not commingled with anyone else\'s at any point in the pipeline.',
    details: [
      'Separate database per client',
      'Separate dashboard instance per client',
      'Managed cloud hosting with daily backups',
      'Region of storage agreed before we start'
    ]
  },
  {
    icon: EyeOff,
    title: 'Never Pooled, Never Sold',
    description: 'We do not pool client data, we do not build benchmarks from it, and we do not sell or share it with anyone. Your numbers are used to answer your questions and nothing else.',
    details: [
      'No pooling across client accounts',
      'No benchmarking against other clients',
      'No resale or sharing with third parties',
      'No use of your data to train external models'
    ]
  },
  {
    icon: Key,
    title: 'Who Can See It',
    description: 'Access is limited to the analyst working on your account, plus whoever on your side you choose to invite. Access is reviewed when people join or leave, and removed the day an engagement ends.',
    details: [
      'Access limited to your named analyst',
      'Multi-factor authentication on every account',
      'You control who on your team gets a login',
      'Access removed when the engagement ends'
    ]
  },
  {
    icon: FileCheck,
    title: 'Your Rights Over Your Data',
    description: 'You can ask us to delete your data at any time and we will confirm in writing once it is done. We handle GDPR and CCPA data-subject requests that reach us through you, and we work with aggregated data rather than personal details wherever we can.',
    details: [
      'Deletion on request, confirmed in writing',
      'GDPR and CCPA data-subject requests honoured',
      'Aggregated data preferred over personal data',
      'Full export of your data on request'
    ]
  }
];

const securityPractices = [
  {
    title: 'What We Do Not Ask For',
    description: 'We do not need customer names, email addresses, phone numbers or payment details to do this work, so we ask you not to send them. Orders, spend, sessions and revenue are enough.'
  },
  {
    title: 'Sub-processors',
    description: 'A short, named list: the cloud host running your database and dashboard, the advertising and commerce platforms you already use, and the model provider behind the written commentary. We name every one before you sign and tell you before it changes.'
  },
  {
    title: 'What We Do Not Claim',
    description: 'We are a small consultancy, not an audited platform, and we hold no formal security certifications. We would rather describe exactly how your data is handled, in writing, than imply a badge we do not have.'
  },
  {
    title: 'Least Privilege by Default',
    description: 'We ask for the narrowest access that lets the work happen. If a platform offers a read-only or analyst-level role, that is the role we ask for, even when it makes our setup slower.'
  },
  {
    title: 'If Something Goes Wrong',
    description: 'If we believe your data has been exposed, you hear it from us directly and quickly, with what happened, what was affected and what we are doing about it. No holding it back while we work out the wording.'
  },
  {
    title: 'When the Engagement Ends',
    description: 'You keep the dashboard, the data model and the underlying data, and we hand over the code and connection setup. Our own copies and credentials are deleted, and we confirm when that is done.'
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
                <span className="text-sm font-medium text-black">How We Handle Client Data</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Your Data" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Stays Yours" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                We read from your Shopify, ad and analytics accounts to build your dashboard. Here is
                exactly how that access works, where the data sits, and what happens to it when we're done.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton onClick={() => navigate('contact')}>
                  Ask a Data Question
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
                  alt="Data Security"
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
                      <div className="text-sm font-medium text-gray-600">Default Access</div>
                      <div className="text-lg font-bold text-[#002B6B]">Read-Only</div>
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
              How We Handle <span className="text-[#002B6B]">Your Data</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Access, storage and deletion, described plainly
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
              Practices and <span className="text-[#002B6B]">Commitments</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              What we promise, and what we will not pretend to
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
              Need This in Writing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We'll put the access list, storage details and deletion terms in the agreement before you sign
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Request the Details
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
