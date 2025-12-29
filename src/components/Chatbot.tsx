import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Comprehensive Knowledge Base from G-marge Website
const knowledgeBase = {
  // Company Information
  company: {
    name: 'G-marge',
    description: 'G-marge is a forward-thinking AI development company founded by experienced AI researchers, software engineers, and business strategists. We empower organizations of all sizes to harness the transformative potential of artificial intelligence.',
    mission: 'Our mission is to make powerful AI technology accessible and affordable for small businesses, helping them compete in the digital age through intelligent automation and personalized AI solutions.',
    values: ['Mission-Driven', 'Customer-Centric', 'Excellence', 'Innovation', 'Ethical AI', 'Global Impact'],
    contact: {
      email: 'halimabl@gmarge.com',
      phone: '+1 207 900 7700',
    },
    stats: {
      experience: '15+ years combined experience',
      projects: '100+ successful projects delivered',
      clientSatisfaction: '94% customer satisfaction rate',
      availability: '24/7 AI solutions'
    }
  },

  // Services
  services: {
    'AI Development': {
      description: 'Custom AI solutions tailored to your business needs using cutting-edge technologies like GPT-4, machine learning, and neural networks.',
      features: ['Custom Chatbots', 'Virtual Assistants', 'Automation Solutions', 'AI Integration']
    },
    'Conversational AI': {
      description: 'Build intelligent chatbots and virtual assistants that understand context, learn from interactions, and provide natural conversations.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Contextual Understanding']
    },
    'Machine Learning': {
      description: 'Predictive analytics, data modeling, and intelligent systems that learn and improve over time.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Continuous Learning']
    },
    'Data Science': {
      description: 'Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence.',
      features: ['Data Analysis', 'Statistical Modeling', 'Business Intelligence', 'Data Visualization', 'Computer Vision']
    },
    'Process Automation': {
      description: 'Automate repetitive tasks, streamline workflows, and reduce operational costs while improving efficiency.',
      features: ['Workflow Automation', 'Task Scheduling', 'Integration Services', 'API Development']
    }
  },

  // Solutions
  solutions: {
    'Custom Small Business Solutions': {
      description: 'Personalized AI systems designed specifically for small businesses across all industries',
      features: ['24/7 Customer Service', 'Booking & Scheduling', 'Inventory Management', 'Payment Processing', 'Customer Analytics', 'Multi-Channel Support'],
      stats: { roi: '18.5x', time: '68%', accuracy: '99%' },
      industries: [
        {
          name: 'Cleaning Services AI (Sparkleville Featured Solution)',
          details: '24/7 booking automation, instant quote generation based on service type and area, customer inquiry handling, service customization, special request management, appointment scheduling, and automated follow-ups - proven 18.5x ROI and 85% booking increase',
          featured: true,
          roi: '18.5x',
          bookingIncrease: '85%'
        },
        {
          name: 'Restaurant AI',
          details: 'Automated table reservations, order taking, menu inquiries, dietary preferences, takeout coordination, waitlist management, and customer feedback collection'
        },
        {
          name: 'Salon & Spa AI',
          details: 'Smart appointment booking, stylist/therapist matching, service recommendations, automated reminders, cancellation management, client history tracking, and package upselling'
        },
        {
          name: 'Contractor & Carpentry AI',
          details: 'Project estimates, appointment scheduling, material cost calculations, job tracking, client communication, progress updates, and invoice management'
        },
        {
          name: 'Coffee Shop & Café AI',
          details: 'Mobile ordering, customization options, pickup scheduling, loyalty rewards, menu questions, dietary accommodations, and catering inquiries'
        },
        {
          name: 'Photography Studio AI',
          details: 'Session booking, package selection, location coordination, date availability, client questionnaires, shoot preparation, and gallery access management'
        }
      ]
    }
  },

  // Team Expertise
  team: {
    'Data Scientists': {
      role: 'Transform raw data into actionable business intelligence using advanced machine learning algorithms, statistical modeling, and predictive analytics',
      expertise: ['Machine Learning & AI Model Development', 'Statistical Analysis & Data Visualization', 'Predictive Analytics & Forecasting', 'Business Intelligence & Reporting']
    },
    'AI Researchers': {
      role: 'Explore and implement the latest advancements in artificial intelligence, staying at the forefront of emerging technologies',
      expertise: ['Natural Language Processing (NLP)', 'Computer Vision & Image Recognition', 'Deep Learning & Neural Networks', 'Conversational AI & Chatbots']
    },
    'Software Engineers': {
      role: 'Build robust, scalable applications using modern technology stacks and industry best practices',
      expertise: ['Full-Stack Web Application Development', 'API Development & System Integration', 'Cloud Infrastructure & DevOps', 'Quality Assurance & Performance Testing']
    }
  },

  // Pricing
  pricing: {
    starter: {
      price: '$299/month',
      conversations: 'Up to 1,000 conversations',
      features: ['Basic chatbot', 'Email support', 'Single integration', '14-day free trial']
    },
    professional: {
      price: '$799/month',
      tag: 'Most Popular',
      conversations: 'Up to 5,000 conversations',
      features: ['Advanced AI (GPT-4)', 'Priority support', '3 integrations', 'Custom branding', 'WhatsApp & SMS integration', '14-day free trial']
    }
  },

  // Technology
  technology: {
    ai: ['GPT-4 Language Models', 'Natural Language Processing', 'Machine Learning', 'Neural Networks', 'Sentiment Analysis', 'Contextual Understanding'],
    security: ['256-bit AES Encryption', 'SOC 2 Type II Certified', 'ISO 27001 Compliant', 'GDPR & CCPA Compliant', 'HIPAA-ready', 'Multi-factor Authentication', '99.9% Uptime'],
    integration: ['REST API', 'JavaScript SDK', 'WordPress Plugin', 'Shopify App', 'WhatsApp', 'SMS', 'Web Chat'],
    languages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Chinese', 'Japanese']
  },

  // Results & Benefits
  results: {
    roi: '18.5x average ROI',
    timeSaved: '75% reduction in operational time',
    accuracy: '99% response accuracy',
    costReduction: '67% cost reduction',
    satisfaction: '94% customer satisfaction',
    availability: '24/7 service availability',
    responseTime: '<0.5 seconds average response time'
  }
};

// Enhanced natural language response generator
function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Greetings - warm and welcoming
  if (/^(hello|hi|hey|good morning|good afternoon|good evening|greetings|howdy)/.test(message)) {
    const greetings = [
      "Hello! 👋 It's wonderful to connect with you! I'm G-marge's AI assistant, and I'm here to help you discover how we can transform your business with intelligent AI solutions. What brings you here today?",
      "Hi there! 😊 Welcome to G-marge! I'd be delighted to help you learn about our AI solutions for small businesses. Whether you're curious about our services, pricing, or success stories, I'm here for you. What would you like to explore?",
      "Hey! Thanks so much for reaching out! I'm excited to share how G-marge has helped businesses like yours achieve amazing results with AI. What can I help you with today?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // About G-marge
  if (/(about|who are you|tell me about|what is|company info|overview)/.test(message) && /(gmarge|g-marge|company|you|business)/.test(message)) {
    return `I'd love to tell you about G-marge! 🌟

${knowledgeBase.company.description}

We're proud to have:
• ${knowledgeBase.company.stats.experience} in AI development
• ${knowledgeBase.company.stats.projects}
• ${knowledgeBase.company.stats.satisfaction}
• ${knowledgeBase.company.stats.availability}

Our team consists of expert data scientists, AI researchers, and software engineers who are passionate about making AI accessible to small businesses like yours.

Based in ${knowledgeBase.company.location}, we're committed to delivering solutions that truly make a difference. Would you like to hear about our specific solutions or services?`;
  }

  // Sparkleville Success Story
  if (/(sparkleville|cleaning|flagship|success story|case study|roi)/.test(message)) {
    const sparkleville = knowledgeBase.solutions['Custom Small Business Solutions'].industries[0];
    return `I'm so excited to share our Sparkleville success story! 🌟🧹

Sparkleville Cleaning Company is our flagship solution, and the results have been absolutely incredible:

📊 **Amazing Results:**
• ${sparkleville.roi} Return on Investment
• ${sparkleville.bookingIncrease} increase in bookings
• Response times reduced from hours to seconds
• ${knowledgeBase.results.accuracy} accuracy rate

✨ **What it does:**
${sparkleville.details}

The AI handles everything automatically - from answering customer questions to generating quotes and booking appointments. It's like having a dedicated team member working 24/7, but without the overhead costs!

Would you like to see how a similar solution could work for your business?`;
  }

  // Solutions/Products
  if (/(solution|product|industry|what do you offer|capabilities|industries)/.test(message)) {
    return `We specialize in creating personalized AI solutions for small businesses! Let me share what we offer: 🎯

**Our Solutions Cover:**

${knowledgeBase.solutions['Custom Small Business Solutions'].industries.map((ind, i) => 
  `${i + 1}. **${ind.name}**${ind.featured ? ' ⭐ FLAGSHIP' : ''}\n   ${ind.details.substring(0, 100)}...`
).join('\n\n')}

**Key Features Across All Solutions:**
${knowledgeBase.solutions['Custom Small Business Solutions'].features.join(' • ')}

Each solution is customized to your specific industry and business needs. Which industry are you in? I'd love to give you more specific information!`;
  }

  // Services
  if (/(service|what services|what can you do|capabilities|offering)/.test(message) && !/(customer service)/.test(message)) {
    return `Great question! We offer comprehensive AI services designed to transform your business: 🚀

${Object.entries(knowledgeBase.services).map(([name, service]) => 
  `**${name}**\n${service.description}\n• ${service.features.join('\n• ')}`
).join('\n\n')}

All our services are built on cutting-edge technology and delivered by our expert team of data scientists, AI researchers, and software engineers.

Which service interests you most? I'd be happy to dive deeper!`;
  }

  // Pricing
  if (/(price|pricing|cost|how much|plans|packages|afford)/.test(message)) {
    return `I completely understand that pricing is important! Let me break down our flexible plans for you: 💰

**Starter Plan - ${knowledgeBase.pricing.starter.price}**
• ${knowledgeBase.pricing.starter.conversations}
• ${knowledgeBase.pricing.starter.features.join('\n• ')}

**Professional Plan - ${knowledgeBase.pricing.professional.price}** ⭐ ${knowledgeBase.pricing.professional.tag}
• ${knowledgeBase.pricing.professional.conversations}
• ${knowledgeBase.pricing.professional.features.join('\n• ')}

**Important:** With an average ${knowledgeBase.results.roi}, most clients see the investment pay for itself within the first month! Plus, all plans come with a 14-day free trial - no credit card required.

Would you like to discuss which plan might be the best fit for your business?`;
  }

  // Team
  if (/(team|who|people|staff|experts|expertise|researchers|engineers|scientists)/.test(message)) {
    return `Our team is what makes G-marge special! We're a diverse group of passionate experts: 👥

${Object.entries(knowledgeBase.team).map(([role, info]) => 
  `**${role}**\n${info.role}\n\n*Key Expertise:*\n• ${info.expertise.join('\n• ')}`
).join('\n\n')}

Together, we've delivered ${knowledgeBase.company.stats.projects} with ${knowledgeBase.company.stats.satisfaction}. We're not just building technology - we're partnering with you for success!

What aspect of our expertise would you like to know more about?`;
  }

  // Results/ROI
  if (/(result|roi|return|benefit|outcome|success|performance|metric)/.test(message)) {
    return `Our results speak for themselves, and I'm proud to share them with you! 📈

**Real Results from Real Clients:**

• **${knowledgeBase.results.roi}** - Most clients see returns within the first month
• **${knowledgeBase.results.timeSaved}** - More time for what matters
• **${knowledgeBase.results.accuracy}** - Reliable, consistent performance
• **${knowledgeBase.results.costReduction}** - Significant cost savings
• **${knowledgeBase.results.satisfaction}** - Happy customers, every time
• **${knowledgeBase.results.responseTime}** - Lightning-fast responses
• **${knowledgeBase.results.availability}** - Never miss an opportunity

Our Sparkleville Cleaning client saw ${knowledgeBase.solutions['Custom Small Business Solutions'].industries[0].roi} ROI and ${knowledgeBase.solutions['Custom Small Business Solutions'].industries[0].bookingIncrease} booking increase!

These aren't just numbers - they represent real businesses growing, saving time, and serving customers better. Want to see how we can achieve similar results for you?`;
  }

  // Technology/Security
  if (/(security|secure|safe|privacy|data|protection|encryption|compliance|hipaa|gdpr)/.test(message)) {
    return `Security and privacy are absolutely paramount to us! Let me assure you: 🔒

**Enterprise-Grade Security:**
${knowledgeBase.technology.security.map(s => `• ${s}`).join('\n')}

**AI Technology:**
${knowledgeBase.technology.ai.map(t => `• ${t}`).join('\n')}

We take your data protection seriously and follow industry best practices. Your information is encrypted, secure, and handled with the utmost care. For healthcare clients, we're HIPAA-ready. For international clients, we're GDPR and CCPA compliant.

Do you have any specific security concerns I can address?`;
  }

  // Contact/Book
  if (/(contact|reach|call|email|book|appointment|consultation|demo|schedule|talk|speak|meet)/.test(message)) {
    return `I'd love to connect you with our team! Here's how you can reach us: 📞

**Contact Information:**
📧 Email: ${knowledgeBase.company.contact.email}
📞 Phone: ${knowledgeBase.company.contact.phone}
📍 Location: ${knowledgeBase.company.location}
🕐 Hours: ${knowledgeBase.company.contact.hours}

**What We Offer:**
• FREE initial consultation (no obligation)
• Personalized demo of our solutions
• Custom pricing based on your needs
• 14-day free trial to get started

We typically respond within 24 hours, and we'd be thrilled to discuss how AI can transform your business. Would you like me to help you prepare any specific questions for the team?`;
  }

  // Restaurant specific
  if (/(restaurant|food|dining|menu|reservation|takeout)/.test(message)) {
    const restaurant = knowledgeBase.solutions['Custom Small Business Solutions'].industries.find(i => i.name.includes('Restaurant'));
    return `Our Restaurant AI solution is fantastic for food service businesses! 🍕

**What it can do for your restaurant:**
${restaurant?.details}

**Key Benefits:**
• Never miss a reservation again (24/7 booking)
• Handle takeout orders efficiently
• Answer menu questions instantly
• Accommodate dietary restrictions easily
• Collect valuable customer feedback
• Manage waitlists automatically

Imagine having an assistant that never sleeps, never makes mistakes, and always provides friendly service to your customers - that's what our AI does!

Would you like to discuss how this could work specifically for your restaurant?`;
  }

  // Salon/Spa specific
  if (/(salon|spa|hair|barber|stylist|beauty)/.test(message)) {
    const salon = knowledgeBase.solutions['Custom Small Business Solutions'].industries.find(i => i.name.includes('Salon'));
    return `Perfect! Our Salon & Spa AI is designed specifically for beauty professionals like you! 💇✨

**What it handles:**
${salon?.details}

**Benefits for Your Business:**
• Reduce no-shows with automated reminders
• Match clients with the perfect stylist
• Upsell packages naturally
• Track client preferences for personalized service
• Free up your time to focus on what you do best
• Available 24/7, even when you're closed

Many salon owners tell us this is like having a receptionist who never takes a day off and always remembers every client detail!

Interested in seeing how it could work for your salon?`;
  }

  // Thanks/Appreciation
  if (/(thank|thanks|appreciate|grateful|helpful)/.test(message)) {
    const responses = [
      "You're so welcome! 😊 It's my pleasure to help. Is there anything else you'd like to know about G-marge or our AI solutions?",
      "I'm delighted I could help! That's what I'm here for. Feel free to ask if you have any other questions - I'm always happy to assist!",
      "Thank you for your kind words! I really enjoy helping people discover how AI can transform their businesses. What else can I help you with today?"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Goodbye
  if (/(bye|goodbye|see you|talk later|gotta go|have to go)/.test(message)) {
    return `It's been wonderful chatting with you! 👋

If you have any more questions in the future, I'm always here. And remember, you can reach our team at:
📧 ${knowledgeBase.company.contact.email}
📞 ${knowledgeBase.company.contact.phone}

Have a fantastic day, and I hope to hear from you again soon! 🌟`;
  }

  // Unknown/Polite Fallback - More human and helpful
  const politeResponses = [
    `That's a great question, and I want to make sure I give you the most accurate information! 😊

While I don't have specific details about that particular topic, I'm really knowledgeable about:

• **Our AI solutions** for 6 different industries (including our flagship Sparkleville success story with 18.5x ROI!)
• **Pricing & plans** starting at $299/month with 14-day free trials
• **Our team** of data scientists, AI researchers, and software engineers
• **Technology & security** features that keep your data safe
• **How to get started** with a free consultation

Is there something specific about our services I can help clarify? Or would you prefer to speak directly with our team? They're fantastic and would love to chat with you!`,

    `I appreciate your question! 🌟

To be completely honest, I want to make sure you get accurate information rather than guessing. While that's not something I have detailed knowledge about, I'm your go-to expert for:

✨ Learning about our **6 industry-specific AI solutions**
📊 Understanding the **amazing ROI** our clients achieve (like Sparkleville's 18.5x!)
💰 Exploring our **flexible pricing** (Starter $299/month & Professional $799/month)
🔒 Discussing our **enterprise-grade security** and compliance
📞 Connecting you with our team for **personalized answers**

Would you like me to help you with any of these topics? Or I can share our contact info so you can get a personalized answer from our expert team!`,

    `Thank you for that question! I want to be upfront with you - that's a bit outside my specific knowledge area, and I'd rather connect you with the right information than guess. 😊

Here's where I really shine:

🎯 **Solutions:** Detailed info on our AI for restaurants, salons, cleaning companies, contractors, coffee shops, and photography studios
📈 **Results:** Real success stories and ROI data
💻 **Technology:** How our AI works and integrates with your business
🛡️ **Security:** Privacy, compliance, and data protection
👥 **Team:** The experts behind G-marge

For questions outside these areas, our team would be thrilled to help! Want me to share the best way to reach them? Or shall we explore one of the topics I mentioned?`,

    `I love your curiosity! 🤔

To be completely transparent, I don't have specific information on that topic in my knowledge base. However, I'm really well-versed in:

• **Custom AI solutions** for small businesses in 6 different industries
• **Sparkleville's incredible success** (18.5x ROI, 85% booking increase!)
• **How our AI can save you 75%** of operational time
• **Pricing that fits** small business budgets
• **Security measures** that protect your business
• **Getting started** with a free trial and consultation

Would any of these be helpful? Or if you'd prefer to speak with someone who can answer your specific question, I'm happy to share our contact information. Our team is wonderful and super knowledgeable!`
  ];

  return politeResponses[Math.floor(Math.random() * politeResponses.length)];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 I\'m G-marge\'s AI assistant, and I\'m so glad you\'re here!\n\nI\'d love to help you discover how our AI solutions can transform your business. I can share information about:\n\n✨ Our industry-specific solutions (including our flagship Sparkleville success with 18.5x ROI!)\n💰 Pricing and plans\n🔒 Security and technology\n📊 Real results from real clients\n👥 Our expert team\n📞 How to get started\n\nWhat would you like to know? Feel free to ask me anything! 😊',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Listen for custom event to open chatbot
  useEffect(() => {
    const handleOpenChatbot = () => {
      setIsOpen(true);
    };

    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate natural typing delay based on response length
    const typingDelay = Math.min(1200 + inputValue.length * 15, 2000);
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#002B6B] to-[#004B9B] text-white shadow-2xl flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1, boxShadow: '0 10px 30px rgba(0, 43, 107, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            '0 0 0 0 rgba(0, 43, 107, 0.4)',
            '0 0 0 20px rgba(0, 43, 107, 0)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
          }
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#002B6B] to-[#004B9B] text-white p-4 flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
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
                <Bot className="w-6 h-6" />
              </motion.div>
              <div>
                <h3 className="font-bold">G-marge AI Assistant</h3>
                <p className="text-xs text-blue-100">Online • Ready to help 24/7</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-br from-[#BFC0C2] to-[#6E6F72]' 
                        : 'bg-gradient-to-br from-[#002B6B] to-[#004B9B]'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-br from-[#002B6B] to-[#004B9B] text-white'
                        : 'bg-white border border-gray-200 text-black'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#002B6B] to-[#004B9B] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#002B6B] focus:ring-2 focus:ring-blue-100 text-black"
                />
                <motion.button
                  onClick={handleSend}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#002B6B] to-[#004B9B] text-white flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}