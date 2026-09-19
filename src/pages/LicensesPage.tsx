import { motion } from 'motion/react';
import { FileText, Code, Shield, CheckCircle2, ExternalLink } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
import { useRouter } from '../components/Router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const openSourceLibraries = [
  {
    name: 'React',
    version: 'v18.3.1',
    license: 'MIT License',
    description: 'The library this website interface is built with',
    url: 'https://react.dev/'
  },
  {
    name: 'Vite',
    version: 'v6.3.5',
    license: 'MIT License',
    description: 'Build tool and development server used to bundle the site',
    url: 'https://vite.dev/'
  },
  {
    name: 'Tailwind CSS',
    version: '[Version to be confirmed]',
    license: 'MIT License',
    description: 'Utility-first CSS framework used for the site styling',
    url: 'https://tailwindcss.com/'
  },
  {
    name: 'Motion (formerly Framer Motion)',
    version: 'v12.23.26',
    license: 'MIT License',
    description: 'Animation library used for page and element transitions',
    url: 'https://motion.dev/'
  },
  {
    name: 'Lucide React',
    version: 'v0.487.0',
    license: 'ISC License',
    description: 'The icon set used across these pages',
    url: 'https://lucide.dev/'
  },
  {
    name: 'Radix UI Primitives',
    version: 'Multiple packages',
    license: 'MIT License',
    description: 'Accessible, unstyled UI primitives behind the interface components',
    url: 'https://www.radix-ui.com/'
  },
  {
    name: 'Recharts',
    version: 'v2.15.4',
    license: 'MIT License',
    description: 'Charting library built on React and D3, used for charts on this site',
    url: 'https://recharts.org/'
  },
  {
    name: 'React Hook Form',
    version: 'v7.69.0',
    license: 'MIT License',
    description: 'Form state and validation used by the contact form',
    url: 'https://react-hook-form.com/'
  }
];

const dataStack = [
  {
    name: 'Streamlit',
    provider: 'Streamlit, part of Snowflake',
    license: 'Apache License 2.0',
    description: 'Python framework for building data applications',
    usage: 'Runs the client dashboard and its interactive views'
  },
  {
    name: 'pandas',
    provider: 'pandas development team',
    license: 'BSD 3-Clause License',
    description: 'Data analysis and manipulation library for Python',
    usage: 'Joins and aggregates Shopify, Meta Ads and GA4 data for reporting'
  },
  {
    name: 'Python',
    provider: 'Python Software Foundation',
    license: 'Python Software Foundation License',
    description: 'The language the dashboards and data pipelines are written in',
    usage: 'Runs the daily refresh, incrementality tests and modelling work'
  }
];

export default function LicensesPage() {
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
                <FileText className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Open Source</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Software" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Licenses" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                This website and the dashboards we build for clients run on open-source software.
                This page lists the main projects we depend on and the licences they are released under.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                Last reviewed: [Date to be confirmed]
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
                  src="https://images.unsplash.com/photo-1764106813759-9ef7bf42a0af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50cyUyMGNvbnRyYWN0fGVufDF8fHx8MTc2Njc1MTI1MXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Legal Documents"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Libraries */}
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
              <span className="text-[#002B6B]">Website Libraries</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Third-party packages used to build and run this website
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {openSourceLibraries.map((library, index) => (
              <motion.div
                key={library.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E8F0FF] flex items-center justify-center">
                      <Code className="w-5 h-5 text-[#002B6B]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black">{library.name}</h3>
                      <p className="text-sm text-gray-600">{library.version}</p>
                    </div>
                  </div>
                  <a
                    href={library.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${library.name} website (opens in a new tab)`}
                    className="text-[#002B6B] hover:underline"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-black mb-3">{library.description}</p>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0FF] text-sm text-[#002B6B]">
                  <Shield className="w-4 h-4" />
                  <span>{library.license}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Stack */}
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
              Dashboard & <span className="text-[#002B6B]">Data Stack</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Open-source software behind the dashboards and analysis we build for clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dataStack.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#002B6B] to-[#004A9F] flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-black">{tool.name}</h3>
                <p className="text-sm text-gray-600 mb-3">by {tool.provider}</p>
                <p className="text-black mb-4">{tool.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-black mb-1">Usage:</p>
                  <p className="text-sm text-gray-600">{tool.usage}</p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0FF] text-sm text-[#002B6B]">
                  <Shield className="w-4 h-4" />
                  <span>{tool.license}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* License Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-black">
              Understanding <span className="text-[#002B6B]">Licenses</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {/* MIT License */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">MIT License</h3>
              <p className="text-black mb-4 leading-relaxed">
                A permissive license that permits reuse within proprietary software provided all copies 
                include the license terms and copyright notice. It allows commercial use, modification, 
                distribution, and private use.
              </p>
              <ul className="space-y-2">
                {['Commercial use allowed', 'Modification allowed', 'Distribution allowed', 'Attribution required'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Apache License */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Apache License 2.0</h3>
              <p className="text-black mb-4 leading-relaxed">
                A permissive license similar to MIT but also provides an express grant of patent rights 
                from contributors to users. It allows use in proprietary software and requires preservation 
                of copyright and license notices.
              </p>
              <ul className="space-y-2">
                {['Patent rights granted', 'Commercial use allowed', 'Modification allowed', 'Attribution required'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ISC, BSD and PSF Licenses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">ISC, BSD and PSF Licenses</h3>
              <p className="text-black mb-4 leading-relaxed">
                Permissive licenses that work much like MIT. The ISC license used by lucide-react, the BSD
                3-Clause license used by pandas, and the Python Software Foundation license all allow commercial
                use and modification as long as copyright and license notices are kept.
              </p>
              <ul className="space-y-2">
                {['Very permissive', 'Commercial use allowed', 'Modification allowed', 'Notices must be kept'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-black">
                    <CheckCircle2 className="w-5 h-5 text-[#002B6B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#E8F0FF] to-white border-2 border-[#BFC0C2]"
          >
            <h2 className="text-3xl font-bold mb-6 text-black">Attribution & Acknowledgments</h2>
            <p className="text-black mb-4 leading-relaxed">
              Thanks to the maintainers of the projects listed here. This list covers the main dependencies rather
              than every transitive package; a full dependency list for a client dashboard can be provided on request.
              Each project is used under its own licence, and those licence terms apply, not ours.
            </p>
            <p className="text-black leading-relaxed">
              If you believe we have used your work and not provided proper attribution, please contact 
              us at{' '}
              <a href="mailto:halimabl@gmarge.com" className="text-[#002B6B] underline">
                halimabl@gmarge.com
              </a>
              {' '}and we will correct it.
            </p>
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
              Questions About Licensing?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ask us which components go into a dashboard we build for you
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
