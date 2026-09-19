/**
 * Central place for outbound CTA links.
 *
 * BOOKING_URL: leave as '' to send "Book a Discovery Call" to the on-site
 * Contact page. Paste a Calendly / Typeform URL here and every booking
 * button across the site opens it in a new tab instead.
 *
 * DEMO_URL: leave as '' to have "See a Demo" smooth-scroll to the live
 * dashboard preview on the homepage. Paste a Streamlit URL here to link out.
 */
export const BOOKING_URL = 'https://calendly.com/gmarge/30min';
export const DEMO_URL = '';

/** id of the homepage dashboard preview section, used by the demo scroll */
export const DEMO_SECTION_ID = 'live-demo';

export function scrollToDemo() {
  const el = document.getElementById(DEMO_SECTION_ID);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
