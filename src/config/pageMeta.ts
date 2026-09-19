import type { Page } from '../components/Router';
import { pathForPage } from '../components/Router';

export const SITE_URL = 'https://www.gmarge.com';

/**
 * Per-route title and description.
 *
 * Every route previously served the single <title> baked into index.html, so
 * all 14 pages competed as the same document once they became crawlable.
 * Titles are kept near 60 characters and descriptions near 155, which is
 * roughly what search results show before truncating.
 */
export const PAGE_META: Record<Page, { title: string; description: string }> = {
  'not-found': {
    title: 'Page not found | G-marge',
    description: 'This page does not exist. The link may be out of date, or the address mistyped.',
  },
  home: {
    title: 'G-marge — Marketing measurement for D2C e-commerce',
    description:
      'Live dashboards and AI-interpreted insights for D2C e-commerce brands. See the gap between what the ad platforms report and what your spend is actually doing.',
  },
  services: {
    title: 'Marketing Measurement You Can Trust | G-marge',
    description:
      'Live dashboards, honest incrementality numbers, and an AI agent that explains your marketing performance in plain language. Built for D2C e-commerce brands.',
  },
  solutions: {
    title: 'How It Works | G-marge',
    description:
      'From three conflicting dashboards to one number you can defend. What a G-marge measurement engagement actually involves, week by week.',
  },
  about: {
    title: 'About G-marge',
    description:
      'Measurement people who got tired of watching brands optimise toward fiction. The measurement science, AI engineering and data plumbing behind the work.',
  },
  contact: {
    title: 'Book a Discovery Call | G-marge',
    description:
      'Thirty minutes on your current reporting setup, and an honest read on where the gap between reported and real performance probably sits.',
  },
  features: {
    title: 'What You Get | G-marge',
    description:
      'A live dashboard, an AI agent that reads it for you, and the incrementality work that turns platform-reported numbers into ones you can defend.',
  },
  pricing: {
    title: 'Pricing — One Retainer, No Surprises | G-marge',
    description:
      'A monthly retainer for the live dashboard and AI agent, plus deep-dive studies scoped as you need them. No per-seat fees, no usage meters, no annual lock-in.',
  },
  security: {
    title: 'Data Security | G-marge',
    description:
      'How we access your Shopify, ad and analytics accounts, where the data sits, who can see it, and what happens to it when an engagement ends.',
  },
  documentation: {
    title: 'How We Measure | G-marge',
    description:
      'The methods behind the dashboard, the holdout tests and the weekly read-outs, written so you can check our working rather than take the numbers on trust.',
  },
  'help-center': {
    title: 'Questions, Answered | G-marge',
    description:
      'What the engagement includes, what access we need, how incrementality testing works, what it costs and how long it takes to go live.',
  },
  api: {
    title: 'Integrations | G-marge',
    description:
      'We read from the tools you already run on. Shopify, Meta Ads and GA4 as standard, pulled daily into one place, with read-only access and a clear exit.',
  },
  privacy: {
    title: 'Privacy Policy | G-marge',
    description:
      'How G-marge handles client platform data and personal data: what we access, why, how long we keep it, who processes it and your rights over it.',
  },
  licenses: {
    title: 'Software Licenses | G-marge',
    description:
      'The open-source projects behind this site and the dashboards we build for clients, and the licences they are released under.',
  },
  terms: {
    title: 'Terms of Engagement | G-marge',
    description:
      'The terms covering consulting engagements with G-marge, a marketing measurement consultancy for D2C e-commerce brands, and your use of this site.',
  },
};

function setTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

function removeCanonical() {
  document.head.querySelector('link[rel="canonical"]')?.remove();
}

/** Point the document's title, description, social tags and canonical at one page. */
export function applyPageMeta(page: Page) {
  const meta = PAGE_META[page] ?? PAGE_META.home;
  document.title = meta.title;
  setTag('name', 'description', meta.description);
  setTag('property', 'og:title', meta.title);
  setTag('property', 'og:description', meta.description);
  setTag('name', 'twitter:title', meta.title);
  setTag('name', 'twitter:description', meta.description);

  if (page === 'not-found') {
    // A 404 has no canonical of its own - the URL that produced it is junk -
    // and must not be indexed. Keep og:url on the real address the visitor is
    // looking at rather than pointing it somewhere misleading.
    setTag('name', 'robots', 'noindex, follow');
    setTag('property', 'og:url', SITE_URL + window.location.pathname);
    removeCanonical();
    return;
  }

  // Clear the 404's noindex when navigating back to a real page.
  setTag('name', 'robots', 'index, follow');
  const url = SITE_URL + pathForPage(page);
  setTag('property', 'og:url', url);
  setCanonical(url);
}
