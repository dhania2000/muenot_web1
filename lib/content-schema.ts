import {
  servicePillars,
  industries,
  caseStudies,
  stats,
  engagementSteps,
  clientLogos,
} from "./site-data"
import { serviceDetails } from "./services-data"

/**
 * Client-safe content schema: section keys, seed data, and labels.
 * This module intentionally contains NO database imports so it can be safely
 * imported from Client Components (e.g. the admin content editor).
 */

export type SectionKey =
  | "service_pillars"
  | "service_details"
  | "industries"
  | "case_studies"
  | "stats"
  | "engagement_steps"
  | "client_logos"

export const SECTION_SEEDS = {
  service_pillars: servicePillars,
  service_details: serviceDetails,
  industries,
  case_studies: caseStudies,
  stats,
  engagement_steps: engagementSteps,
  client_logos: clientLogos,
} as const

export const SECTION_LABELS: Record<SectionKey, string> = {
  service_pillars: "Service Pillars",
  service_details: "Service Detail Pages",
  industries: "Industries",
  case_studies: "Case Studies",
  stats: "Stats",
  engagement_steps: "Engagement Steps",
  client_logos: "Client Logos",
}
