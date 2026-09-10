import { redirect } from "next/navigation";

/** External applicant tracking / careers portal. */
const CAREERS_PORTAL_URL = "https://erp.muenot.co.in/careers";

/**
 * The open roles live on the external Muenot ERP careers portal, which renders
 * its own full page (its own theme, hero image and navigation). Embedding it in
 * an iframe clipped the layout, clashed with the site theme and never reached
 * the actual job listings, so we send applicants straight to the portal.
 */
export default function CareersOpeningsPage() {
  redirect(CAREERS_PORTAL_URL);
}
