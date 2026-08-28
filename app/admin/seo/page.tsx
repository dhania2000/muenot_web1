import type { Metadata } from "next";
import { isAuthenticated } from "./actions";
import { getAllSeoSettings } from "@/lib/seo";
import { LoginForm } from "./login-form";
import { SeoDashboard } from "./seo-dashboard";

export const metadata: Metadata = {
  title: "SEO Manager",
  robots: { index: false, follow: false },
};

// Always render fresh so newly saved SEO records show up immediately.
export const dynamic = "force-dynamic";

export default async function SeoAdminPage() {
  const authed = await isAuthenticated();

  if (!authed) {
    return (
      <main className="relative flex min-h-screen items-center justify-center px-4 py-16">
        <LoginForm />
      </main>
    );
  }

  const settings = await getAllSeoSettings();
  const writeEnabled = !!process.env.SANITY_API_WRITE_TOKEN;

  return (
    <main className="relative min-h-screen px-4 py-10 sm:px-6 lg:px-10">
      <SeoDashboard initialSettings={settings} writeEnabled={writeEnabled} />
    </main>
  );
}
