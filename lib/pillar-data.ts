/**
 * Editable content for the four "pillar" landing pages
 * (ai-data-services, e-learning-services, localization-services, publishing).
 *
 * Icons are stored as string keys (see components/services/pillar-icons.tsx)
 * so the whole object is plain JSON and fully editable from the admin panel.
 */

export interface PillarCta {
  label: string
  href: string
}

export interface PillarImage {
  src: string
  alt: string
}

export interface PillarStep {
  step: string
  title: string
  detail: string
}

export interface PillarCapability {
  icon: string
  name: string
  detail: string
  href: string
  tag: string
}

export interface PillarMetric {
  value: string
  label: string
}

export interface PillarRegion {
  name: string
  count: string
  note: string
}

export interface PillarContent {
  slug: string
  eyebrow: string
  titleLead: string
  titleHighlight: string
  titleTrail: string
  description: string
  primaryCta: PillarCta
  secondaryCta: PillarCta
  heroImage: PillarImage
  stepsEyebrow: string
  stepsTitle: string
  steps: PillarStep[]
  capabilitiesEyebrow: string
  capabilitiesTitle: string
  capabilities: PillarCapability[]
  metrics: PillarMetric[]
  listIcon: string
  listEyebrow: string
  listTitle: string
  listDescription: string
  listItems: string[]
  /** Localization-only: regional coverage band. Empty on other pillars. */
  regionsEyebrow: string
  regionsTitle: string
  regionsDescription: string
  regions: PillarRegion[]
}

export const pillarPages: PillarContent[] = [
  {
    slug: "ai-data-services",
    eyebrow: "AI Data Services",
    titleLead: "Training data pipelines built for ",
    titleHighlight: "production models",
    titleTrail: "",
    description:
      "We build and operate the annotation, curation, and evaluation pipelines that keep machine learning teams shipping — dedicated pods, documented quality gates, and audit trails on every batch.",
    primaryCta: { label: "Scope a pilot batch", href: "/contact" },
    secondaryCta: { label: "See client results", href: "/case-studies" },
    heroImage: {
      src: "/images/ai-data-hero.png",
      alt: "AI neural network processing annotated training data",
    },
    stepsEyebrow: "How it runs",
    stepsTitle: "A pipeline you can audit, end to end",
    steps: [
      { step: "01", title: "Ingest", detail: "Secure intake, schema mapping, and gold-standard set creation." },
      { step: "02", title: "Annotate", detail: "Trained pods label to your guidelines across every modality." },
      { step: "03", title: "Review", detail: "Two-stage QA with inter-annotator agreement scoring." },
      { step: "04", title: "Deliver", detail: "Versioned batches with audit trails and quality reports." },
    ],
    capabilitiesEyebrow: "Capabilities",
    capabilitiesTitle: "Six services, one governed delivery layer",
    capabilities: [
      { icon: "Database", name: "Data Annotation", detail: "Image, video, text, audio, and 3D point cloud labelling at volume.", tag: "multimodal", href: "/services/data-annotation" },
      { icon: "FileStack", name: "Data Curation", detail: "Sourcing, deduplication, and dataset balancing for clean corpora.", tag: "datasets", href: "/services/data-curation" },
      { icon: "BrainCircuit", name: "Model Training", detail: "Fine-tuning support, benchmarking, and structured error analysis.", tag: "fine-tune", href: "/services/model-training" },
      { icon: "Workflow", name: "Human in the Loop", detail: "Live review queues and escalation workflows for production systems.", tag: "hitl", href: "/services/human-in-the-loop" },
      { icon: "Users", name: "LLM Services", detail: "RLHF, preference ranking, red teaming, and rubric-based evaluation.", tag: "rlhf", href: "/services/llm-services" },
      { icon: "ChartBar", name: "AI Analytics", detail: "Quality dashboards and model performance reporting per batch.", tag: "reporting", href: "/services/ai-analytics" },
    ],
    metrics: [
      { value: "98.2%", label: "Average annotation accuracy" },
      { value: "4.2M", label: "Frames labelled per cycle" },
      { value: "300+", label: "Specialists on delivery" },
      { value: "24/7", label: "Coverage across regions" },
    ],
    listIcon: "ShieldCheck",
    listEyebrow: "",
    listTitle: "Quality is a contract, not a promise",
    listDescription:
      "Every engagement runs against acceptance criteria we agree before a single item is labelled — so quality is measurable from the first batch.",
    listItems: [
      "Dedicated QA layer with inter-annotator agreement scoring on every batch",
      "ISO-aligned data handling inside NDA-backed secure delivery facilities",
      "Documented quality gates and acceptance criteria agreed before ramp-up",
      "Named delivery manager accountable for SLA performance and reporting",
    ],
    regionsEyebrow: "",
    regionsTitle: "",
    regionsDescription: "",
    regions: [],
  },
  {
    slug: "e-learning-services",
    eyebrow: "E-Learning Services",
    titleLead: "Courses that hold attention ",
    titleHighlight: "and pass review",
    titleTrail: "",
    description:
      "Instructional designers, subject-matter experts, and media teams working as one unit — turning learning objectives into accessible courses, from curriculum design to LMS launch.",
    primaryCta: { label: "Start a course project", href: "/contact" },
    secondaryCta: { label: "How we build courses", href: "#journey" },
    heroImage: {
      src: "/images/service-elearning-overview.png",
      alt: "Instructional designers reviewing an e-learning course storyboard on a monitor",
    },
    stepsEyebrow: "The learning journey",
    stepsTitle: "From a learning objective to a live course",
    steps: [
      { step: "01", title: "Curriculum design", detail: "We map learning objectives, sequence modules, and design assessment strategies grounded in learning science." },
      { step: "02", title: "Storyboarding", detail: "Concepts become interactive storyboards with clear pacing, on-screen text, and media direction." },
      { step: "03", title: "Production", detail: "SCORM and xAPI builds, animation, narration, and QA come together into polished, accessible modules." },
      { step: "04", title: "Localization", detail: "Native linguists adapt every course into 40+ languages while preserving pedagogy and tone." },
      { step: "05", title: "LMS launch", detail: "We package, test, and deploy into Moodle, Canvas, Blackboard, or your custom LMS with handover docs." },
    ],
    capabilitiesEyebrow: "What we produce",
    capabilitiesTitle: "Every discipline a great course needs",
    capabilities: [
      { icon: "Compass", name: "Instructional Design", detail: "Curriculum mapping, learning journeys, and assessment design.", tag: "", href: "/services/content-development" },
      { icon: "Layers", name: "Content Production", detail: "SCORM and xAPI builds, interactive modules, and QA.", tag: "", href: "/services/content-production" },
      { icon: "GraduationCap", name: "Faculty Support", detail: "Author onboarding, review cycles, and course upkeep.", tag: "", href: "/services/faculty-support" },
      { icon: "Brush", name: "Art Production", detail: "Illustration, diagrams, and animation made for learning.", tag: "", href: "/services/art-production" },
      { icon: "Clapperboard", name: "Video & Audio", detail: "Studio recording, editing, and narration production.", tag: "", href: "/services/video-audio" },
      { icon: "PenLine", name: "Content Operations", detail: "Versioning, localisation readiness, and release management.", tag: "", href: "/services/content-operations" },
    ],
    metrics: [],
    listIcon: "Check",
    listEyebrow: "Why teams choose us",
    listTitle: "Accessible, measurable, and built to reuse",
    listDescription: "",
    listItems: [
      "WCAG 2.2 AA conformance built into the production workflow",
      "Reusable component libraries that cut revision cycles",
      "Delivery into Moodle, Canvas, Blackboard, and custom LMS",
      "91% average course completion across delivered programmes",
    ],
    regionsEyebrow: "",
    regionsTitle: "",
    regionsDescription: "",
    regions: [],
  },
  {
    slug: "localization-services",
    eyebrow: "Localization Services",
    titleLead: "Speak to every market ",
    titleHighlight: "in its own voice",
    titleTrail: "",
    description:
      "Native linguists, reviewers, and engineers handling translation, media localisation, and linguistic QA so your product reads as though it was written locally.",
    primaryCta: { label: "Start a localization project", href: "/contact" },
    secondaryCta: { label: "See global coverage", href: "#coverage" },
    heroImage: { src: "", alt: "" },
    stepsEyebrow: "How localization flows",
    stepsTitle: "From one source file to release-ready locales",
    steps: [
      { step: "Source", title: "Prepare & scope", detail: "We ingest your source, lock terminology in a glossary, and set the style guide per locale." },
      { step: "Translate", title: "Native linguists", detail: "In-country translators adapt meaning, tone, and cultural context — not just words." },
      { step: "Review", title: "Linguistic QA", detail: "A second linguist runs in-context review, terminology checks, and style enforcement." },
      { step: "Deliver", title: "Every market out", detail: "Locale-ready files return in your format, tested and signed off for release." },
    ],
    capabilitiesEyebrow: "What we deliver",
    capabilitiesTitle: "A complete localization toolkit",
    capabilities: [
      { icon: "Languages", name: "Translation", detail: "40+ language pairs with domain-matched native linguists.", tag: "", href: "/services/translation" },
      { icon: "FileText", name: "Transcription", detail: "Verbatim and clean-read transcription with accurate timecodes.", tag: "", href: "/services/transcription" },
      { icon: "Captions", name: "Subtitling", detail: "Subtitles, captions, and SDH across every delivery spec.", tag: "", href: "/services/subtitling" },
      { icon: "ScanSearch", name: "Linguistic QA", detail: "In-context review, terminology, and style-guide enforcement.", tag: "", href: "/services/linguistic-qa" },
      { icon: "MicVocal", name: "Voiceover & Dubbing", detail: "Studio narration and dubbing matched to each locale.", tag: "", href: "/services/voiceover" },
      { icon: "Globe", name: "Media Localization", detail: "Video, audio, and on-screen text adapted for local markets.", tag: "", href: "/services/video-audio" },
    ],
    metrics: [
      { value: "40", label: "Language pairs" },
      { value: "300", label: "Native linguists" },
      { value: "99", label: "QA pass rate %" },
      { value: "24", label: "Hour turnaround" },
    ],
    listIcon: "ShieldCheck",
    listEyebrow: "",
    listTitle: "",
    listDescription:
      "ISO-aligned processes, NDA-backed teams, and secure file handling on every engagement.",
    listItems: [],
    regionsEyebrow: "Language coverage",
    regionsTitle: "In-country experts, wherever you're launching",
    regionsDescription:
      "Our linguists live in the markets they translate for — so tone, idiom, and cultural nuance land right the first time.",
    regions: [
      { name: "Europe", count: "18", note: "Western, Nordic & Eastern locales" },
      { name: "Asia Pacific", count: "12", note: "CJK, South & Southeast Asia" },
      { name: "Middle East & Africa", count: "6", note: "RTL scripts & regional Arabic" },
      { name: "Americas", count: "5", note: "LatAm Spanish & Brazilian Portuguese" },
    ],
  },
  {
    slug: "publishing",
    eyebrow: "Publishing Services",
    titleLead: "Backlists reborn as ",
    titleHighlight: "accessible catalogues",
    titleTrail: "",
    description:
      "Copy editing, composition, conversion, and accessibility remediation for publishers moving large backlists into compliant, standards-ready digital formats.",
    primaryCta: { label: "Start a publishing project", href: "/contact" },
    secondaryCta: { label: "See what we deliver", href: "#capabilities" },
    heroImage: {
      src: "/images/publishing-hero.png",
      alt: "Printed book transforming into an accessible digital edition",
    },
    stepsEyebrow: "How a title flows",
    stepsTitle: "From legacy source to compliant digital edition",
    steps: [
      { step: "Intake", title: "Assess the backlist", detail: "We audit source files, formats, and accessibility gaps, then lock a house style sheet per imprint." },
      { step: "Edit", title: "Editorial pass", detail: "Copy editors and proofreaders work to your style guide with tracked, sign-off-ready rounds." },
      { step: "Convert", title: "Structure & tag", detail: "Content is composed and converted to XML and EPUB3 with correct semantic structure and reading order." },
      { step: "Certify", title: "Accessible delivery", detail: "Titles ship WCAG-aligned and accessibility-checked, with publisher sign-off on every batch." },
    ],
    capabilitiesEyebrow: "What we deliver",
    capabilitiesTitle: "A complete publishing production toolkit",
    capabilities: [
      { icon: "BookOpenCheck", name: "Editorial Services", detail: "Developmental, copy, and proof editing to house style.", tag: "", href: "/services/editorial-services" },
      { icon: "Accessibility", name: "Accessibility Services", detail: "WCAG and EPUB accessibility remediation and audits.", tag: "", href: "/services/accessibility-services" },
      { icon: "FileCode2", name: "Conversion Services", detail: "XML, EPUB3, and structured data conversion at scale.", tag: "", href: "/services/conversion-services" },
      { icon: "Cog", name: "Content Operations", detail: "Metadata, workflow, and catalogue management.", tag: "", href: "/services/content-operations" },
      { icon: "Palette", name: "Art Production", detail: "Figures, tables, and cover production for print and digital.", tag: "", href: "/services/art-production" },
      { icon: "PenTool", name: "Content Development", detail: "Commissioned writing and adaptation for new editions.", tag: "", href: "/services/content-development" },
    ],
    metrics: [
      { value: "12,400", label: "Titles remediated" },
      { value: "40", label: "Imprints supported" },
      { value: "99", label: "First-pass QA %" },
      { value: "6", label: "Delivery languages" },
    ],
    listIcon: "ShieldCheck",
    listEyebrow: "",
    listTitle: "Compliance built into every title",
    listDescription:
      "Accessibility and consistency are acceptance criteria, not afterthoughts — so your catalogue is ready for the standards that matter and the deadlines that come with them.",
    listItems: [
      "European Accessibility Act readiness assessments before deadlines bite",
      "Style-sheet driven consistency enforced across every imprint",
      "Backlist conversion throughput measured in thousands of titles",
      "Structural tagging, alt text, and reading-order fixes signed off per batch",
    ],
    regionsEyebrow: "",
    regionsTitle: "",
    regionsDescription: "",
    regions: [],
  },
]

export function getPillar(slug: string): PillarContent | undefined {
  return pillarPages.find((p) => p.slug === slug)
}
