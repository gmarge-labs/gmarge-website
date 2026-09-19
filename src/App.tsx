import { useEffect, lazy, Suspense } from 'react';
import { MotionConfig } from 'motion/react';
import { RouterProvider, useRouter } from './components/Router';
import { applyPageMeta } from './config/pageMeta';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { PageTransition } from './components/PageTransition';
import { Chatbot } from './components/Chatbot';
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'));
const HelpCenterPage = lazy(() => import('./pages/HelpCenterPage'));
const APIPage = lazy(() => import('./pages/APIPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const LicensesPage = lazy(() => import('./pages/LicensesPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AppContent() {
  const { currentPage } = useRouter();

  // Every route shipped the single <title> baked into index.html, so all 14
  // pages looked like the same document to a crawler.
  useEffect(() => {
    applyPageMeta(currentPage);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'solutions':
        return <SolutionsPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'features':
        return <FeaturesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'security':
        return <SecurityPage />;
      case 'documentation':
        return <DocumentationPage />;
      case 'help-center':
        return <HelpCenterPage />;
      case 'api':
        return <APIPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'licenses':
        return <LicensesPage />;
      case 'terms':
        return <TermsPage />;
      case 'not-found':
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* First focusable element on the page; styled in index.css so it stays
          off-screen until it takes keyboard focus. */}
      <a className="skip-to-content" href="#main-content">
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <PageTransition key={currentPage}>
          {/* Routes are separate chunks, so a page can be in flight briefly.
              The fallback holds a viewport of height to stop the footer
              jumping up and back down while it lands. */}
          <Suspense fallback={<div className="min-h-screen" />}>
            {renderPage()}
          </Suspense>
        </PageTransition>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    // The CSS @media block in index.css only reaches CSS animation and
    // transition; motion/react drives ~260 elements through inline styles it
    // rewrites each frame, which CSS cannot touch. reducedMotion="user" makes
    // the library honour the OS setting too, dropping transform and layout
    // animation while keeping opacity fades.
    <MotionConfig reducedMotion="user">
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </MotionConfig>
  );
}