import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * Netlify Forms submission.
 *
 * The form is rendered by React, so Netlify's build-time parser never sees it.
 * A hidden copy in index.html registers the form and its fields; this posts
 * urlencoded data back to the site root with a matching form-name, which is
 * what Netlify's handler looks for. No backend and no keys.
 */
const FORM_NAME = 'contact';

/**
 * Turns a failed submission into a pre-filled email. The visitor keeps
 * everything they typed and needs one click, instead of being told to go and
 * write the whole thing again.
 */
const buildMailto = (data: Record<string, string>) => {
  const line = (label: string, key: string) => (data[key] ? `${label}: ${data[key]}\n` : '');
  const body =
    line('Name', 'name') +
    line('Email', 'email') +
    line('Brand', 'brand') +
    line('Monthly ad spend', 'spend') +
    line('Platforms', 'platforms') +
    `\n${data.message || ''}`;
  return `mailto:halimabl@gmarge.com?subject=${encodeURIComponent(
    'Enquiry from gmarge.com'
  )}&body=${encodeURIComponent(body)}`;
};

const encode = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([k, v]) => encodeURIComponent(k) + '=' + encodeURIComponent(v))
    .join('&');

const FIELD =
  'w-full px-4 py-3 rounded-xl border border-[#BFC0C2] bg-white text-black focus:outline-none focus:border-[#002B6B]';
const LABEL = 'block text-sm font-medium text-black mb-2';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  // Held only so a failed submit can be turned into a pre-filled email rather
  // than making the visitor retype everything.
  const [mailtoHref, setMailtoHref] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form) as unknown as Iterable<[string, string]>);
    setStatus('sending');
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...data }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('sent');
      form.reset();
    } catch {
      setMailtoHref(buildMailto(data));
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <motion.div
        className="max-w-3xl mx-auto rounded-2xl border border-[#BFC0C2] bg-[#E8F0FF] p-8 sm:p-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CheckCircle2 className="w-12 h-12 text-[#002B6B] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-black mb-2">Thanks — that's with us</h3>
        <p className="text-black leading-relaxed">
          We read every one of these ourselves and reply within one working day, usually with a
          question or two about your setup before we book anything in.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto rounded-2xl border border-[#BFC0C2] bg-white p-8 sm:p-10 shadow-xl"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      {/* Spam trap: a real person never fills this in. */}
      <p className="hidden">
        <label>
          Leave this field empty <input name="bot-field" />
        </label>
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={LABEL} htmlFor="cf-name">Your name</label>
          <input className={FIELD} id="cf-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div>
          <label className={LABEL} htmlFor="cf-email">Work email</label>
          <input className={FIELD} id="cf-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={LABEL} htmlFor="cf-brand">Brand or company</label>
          <input className={FIELD} id="cf-brand" name="brand" type="text" autoComplete="organization" />
        </div>
        <div>
          <label className={LABEL} htmlFor="cf-spend">Monthly ad spend</label>
          <input className={FIELD} id="cf-spend" name="spend" type="text" placeholder="e.g. $80k" />
        </div>
      </div>

      <div className="mb-4">
        <label className={LABEL} htmlFor="cf-platforms">Platforms you run</label>
        <input
          className={FIELD}
          id="cf-platforms"
          name="platforms"
          type="text"
          placeholder="Shopify, Meta, GA4, TikTok…"
        />
      </div>

      <div className="mb-6">
        <label className={LABEL} htmlFor="cf-message">What are you trying to find out?</label>
        <textarea
          className={FIELD}
          id="cf-message"
          name="message"
          rows={5}
          required
          style={{ resize: 'vertical' }}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 mb-4 text-black">
          <AlertCircle className="w-5 h-5 text-[#002B6B] flex-shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <p className="mb-2">
              That did not send. Nothing you typed is lost — send it as an email instead and we
              will pick it up.
            </p>
            <a
              className="inline-block px-6 py-3 rounded-full bg-[#002B6B] text-white font-semibold"
              href={mailtoHref}
            >
              Send this as an email
            </a>
          </div>
        </div>
      )}

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className="px-8 py-4 rounded-full bg-[#002B6B] text-white font-semibold transition-colors"
        style={status === 'sending' ? { opacity: 0.6, cursor: 'not-allowed' } : undefined}
        whileHover={status === 'sending' ? undefined : { scale: 1.05 }}
        whileTap={status === 'sending' ? undefined : { scale: 0.95 }}
      >
        {status === 'sending' ? 'Sending…' : 'Send it over'}
      </motion.button>

      <p className="text-sm text-black mt-6 leading-relaxed">
        We use this only to reply to you. No list, no sequence — see the{' '}
        <a className="text-[#002B6B] underline" href="/privacy">privacy policy</a>.
      </p>
    </form>
  );
}
