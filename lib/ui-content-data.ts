/**
 * Seed data for the remaining page-level and section-level marketing content
 * that used to be hardcoded inside components: home section headings, the
 * "Why Muenot" block, the Case Studies page, the Estimate page + estimator
 * logic, the chat assistant, and the shared service-page labels.
 *
 * This file is intentionally plain data with NO imports so it stays safe to
 * import from both server and client code. Icons are stored as string names
 * and resolved at render time via per-component icon maps.
 */

/* -------------------------------------------------------------------------- */
/*  Home sections (headings, labels) + "Why Muenot" block                     */
/* -------------------------------------------------------------------------- */

export type Heading = {
  eyebrow: string
  title: string
  description: string
}

export type HomeSectionsContent = {
  servicesOverview: Heading
  serviceLines: Heading & {
    explorePrefix: string
    deliveryModelLabel: string
    deliveryModelValue: string
    serviceAreasLabel: string
  }
  industries: Heading
  engagement: Heading & { ctaLabel: string; ctaHref: string }
  caseStudies: { eyebrow: string; title: string; ctaLabel: string; ctaHref: string }
  clients: { text: string }
  whyMuenot: {
    eyebrow: string
    title: string
    description: string
    linkLabel: string
    linkHref: string
    image: string
    imageAlt: string
    security: { title: string; description: string }
    differentiators: { title: string; description: string; icon: string }[]
    testimonialsEyebrow: string
    testimonialsTitle: string
    testimonials: { quote: string; name: string; company: string; avatar: string }[]
  }
}

export const homeSectionsContent: HomeSectionsContent = {
  servicesOverview: {
    eyebrow: "What we do",
    title: "Specialized services. Unified execution.",
    description: "Start with one engagement and expand under the same governance.",
  },
  serviceLines: {
    eyebrow: "What we do",
    title: "Five service lines, one accountable delivery organisation",
    description:
      "Pick a service line to see how each pod is staffed, governed, and delivered.",
    explorePrefix: "Explore",
    deliveryModelLabel: "Delivery model",
    deliveryModelValue: "One accountable team",
    serviceAreasLabel: "service areas",
  },
  industries: {
    eyebrow: "Industries",
    title: "Domain context, not generic capacity",
    description:
      "Delivery leads are assigned by sector, so compliance is understood before day one.",
  },
  engagement: {
    eyebrow: "How we engage",
    title: "From scoping call to steady-state delivery",
    description: "A staged path that proves quality before you commit to volume.",
    ctaLabel: "Start with a scoping call",
    ctaHref: "/contact",
  },
  caseStudies: {
    eyebrow: "Client results",
    title: "Programmes we run, and what they produced",
    ctaLabel: "All case studies",
    ctaHref: "/case-studies",
  },
  clients: {
    text: "Trusted by teams in automotive, healthcare, education, finance, retail and media",
  },
  whyMuenot: {
    eyebrow: "Why Muenot",
    title: "A delivery partner your procurement team can sign off on",
    description:
      "We take on the operational work enterprise teams can't staff internally — and make it measurable.",
    linkLabel: "More about the company",
    linkHref: "/about",
    image: "/images/about-team-collaboration.png",
    imageAlt:
      "Muenot delivery team collaborating around a table in a modern office",
    security: {
      title: "ISO-aligned processes and NDA-backed secure delivery",
      description:
        "Access control reviewed against enterprise vendor requirements.",
    },
    differentiators: [
      {
        title: "Managed delivery, not staffing",
        description: "A named manager, defined SLAs, and weekly reporting.",
        icon: "Users",
      },
      {
        title: "Quality is measured, not claimed",
        description: "Written acceptance criteria and reviewer agreement scoring.",
        icon: "ClipboardCheck",
      },
      {
        title: "Security in the floor plan",
        description: "Restricted access, device controls, ISO-aligned handling.",
        icon: "Lock",
      },
      {
        title: "Scale without renegotiating",
        description: "Ramp pods up or down against agreed rate cards.",
        icon: "TrendingUp",
      },
    ],
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "What clients say",
    testimonials: [
      {
        quote:
          "The pilot told us exactly what accuracy to expect. Twelve months in, our release cadence has not slipped once.",
        name: "Head of Machine Learning",
        company: "Mobility technology company",
        avatar: "/images/testimonial-1.png",
      },
      {
        quote:
          "They rebuilt our compliance curriculum for 10 markets. Completion rates went up and audit findings went to zero.",
        name: "Director, Learning & Development",
        company: "Global enterprise",
        avatar: "/images/testimonial-2.png",
      },
      {
        quote:
          "Terminology consistency across 22 languages was the thing we could never solve in-house. Their review layer fixed it.",
        name: "VP, International",
        company: "Enterprise software vendor",
        avatar: "/images/testimonial-3.png",
      },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/*  Case Studies page                                                         */
/* -------------------------------------------------------------------------- */

export type CaseStudiesPageContent = {
  hero: {
    eyebrow: string
    title: string
    description: string
    image: string
    imageAlt: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
    highlights: string[]
  }
  outcomeStats: { value: string; label: string }[]
  intro: Heading
  discussLinkLabel: string
  quote: { text: string; attribution: string }
  closing: {
    eyebrow: string
    title: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
}

export const caseStudiesPageContent: CaseStudiesPageContent = {
  hero: {
    eyebrow: "Case studies",
    title: "Programmes measured by what they actually delivered",
    description:
      "Each engagement below ran under agreed acceptance criteria, with a named delivery manager and reporting the client's team could audit.",
    image: "/images/case-study-analytics.png",
    imageAlt:
      "Delivery analyst reviewing programme quality metrics on a dashboard",
    primaryLabel: "Discuss your programme",
    primaryHref: "/contact",
    secondaryLabel: "Explore services",
    secondaryHref: "/#services",
    highlights: [
      "Documented pilots",
      "Audited quality gates",
      "SLA-backed delivery",
    ],
  },
  outcomeStats: [
    { value: "6", label: "Programmes profiled" },
    { value: "99%+", label: "Typical QC pass rate" },
    { value: "40+", label: "Languages delivered" },
    { value: "Zero", label: "Reportable incidents" },
  ],
  intro: {
    eyebrow: "Selected work",
    title: "Six programmes, six different quality bars",
    description:
      "Sector, volume, and handling controls change from engagement to engagement — the operating model does not.",
  },
  discussLinkLabel: "Discuss a similar programme",
  quote: {
    text: "The pilot told us exactly what the steady-state numbers would be. Twelve months in, the reporting still matches what was agreed.",
    attribution: "Head of Data Operations, enterprise technology client",
  },
  closing: {
    eyebrow: "Start with a pilot",
    title: "Bring us the programme you can't staff internally",
    description:
      "We scope it, run a measured pilot, and show you the numbers before you commit to scale.",
    primaryLabel: "Talk to our team",
    primaryHref: "/contact",
    secondaryLabel: "How we operate",
    secondaryHref: "/about",
  },
}

/* -------------------------------------------------------------------------- */
/*  Estimate page + estimator                                                 */
/* -------------------------------------------------------------------------- */

export type EstimateOption = {
  value: string
  label: string
  hint: string
  icon: string
  weight: number
}

export type EstimateStep = {
  key: string
  summaryLabel: string
  question: string
  helper: string
  options: EstimateOption[]
}

export type EstimateTier = {
  name: string
  range: string
  description: string
  maxScore: number
}

export type EstimateContent = {
  hero: {
    eyebrow: string
    title: string
    description: string
    highlights: string[]
  }
  steps: EstimateStep[]
  tiers: EstimateTier[]
  labels: {
    yourEstimate: string
    stepWord: string
    ofWord: string
    recommendedEngagement: string
    disclaimer: string
    formTitle: string
    successTitle: string
    successBody: string
    startOver: string
    seeEstimate: string
    continue: string
    back: string
    adjust: string
    submit: string
    submitting: string
    nameLabel: string
    emailLabel: string
    companyLabel: string
  }
}

export const estimateContent: EstimateContent = {
  hero: {
    eyebrow: "Project estimator",
    title: "Estimate your AI data project",
    description:
      "Answer four quick questions to get a tailored engagement recommendation. No pricing pressure — just a clear next step and a detailed quotation on request.",
    highlights: [
      "Takes under a minute",
      "No obligation",
      "Detailed quote within one business day",
    ],
  },
  steps: [
    {
      key: "dataType",
      summaryLabel: "Data type",
      question: "What kind of data do you need?",
      helper: "Choose the primary modality for your project.",
      options: [
        { value: "Images", label: "Images", hint: "Bounding boxes, segmentation, tagging", icon: "ImageIcon", weight: 1 },
        { value: "Video", label: "Video", hint: "Frame tracking, event labeling", icon: "Video", weight: 3 },
        { value: "Text", label: "Text", hint: "NLP, entity, sentiment, RLHF", icon: "FileText", weight: 1 },
        { value: "Audio", label: "Audio", hint: "Transcription, diarization", icon: "AudioLines", weight: 2 },
        { value: "3D / Sensor", label: "3D / Sensor", hint: "LiDAR, point cloud, cuboids", icon: "Box", weight: 4 },
      ],
    },
    {
      key: "volume",
      summaryLabel: "Volume",
      question: "How much data is in scope?",
      helper: "Approximate number of items to be processed.",
      options: [
        { value: "Up to 10K", label: "Up to 10K", hint: "Pilot or proof of concept", icon: "Layers", weight: 1 },
        { value: "10K – 100K", label: "10K – 100K", hint: "Production batch", icon: "Database", weight: 2 },
        { value: "100K – 1M", label: "100K – 1M", hint: "Scaled program", icon: "Boxes", weight: 3 },
        { value: "1M+", label: "1M+", hint: "Enterprise pipeline", icon: "Boxes", weight: 4 },
      ],
    },
    {
      key: "complexity",
      summaryLabel: "Complexity",
      question: "How complex is the task?",
      helper: "Higher complexity needs more specialist review.",
      options: [
        { value: "Basic", label: "Basic", hint: "Simple, single-pass labels", icon: "Gauge", weight: 1 },
        { value: "Medium", label: "Medium", hint: "Multi-attribute, guidelines", icon: "ShieldCheck", weight: 2 },
        { value: "Advanced", label: "Advanced", hint: "Expert / domain-specific QA", icon: "Sparkles", weight: 4 },
      ],
    },
    {
      key: "timeline",
      summaryLabel: "Timeline",
      question: "What is your target timeline?",
      helper: "Tighter timelines need larger dedicated pods.",
      options: [
        { value: "3 months", label: "3 months", hint: "Comfortable ramp", icon: "CalendarRange", weight: 1 },
        { value: "1 month", label: "1 month", hint: "Standard delivery", icon: "CalendarDays", weight: 2 },
        { value: "1 week", label: "1 week", hint: "Rush / dedicated pod", icon: "Clock", weight: 4 },
      ],
    },
  ],
  tiers: [
    {
      name: "Starter Pod",
      range: "Pilot engagement",
      description:
        "A focused team to validate quality gates before scaling. Ideal for proofs of concept and first batches.",
      maxScore: 6,
    },
    {
      name: "Growth Program",
      range: "Managed batch delivery",
      description:
        "A dedicated pod with documented guidelines, QA layers, and audit trails for recurring production volumes.",
      maxScore: 10,
    },
    {
      name: "Enterprise Pipeline",
      range: "Scaled multi-pod program",
      description:
        "Multiple specialist pods with SLA-backed throughput, layered review, and custom tooling for large-scale delivery.",
      maxScore: 999,
    },
  ],
  labels: {
    yourEstimate: "Your estimate",
    stepWord: "Step",
    ofWord: "of",
    recommendedEngagement: "Recommended engagement",
    disclaimer:
      "Final pricing depends on guidelines, tooling, and QA depth. Share your details below and a delivery lead will send a tailored quotation.",
    formTitle: "Get your detailed estimate",
    successTitle: "Request received",
    successBody:
      "A Muenot delivery lead will email your detailed estimate within one business day.",
    startOver: "Start over",
    seeEstimate: "See estimate",
    continue: "Continue",
    back: "Back",
    adjust: "Adjust",
    submit: "Get detailed estimate",
    submitting: "Sending",
    nameLabel: "Full name",
    emailLabel: "Business email",
    companyLabel: "Company",
  },
}

/* -------------------------------------------------------------------------- */
/*  Chat assistant                                                            */
/* -------------------------------------------------------------------------- */

export type ChatAssistantContent = {
  title: string
  subtitle: string
  greeting: string
  suggestions: string[]
  placeholder: string
  errorMessage: string
  errorEmail: string
  errorPhone: string
  errorPhoneHref: string
}

export const chatAssistantContent: ChatAssistantContent = {
  title: "Abha · Muenot Assistant",
  subtitle: "Typically replies in seconds",
  greeting:
    "Hi! I'm Abha. Ask me anything about Muenot's AI data, e-learning, or localization services.",
  suggestions: [
    "What services do you offer?",
    "How does localization work?",
    "Book a consultation",
  ],
  placeholder: "Type your message...",
  errorMessage: "Sorry, I couldn't connect right now. Please email",
  errorEmail: "info@muenot.co.in",
  errorPhone: "+91 637 780 9826",
  errorPhoneHref: "tel:+916377809826",
}

/* -------------------------------------------------------------------------- */
/*  Shared service detail page labels                                         */
/* -------------------------------------------------------------------------- */

export type ServiceLabelsContent = {
  breadcrumbHome: string
  primaryCta: string
  primaryCtaHref: string
  secondaryCta: string
  capabilitiesEyebrow: string
  capabilitiesTitleSuffix: string
  processEyebrow: string
  processTitle: string
  outcomesEyebrow: string
  outcomesTitle: string
  outcomesImageSuffix: string
  relatedEyebrow: string
  relatedTitlePrefix: string
  relatedExploreLabel: string
}

export const serviceLabelsContent: ServiceLabelsContent = {
  breadcrumbHome: "Home",
  primaryCta: "Request a scoping call",
  primaryCtaHref: "/contact",
  secondaryCta: "What we deliver",
  capabilitiesEyebrow: "What we deliver",
  capabilitiesTitleSuffix: "service areas",
  processEyebrow: "How we work",
  processTitle: "Four steps from brief to steady state",
  outcomesEyebrow: "What you get",
  outcomesTitle: "Commitments we put in writing",
  outcomesImageSuffix: "delivered by a named team",
  relatedEyebrow: "Related",
  relatedTitlePrefix: "More",
  relatedExploreLabel: "Explore",
}
