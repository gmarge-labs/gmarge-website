import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useRouter, pathForPage, isModifiedClick, Page } from './Router';
import { ImageWithFallback } from './figma/ImageWithFallback';

const footerLinks = {
  Platform: ['What You Get', 'Pricing', 'Data Security'],
  Company: ['About', 'Integrations'],
  Resources: ['Methodology', 'FAQ'],
  Legal: ['Privacy', 'Licenses'],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  const { navigate } = useRouter();

  return (
    <footer className="relative bg-[#BFC0C2] text-black overflow-hidden border-t border-[#BFC0C2]">
      {/* Animated Topology Background */}
      <div className="absolute inset-0 opacity-10">
        {/* Nodes */}
        {[...Array(30)].map((_, i) => {
          const x = (i % 6) * 20;
          const y = Math.floor(i / 6) * 20;
          return (
            <motion.div
              key={`node-${i}`}
              className="absolute w-2 h-2 bg-[#002B6B] rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {[...Array(20)].map((_, i) => {
            const x1 = Math.random() * 100;
            const y1 = Math.random() * 100;
            const x2 = Math.random() * 100;
            const y2 = Math.random() * 100;
            return (
              <motion.line
                key={`line-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="rgba(0, 43, 107, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.4, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Floating Shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute w-32 h-32 rounded-lg bg-[#002B6B]/5 blur-xl"
          style={{
            left: `${20 + i * 30}%`,
            top: `${20 + i * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-4 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => navigate('home')}
            >
              <motion.div
                className="w-12 h-12 flex items-center justify-center"
                whileHover={{ 
                  rotate: 15,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <ImageWithFallback
                  src="/gmarge-logo-4x.png"
                  alt="G-marge Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <span className="text-2xl font-bold text-[#002B6B]">
                G-marge
              </span>
            </motion.div>

            <motion.p
              className="text-black mb-6 max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Live, AI-interpreted marketing measurement for D2C e-commerce brands. We show you the gap between what the platforms report and what your spend is actually doing.
            </motion.p>

            {/* Social Links */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white border border-[#BFC0C2] flex items-center justify-center hover:bg-[#E8F0FF] hover:border-[#002B6B] transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    whileHover={{ 
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 text-black" />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <div key={category}>
              <motion.h3
                className="font-bold mb-4 text-black"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {category}
              </motion.h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => {
                  // Map link text to route
                  const getRoute = (linkText: string): Page => {
                    const routeMap: { [key: string]: Page } = {
                      'What You Get': 'features',
                      'Pricing': 'pricing',
                      'Data Security': 'security',
                      'About': 'about',
                      'Methodology': 'documentation',
                      'FAQ': 'help-center',
                      'Integrations': 'api',
                      'Privacy': 'privacy',
                      'Licenses': 'licenses'
                    };
                    return routeMap[linkText] || 'home';
                  };

                  const route = getRoute(link);

                  return (
                    <motion.li
                      key={link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + linkIndex * 0.05,
                      }}
                    >
                      <motion.a
                        href={pathForPage(route)}
                        onClick={(e) => {
                          if (isModifiedClick(e)) return;
                          e.preventDefault();
                          navigate(route);
                        }}
                        className="text-black hover:text-[#002B6B] transition-colors inline-flex items-center group cursor-pointer"
                        // index.css:474 gives bare <button> font-weight 500; anchors
                        // miss that rule, so restore it to keep these byte-identical.
                        style={{ fontWeight: 500 }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span
                          className="inline-block mr-2 opacity-0 group-hover:opacity-100"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          →
                        </motion.span>
                        {link}
                      </motion.a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-[#BFC0C2] mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-black text-sm">
            © 2026 G-marge. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 text-sm text-black">
            <motion.a
              href={pathForPage('privacy')}
              onClick={(e) => {
                if (isModifiedClick(e)) return;
                e.preventDefault();
                navigate('privacy');
              }}
              className="hover:text-[#002B6B] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href={pathForPage('terms')}
              onClick={(e) => {
                if (isModifiedClick(e)) return;
                e.preventDefault();
                navigate('terms');
              }}
              className="hover:text-[#002B6B] transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Animated Logo Watermark */}
      <motion.div
        className="absolute bottom-4 right-4 opacity-5"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-32 h-32 rounded-full bg-[#002B6B]" />
      </motion.div>
    </footer>
  );
}