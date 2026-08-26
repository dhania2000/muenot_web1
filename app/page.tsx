import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { HeroSection } from "@/components/sections/hero";
import { OurClients } from "@/components/sections/our-clients";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ServicePillarSection } from "@/components/sections/service-pillar";
import { IndustriesSection } from "@/components/sections/industries";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import { servicePillars } from "@/lib/site-data";

const homepagePillarOrder = [
  "ai-data",
  "elearning",
  "publishing",
  "technology",
  "localization",
];

const orderedServicePillars = homepagePillarOrder.flatMap((id) => {
  const pillar = servicePillars.find((item) => item.id === id);
  return pillar ? [pillar] : [];
});

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <OurClients />
      {orderedServicePillars.map((pillar, index) => (
        <ServicePillarSection key={pillar.id} pillar={pillar} index={index} />
      ))}
      <IndustriesSection />
      <CaseStudiesSection />
      <AboutSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
