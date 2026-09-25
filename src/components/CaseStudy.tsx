import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '01',
    label: 'The Problem',
    body: 'A D2C brand doing $500K/month cannot trust its own ROAS. Meta, Google and GA4 each claim credit for the same orders, and the totals add up to more revenue than Shopify recorded. Budget decisions get made on numbers nobody in the room believes.',
  },
  {
    step: '02',
    label: 'What We Build',
    body: 'A live Streamlit dashboard pulling Shopify, Meta Ads and GA4 into one reconciled view, plus an AI agent that reads it daily and writes the explanation in plain language. A geo holdout test runs alongside it to establish the incremental baseline.',
  },
  {
    step: '03',
    label: 'What Changes',
    body: 'Reported and incremental ROAS sit side by side, so spend that is harvesting demand it did not create becomes visible. Budget moves to the channels the holdout shows are genuinely incremental, and a weekly read means you stop reacting a month late.',
  },
];

const metrics = [
  { value: '2 wks', label: 'From kickoff to a live dashboard' },
  { value: '2-4 wks', label: 'Typical geo-holdout test window' },
  { value: 'Weekly', label: 'How often the agent flags a change' },
];

export function CaseStudy() {
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
            What This Looks Like in Practice
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-black">
            A worked example of the method. The brand is illustrative, not a client.
          </p>
        </motion.div>

        {/* Problem / Solution / Result */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="bg-[#E8F0FF] border border-[#BFC0C2] rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-[#002B6B] transition-colors hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="text-6xl font-bold text-[#002B6B] opacity-20 mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {item.step}
              </motion.div>

              <h3 className="text-xl font-bold mb-3 text-[#002B6B]">{item.label}</h3>

              <p className="text-black mb-6 leading-relaxed">{item.body}</p>

              <div className="pt-4 border-t border-[#BFC0C2]">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#BFC0C2]"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-4 h-4 text-[#002B6B]" />
                  <span className="text-sm text-black">Illustrative example</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Headline metrics */}
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="bg-white border border-[#BFC0C2] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:border-[#002B6B] transition-colors hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-[#002B6B] mb-2">{metric.value}</div>
              <div className="text-sm text-black">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Why there is no client logo here */}
        <motion.div
          className="mt-8 bg-[#E8F0FF] border border-[#BFC0C2] rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-semibold text-black">Why there is no client logo here</div>
          <p className="text-black mb-6 leading-relaxed">
            G-Marge is new. Rather than dress up someone else's results as ours, this page shows the
            method and what it costs. When there are client results worth publishing, they will appear
            here with the client's permission and their name on them.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
