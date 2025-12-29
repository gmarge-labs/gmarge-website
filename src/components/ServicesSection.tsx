import { motion, AnimatePresence } from 'motion/react';
import { Code2, Package, Zap, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from './Router';
import { Card3D } from './Card3D';

const services = [
  {
    icon: Code2,
    title: 'Custom Development',
    description: 'Tailored AI solutions built to your exact specifications',
    features: ['Custom Models', 'API Integration', 'Scalable Architecture', 'Ongoing Support'],
    color: 'from-blue-700 to-indigo-600',
    detailedDescription: 'Our custom development service provides end-to-end AI solutions tailored specifically to your business needs. We work closely with your team to understand your unique challenges and build intelligent systems that seamlessly integrate with your existing infrastructure. From natural language processing to machine learning models, we deliver production-ready solutions that scale with your business. Our expert developers leverage cutting-edge technologies and best practices to ensure your AI implementation is robust, maintainable, and future-proof. We provide comprehensive documentation, training, and ongoing support to ensure your team can effectively utilize and maintain the solutions we build together.',
    benefits: ['Fully customized to your workflow', 'Seamless integration with existing systems', 'Enterprise-grade security and compliance', 'Dedicated development team', 'Flexible engagement models'],
  },
  {
    icon: Package,
    title: 'Pre-built Solutions',
    description: 'Ready-to-deploy AI agents for common use cases',
    features: ['Quick Deployment', 'Proven Results', 'Easy Integration', 'Cost Effective'],
    color: 'from-indigo-600 to-blue-500',
    detailedDescription: 'Accelerate your AI journey with our library of pre-built, production-tested solutions designed for common business scenarios. These ready-to-deploy agents have been refined through real-world implementations across various industries, ensuring reliability and effectiveness from day one. Whether you need customer service automation, document processing, appointment scheduling, or intelligent chatbots, our pre-built solutions can be deployed in days rather than months. Each solution comes with proven ROI metrics, comprehensive documentation, and easy integration guides. We handle the complex AI infrastructure so you can focus on getting immediate business value without the lengthy development cycles.',
    benefits: ['Rapid time-to-market (deploy in days)', 'Proven track record with existing clients', 'Lower upfront investment', 'Regular updates and improvements', 'Easy customization options'],
  },
  {
    icon: Zap,
    title: 'Consulting & Strategy',
    description: 'Expert guidance for your AI transformation journey',
    features: ['Strategic Planning', 'Technical Consulting', 'Training Programs', 'Best Practices'],
    color: 'from-blue-600 to-indigo-500',
    detailedDescription: 'Navigate the complex landscape of AI transformation with expert guidance from our seasoned consultants. We help you identify high-impact AI opportunities within your organization, develop comprehensive implementation roadmaps, and build the internal capabilities needed for long-term success. Our strategic consulting services include AI readiness assessments, use case prioritization, technology stack recommendations, and ROI modeling. We provide hands-on training programs to upskill your team and establish best practices for responsible AI deployment. Whether you\'re just beginning your AI journey or looking to optimize existing initiatives, our consultants bring deep industry expertise and technical knowledge to accelerate your transformation.',
    benefits: ['Strategic AI roadmap development', 'Risk assessment and mitigation', 'Team training and capability building', 'Vendor selection guidance', 'Change management support'],
  },
  {
    icon: Brain,
    title: 'Data Science & Analytics',
    description: 'Advanced data science, analytics, and computer vision solutions',
    features: ['Data Science', 'Data Analytics', 'Computer Vision', 'Predictive Modeling'],
    color: 'from-blue-500 to-indigo-700',
    detailedDescription: 'Unlock the full potential of your data with our comprehensive data science and analytics services. Our team of expert data scientists and ML engineers specializes in extracting actionable insights from complex datasets, building predictive models that drive business decisions, and implementing cutting-edge computer vision solutions for visual data analysis. We handle everything from data collection and cleaning to advanced statistical modeling and deep learning implementations. Our computer vision expertise includes object detection, image classification, facial recognition, and automated quality inspection systems. We transform raw data into strategic assets that give you a competitive edge through data-driven decision making and intelligent automation.',
    benefits: ['Advanced predictive analytics', 'Custom computer vision models', 'Real-time data processing', 'Interactive dashboards and reporting', 'Automated insight generation'],
  },
];

export function ServicesSection() {
  const { navigate } = useRouter();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleExpand = (title: string) => {
    setExpandedService(expandedService === title ? null : title);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-black">
            Our Services
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business and drive measurable results
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.title;
            return (
              <motion.div
                key={service.title}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                layout
              >
                <Card3D
                  key={service.title}
                  className="bg-white border border-[#BFC0C2] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#002B6B] transition-colors hover:shadow-lg"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#E8F0FF] border border-[#BFC0C2] flex items-center justify-center mb-5 sm:mb-6">
                    <Icon className="w-8 h-8 text-[#002B6B]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
                  <p className="text-black mb-6">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 text-black"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-[#002B6B] flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Expanded Details Section */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <div className="border-t border-[#BFC0C2] pt-6 space-y-6">
                          {/* Detailed Description */}
                          <div>
                            <h4 className="text-lg font-semibold text-[#002B6B] mb-3">
                              Detailed Overview
                            </h4>
                            <p className="text-black leading-relaxed">
                              {service.detailedDescription}
                            </p>
                          </div>

                          {/* Benefits Section */}
                          <div>
                            <h4 className="text-lg font-semibold text-[#002B6B] mb-3">
                              Key Benefits
                            </h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, i) => (
                                <motion.li
                                  key={benefit}
                                  className="flex items-start gap-3 text-black"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                >
                                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#002B6B] to-[#004B9B] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-white text-xs">→</span>
                                  </div>
                                  <span className="flex-1">{benefit}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    className="w-full px-6 py-3 rounded-full bg-[#002B6B] text-white hover:bg-[#004B9B] transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleExpand(service.title)}
                  >
                    {isExpanded ? (
                      <>
                        Show Less
                        <ChevronUp className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Learn More
                        <ChevronDown className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}