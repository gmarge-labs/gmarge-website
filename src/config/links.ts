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
// Annotated as string rather than inferred as a literal, so that the
// "is it configured?" checks below are real runtime checks rather than
// comparisons TypeScript considers statically decided.
export const BOOKING_URL: string = 'https://calendly.com/gmarge/30min';
export const DEMO_URL: string = '';

/** True when booking CTAs point somewhere off-site. */
export const BOOKING_IS_EXTERNAL = BOOKING_URL !== '';

/**
 * Props for a "Book a Discovery Call" control.
 *
 * With BOOKING_URL set these render a real anchor: window.open() from a click
 * handler is exactly the pattern popup blockers and privacy extensions target,
 * and when it is blocked the visitor just sees nothing happen. A plain link is
 * not blockable, and it supports cmd-click and open-in-new-tab for free.
 *
 * With BOOKING_URL empty they stay buttons that route to the contact page.
 */
export function bookingCtaProps(navigate: (page: 'contact') => void): {
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
} {
  return BOOKING_IS_EXTERNAL
    ? { href: BOOKING_URL, target: '_blank', rel: 'noopener noreferrer' }
    : { onClick: () => navigate('contact') };
}

/**
 * An <a> lacks two <button> defaults these CTAs rely on: inline-block layout
 * and centred text. Restoring them keeps a converted CTA pixel-identical.
 * Flex parents blockify the element and shrink-wrap the text, so this is a
 * no-op there and only matters for the block-parent and w-full cases.
 */
export const BOOKING_ANCHOR_STYLE = {
  display: 'inline-block',
  textAlign: 'center',
} as const;

/** id of the homepage dashboard preview section, used by the demo scroll */
export const DEMO_SECTION_ID = 'live-demo';

export function scrollToDemo() {
  const el = document.getElementById(DEMO_SECTION_ID);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
