import type { Metadata } from "next";
import { buildMetadataFromSeo } from "@/lib/seo";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { HeroSection } from "@/components/sections/hero";
import { OurClients } from "@/components/sections/our-clients";
import { ServicesOverview } from "@/components/sections/services-overview";
import { ServicesTabs } from "@/components/sections/services-tabs";
import { IndustriesSection } from "@/components/sections/industries";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadataFromSeo("/");
}

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <OurClients />
      <ServicesTabs />
      <IndustriesSection />
      <CaseStudiesSection />
      <AboutSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
