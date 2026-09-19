import { createContext, useContext, useState, useEffect, ReactNode, MouseEvent } from 'react';

export type Page = 'home' | 'services' | 'solutions' | 'about' | 'contact' | 'features' | 'pricing' | 'security' | 'documentation' | 'help-center' | 'api' | 'privacy' | 'licenses' | 'terms';

const PAGES: readonly Page[] = [
  'home',
  'services',
  'solutions',
  'about',
  'contact',
  'features',
  'pricing',
  'security',
  'documentation',
  'help-center',
  'api',
  'privacy',
  'licenses',
  'terms',
];

/** home lives at "/", every other page at "/<id>". */
export function pathForPage(page: Page): string {
  return page === 'home' ? '/' : `/${page}`;
}

/** Inverse of pathForPage. Anything unrecognised falls back to home. */
export function pageForPath(pathname: string): Page {
  const slug = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!slug) return 'home';
  return PAGES.includes(slug as Page) ? (slug as Page) : 'home';
}

/**
 * True when the browser should handle an anchor click itself rather than us
 * turning it into in-app navigation: cmd/ctrl-click and middle-click open a
 * new tab, shift opens a window, alt downloads.
 */
export function isModifiedClick(e: MouseEvent): boolean {
  return (
    e.defaultPrevented ||
    e.button !== 0 ||
    e.metaKey ||
    e.ctrlKey ||
    e.shiftKey ||
    e.altKey
  );
}

interface RouterContextType {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>(() =>
    typeof window === 'undefined' ? 'home' : pageForPath(window.location.pathname)
  );

  // Back/forward. Read the page off the URL rather than history.state so that
  // entries pushed before this listener existed still resolve correctly.
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(pageForPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: Page) => {
    const path = pathForPage(page);
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
}
