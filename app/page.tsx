import type { Metadata } from "next";
import { buildMetadataFromSeo } from "@/lib/seo";
import { getSection } from "@/lib/content";
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

export default async function Home() {
  // Pull marketing content from the DB-backed content store. Each helper falls
  // back to the hardcoded seed data if the database is unreachable.
  const [
    hero,
    pillars,
    stats,
    industries,
    engagementSteps,
    caseStudies,
    clientLogos,
    homeCta,
  ] = await Promise.all([
    getSection("hero"),
    getSection("service_pillars"),
    getSection("stats"),
    getSection("industries"),
    getSection("engagement_steps"),
    getSection("case_studies"),
    getSection("client_logos"),
    getSection("home_cta"),
  ]);

  return (
    <main className="relative">
      <Navbar />
      <HeroSection content={hero} />
      <ServicesOverview pillars={pillars} stats={stats} />
      <OurClients logos={clientLogos} />
      <ServicesTabs pillars={pillars} />
      <IndustriesSection industries={industries} engagementSteps={engagementSteps} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <AboutSection stats={stats} />
      <CTASection content={homeCta} />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
