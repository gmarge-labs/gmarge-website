import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { InteractiveDemo } from '../components/InteractiveDemo';
import { Testimonials } from '../components/Testimonials';
import { VisualCTA } from '../components/VisualCTA';

export function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <InteractiveDemo />
      <Testimonials />
      <VisualCTA />
    </>
  );
}