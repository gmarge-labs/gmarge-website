import { motion } from 'motion/react';
import { Code, Zap, Lock, Globe, Terminal, Cpu, CheckCircle2, Copy } from 'lucide-react';
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
    icon: Zap,
    title: 'RESTful API',
    description: 'Simple, intuitive REST API with JSON responses. Easy to integrate with any platform or programming language.',
    benefits: ['HTTP/HTTPS Support', 'JSON Responses', 'Predictable URLs', 'Standard HTTP Verbs']
  },
  {
    icon: Lock,
    title: 'Secure Authentication',
    description: 'Industry-standard OAuth 2.0 and API key authentication to keep your data secure.',
    benefits: ['OAuth 2.0', 'API Keys', 'Rate Limiting', 'IP Whitelisting']
  },
  {
    icon: Globe,
    title: 'Global CDN',
    description: 'Distributed across multiple regions for low latency and high availability worldwide.',
    benefits: ['99.9% Uptime', 'Global Coverage', 'Auto-scaling', 'DDoS Protection']
  },
  {
    icon: Cpu,
    title: 'Webhooks',
    description: 'Real-time event notifications to your server for immediate updates and automation.',
    benefits: ['Real-time Events', 'Custom Endpoints', 'Retry Logic', 'Event Filtering']
  }
];

const endpoints = [
  {
    method: 'POST',
    path: '/v1/chat',
    description: 'Send a message to the chatbot',
    color: 'bg-green-500'
  },
  {
    method: 'GET',
    path: '/v1/conversations',
    description: 'Retrieve conversation history',
    color: 'bg-blue-500'
  },
  {
    method: 'POST',
    path: '/v1/bots',
    description: 'Create a new chatbot',
    color: 'bg-green-500'
  },
  {
    method: 'PUT',
    path: '/v1/bots/{id}',
    description: 'Update chatbot configuration',
    color: 'bg-yellow-500'
  },
  {
    method: 'DELETE',
    path: '/v1/bots/{id}',
    description: 'Delete a chatbot',
    color: 'bg-red-500'
  },
  {
    method: 'GET',
    path: '/v1/analytics',
    description: 'Get chatbot analytics data',
    color: 'bg-blue-500'
  }
];

const codeExample = `// Initialize G-marge API Client
const axios = require('axios');

const config = {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
};

// Send a message
async function sendMessage() {
  try {
    const response = await axios.post(
      'https://api.gmarge.com/v1/chat',
      {
        bot_id: 'your-bot-id',
        message: 'Hello!',
        user_id: 'user123',
        context: {
          name: 'John Doe',
          email: 'john@example.com'
        }
      },
      config
    );
    
    console.log(response.data);
    // {
    //   "id": "msg_123",
    //   "response": "Hi! How can I help you?",
    //   "confidence": 0.95,
    //   "timestamp": "2024-12-26T10:30:00Z"
    // }
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

sendMessage();`;

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
                <Code className="w-5 h-5 text-[#002B6B]" />
                <span className="text-sm font-medium text-black">Developer API</span>
              </motion.div>

              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-black">
                <TextReveal text="Build With" delay={0.2} />
                <br />
                <span className="text-[#002B6B]">
                  <TextReveal text="G-marge API" delay={0.4} />
                </span>
              </h1>

              <p className="text-xl text-black mb-8 leading-relaxed">
                Powerful, flexible API to integrate AI capabilities into your applications. 
                RESTful design, comprehensive documentation, and world-class support.
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton onClick={() => navigate('contact')}>
                  Get API Key
                </MagneticButton>
                <MagneticButton onClick={() => navigate('documentation')} variant="secondary">
                  View Docs
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
                  src="https://images.unsplash.com/photo-1760952851538-17a59f691efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBpbnRlZ3JhdGlvbiUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2Njc3MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="API Integration"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002B6B]/80 via-[#002B6B]/20 to-transparent" />
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
              API <span className="text-[#002B6B]">Features</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Everything you need to build powerful integrations
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
              API <span className="text-[#002B6B]">Endpoints</span>
            </h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Core endpoints for chatbot interaction and management
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
              Quick <span className="text-[#002B6B]">Start Example</span>
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
                <h3 className="font-bold text-black">Example: Send Message via API</h3>
              </div>
              <button
                onClick={copyCode}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#BFC0C2] hover:bg-[#E8F0FF] transition-colors"
              >
                {copied ? (
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
              Ready to Start Building?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get your API key and start integrating AI into your applications today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton onClick={() => navigate('contact')} variant="secondary">
                Get API Access
              </MagneticButton>
              <MagneticButton onClick={() => navigate('documentation')} variant="outline">
                Read Documentation
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
