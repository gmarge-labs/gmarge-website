import { motion } from 'motion/react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { Card3D } from './Card3D';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?w=400',
    quote: 'G-marge transformed our customer service with AI agents that reduced response time by 85%. The ROI was evident within the first month.',
  },
  {
    name: 'Michael Chen',
    role: 'VP of Innovation, DataFlow',
    company: 'DataFlow',
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
    quote: 'Working with G-marge was seamless. Their team understood our needs and delivered a solution that exceeded expectations. Truly impressive.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO, FutureWorks',
    company: 'FutureWorks',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    quote: 'The strategic consulting from G-marge helped us identify AI opportunities we hadn\'t even considered. Game-changing insights.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-black">
            Trusted by our client
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black">
            See what our clients have to say about their transformation journey
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-[#E8F0FF] border border-[#BFC0C2] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#002B6B] transition-colors hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="text-6xl text-[#002B6B] opacity-20 mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                "
              </motion.div>

              {/* Quote Text */}
              <p className="text-black mb-6 italic leading-relaxed">
                {testimonial.quote}
              </p>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-[#002B6B] text-[#002B6B]" />
                  </motion.div>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#BFC0C2]">
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#002B6B]"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <div className="font-semibold text-black">{testimonial.name}</div>
                  <div className="text-sm text-black">{testimonial.role}</div>
                  <div className="text-sm text-[#002B6B]">{testimonial.company}</div>
                </div>
              </div>

              {/* Animated Badge */}
              <motion.div
                className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#BFC0C2]"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-4 h-4 text-[#002B6B]" />
                <span className="text-sm text-black">Verified Client</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}