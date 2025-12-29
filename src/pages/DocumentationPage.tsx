import { motion } from 'motion/react';
import { Book, Code, Terminal, Zap, Puzzle, Rocket, ArrowRight, Copy, CheckCircle2 } from 'lucide-react';
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
    icon: Rocket,
    title: 'Getting Started',
    description: 'Quick start guide to integrate AI solutions into your business',
    topics: [
      'Account Setup',
      'Initial Configuration',
      'First Chatbot Deployment',
      'Testing & Validation'
    ],
    link: '#getting-started'
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation with code examples and endpoints',
    topics: [
      'Authentication',
      'REST API Endpoints',
      'Webhooks',
      'Rate Limits'
    ],
    link: '#api-reference'
  },
  {
    icon: Puzzle,
    title: 'Integration Guides',
    description: 'Step-by-step guides for popular platforms and tools',
    topics: [
      'Website Integration',
      'WhatsApp Business',
      'Facebook Messenger',
      'Custom Applications'
    ],
    link: '#integrations'
  },
  {
    icon: Terminal,
    title: 'SDKs & Libraries',
    description: 'Official SDKs for multiple programming languages',
    topics: [
      'JavaScript/TypeScript',
      'Python',
      'PHP',
      'Ruby'
    ],
    link: '#sdks'
  },
  {
    icon: Zap,
    title: 'Best Practices',
    description: 'Expert tips and recommendations for optimal performance',
    topics: [
      'Conversation Design',
      'Performance Optimization',
      'Security Guidelines',
      'Testing Strategies'
    ],
    link: '#best-practices'
  },
  {
    icon: Book,
    title: 'Tutorials',
    description: 'Hands-on tutorials for common use cases and scenarios',
    topics: [
      'Building a Support Bot',
      'Lead Generation Setup',
      'Appointment Scheduling',
      'Analytics Dashboard'
    ],
    link: '#tutorials'
  }
];

const codeExamples = [
  {
    title: 'JavaScript Integration',
    language: 'javascript',
    code: `// Initialize G-marge AI Chatbot
const gmarge = new GmargeAI({
  apiKey: 'YOUR_API_KEY',
  botId: 'your-bot-id'
});

// Deploy chatbot on your website
gmarge.init({
  container: '#chatbot-container',
  theme: 'light',
  position: 'bottom-right'
});

// Listen to chatbot events
gmarge.on('message', (data) => {
  console.log('User message:', data.message);
});`
  },
  {
    title: 'Python API Call',
    language: 'python',
    code: `import gmarge

# Initialize client
client = gmarge.Client(api_key="YOUR_API_KEY")

# Send a message
response = client.chat.send(
    bot_id="your-bot-id",
    message="Hello!",
    user_id="user123"
)

print(response.text)
print(f"Confidence: {response.confidence}")`
  },
  {
    title: 'REST API Example',
    language: 'bash',
    code: `curl -X POST https://api.gmarge.com/v1/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "bot_id": "your-bot-id",
    "message": "Hello!",
    "user_id": "user123"
  }'`
  }
];

const quickLinks = [
  { title: 'API Authentication', path: '#auth' },
  { title: 'Webhook Setup', path: '#webhooks' },
  { title: 'Error Handling', path: '#errors' },
  { title: 'Rate Limits', path: '#rate-limits' },
  { title: 'Changelog', path: '#changelog' },
  { title: 'Migration Guide', path: '#migration' }
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
                <Book className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Developer Resources</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Complete" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="Documentation" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                Everything you need to integrate, customize, and optimize G-marge AI solutions. 
                From quick start guides to advanced API references.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton onClick={() => navigate('contact')}>
                  Get API Access
                </MagneticButton>
                <MagneticButton onClick={() => window.open('#api-reference', '_self')} variant="secondary">
                  View API Docs
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
                  alt="Technical Documentation"
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
              Documentation <span className="text-[#002B6B]">Hub</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Comprehensive guides and references for developers
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
              Code <span className="text-[#002B6B]">Examples</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Ready-to-use code snippets to get you started quickly
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
                    <Code className="w-5 h-5 text-[#002B6B]" />
                    <h3 className="font-bold text-black">{example.title}</h3>
                  </div>
                  <button
                    onClick={() => copyCode(example.code, index)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#BFC0C2] hover:bg-[#E8F0FF] transition-colors"
                  >
                    {copiedIndex === index ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-[#002B6B]" />
                        <span className="text-sm text-[#002B6B]">Copied!</span>
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
              Quick <span className="text-[#002B6B]">Links</span>
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
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Our developer support team is ready to help you integrate G-marge AI
            </p>
            <MagneticButton onClick={() => navigate('contact')} variant="secondary">
              Contact Developer Support
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
