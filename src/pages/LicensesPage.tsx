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
    version: '18.2.0',
    license: 'MIT License',
    description: 'A JavaScript library for building user interfaces',
    url: 'https://reactjs.org/'
  },
  {
    name: 'Motion (Framer Motion)',
    version: '11.0.0',
    license: 'MIT License',
    description: 'Production-ready animation library for React',
    url: 'https://motion.dev/'
  },
  {
    name: 'Tailwind CSS',
    version: '4.0.0',
    license: 'MIT License',
    description: 'A utility-first CSS framework',
    url: 'https://tailwindcss.com/'
  },
  {
    name: 'Lucide React',
    version: 'Latest',
    license: 'ISC License',
    description: 'Beautiful & consistent icon toolkit',
    url: 'https://lucide.dev/'
  },
  {
    name: 'Recharts',
    version: 'Latest',
    license: 'MIT License',
    description: 'Redefined chart library built with React and D3',
    url: 'https://recharts.org/'
  },
  {
    name: 'Axios',
    version: 'Latest',
    license: 'MIT License',
    description: 'Promise based HTTP client',
    url: 'https://axios-http.com/'
  },
  {
    name: 'React Hook Form',
    version: '7.55.0',
    license: 'MIT License',
    description: 'Performant, flexible and extensible forms',
    url: 'https://react-hook-form.com/'
  },
  {
    name: 'Sonner',
    version: '2.0.3',
    license: 'MIT License',
    description: 'An opinionated toast component for React',
    url: 'https://sonner.emilkowal.ski/'
  }
];

const aiModels = [
  {
    name: 'GPT-4',
    provider: 'OpenAI',
    license: 'Commercial License',
    description: 'Advanced language model for natural conversations',
    usage: 'Powering chatbot responses and natural language understanding'
  },
  {
    name: 'BERT',
    provider: 'Google',
    license: 'Apache 2.0',
    description: 'Bidirectional Encoder Representations from Transformers',
    usage: 'Sentiment analysis and intent classification'
  },
  {
    name: 'Sentence Transformers',
    provider: 'UKPLab',
    license: 'Apache 2.0',
    description: 'Framework for state-of-the-art sentence embeddings',
    usage: 'Semantic search and similarity matching'
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
                G-marge is built on the shoulders of amazing open-source projects. We're grateful 
                to the open-source community and committed to transparency about the technologies we use.
              </p>

              <p className="text-sm text-gray-600 mb-8">
                Last Updated: December 26, 2024
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
              <span className="text-[#002B6B]">Libraries</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Third-party libraries and frameworks that power G-marge
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
                      <p className="text-sm text-gray-600">v{library.version}</p>
                    </div>
                  </div>
                  <a
                    href={library.url}
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* AI Models */}
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
              AI Models & <span className="text-[#002B6B]">Technologies</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Artificial intelligence models and frameworks we utilize
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#002B6B] to-[#004A9F] flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-black">{model.name}</h3>
                <p className="text-sm text-gray-600 mb-3">by {model.provider}</p>
                <p className="text-black mb-4">{model.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-black mb-1">Usage:</p>
                  <p className="text-sm text-gray-600">{model.usage}</p>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F0FF] text-sm text-[#002B6B]">
                  <Shield className="w-4 h-4" />
                  <span>{model.license}</span>
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
                {['Commercial use allowed', 'Modification allowed', 'Distribution allowed', 'Private use allowed'].map((item) => (
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

            {/* ISC License */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl border-2 border-[#BFC0C2] bg-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">ISC License</h3>
              <p className="text-black mb-4 leading-relaxed">
                A permissive license functionally equivalent to MIT and BSD 2-Clause licenses. It is 
                simple and straightforward, allowing unlimited freedom with proper attribution.
              </p>
              <ul className="space-y-2">
                {['Very permissive', 'Simple and clear', 'Commercial use allowed', 'Minimal restrictions'].map((item) => (
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
              We are deeply grateful to the open-source community for creating and maintaining the 
              amazing tools that make G-marge possible. Each library and framework listed here represents 
              countless hours of work by dedicated developers around the world.
            </p>
            <p className="text-black leading-relaxed">
              If you believe we have used your work and not provided proper attribution, please contact 
              us at{' '}
              <a href="mailto:halimabl@gmarge.com" className="text-[#002B6B] underline">
                halimabl@gmarge.com
              </a>
              {' '}and we will promptly address the issue.
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
              Contact us for more information about our software licenses and attributions
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