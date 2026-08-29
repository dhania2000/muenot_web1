import {
  servicePillars,
  industries,
  caseStudies,
  stats,
  engagementSteps,
  clientLogos,
} from "./site-data"
import { serviceDetails } from "./services-data"
import {
  heroContent,
  homeCtaContent,
  navbarContent,
  footerContent,
  aboutContent,
  contactContent,
} from "./site-content-data"

/**
 * Client-safe content schema: section keys, seed data, and labels.
 * This module intentionally contains NO database imports so it can be safely
 * imported from Client Components (e.g. the admin content editor).
 */

export type SectionKey =
  | "hero"
  | "service_pillars"
  | "service_details"
  | "industries"
  | "case_studies"
  | "stats"
  | "engagement_steps"
  | "client_logos"
  | "home_cta"
  | "about_page"
  | "contact_page"
  | "navbar"
  | "footer"

export const SECTION_SEEDS = {
  hero: heroContent,
  service_pillars: servicePillars,
  service_details: serviceDetails,
  industries,
  case_studies: caseStudies,
  stats,
  engagement_steps: engagementSteps,
  client_logos: clientLogos,
  home_cta: homeCtaContent,
  about_page: aboutContent,
  contact_page: contactContent,
  navbar: navbarContent,
  footer: footerContent,
} as const

export const SECTION_LABELS: Record<SectionKey, string> = {
  hero: "Home Hero",
  service_pillars: "Service Pillars",
  service_details: "Service Detail Pages",
  industries: "Industries",
  case_studies: "Case Studies",
  stats: "Stats",
  engagement_steps: "Engagement Steps",
  client_logos: "Client Logos",
  home_cta: "Home CTA",
  about_page: "About Page",
  contact_page: "Contact Page",
  navbar: "Navbar & Top Bar",
  footer: "Footer",
}
