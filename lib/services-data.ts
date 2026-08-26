export type ServiceDetail = {
  slug: string;
  eyebrow: string;
  pillar: { label: string; href: string };
  title: string;
  highlight: string;
  tagline: string;
  image: string;
  imageAlt: string;
  chips: string[];
  stats: { value: string; label: string }[];
  offerings: { icon: string; name: string; detail: string }[];
  process: { title: string; detail: string }[];
  outcomes: string[];
};

const aiData = { label: "AI Data Services", href: "/#ai-data" };
const eLearning = { label: "E-Learning Services", href: "/#elearning" };
const localization = { label: "Localization", href: "/#localization" };
const publishing = { label: "Publishing", href: "/#publishing" };

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "data-annotation",
    eyebrow: "Data Annotation",
    pillar: aiData,
    title: "Training data labelled by",
    highlight: "dedicated pods.",
    tagline:
      "Image, video, text, audio and 3D point cloud labelling with a QA layer on every batch.",
    image: "/images/service-ai-data.png",
    imageAlt: "Annotation specialist labelling street imagery for a vision model",
    chips: ["2D & 3D", "Multi-sensor", "Gold-set calibration"],
    stats: [
      { value: "98.2%", label: "Quality Accuracy Rate" },
      { value: "4.2M", label: "Frames delivered" },
      { value: "48h", label: "Pilot turnaround" },
    ],
    offerings: [
      {
        icon: "Tag",
        name: "Image & video",
        detail: "Boxes, polygons, keypoints, segmentation and tracking.",
      },
      {
        icon: "Boxes",
        name: "3D point cloud",
        detail: "Lidar cuboids and sensor-fusion alignment.",
      },
      {
        icon: "FileText",
        name: "Text & NLP",
        detail: "Entities, intents, sentiment and relation labelling.",
      },
      {
        icon: "AudioLines",
        name: "Audio & speech",
        detail: "Diarisation, event tagging and phonetic labelling.",
      },
      {
        icon: "ShieldCheck",
        name: "Two-stage QA",
        detail: "Reviewer pass plus inter-annotator agreement scoring.",
      },
      {
        icon: "Workflow",
        name: "Tooling agnostic",
        detail: "We work in your platform or bring our own.",
      },
    ],
    process: [
      { title: "Guidelines", detail: "Edge cases agreed and documented." },
      { title: "Calibration", detail: "Pod scored against your gold set." },
      { title: "Production", detail: "Batched delivery with QA sampling." },
      { title: "Reporting", detail: "Weekly accuracy and throughput view." },
    ],
    outcomes: [
      "Named delivery manager accountable for SLA performance",
      "Secure floors with NDA-backed, access-controlled workstations",
      "Audit trail on every batch, annotator and review decision",
    ],
  },
  {
    slug: "data-curation",
    eyebrow: "Data Curation",
    pillar: aiData,
    title: "Datasets that are balanced,",
    highlight: "clean and traceable.",
    tagline:
      "Sourcing, deduplication and dataset balancing so your model trains on signal, not noise.",
    image: "/images/service-data-curation.png",
    imageAlt: "Specialists reviewing large image datasets on dual monitors",
    chips: ["Deduplication", "Bias review", "Licensing checks"],
    stats: [
      { value: "18M", label: "Assets curated" },
      { value: "31%", label: "Noise removed" },
      { value: "100%", label: "Provenance logged" },
    ],
    offerings: [
      {
        icon: "Database",
        name: "Sourcing",
        detail: "Licensed collection matched to your target distribution.",
      },
      {
        icon: "Filter",
        name: "Deduplication",
        detail: "Near-duplicate and leakage detection across splits.",
      },
      {
        icon: "Scale",
        name: "Class balancing",
        detail: "Coverage gap analysis and targeted top-ups.",
      },
      {
        icon: "SearchCheck",
        name: "Bias review",
        detail: "Demographic and geographic representation checks.",
      },
      {
        icon: "FileCheck2",
        name: "Provenance",
        detail: "Licence, consent and lineage recorded per asset.",
      },
      {
        icon: "Boxes",
        name: "Split design",
        detail: "Train, validation and holdout sets built to spec.",
      },
    ],
    process: [
      { title: "Audit", detail: "Existing corpus profiled for gaps." },
      { title: "Curate", detail: "Sourcing and filtering to target mix." },
      { title: "Validate", detail: "Statistical and human spot checks." },
      { title: "Handover", detail: "Documented dataset card delivered." },
    ],
    outcomes: [
      "Reproducible datasets with versioning you control",
      "Leakage-free splits validated before training",
      "Dataset documentation ready for model governance review",
    ],
  },
  {
    slug: "model-training",
    eyebrow: "Model Training",
    pillar: aiData,
    title: "Fine-tuning support and",
    highlight: "honest benchmarks.",
    tagline:
      "Training runs, evaluation harnesses and error analysis run alongside your ML team.",
    image: "/images/service-model-training.png",
    imageAlt: "Machine learning engineer analysing training charts on a monitor",
    chips: ["Fine-tuning", "Benchmarks", "Error analysis"],
    stats: [
      { value: "40%", label: "Faster iteration" },
      { value: "60+", label: "Eval suites built" },
      { value: "24/5", label: "Run coverage" },
    ],
    offerings: [
      {
        icon: "Bot",
        name: "Fine-tuning",
        detail: "SFT, LoRA and adapter training on your stack.",
      },
      {
        icon: "LineChart",
        name: "Benchmarking",
        detail: "Task suites with statistically sound comparisons.",
      },
      {
        icon: "SearchCheck",
        name: "Error analysis",
        detail: "Failure clustering with prioritised fix lists.",
      },
      {
        icon: "Workflow",
        name: "Eval harnesses",
        detail: "Repeatable pipelines wired into CI.",
      },
      {
        icon: "Users",
        name: "Human scoring",
        detail: "Expert raters for subjective quality dimensions.",
      },
      {
        icon: "FileCheck2",
        name: "Release notes",
        detail: "Model cards and regression summaries per run.",
      },
    ],
    process: [
      { title: "Baseline", detail: "Current model measured honestly." },
      { title: "Experiment", detail: "Tracked runs with fixed seeds." },
      { title: "Evaluate", detail: "Automatic plus human scoring." },
      { title: "Ship", detail: "Regression report before promotion." },
    ],
    outcomes: [
      "Experiments tracked so results can be reproduced",
      "Human and automatic evaluation reported side by side",
      "Clear go or no-go signal before each model promotion",
    ],
  },
  {
    slug: "human-in-the-loop",
    eyebrow: "Human in the Loop",
    pillar: aiData,
    title: "Review queues that keep",
    highlight: "live models honest.",
    tagline:
      "Trained reviewers, escalation paths and SLAs for the decisions your model should not make alone.",
    image: "/images/service-human-loop.png",
    imageAlt: "Review team working at workstations on a secure operations floor",
    chips: ["24/5 queues", "Escalation tiers", "Audit logs"],
    stats: [
      { value: "3 min", label: "Median review time" },
      { value: "97%", label: "SLA attainment" },
      { value: "6", label: "Languages staffed" },
    ],
    offerings: [
      {
        icon: "Users",
        name: "Review queues",
        detail: "Low-confidence predictions routed to humans.",
      },
      {
        icon: "ShieldCheck",
        name: "Content safety",
        detail: "Policy enforcement with documented rationale.",
      },
      {
        icon: "Workflow",
        name: "Escalation tiers",
        detail: "Specialist and legal review paths defined.",
      },
      {
        icon: "LineChart",
        name: "Feedback loop",
        detail: "Reviewer decisions fed back as training signal.",
      },
      {
        icon: "Clock",
        name: "Coverage",
        detail: "Follow-the-sun staffing across delivery regions.",
      },
      {
        icon: "FileCheck2",
        name: "Reporting",
        detail: "Queue health, overturn rates and drift alerts.",
      },
    ],
    process: [
      { title: "Policy", detail: "Decision rules written with your team." },
      { title: "Staff", detail: "Reviewers trained and certified." },
      { title: "Operate", detail: "Queues run to agreed SLAs." },
      { title: "Improve", detail: "Overturn analysis feeds retraining." },
    ],
    outcomes: [
      "Every decision logged with reviewer and rationale",
      "Escalation routes agreed before go-live, not during an incident",
      "Reviewer signal reused to improve the next model version",
    ],
  },
  {
    slug: "llm-services",
    eyebrow: "LLM Services",
    pillar: aiData,
    title: "RLHF, red teaming and",
    highlight: "preference data.",
    tagline:
      "Expert raters producing the comparison and safety data that shapes model behaviour.",
    image: "/images/service-llm.png",
    imageAlt: "Team ranking AI assistant responses side by side on laptops",
    chips: ["RLHF", "Red teaming", "Domain experts"],
    stats: [
      { value: "250k", label: "Preference pairs" },
      { value: "0.81", label: "Rater agreement" },
      { value: "30+", label: "Expert domains" },
    ],
    offerings: [
      {
        icon: "Sparkles",
        name: "Preference ranking",
        detail: "Side-by-side comparisons with written rationale.",
      },
      {
        icon: "ShieldCheck",
        name: "Red teaming",
        detail: "Adversarial probing across safety categories.",
      },
      {
        icon: "PenTool",
        name: "Instruction writing",
        detail: "Prompt and response pairs from domain experts.",
      },
      {
        icon: "SearchCheck",
        name: "Evaluation",
        detail: "Rubric scoring for helpfulness and grounding.",
      },
      {
        icon: "Languages",
        name: "Multilingual",
        detail: "Native raters for non-English behaviour.",
      },
      {
        icon: "FileCheck2",
        name: "Taxonomies",
        detail: "Harm and quality taxonomies you can defend.",
      },
    ],
    process: [
      { title: "Rubric", detail: "Quality dimensions defined together." },
      { title: "Certify", detail: "Raters qualified on seeded tasks." },
      { title: "Collect", detail: "Batched data with agreement scoring." },
      { title: "Analyse", detail: "Findings summarised for your team." },
    ],
    outcomes: [
      "Rater agreement reported on every delivered batch",
      "Safety findings prioritised by severity and reachability",
      "Domain experts, not generalists, on specialist content",
    ],
  },
  {
    slug: "ai-analytics",
    eyebrow: "AI Analytics",
    pillar: aiData,
    title: "Dashboards your ML team",
    highlight: "actually opens.",
    tagline:
      "Quality, throughput and model performance reporting built on your own data stack.",
    image: "/images/case-study-analytics.png",
    imageAlt: "Analyst reviewing quality and performance dashboards on screen",
    chips: ["Quality metrics", "Drift alerts", "Warehouse native"],
    stats: [
      { value: "15", label: "Live dashboards" },
      { value: "5 min", label: "Data freshness" },
      { value: "3", label: "Warehouses supported" },
    ],
    offerings: [
      {
        icon: "LineChart",
        name: "Quality metrics",
        detail: "Accuracy, agreement and rework trends per pod.",
      },
      {
        icon: "Database",
        name: "Pipelines",
        detail: "Ingestion into your warehouse, not a black box.",
      },
      {
        icon: "SearchCheck",
        name: "Drift detection",
        detail: "Input and prediction distribution monitoring.",
      },
      {
        icon: "Workflow",
        name: "Automation",
        detail: "Scheduled reports and alert routing.",
      },
      {
        icon: "Scale",
        name: "Cost tracking",
        detail: "Unit economics per task, batch and market.",
      },
      {
        icon: "FileCheck2",
        name: "Governance",
        detail: "Metric definitions documented and versioned.",
      },
    ],
    process: [
      { title: "Define", detail: "Metrics that map to decisions." },
      { title: "Model", detail: "Warehouse tables and tests built." },
      { title: "Visualise", detail: "Dashboards for each audience." },
      { title: "Operate", detail: "Alerts and weekly review cadence." },
    ],
    outcomes: [
      "Metrics defined once and reused across teams",
      "Alerting that surfaces drift before customers notice",
      "Reporting you own, running inside your own stack",
    ],
  },
  {
    slug: "content-development",
    eyebrow: "Content Development",
    pillar: eLearning,
    title: "Courseware designed around",
    highlight: "learning outcomes.",
    tagline:
      "Curriculum mapping, storyboards and assessments built by instructional designers and SMEs.",
    image: "/images/service-elearning.png",
    imageAlt: "Instructional designers reviewing a course storyboard on a monitor",
    chips: ["Curriculum mapping", "Assessments", "WCAG 2.2 AA"],
    stats: [
      { value: "310", label: "Modules produced" },
      { value: "91%", label: "Completion rate" },
      { value: "22", label: "Languages shipped" },
    ],
    offerings: [
      {
        icon: "GraduationCap",
        name: "Curriculum design",
        detail: "Objectives mapped to competencies and levels.",
      },
      {
        icon: "PenTool",
        name: "Storyboarding",
        detail: "Screen-level scripts ready for production.",
      },
      {
        icon: "FileCheck2",
        name: "Assessment design",
        detail: "Item banks with validity and difficulty review.",
      },
      {
        icon: "Users",
        name: "SME sourcing",
        detail: "Subject experts matched to your domain.",
      },
      {
        icon: "Accessibility",
        name: "Accessible by default",
        detail: "Alt text, transcripts and structure from draft one.",
      },
      {
        icon: "Workflow",
        name: "Review cycles",
        detail: "Structured rounds with tracked sign-off.",
      },
    ],
    process: [
      { title: "Blueprint", detail: "Outcomes and course map agreed." },
      { title: "Draft", detail: "Storyboards and assessment items." },
      { title: "Review", detail: "SME, editorial and accessibility pass." },
      { title: "Release", detail: "Production-ready package handed over." },
    ],
    outcomes: [
      "Reusable component libraries that cut revision cycles",
      "Accessibility built into the workflow, not retrofitted",
      "Delivery into Moodle, Canvas, Blackboard or a custom LMS",
    ],
  },
  {
    slug: "content-production",
    eyebrow: "Content Production",
    pillar: eLearning,
    title: "SCORM and xAPI builds",
    highlight: "that pass QA.",
    tagline:
      "Interactive module development, media integration and packaging tested on your LMS.",
    image: "/images/service-technology.png",
    imageAlt: "Producers building an interactive learning module at a workstation",
    chips: ["SCORM & xAPI", "Interactives", "LMS tested"],
    stats: [
      { value: "1,800", label: "Modules built" },
      { value: "4", label: "LMS platforms" },
      { value: "0", label: "Failed packages" },
    ],
    offerings: [
      {
        icon: "Film",
        name: "Interactive modules",
        detail: "Scenario, simulation and branching builds.",
      },
      {
        icon: "Workflow",
        name: "Packaging",
        detail: "SCORM 1.2/2004, xAPI and cmi5 outputs.",
      },
      {
        icon: "Palette",
        name: "Media integration",
        detail: "Video, audio and animation assembled to spec.",
      },
      {
        icon: "FileCheck2",
        name: "Functional QA",
        detail: "Tracking, bookmarking and scoring verified.",
      },
      {
        icon: "Accessibility",
        name: "Accessibility QA",
        detail: "Keyboard, screen reader and contrast testing.",
      },
      {
        icon: "Boxes",
        name: "Template systems",
        detail: "Design systems that scale across catalogues.",
      },
    ],
    process: [
      { title: "Setup", detail: "Templates and tracking spec confirmed." },
      { title: "Build", detail: "Modules assembled from storyboards." },
      { title: "Test", detail: "Cross-browser and LMS validation." },
      { title: "Deploy", detail: "Packages published and monitored." },
    ],
    outcomes: [
      "Tracking verified on your LMS before release",
      "Component libraries that keep catalogues consistent",
      "Version control and rollback on every published package",
    ],
  },
  {
    slug: "faculty-support",
    eyebrow: "Faculty Support",
    pillar: eLearning,
    title: "Author enablement without",
    highlight: "the chasing.",
    tagline:
      "Onboarding, review coordination and course upkeep so faculty can focus on teaching.",
    image: "/images/about-team.png",
    imageAlt: "Faculty support specialist coaching an author through a course review",
    chips: ["Author onboarding", "Review cycles", "Course upkeep"],
    stats: [
      { value: "600+", label: "Authors supported" },
      { value: "35%", label: "Faster sign-off" },
      { value: "24/5", label: "Helpdesk cover" },
    ],
    offerings: [
      {
        icon: "GraduationCap",
        name: "Onboarding",
        detail: "Tooling walkthroughs and templates for authors.",
      },
      {
        icon: "Workflow",
        name: "Review coordination",
        detail: "Deadlines, reminders and version control handled.",
      },
      {
        icon: "PenTool",
        name: "Editorial help",
        detail: "Copy editing and formatting on author drafts.",
      },
      {
        icon: "Users",
        name: "Helpdesk",
        detail: "Named contact for questions and fixes.",
      },
      {
        icon: "FileCheck2",
        name: "Course upkeep",
        detail: "Annual refresh, link checks and errata.",
      },
      {
        icon: "LineChart",
        name: "Progress view",
        detail: "Dashboard of course status by cohort.",
      },
    ],
    process: [
      { title: "Enrol", detail: "Authors onboarded with templates." },
      { title: "Support", detail: "Drafting help and reminders." },
      { title: "Review", detail: "Coordinated feedback rounds." },
      { title: "Maintain", detail: "Scheduled refresh and errata." },
    ],
    outcomes: [
      "One coordinator owning the schedule end to end",
      "Authors working in templates that stay consistent",
      "Course status visible to programme leadership at any time",
    ],
  },
  {
    slug: "art-production",
    eyebrow: "Art Production",
    pillar: eLearning,
    title: "Illustration and animation",
    highlight: "built to teach.",
    tagline:
      "Diagrams, illustration and motion produced to one style guide across an entire catalogue.",
    image: "/images/service-art.png",
    imageAlt: "Digital illustrator drawing vector artwork on a pen display tablet",
    chips: ["Vector illustration", "Diagrams", "Motion"],
    stats: [
      { value: "48k", label: "Assets produced" },
      { value: "5 days", label: "Typical turnaround" },
      { value: "100%", label: "Source files handed over" },
    ],
    offerings: [
      {
        icon: "Palette",
        name: "Vector illustration",
        detail: "Concept art and scene illustration in your style.",
      },
      {
        icon: "Boxes",
        name: "Technical diagrams",
        detail: "Schematics, flows and labelled figures.",
      },
      {
        icon: "Film",
        name: "Motion graphics",
        detail: "Explainer animation and animated diagrams.",
      },
      {
        icon: "Accessibility",
        name: "Accessible artwork",
        detail: "Contrast-safe palettes with alt text supplied.",
      },
      {
        icon: "PenTool",
        name: "Style guides",
        detail: "Reusable systems that keep art consistent.",
      },
      {
        icon: "Workflow",
        name: "Asset pipeline",
        detail: "Naming, versioning and delivery automation.",
      },
    ],
    process: [
      { title: "Style", detail: "Direction agreed on sample set." },
      { title: "Produce", detail: "Batched artwork against the brief." },
      { title: "Review", detail: "Art director and SME sign-off." },
      { title: "Deliver", detail: "Layered source files and exports." },
    ],
    outcomes: [
      "One visual language across thousands of assets",
      "Editable source files delivered with every batch",
      "Contrast and alt text handled inside production",
    ],
  },
  {
    slug: "content-operations",
    eyebrow: "Content Operations",
    pillar: eLearning,
    title: "Release management for",
    highlight: "large catalogues.",
    tagline:
      "Versioning, metadata and localisation readiness kept under control as volume grows.",
    image: "/images/about-office.png",
    imageAlt: "Content operations team reviewing a release calendar on a large screen",
    chips: ["Versioning", "Metadata", "Release calendars"],
    stats: [
      { value: "12k", label: "Assets managed" },
      { value: "99%", label: "On-time releases" },
      { value: "4", label: "Regions coordinated" },
    ],
    offerings: [
      {
        icon: "Cog",
        name: "Workflow design",
        detail: "Stages, owners and gates defined per asset type.",
      },
      {
        icon: "Database",
        name: "Metadata",
        detail: "Taxonomies and tagging kept clean at scale.",
      },
      {
        icon: "Workflow",
        name: "Release management",
        detail: "Calendars, freezes and rollback plans.",
      },
      {
        icon: "Languages",
        name: "Localisation readiness",
        detail: "Source prepared so translation never blocks.",
      },
      {
        icon: "FileCheck2",
        name: "Audit",
        detail: "Rights, versions and expiry tracked.",
      },
      {
        icon: "LineChart",
        name: "Reporting",
        detail: "Throughput and bottleneck visibility.",
      },
    ],
    process: [
      { title: "Map", detail: "Current workflow documented." },
      { title: "Systemise", detail: "Templates and gates introduced." },
      { title: "Run", detail: "Operations team takes the load." },
      { title: "Optimise", detail: "Bottlenecks removed each quarter." },
    ],
    outcomes: [
      "A single source of truth for every asset version",
      "Predictable release calendar across regions",
      "Metadata clean enough to power search and reuse",
    ],
  },
  {
    slug: "video-audio",
    eyebrow: "Video & Audio",
    pillar: eLearning,
    title: "Studio production and",
    highlight: "post, in one team.",
    tagline:
      "Recording, editing and audio post for learning, marketing and localised media.",
    image: "/images/service-audio.png",
    imageAlt: "Engineer working at a mixing console beside a recording booth",
    chips: ["Studio recording", "Editing", "Audio post"],
    stats: [
      { value: "9k", label: "Minutes produced" },
      { value: "10", label: "Voice talents" },
      { value: "4K", label: "Delivery masters" },
    ],
    offerings: [
      {
        icon: "Mic",
        name: "Recording",
        detail: "Treated studios and remote-directed sessions.",
      },
      {
        icon: "Film",
        name: "Video editing",
        detail: "Assembly, grading and graphics integration.",
      },
      {
        icon: "AudioLines",
        name: "Audio post",
        detail: "Cleanup, mixing and loudness compliance.",
      },
      {
        icon: "Languages",
        name: "Dubbing",
        detail: "Lip-sync and UN-style voice replacement.",
      },
      {
        icon: "Captions",
        name: "Deliverables",
        detail: "Captions, transcripts and platform specs.",
      },
      {
        icon: "Workflow",
        name: "Version control",
        detail: "Review links with timecoded comments.",
      },
    ],
    process: [
      { title: "Pre-production", detail: "Scripts, casting and schedule." },
      { title: "Record", detail: "Directed sessions with QC on set." },
      { title: "Post", detail: "Edit, mix and graphics." },
      { title: "Deliver", detail: "Masters plus platform variants." },
    ],
    outcomes: [
      "Loudness and caption specs met per platform",
      "Timecoded review cycles instead of email threads",
      "Source projects and masters archived and handed over",
    ],
  },
  {
    slug: "voiceover",
    eyebrow: "Voiceover",
    pillar: localization,
    title: "Native voices for every",
    highlight: "market you enter.",
    tagline:
      "Casting, directed recording and delivery-ready audio in 60+ languages.",
    image: "/images/service-audio.png",
    imageAlt: "Voiceover artist recording in an acoustically treated studio booth",
    chips: ["60+ languages", "Directed sessions", "Retakes included"],
    stats: [
      { value: "60+", label: "Languages" },
      { value: "500+", label: "Voice talents" },
      { value: "72h", label: "Standard turnaround" },
    ],
    offerings: [
      {
        icon: "Mic",
        name: "Casting",
        detail: "Auditioned shortlists matched to your brand.",
      },
      {
        icon: "Languages",
        name: "Localised scripts",
        detail: "Adaptation for length, timing and tone.",
      },
      {
        icon: "AudioLines",
        name: "Directed recording",
        detail: "Language leads present in every session.",
      },
      {
        icon: "Film",
        name: "Sync to picture",
        detail: "Time-fit narration and character sync.",
      },
      {
        icon: "FileCheck2",
        name: "QC pass",
        detail: "Pronunciation and terminology verified.",
      },
      {
        icon: "Workflow",
        name: "Delivery",
        detail: "Stems, mixes and platform-ready exports.",
      },
    ],
    process: [
      { title: "Cast", detail: "Voice samples shortlisted for approval." },
      { title: "Adapt", detail: "Script timing and pronunciation prep." },
      { title: "Record", detail: "Directed session with live QC." },
      { title: "Master", detail: "Mixed, checked and delivered." },
    ],
    outcomes: [
      "Consistent brand voice across every language",
      "Pronunciation guides maintained for your terminology",
      "Retakes handled inside the agreed delivery window",
    ],
  },
  {
    slug: "translation",
    eyebrow: "Translation",
    pillar: localization,
    title: "One source language in,",
    highlight: "every market out.",
    tagline:
      "40+ language pairs handled by domain-matched native linguists with two-step review.",
    image: "/images/service-localization.png",
    imageAlt: "Linguist working at a translation workstation with reference material",
    chips: ["40+ pairs", "Two-step review", "Client-owned TM"],
    stats: [
      { value: "40+", label: "Language pairs" },
      { value: "99.6%", label: "First-pass acceptance" },
      { value: "24/5", label: "Coverage" },
    ],
    offerings: [
      {
        icon: "FileText",
        name: "Documents",
        detail: "Contracts, reports and technical manuals.",
      },
      {
        icon: "Monitor",
        name: "Websites",
        detail: "CMS-integrated localisation with SEO handling.",
      },
      {
        icon: "Smartphone",
        name: "Apps & software",
        detail: "UI strings, resource files and store listings.",
      },
      {
        icon: "TrendingUp",
        name: "Marketing",
        detail: "Transcreation that lands in local culture.",
      },
      {
        icon: "Scale",
        name: "Certified & legal",
        detail: "Sworn translation with certificates of accuracy.",
      },
      {
        icon: "Database",
        name: "TM & glossaries",
        detail: "Assets built, maintained and owned by you.",
      },
    ],
    process: [
      { title: "Prepare", detail: "Scope, glossary and style guide." },
      { title: "Translate", detail: "Native, domain-matched linguist." },
      { title: "Review", detail: "Second linguist plus in-context QA." },
      { title: "Deliver", detail: "Source format preserved on handover." },
    ],
    outcomes: [
      "Translation memory and glossaries you own outright",
      "Two-step native review on every deliverable",
      "Cost per word falling as your memory grows",
    ],
  },
  {
    slug: "transcription",
    eyebrow: "Transcription",
    pillar: localization,
    title: "Accurate transcripts with",
    highlight: "clean timecodes.",
    tagline:
      "Verbatim and clean-read transcription with speaker labels, ready for search or subtitling.",
    image: "/images/service-subtitling.png",
    imageAlt: "Transcriptionist working with audio waveform software and headphones",
    chips: ["Verbatim", "Speaker labels", "Timecoded"],
    stats: [
      { value: "99%", label: "Accuracy on clear audio" },
      { value: "35+", label: "Languages" },
      { value: "12h", label: "Rush option" },
    ],
    offerings: [
      {
        icon: "FileText",
        name: "Verbatim",
        detail: "Full utterance capture for research and legal.",
      },
      {
        icon: "PenTool",
        name: "Clean read",
        detail: "Readable transcripts for publication.",
      },
      {
        icon: "Users",
        name: "Speaker labels",
        detail: "Diarisation with named participants.",
      },
      {
        icon: "Clock",
        name: "Timecoding",
        detail: "Sentence or word-level timings.",
      },
      {
        icon: "ShieldCheck",
        name: "Sensitive audio",
        detail: "Secure handling and de-identification.",
      },
      {
        icon: "Workflow",
        name: "Formats",
        detail: "DOCX, SRT, VTT, JSON and custom schemas.",
      },
    ],
    process: [
      { title: "Intake", detail: "Audio assessed and specs confirmed." },
      { title: "Transcribe", detail: "Trained transcriber per domain." },
      { title: "Review", detail: "Second pass against the audio." },
      { title: "Deliver", detail: "Your format, your naming convention." },
    ],
    outcomes: [
      "Consistent formatting across long-running programmes",
      "Difficult audio handled by specialists, not automation alone",
      "Transcripts ready to feed subtitling and search",
    ],
  },
  {
    slug: "subtitling",
    eyebrow: "Subtitling",
    pillar: localization,
    title: "Subtitles, captions and SDH",
    highlight: "to platform spec.",
    tagline:
      "Reading-speed compliant subtitles delivered in the formats your platforms demand.",
    image: "/images/service-subtitling.png",
    imageAlt: "Subtitling editor working on a video timeline with caption tracks",
    chips: ["SDH", "Burn-in", "Platform specs"],
    stats: [
      { value: "45+", label: "Languages" },
      { value: "100%", label: "Spec compliance" },
      { value: "20k", label: "Minutes delivered" },
    ],
    offerings: [
      {
        icon: "Captions",
        name: "Interlingual subtitles",
        detail: "Translated subtitles with reading-speed control.",
      },
      {
        icon: "Accessibility",
        name: "SDH & captions",
        detail: "Sound cues and speaker IDs for accessibility.",
      },
      {
        icon: "Film",
        name: "Burn-in",
        detail: "Styled open captions rendered to picture.",
      },
      {
        icon: "Clock",
        name: "Conforming",
        detail: "Re-timing for edits, versions and re-cuts.",
      },
      {
        icon: "FileCheck2",
        name: "QC",
        detail: "Spotting, line breaks and shot-change checks.",
      },
      {
        icon: "Workflow",
        name: "Formats",
        detail: "SRT, VTT, TTML, IMSC and broadcast specs.",
      },
    ],
    process: [
      { title: "Spot", detail: "Timing set against shot changes." },
      { title: "Translate", detail: "Native subtitler per language." },
      { title: "QC", detail: "Reading speed and style verified." },
      { title: "Deliver", detail: "Per-platform packages exported." },
    ],
    outcomes: [
      "Platform rejection rates driven to zero",
      "Accessibility requirements met, not approximated",
      "Re-timing handled cleanly when the edit changes",
    ],
  },
  {
    slug: "linguistic-qa",
    eyebrow: "Linguistic QA",
    pillar: localization,
    title: "In-context review before",
    highlight: "your users see it.",
    tagline:
      "Terminology, style and functional checks on the real build, not on a spreadsheet.",
    image: "/images/service-localization.png",
    imageAlt: "Linguistic QA reviewer checking localised software on two screens",
    chips: ["In-context", "Terminology", "Severity scored"],
    stats: [
      { value: "6", label: "Issue categories" },
      { value: "72h", label: "Standard cycle" },
      { value: "30+", label: "Locales covered" },
    ],
    offerings: [
      {
        icon: "SpellCheck2",
        name: "Language QA",
        detail: "Grammar, register and consistency review.",
      },
      {
        icon: "Monitor",
        name: "Functional QA",
        detail: "Truncation, encoding and layout defects.",
      },
      {
        icon: "Database",
        name: "Terminology",
        detail: "Glossary enforcement with change log.",
      },
      {
        icon: "Accessibility",
        name: "Cultural review",
        detail: "Imagery, examples and sensitivity checks.",
      },
      {
        icon: "FileCheck2",
        name: "Severity scoring",
        detail: "Findings ranked so fixes get prioritised.",
      },
      {
        icon: "Workflow",
        name: "Bug filing",
        detail: "Issues logged straight into your tracker.",
      },
    ],
    process: [
      { title: "Scope", detail: "Locales and pass criteria agreed." },
      { title: "Review", detail: "Native reviewer inside the build." },
      { title: "Log", detail: "Findings filed with evidence." },
      { title: "Verify", detail: "Fix confirmation round." },
    ],
    outcomes: [
      "Defects found in staging rather than by customers",
      "One prioritised issue list per release, per locale",
      "Terminology drift caught before it spreads",
    ],
  },
  {
    slug: "conversion-services",
    eyebrow: "Conversion Services",
    pillar: publishing,
    title: "Backlists converted into",
    highlight: "structured formats.",
    tagline:
      "XML, EPUB3 and structured data conversion at catalogue scale with validation built in.",
    image: "/images/service-publishing.png",
    imageAlt: "Publishing specialist comparing print pages with structured markup",
    chips: ["EPUB3", "JATS/BITS XML", "Validated"],
    stats: [
      { value: "9,000", label: "Titles converted" },
      { value: "100%", label: "Validation pass" },
      { value: "6", label: "Output formats" },
    ],
    offerings: [
      {
        icon: "FileStack",
        name: "XML conversion",
        detail: "JATS, BITS, DocBook and custom DTDs.",
      },
      {
        icon: "BookOpenCheck",
        name: "EPUB3",
        detail: "Reflowable and fixed-layout builds.",
      },
      {
        icon: "Boxes",
        name: "Data extraction",
        detail: "Tables, references and maths captured.",
      },
      {
        icon: "Accessibility",
        name: "Accessible output",
        detail: "Semantic structure and alt text included.",
      },
      {
        icon: "FileCheck2",
        name: "Validation",
        detail: "Schema, epubcheck and visual diffing.",
      },
      {
        icon: "Workflow",
        name: "Automation",
        detail: "Scripted pipelines for repeat catalogues.",
      },
    ],
    process: [
      { title: "Sample", detail: "Spec proven on a pilot set." },
      { title: "Convert", detail: "Automated pass plus human cleanup." },
      { title: "Validate", detail: "Schema and rendering checks." },
      { title: "Deliver", detail: "Batched handover with reports." },
    ],
    outcomes: [
      "Throughput measured in thousands of titles",
      "Every file validated before it reaches your platform",
      "Repeatable pipelines that lower cost per title over time",
    ],
  },
  {
    slug: "editorial-services",
    eyebrow: "Editorial Services",
    pillar: publishing,
    title: "Editing that holds one",
    highlight: "voice across imprints.",
    tagline:
      "Developmental, copy and proof editing run from your style sheet, at volume.",
    image: "/images/service-publishing.png",
    imageAlt: "Editor reviewing printed page proofs beside a layout screen",
    chips: ["Copy editing", "Proofing", "Style sheets"],
    stats: [
      { value: "14k", label: "Pages per month" },
      { value: "3", label: "Editorial passes" },
      { value: "98%", label: "Client acceptance" },
    ],
    offerings: [
      {
        icon: "BookOpenCheck",
        name: "Developmental",
        detail: "Structure, argument and pacing review.",
      },
      {
        icon: "PenTool",
        name: "Copy editing",
        detail: "Grammar, clarity and consistency work.",
      },
      {
        icon: "SpellCheck2",
        name: "Proofreading",
        detail: "Final pass on proofs before release.",
      },
      {
        icon: "Database",
        name: "References",
        detail: "Citation checking and style conformance.",
      },
      {
        icon: "FileCheck2",
        name: "Fact checking",
        detail: "Source verification on flagged claims.",
      },
      {
        icon: "Workflow",
        name: "Style systems",
        detail: "Style sheets maintained across imprints.",
      },
    ],
    process: [
      { title: "Calibrate", detail: "Sample edit approved by your team." },
      { title: "Edit", detail: "Assigned editor per subject area." },
      { title: "Query", detail: "Author queries resolved in one round." },
      { title: "Proof", detail: "Final check against the style sheet." },
    ],
    outcomes: [
      "Style-sheet driven consistency across every imprint",
      "Author queries consolidated instead of drip-fed",
      "Editors matched to subject area, not assigned at random",
    ],
  },
  {
    slug: "accessibility-services",
    eyebrow: "Accessibility Services",
    pillar: publishing,
    title: "Accessibility remediation",
    highlight: "you can evidence.",
    tagline:
      "WCAG and EPUB accessibility audits, remediation and conformance reports for real compliance.",
    image: "/images/service-accessibility.png",
    imageAlt: "Accessibility specialist testing a site with a screen reader and braille display",
    chips: ["WCAG 2.2 AA", "EAA ready", "VPAT reports"],
    stats: [
      { value: "2,400", label: "Titles remediated" },
      { value: "AA", label: "Conformance level" },
      { value: "100%", label: "Manual verification" },
    ],
    offerings: [
      {
        icon: "Accessibility",
        name: "Audits",
        detail: "Automated plus assistive-technology testing.",
      },
      {
        icon: "BookOpenCheck",
        name: "EPUB remediation",
        detail: "Structure, reading order and metadata fixes.",
      },
      {
        icon: "FileText",
        name: "PDF & documents",
        detail: "Tagging, alt text and table headers.",
      },
      {
        icon: "Monitor",
        name: "Web & app",
        detail: "Keyboard, contrast and ARIA remediation.",
      },
      {
        icon: "PenTool",
        name: "Alt text",
        detail: "Descriptive text written by trained specialists.",
      },
      {
        icon: "FileCheck2",
        name: "Reporting",
        detail: "VPAT and conformance statements issued.",
      },
    ],
    process: [
      { title: "Audit", detail: "Baseline conformance measured." },
      { title: "Prioritise", detail: "Blockers separated from polish." },
      { title: "Remediate", detail: "Fixes applied and retested." },
      { title: "Certify", detail: "Conformance report delivered." },
    ],
    outcomes: [
      "European Accessibility Act readiness assessed and evidenced",
      "Manual assistive-technology testing, not scanner output alone",
      "Reports your legal team can rely on",
    ],
  },
];

export function getService(slug: string): ServiceDetail {
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }
  return service;
}

export function getRelatedServices(slug: string, limit = 3): ServiceDetail[] {
  const current = getService(slug);
  return serviceDetails
    .filter(
      (item) =>
        item.slug !== slug && item.pillar.label === current.pillar.label,
    )
    .slice(0, limit);
}
