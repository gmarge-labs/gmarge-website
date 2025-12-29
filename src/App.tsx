import { RouterProvider, useRouter } from './components/Router';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { PageTransition } from './components/PageTransition';
import { Chatbot } from './components/Chatbot';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import FeaturesPage from './pages/FeaturesPage';
import PricingPage from './pages/PricingPage';
import SecurityPage from './pages/SecurityPage';
import DocumentationPage from './pages/DocumentationPage';
import HelpCenterPage from './pages/HelpCenterPage';
import APIPage from './pages/APIPage';
import PrivacyPage from './pages/PrivacyPage';
import LicensesPage from './pages/LicensesPage';
import TermsPage from './pages/TermsPage';

function AppContent() {
  const { currentPage } = useRouter();

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
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <PageTransition key={currentPage}>
          {renderPage()}
        </PageTransition>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}