import {
  servicePillars,
  industries,
  caseStudies,
  stats,
  engagementSteps,
  clientLogos,
} from "./site-data"
import { serviceDetails } from "./services-data"
import { pillarPages } from "./pillar-data"
import {
  heroContent,
  homeCtaContent,
  navbarContent,
  footerContent,
  aboutContent,
  contactContent,
} from "./site-content-data"
import {
  homeSectionsContent,
  caseStudiesPageContent,
  estimateContent,
  chatAssistantContent,
  serviceLabelsContent,
} from "./ui-content-data"

/**
 * Client-safe content schema: section keys, seed data, and labels.
 * This module intentionally contains NO database imports so it can be safely
 * imported from Client Components (e.g. the admin content editor).
 */

export type SectionKey =
  | "hero"
  | "home_sections"
  | "service_pillars"
  | "service_details"
  | "pillar_pages"
  | "industries"
  | "case_studies"
  | "case_studies_page"
  | "estimate_page"
  | "stats"
  | "engagement_steps"
  | "client_logos"
  | "home_cta"
  | "about_page"
  | "contact_page"
  | "service_labels"
  | "chat_assistant"
  | "navbar"
  | "footer"

export const SECTION_SEEDS = {
  hero: heroContent,
  home_sections: homeSectionsContent,
  service_pillars: servicePillars,
  service_details: serviceDetails,
  pillar_pages: pillarPages,
  industries,
  case_studies: caseStudies,
  case_studies_page: caseStudiesPageContent,
  estimate_page: estimateContent,
  stats,
  engagement_steps: engagementSteps,
  client_logos: clientLogos,
  home_cta: homeCtaContent,
  about_page: aboutContent,
  contact_page: contactContent,
  service_labels: serviceLabelsContent,
  chat_assistant: chatAssistantContent,
  navbar: navbarContent,
  footer: footerContent,
} as const

export const SECTION_LABELS: Record<SectionKey, string> = {
  hero: "Home Hero",
  home_sections: "Home Sections & Why Muenot",
  service_pillars: "Service Pillars",
  service_details: "Service Detail Pages",
  pillar_pages: "Pillar Landing Pages",
  industries: "Industries",
  case_studies: "Case Studies",
  case_studies_page: "Case Studies Page",
  estimate_page: "Estimate Page & Estimator",
  stats: "Stats",
  engagement_steps: "Engagement Steps",
  client_logos: "Client Logos",
  home_cta: "Home CTA",
  about_page: "About Page",
  contact_page: "Contact Page",
  service_labels: "Service Page Labels",
  chat_assistant: "Chat Assistant",
  navbar: "Navbar & Top Bar",
  footer: "Footer",
}
