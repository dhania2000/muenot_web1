import type { Metadata } from "next";
import { buildMetadataFromSeo } from "@/lib/seo";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageHero } from "@/components/ui/page-hero";
import { EstimateTool } from "@/components/estimate/estimate-tool";

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadataFromSeo("/estimate", {
    title: "Get a Project Estimate | Muenot AI Data Services",
    description:
      "Estimate your AI data annotation project in seconds. Select data type, volume, complexity, and timeline to get a tailored engagement recommendation from Muenot.",
  });
}

export default function EstimatePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow="Project estimator"
          title="Estimate your AI data project"
          description="Answer four quick questions to get a tailored engagement recommendation. No pricing pressure — just a clear next step and a detailed quotation on request."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Estimate" }]}
          highlights={[
            "Takes under a minute",
            "No obligation",
            "Detailed quote within one business day",
          ]}
        />

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <EstimateTool />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
