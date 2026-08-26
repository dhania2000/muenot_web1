export type ServicePillar = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  capabilities: { name: string; href: string; detail: string }[];
  outcomes: string[];
};

export const servicePillars: ServicePillar[] = [
  {
    id: "ai-data",
    eyebrow: "AI Data Services",
    title: "Training data pipelines built for production models",
    description:
      "We build and operate the annotation, curation, and evaluation pipelines that keep machine learning teams shipping. Dedicated delivery pods, documented quality gates, and audit trails on every batch.",
    image: "/images/service-ai-data.png",
    imageAlt:
      "Data annotation specialist labelling street imagery for a computer vision model",
    href: "/services/data-annotation",
    capabilities: [
      {
        name: "Data Annotation",
        href: "/services/data-annotation",
        detail: "Image, video, text, audio and 3D point cloud labelling.",
      },
      {
        name: "Data Curation",
        href: "/services/data-curation",
        detail: "Sourcing, deduplication, and dataset balancing at scale.",
      },
      {
        name: "Model Training",
        href: "/services/model-training",
        detail: "Fine-tuning support, benchmarking, and error analysis.",
      },
      {
        name: "Human in the Loop",
        href: "/services/human-in-the-loop",
        detail: "Review queues and escalation workflows for live systems.",
      },
      {
        name: "LLM Services",
        href: "/services/llm-services",
        detail: "RLHF, preference ranking, red teaming, and evaluation.",
      },
      {
        name: "AI Analytics",
        href: "/services/ai-analytics",
        detail: "Quality dashboards and model performance reporting.",
      },
    ],
    outcomes: [
      "98.2% average annotation accuracy across delivery pods",
      "Dedicated QA layer with inter-annotator agreement scoring",
      "ISO-aligned data handling and NDA-backed secure facilities",
    ],
  },
  {
    id: "elearning",
    eyebrow: "E-Learning Services",
    title: "Course production from curriculum design to LMS launch",
    description:
      "Instructional designers, subject matter experts, and media teams working as one unit to turn learning objectives into courses that hold attention and pass accessibility review.",
    image: "/images/service-elearning.png",
    imageAlt:
      "Instructional designers reviewing an e-learning course storyboard on a monitor",
    href: "/services/content-development",
    capabilities: [
      {
        name: "Content Development",
        href: "/services/content-development",
        detail: "Curriculum mapping, storyboards, and assessment design.",
      },
      {
        name: "Content Production",
        href: "/services/content-production",
        detail: "SCORM and xAPI builds, interactive modules, and QA.",
      },
      {
        name: "Faculty Support",
        href: "/services/faculty-support",
        detail: "Author onboarding, review cycles, and course upkeep.",
      },
      {
        name: "Art Production",
        href: "/services/art-production",
        detail: "Illustration, diagrams, and animation for learning.",
      },
      {
        name: "Content Operations",
        href: "/services/content-operations",
        detail: "Versioning, localisation readiness, and release management.",
      },
      {
        name: "Video & Audio",
        href: "/services/video-audio",
        detail: "Studio recording, editing, and narration production.",
      },
    ],
    outcomes: [
      "WCAG 2.2 AA conformance built into the production workflow",
      "Reusable component libraries that cut revision cycles",
      "Delivery into Moodle, Canvas, Blackboard, and custom LMS",
    ],
  },
  {
    id: "technology",
    eyebrow: "Technology",
    title: "Engineering teams that ship and then keep it running",
    description:
      "Product engineering, platform modernisation, and automation delivered by senior squads. We integrate with your backlog, your review process, and your release cadence.",
    image: "/images/service-technology.png",
    imageAlt: "Software engineers pair programming at a standing desk",
    href: "/contact",
    capabilities: [
      {
        name: "Software Development",
        href: "/contact",
        detail: "Web and mobile product delivery with senior squads.",
      },
      {
        name: "Cloud & DevOps",
        href: "/contact",
        detail: "Migration, IaC, CI/CD, and cost optimisation.",
      },
      {
        name: "Automation",
        href: "/contact",
        detail: "Workflow automation and internal tooling.",
      },
      {
        name: "Data Platforms",
        href: "/services/ai-analytics",
        detail: "Warehouses, pipelines, and reporting layers.",
      },
      {
        name: "QA Engineering",
        href: "/contact",
        detail: "Test automation and release validation.",
      },
      {
        name: "IT Consulting",
        href: "/contact",
        detail: "Architecture reviews and technology roadmaps.",
      },
    ],
    outcomes: [
      "Two-week onboarding into existing engineering workflows",
      "SLA-backed support with defined escalation paths",
      "Documentation and handover as a delivery requirement",
    ],
  },
  {
    id: "localization",
    eyebrow: "Localization",
    title: "One source language in, every market out",
    description:
      "Native linguists, reviewers, and engineers handling translation, media localisation, and linguistic QA so your product reads as though it was written locally.",
    image: "/images/service-localization.png",
    imageAlt: "Linguist working at a subtitling and translation workstation",
    href: "/services/translation",
    capabilities: [
      {
        name: "Translation",
        href: "/services/translation",
        detail: "40+ language pairs with domain-matched linguists.",
      },
      {
        name: "Transcription",
        href: "/services/transcription",
        detail: "Verbatim and clean-read transcription with timecodes.",
      },
      {
        name: "Subtitling",
        href: "/services/subtitling",
        detail: "Subtitles, captions, and SDH across delivery specs.",
      },
      {
        name: "Linguistic QA",
        href: "/services/linguistic-qa",
        detail: "In-context review, terminology, and style enforcement.",
      },
      {
        name: "Video & Audio",
        href: "/services/video-audio",
        detail: "Dubbing, voiceover, and audio post production.",
      },
      {
        name: "Conversion Services",
        href: "/services/conversion-services",
        detail: "Multi-format delivery for global publishing.",
      },
    ],
    outcomes: [
      "Translation memory and glossaries owned by the client",
      "Two-step native review on every deliverable",
      "Round-the-clock coverage across delivery regions",
    ],
  },
  {
    id: "publishing",
    eyebrow: "Publishing",
    title: "Editorial and accessibility services for digital catalogues",
    description:
      "Copy editing, composition, conversion, and accessibility remediation for publishers moving large backlists into compliant digital formats.",
    image: "/images/service-publishing.png",
    imageAlt: "Editor reviewing printed page proofs beside a book layout screen",
    href: "/services/editorial-services",
    capabilities: [
      {
        name: "Editorial Services",
        href: "/services/editorial-services",
        detail: "Developmental, copy, and proof editing.",
      },
      {
        name: "Accessibility Services",
        href: "/services/accessibility-services",
        detail: "WCAG and EPUB accessibility remediation.",
      },
      {
        name: "Conversion Services",
        href: "/services/conversion-services",
        detail: "XML, EPUB3, and structured data conversion.",
      },
      {
        name: "Content Operations",
        href: "/services/content-operations",
        detail: "Metadata, workflow, and catalogue management.",
      },
      {
        name: "Art Production",
        href: "/services/art-production",
        detail: "Figures, tables, and cover production.",
      },
      {
        name: "Content Development",
        href: "/services/content-development",
        detail: "Commissioned writing and adaptation.",
      },
    ],
    outcomes: [
      "Backlist conversion throughput measured in thousands of titles",
      "European Accessibility Act readiness assessments",
      "Style-sheet driven consistency across imprints",
    ],
  },
];

export const industries = [
  {
    name: "Automotive & Mobility",
    description:
      "Perception datasets, sensor fusion labelling, and validation for ADAS programmes.",
  },
  {
    name: "Healthcare & Life Sciences",
    description:
      "Clinical documentation, de-identified data handling, and medical content review.",
  },
  {
    name: "Education & EdTech",
    description:
      "Courseware production, faculty enablement, and accessible learning delivery.",
  },
  {
    name: "Banking & Financial Services",
    description:
      "Document processing, KYC data operations, and compliance-grade reviews.",
  },
  {
    name: "Retail & E-commerce",
    description:
      "Catalogue enrichment, product taxonomy, and multilingual storefronts.",
  },
  {
    name: "Media & Entertainment",
    description:
      "Subtitling, dubbing, metadata tagging, and content moderation at volume.",
  },
];

export const caseStudies = [
  {
    slug: "autonomous-perception",
    client: "Mobility technology company",
    industry: "Automotive",
    title: "Perception dataset delivery for an ADAS release cycle",
    summary:
      "A dedicated pod of 90 annotators delivered multi-sensor labelling with a two-stage QA gate, letting the customer hold a monthly model release cadence.",
    image: "/images/case-autonomous.png",
    imageAlt: "Engineer reviewing lidar and camera perception data on a monitor",
    metrics: [
      { value: "4.2M", label: "Frames labelled" },
      { value: "99.4%", label: "Accepted on first pass" },
      { value: "38%", label: "Lower cost per frame" },
    ],
  },
  {
    slug: "clinical-data-operations",
    client: "Healthcare data platform",
    industry: "Healthcare",
    title: "Clinical data operations under strict handling controls",
    summary:
      "We stood up a secure delivery floor with restricted access, de-identification checks, and clinician review to process high volumes of structured records.",
    image: "/images/case-healthcare.png",
    imageAlt:
      "Medical data specialist reviewing anonymised clinical records on screen",
    metrics: [
      { value: "1.8M", label: "Records processed" },
      { value: "6 wks", label: "To full ramp-up" },
      { value: "Zero", label: "Reportable incidents" },
    ],
  },
  {
    slug: "enterprise-learning-programme",
    client: "Global enterprise",
    industry: "Corporate learning",
    title: "Compliance learning programme rebuilt for 10 markets",
    summary:
      "Curriculum redesign, accessible course production, and localisation into 22 languages, delivered on a fixed quarterly release calendar.",
    image: "/images/case-enterprise.png",
    imageAlt: "Corporate trainer leading a workshop in a modern training room",
    metrics: [
      { value: "310", label: "Modules produced" },
      { value: "22", label: "Languages shipped" },
      { value: "91%", label: "Course completion rate" },
    ],
  },
  {
    slug: "streaming-subtitle-operations",
    client: "Streaming platform",
    industry: "Media & entertainment",
    title: "Subtitle and metadata operations for a catalogue launch",
    summary:
      "A managed pod handled subtitling, QC, and metadata tagging across a back catalogue release, working to platform style guides and a weekly drop schedule.",
    image: "/images/service-subtitling.png",
    imageAlt:
      "Subtitling specialist reviewing timed captions against video on a workstation",
    metrics: [
      { value: "9,600", label: "Hours subtitled" },
      { value: "18", label: "Target languages" },
      { value: "99.1%", label: "QC pass rate" },
    ],
  },
  {
    slug: "accessible-content-remediation",
    client: "Academic publisher",
    industry: "Publishing",
    title: "Backlist remediation to meet accessibility standards",
    summary:
      "We remediated a large academic backlist to WCAG-aligned standards — structural tagging, alt text, and reading-order fixes — with publisher sign-off at each batch.",
    image: "/images/service-accessibility.png",
    imageAlt:
      "Accessibility specialist checking document structure and tagging on screen",
    metrics: [
      { value: "12,400", label: "Titles remediated" },
      { value: "WCAG 2.1 AA", label: "Standard met" },
      { value: "5 mo", label: "Programme duration" },
    ],
  },
  {
    slug: "data-platform-modernisation",
    client: "B2B software provider",
    industry: "Technology",
    title: "Reporting platform rebuilt on a governed data model",
    summary:
      "An embedded engineering pod consolidated fragmented reporting into a single governed model, cutting manual reconciliation and shortening the analytics release cycle.",
    image: "/images/case-study-analytics.png",
    imageAlt:
      "Analyst reviewing dashboards and reporting metrics on a large display",
    metrics: [
      { value: "60%", label: "Faster report builds" },
      { value: "140+", label: "Dashboards migrated" },
      { value: "4", label: "Legacy tools retired" },
    ],
  },
];

export const stats = [
  { value: "6+", label: "Years of delivery" },
  { value: "300+", label: "Specialists across delivery centres" },
  { value: "40+", label: "Languages supported" },
  { value: "10+", label: "Countries served" },
];

export const engagementSteps = [
  {
    title: "Discovery",
    description:
      "We map scope, quality definitions, and volumes with your team, then agree on measurable acceptance criteria.",
  },
  {
    title: "Pilot",
    description:
      "A paid pilot batch validates guidelines, tooling, and throughput before any commitment to scale.",
  },
  {
    title: "Ramp-up",
    description:
      "Trained delivery pods come online in stages, with calibration rounds against your gold-standard set.",
  },
  {
    title: "Steady state",
    description:
      "Weekly reporting, QA sampling, and a named delivery manager accountable for SLA performance.",
  },
];

export const clientLogos = [
  "Northwind Health",
  "Veltrix Mobility",
  "Kellerman Press",
  "Aurora EdTech",
  "Halvard Bank",
  "Meridian Media",
  "Sundara Retail",
  "Copeland Labs",
];
