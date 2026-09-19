import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Knowledge Base: marketing measurement for D2C e-commerce brands
const knowledgeBase = {
  // Company Information
  company: {
    name: 'G-marge',
    description: 'G-marge is a marketing measurement consultancy for D2C e-commerce brands. We connect your Shopify, Meta Ads and GA4 data into one live dashboard, refreshed daily, and put an AI agent on top of it that explains in plain language what changed and why.',
    mission: 'Most D2C brands make budget decisions on platform-reported numbers that overstate performance. Our job is to show you what your marketing is actually doing, measured independently, and to keep showing you every day.',
    positioning: 'Your marketing metrics are lying to you. Here is what is actually happening, live.',
    contact: {
      email: 'halimabl@gmarge.com',
      phone: '+1 207 900 7700',
      cta: 'Book a Discovery Call',
      hours: 'Monday to Friday, replies within one business day'
    },
    status: {
      launch: 'First client dashboards go live in about two weeks',
      fit: 'Best fit: D2C brands spending roughly $50k+/month on paid media',
      commitment: '3-month minimum engagement',
      scope: 'Shopify, Meta Ads and GA4 as standard; other sources on request'
    }
  },

  // Core service components
  services: {
    'Live Dashboard': {
      description: 'A Streamlit dashboard that pulls from Shopify, Meta Ads and GA4 and refreshes daily, so blended and channel-level numbers sit in one place instead of three tabs.',
      features: ['Blended and channel-level ROAS', 'Spend, revenue, CAC and contribution margin', 'Daily refresh, no manual exports', 'One definition of every metric']
    },
    'AI Analyst Agent': {
      description: 'An AI agent reads the dashboard and writes up what changed and why in plain language, so you get an explanation rather than another chart to interpret.',
      features: ['Plain-language reads on daily and weekly movement', 'Attributes changes to channel, campaign or creative', 'Flags what needs a decision', 'Ask it follow-up questions in writing']
    },
    'Anomaly Detection': {
      description: 'Weekly checks that catch the failures that quietly drain budget between reporting cycles.',
      features: ['Creative fatigue before CPA climbs', 'Double-firing or broken pixels', 'Budget drift across campaigns', 'Tracking and feed breakages']
    },
    'Incrementality Testing': {
      description: 'Geo holdouts and matched-market tests that measure what your spend actually caused, not what the ad platforms claim credit for.',
      features: ['Geo holdout design and execution', 'Matched-market testing', 'True vs platform-reported ROAS', 'Findings translated into budget decisions']
    },
    'Deep-Dive Add-Ons': {
      description: 'Scoped projects for questions the dashboard raises but cannot answer on its own.',
      features: ['Campaign evaluation', 'Customer segmentation modelling', 'Media mix modelling', 'Scoped and priced per project']
    }
  },

  // Incrementality detail
  incrementality: {
    problem: 'Meta, Google and your Shopify reports all claim the same revenue. Add up platform-reported ROAS and it exceeds what actually landed in the bank.',
    gap: 'Across the brands we have measured, real incremental ROAS typically comes in 30-40% below platform-reported ROAS.',
    methods: [
      'Geo holdouts: switch spend off in matched regions, keep it on elsewhere, and measure the difference in revenue',
      'Matched-market tests: pair comparable markets, change one variable, read the lift',
      'Test windows are usually 4-6 weeks so results clear the noise'
    ],
    outcome: 'The output is a number you can plan against: how much revenue each channel actually causes, and where the next dollar should go.'
  },

  // Data access requirements
  data: {
    needed: [
      'Shopify: read-only access to orders and products via a custom app or staff account',
      'Meta Ads: partner access to the ad account through Business Manager (read-only is enough)',
      'GA4: Viewer access to the property',
      'Optional: Klaviyo, Google Ads, TikTok or Amazon if you want them in the same view'
    ],
    control: 'Read-only throughout. We never post, pause or edit campaigns, and access can be revoked from your side at any time.',
    effort: 'Granting access takes about 30 minutes of someone on your team. After that the pipeline runs on its own.'
  },

  // Timeline
  timeline: {
    total: 'About two weeks from the day access is granted.',
    steps: [
      'Days 1-3: connections built, historical data backfilled',
      'Days 4-7: metric definitions agreed with you and numbers reconciled against Shopify',
      'Days 8-14: dashboard live, AI agent switched on, first written readout delivered',
      'Week 3 onward: daily refresh, weekly anomaly report, incrementality tests designed'
    ]
  },

  // Pricing
  pricing: {
    core: {
      price: '$3,500-5,000/month',
      scope: 'Live dashboard, AI agent, weekly anomaly detection, incrementality test design and readouts',
      note: 'Where you land in the range depends on number of data sources, spend level and reporting complexity'
    },
    addons: {
      price: 'Scoped per project',
      scope: 'Campaign evaluation, segmentation modelling, media mix modelling',
      note: 'Quoted after the discovery call, once the question is clear'
    },
    terms: '3-month minimum. No setup fee, no per-seat charges, no long-term lock-in beyond the initial term.'
  },

  // What you get
  deliverables: {
    daily: 'Dashboard refreshed every day across Shopify, Meta Ads and GA4',
    weekly: 'Anomaly report covering creative fatigue, tracking faults and budget drift',
    monthly: 'Measurement readout: what moved, what caused it, what to change',
    ongoing: 'Incrementality tests designed, run and interpreted',
    access: 'A written answer from the AI agent whenever you ask what changed and why'
  }
};

// Enhanced natural language response generator
function generateBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase().trim();
  
  // Greetings - warm and welcoming
  if (/^(hello|hi|hey|good morning|good afternoon|good evening|greetings|howdy)/.test(message)) {
    const greetings = [
      "Hello. 👋 I'm the assistant for G-marge, a marketing measurement consultancy for D2C e-commerce brands. I can explain how the dashboard works, what incrementality testing tells you, what it costs, and how to book a call. What do you want to know?",
      "Hi. 👋 I can answer questions about how we measure D2C marketing performance: the live dashboard, the weekly anomaly checks, incrementality testing, pricing and setup. Where would you like to start?",
      "Hey. 👋 I'm here to explain what G-marge does: one live dashboard across Shopify, Meta Ads and GA4, plus an AI agent that tells you what changed and why. Ask me about the service, the data we need, pricing or timelines."
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  }

  // Incrementality testing
  if (/(incremental|incrementality|holdout|hold-out|geo test|matched market|lift test|true roas|real roas|causal|attribution)/.test(message)) {
    return `Incrementality testing measures what your spend actually caused, rather than what the platforms claim credit for.

**The problem**
${knowledgeBase.incrementality.problem}

**The gap**
${knowledgeBase.incrementality.gap}

**How we test**
• ${knowledgeBase.incrementality.methods.join('\n• ')}

**What you get**
${knowledgeBase.incrementality.outcome}

Tests are designed as part of the core package and run alongside your normal spend, so nothing goes dark. Want to talk through which channel to test first? Book a Discovery Call at ${knowledgeBase.company.contact.email}.`;
  }

  // Anomaly detection
  if (/(anomaly|anomalies|alert|fatigue|pixel|double.?fir|budget drift|broken|tracking issue|monitor)/.test(message)) {
    const anomaly = knowledgeBase.services['Anomaly Detection'];
    return `Weekly anomaly detection is part of the core package.

${anomaly.description}

**What we check for:**
• ${anomaly.features.join('\n• ')}

These are the problems that do not show up in a monthly report until the money is already spent. A double-firing pixel inflates reported conversions for weeks. Creative fatigue shows as a slow CPA climb that looks like seasonality until you separate it out. Budget drift moves spend into campaigns nobody chose.

You get a written report each week listing what we found and what we recommend doing about it.`;
  }

  // Dashboard
  if (/(dashboard|streamlit|refresh|daily|live data|single view|reporting|report|chart|visual)/.test(message)) {
    const dash = knowledgeBase.services['Live Dashboard'];
    return `The dashboard is the foundation of the service.

${dash.description}

**What is in it:**
• ${dash.features.join('\n• ')}

It is a Streamlit application, hosted for you, that you open in a browser. No spreadsheet exports, no waiting on an analyst, no reconciling three platforms that each report a different revenue number.

Every metric is defined once, agreed with you during setup, and reconciled against Shopify so the numbers tie out. ${knowledgeBase.company.status.launch}.`;
  }

  // AI agent
  if (/(ai agent|agent|assistant|plain language|explain|what changed|why did|interpret|analysis)/.test(message)) {
    const agent = knowledgeBase.services['AI Analyst Agent'];
    return `The AI agent sits on top of the dashboard.

${agent.description}

**What it does:**
• ${agent.features.join('\n• ')}

A dashboard tells you ROAS fell 18% last week. The agent tells you it fell because two creatives in your top-spending campaign hit frequency 4.2 and CPA climbed with them, while the rest of the account held steady.

It reads the same data you do, but it writes the explanation so you are not reverse-engineering charts at 11pm.`;
  }

  // Deep dives / add-ons
  if (/(deep.?dive|add.?on|mmm|media mix|marketing mix|segmentation|cohort|lifetime value|ltv|campaign evaluation|modelling|modeling)/.test(message)) {
    const addons = knowledgeBase.services['Deep-Dive Add-Ons'];
    return `Deep dives are scoped projects on top of the core package.

${addons.description}

**Available add-ons:**
• ${addons.features.join('\n• ')}

**Campaign evaluation** takes a specific campaign or launch apart and says whether it worked and why.
**Segmentation modelling** groups your customers by actual buying behaviour so acquisition targets stop being guesswork.
**Media mix modelling** estimates each channel's contribution across your whole spend, which is useful once you are running more channels than you can holdout-test individually.

Pricing is ${knowledgeBase.pricing.addons.price.toLowerCase()} - ${knowledgeBase.pricing.addons.note}.`;
  }

  // Services overview
  if (/(service|what do you (actually |really )?do|what you do|what does g-marge do|what can you do|offering|package|how does it work|how it works|what is this)/.test(message) && !/(customer service)/.test(message)) {
    return `Here is the whole offering.

${Object.entries(knowledgeBase.services).map(([name, service]) => 
  `**${name}**\n${service.description}\n• ${service.features.join('\n• ')}`
).join('\n\n')}

The first four are the core package at ${knowledgeBase.pricing.core.price}. Deep dives are scoped separately.

Which part do you want to go deeper on?`;
  }

  // Pricing
  if (/(price|pricing|cost|how much|fee|budget|retainer|contract|minimum|afford)/.test(message)) {
    return `Straightforward pricing, no tiers to decode.

**Core package - ${knowledgeBase.pricing.core.price}**
${knowledgeBase.pricing.core.scope}
${knowledgeBase.pricing.core.note}.

**Deep-dive add-ons - ${knowledgeBase.pricing.addons.price}**
${knowledgeBase.pricing.addons.scope}
${knowledgeBase.pricing.addons.note}.

**Terms**
${knowledgeBase.pricing.terms}

Three months is the minimum because incrementality tests need 4-6 weeks to produce a readable result, and one test on its own does not change how you buy media.

${knowledgeBase.company.status.fit}. If you are spending less than that, the honest answer is that the measurement gap probably is not costing you enough yet to justify the fee.`;
  }

  // Data access
  if (/(data|access|connect|integration|shopify|meta|facebook|ga4|google analytics|permission|api|what do you need)/.test(message) && !/(security|secure|privacy|gdpr)/.test(message)) {
    return `Read-only access to three platforms is all we need to start.

**What we ask for:**
• ${knowledgeBase.data.needed.join('\n• ')}

**Control**
${knowledgeBase.data.control}

**Effort on your side**
${knowledgeBase.data.effort}

We do not need your ad account password, your Shopify admin login, or anything shared over email. Access is granted through each platform's own permissions system and shows up in your audit log.`;
  }

  // Timeline / getting started
  if (/(how long|timeline|setup|set up|onboard|get started|getting started|when can|launch|kick off|implementation)/.test(message)) {
    return `${knowledgeBase.timeline.total}

**How the two weeks run:**
• ${knowledgeBase.timeline.steps.join('\n• ')}

The slow part is never the engineering. It is agreeing what a conversion is, which orders count, and how returns and discounts are handled. We do that with you in week one so nobody argues with the numbers later.

${knowledgeBase.company.status.launch}, so the next onboarding slots are open now.`;
  }

  // About
  if (/(about|who are you|who is|tell me about|company|background|why|problem|lying|trust)/.test(message)) {
    return `${knowledgeBase.company.description}

**Why this exists**
${knowledgeBase.company.mission}

${knowledgeBase.incrementality.gap} That gap is the difference between a channel you should scale and one you should cut, and platform dashboards will never show it to you, because they are grading their own work.

**How we are set up**
• ${knowledgeBase.company.status.scope}
• ${knowledgeBase.company.status.fit}
• ${knowledgeBase.company.status.commitment}
• ${knowledgeBase.company.status.launch}

Want to see it against your own numbers? Book a Discovery Call.`;
  }

  // Security / privacy
  if (/(security|secure|safe|privacy|protection|encryption|compliance|gdpr|confidential|nda)/.test(message)) {
    return `Fair question, since you are handing over commercial data.

**Access**
${knowledgeBase.data.control}

**Handling**
• Credentials are stored encrypted, never in documents or email
• Your data is used only to produce your dashboard and analysis
• Nothing is pooled with other clients or used as benchmark data without written permission
• We sign your NDA before access is granted, or provide ours if you prefer

**Exit**
If the engagement ends, access is revoked, and we delete your stored data on request and confirm it in writing.

Anything specific your team needs to sign off on? ${knowledgeBase.company.contact.email} reaches us directly.`;
  }

  // Deliverables / results
  if (/(deliverable|what do i get|what will i get|output|result|outcome|roas|kpi|metric|benefit)/.test(message)) {
    return `What lands on your desk:

• **Daily:** ${knowledgeBase.deliverables.daily}
• **Weekly:** ${knowledgeBase.deliverables.weekly}
• **Monthly:** ${knowledgeBase.deliverables.monthly}
• **Ongoing:** ${knowledgeBase.deliverables.ongoing}
• **On demand:** ${knowledgeBase.deliverables.access}

What we do not do is manage your campaigns. We are not an agency and we do not have a media buying business to protect, which is exactly why our measurement of your agency's work is worth reading.

${knowledgeBase.incrementality.gap} Knowing that number changes how you spend.`;
  }

  // Contact / book
  if (/(contact|reach|call|email|book|appointment|consultation|demo|schedule|talk|speak|meet|discovery)/.test(message)) {
    return `Book a Discovery Call and we will go through your setup.

📧 Email: ${knowledgeBase.company.contact.email}
📞 Phone: ${knowledgeBase.company.contact.phone}
🕐 ${knowledgeBase.company.contact.hours}

**What happens on the call (about 30 minutes):**
• What you are spending, where, and what you currently use to judge it
• Where your reported numbers and your bank account disagree
• Which channel is the best first incrementality test
• Whether the core package or a scoped deep dive fits, and what it would cost

No deck, no pitch sequence. If measurement is not your bottleneck right now, we will say so on the call.

Useful to have ready: monthly paid media spend, your current blended ROAS, and who owns reporting internally.`;
  }

  // Thanks
  if (/(thank|thanks|appreciate|grateful|helpful)/.test(message)) {
    const responses = [
      "Glad that helped. Anything else on the dashboard, incrementality testing, pricing or setup?",
      "Happy to help. Ask me anything else about how the measurement works or what booking a call involves.",
      "Anytime. If you want the version applied to your own numbers, that is what the Discovery Call is for."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Goodbye
  if (/(bye|goodbye|see you|talk later|gotta go|have to go)/.test(message)) {
    return `Thanks for stopping by.

When you want to look at your real numbers rather than the platform-reported ones, book a Discovery Call:
📧 ${knowledgeBase.company.contact.email}
📞 ${knowledgeBase.company.contact.phone}`;
  }

  // Unknown/Polite Fallback
  const politeResponses = [
    `I do not have a good answer to that one, and I would rather not guess at it.

Here is what I can cover properly:

• **The service** - a live dashboard across Shopify, Meta Ads and GA4, plus an AI agent that explains what changed
• **Incrementality testing** - geo holdouts and matched-market tests, and why real ROAS usually lands 30-40% below platform-reported
• **Pricing** - ${knowledgeBase.pricing.core.price} for the core package, add-ons scoped per project
• **Data access** - read-only Shopify, Meta and GA4, about 30 minutes of your team's time
• **Timeline** - roughly two weeks from access to live dashboard

Which of those helps? Or book a Discovery Call and ask the team directly at ${knowledgeBase.company.contact.email}.`,

    `That sits outside what I can answer accurately, so I will point you at what I do know.

I can explain:

• How the daily dashboard is built and what is on it
• What the AI agent writes up each week and how to ask it questions
• What weekly anomaly detection catches: creative fatigue, double-firing pixels, budget drift
• How geo holdouts and matched-market tests measure true incremental ROAS
• Pricing, the 3-month minimum, and what the Discovery Call covers

Pick one, or email ${knowledgeBase.company.contact.email} and a person will answer it properly.`,

    `Not something I can answer with confidence, so I will not try.

What I am useful for:

• **What the service is** - independent measurement of your D2C marketing, refreshed daily
• **Why it matters** - ${knowledgeBase.incrementality.gap}
• **What it costs** - ${knowledgeBase.pricing.core.price}, 3-month minimum, add-ons quoted separately
• **What we need from you** - read-only access to Shopify, Meta Ads and GA4
• **How to start** - Book a Discovery Call, about 30 minutes

Want me to go into any of those?`,

    `I would only be guessing at that, which is not much use to you.

Things I can be specific about:

• The live Streamlit dashboard and its daily refresh
• The AI agent that explains movement in plain language
• Weekly anomaly detection and what it catches before it costs you
• Incrementality testing, and why platform-reported ROAS overstates reality by 30-40%
• Deep-dive add-ons: campaign evaluation, segmentation modelling, media mix modelling
• Pricing, setup time, and booking a Discovery Call

Which one? Or reach the team at ${knowledgeBase.company.contact.email} / ${knowledgeBase.company.contact.phone}.`
  ];

  return politeResponses[Math.floor(Math.random() * politeResponses.length)];
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello. 👋 I am the assistant for G-marge, a marketing measurement consultancy for D2C e-commerce brands.\n\nYour marketing metrics are lying to you. We show you what is actually happening, live. I can walk you through:\n\n✨ What we do: one live dashboard across Shopify, Meta Ads and GA4\n💰 Pricing and what is in the core package\n🔒 What data access we need and how it is handled\n📊 Incrementality testing and why your real ROAS is lower than reported\n👥 Weekly anomaly checks: creative fatigue, pixels, budget drift\n📞 How to book a Discovery Call\n\nWhat would you like to know?',
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
        aria-label={isOpen ? 'Close the chat assistant' : 'Open the chat assistant'}
        aria-expanded={isOpen}
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
                <p className="text-xs text-blue-100">Online • Measurement questions</p>
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
                  aria-label="Send message"
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