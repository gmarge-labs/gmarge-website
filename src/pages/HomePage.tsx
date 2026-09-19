import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { CaseStudy } from '../components/CaseStudy';
import { VisualCTA } from '../components/VisualCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <InteractiveDemo />
      <CaseStudy />
      <VisualCTA />
    </>
  );
}