import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { ArrowLeft, ExternalLink } from "lucide-react";

/** External applicant tracking / careers portal. */
const CAREERS_PORTAL_URL = "https://erp.muenot.co.in/careers";

export default function CareersOpeningsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16 lg:pt-27">
        {/* Back bar keeps users inside the Muenot site. Sticky offset matches the
            fixed navbar height (64px mobile, 108px on lg where the utility bar shows). */}
        <div className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 lg:top-27">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <Link
              href="/careers"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              Back to Muenot website
            </Link>
            <a
              href={CAREERS_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Open portal in new tab
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Embedded careers portal */}
        <div className="bg-muted">
          <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
            <iframe
              src={CAREERS_PORTAL_URL}
              title="Muenot careers portal — open positions"
              className="h-[calc(100vh-9rem)] w-full border-0 bg-background sm:rounded-b-2xl lg:h-[calc(100vh-12rem)]"
              loading="lazy"
            />
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
