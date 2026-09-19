import { motion } from 'motion/react';
import { Mail, Phone, MessageCircle, MessageSquare } from 'lucide-react';
import { FloatingShapes } from '../components/FloatingShapes';
import { ParticleField } from '../components/ParticleField';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email us',
    details: 'halimabl@gmarge.com',
    link: 'mailto:halimabl@gmarge.com',
    color: 'from-[#002B6B] to-[#004B9B]'
  },
  {
    icon: Phone,
    title: 'Call us',
    details: '+1 207 900 7700',
    link: 'tel:+12079007700',
    color: 'from-[#004B9B] to-[#002B6B]'
  },
  {
    icon: MessageCircle,
    title: 'Ask a Question',
    details: 'Chat with our measurement agent',
    link: '#',
    color: 'from-[#002B6B] to-[#001B48]',
    isLiveChat: true
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-[#002B6B] to-[#004B9B]">
        <FloatingShapes />
        <ParticleField count={60} />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(255, 255, 255, 0.4)',
                  '0 0 0 10px rgba(255, 255, 255, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-sm sm:text-base text-white">Usually a reply within one business day</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Book a{' '}
              <span className="bg-gradient-to-r from-[#BFC0C2] to-white bg-clip-text text-transparent">
                Discovery Call
              </span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto">
              Thirty minutes on your current reporting setup. We will tell you where the gap between reported
              and real performance probably sits, and whether this is worth doing at your spend level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How to{' '}
              <span className="bg-gradient-to-r from-[#002B6B] to-[#004B9B] bg-clip-text text-transparent">
                Reach Us
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us your monthly ad spend and which platforms you run, and the first call will be a lot more useful
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((info, i) => {
              const Icon = info.icon;
              const isLiveAgent = info.isLiveChat;
              return (
                <motion.a
                  key={info.title}
                  href={info.link}
                  onClick={(e) => {
                    if (isLiveAgent) {
                      e.preventDefault();
                      // Dispatch custom event to open chatbot
                      window.dispatchEvent(new Event('openChatbot'));
                    }
                  }}
                  className={`block text-center p-8 sm:p-10 bg-white rounded-2xl border-2 ${
                    isLiveAgent ? 'border-blue-400 bg-gradient-to-br from-blue-50/50 to-white' : 'border-gray-200'
                  } hover:border-blue-400 transition-all cursor-pointer relative overflow-hidden`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 43, 107, 0.15)' }}
                >
                  {/* Live indicator for Live Agent */}
                  {isLiveAgent && (
                    <motion.div
                      className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500 text-white text-xs"
                      animate={{
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      Online
                    </motion.div>
                  )}
                  
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${info.color} flex items-center justify-center`}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    animate={isLiveAgent ? {
                      boxShadow: [
                        '0 0 0 0 rgba(0, 43, 107, 0.4)',
                        '0 0 0 20px rgba(0, 43, 107, 0)',
                      ],
                    } : {}}
                    {...(isLiveAgent && {
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                      }
                    })}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-black">{info.title}</h3>
                  <p className={`text-lg sm:text-xl font-semibold bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                    {info.details}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}