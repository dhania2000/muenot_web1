/**
 * Seed data for the "chrome" and page-level marketing content that used to be
 * hardcoded inside components (hero, home CTA, navbar, footer, about, contact).
 *
 * This file is intentionally plain data with NO imports so it stays safe to
 * import from both server and client code. Icons are stored as string names and
 * resolved at render time via components/ui/dynamic-icon.tsx.
 */

export type HeroBanner = {
  id: string
  eyebrow: string
  title: string
  highlight: string
  description: string
  image: string
  imageAlt: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
  statValue: string
  statLabel: string
}

export type HeroContent = {
  banners: HeroBanner[]
  capabilities: { label: string; icon: string }[]
}

export const heroContent: HeroContent = {
  banners: [
    {
      id: "ai-data",
      eyebrow: "AI Data Services",
      title: "Training data pipelines built",
      highlight: "for production models",
      description:
        "Managed annotation, curation, and evaluation pods with documented quality gates and audit trails on every batch.",
      image: "/images/service-ai-data-overview.png",
      imageAlt:
        "Data annotation specialist labelling street imagery for a computer vision model",
      primaryLabel: "Explore AI data",
      primaryHref: "/services/data-annotation",
      secondaryLabel: "See client results",
      secondaryHref: "/case-studies",
      statValue: "98.2%",
      statLabel: "Quality assurance rate",
    },
    {
      id: "elearning",
      eyebrow: "E-Learning & Localization",
      title: "Course production and localization,",
      highlight: "delivered at scale",
      description:
        "Instructional designers, media teams, and native linguists turning objectives into accessible courses in 40+ languages.",
      image: "/images/service-elearning-overview.png",
      imageAlt:
        "Instructional designers reviewing an e-learning course storyboard on a monitor",
      primaryLabel: "Explore e-learning",
      primaryHref: "/services/content-development",
      secondaryLabel: "Talk to our team",
      secondaryHref: "/contact",
      statValue: "40+",
      statLabel: "Languages supported",
    },
    {
      id: "publishing",
      eyebrow: "Publishing & Accessibility",
      title: "Editorial and accessibility services",
      highlight: "for digital catalogues",
      description:
        "Copy editing, conversion, and WCAG remediation for publishers moving large backlists into compliant digital formats.",
      image: "/images/service-publishing-overview.png",
      imageAlt: "Editor reviewing printed page proofs beside a book layout screen",
      primaryLabel: "Explore publishing",
      primaryHref: "/services/editorial-services",
      secondaryLabel: "See client results",
      secondaryHref: "/case-studies",
      statValue: "300+",
      statLabel: "Specialists on delivery",
    },
  ],
  capabilities: [
    { label: "Data annotation", icon: "Database" },
    { label: "RLHF & evaluation", icon: "BrainCircuit" },
    { label: "Course production", icon: "GraduationCap" },
    { label: "Translation", icon: "Languages" },
    { label: "Subtitling", icon: "Captions" },
    { label: "Accessibility", icon: "Accessibility" },
    { label: "Editorial", icon: "PenTool" },
    { label: "Voiceover", icon: "Mic2" },
  ],
}

export type HomeCtaContent = {
  eyebrow: string
  title: string
  description: string
  image: string
  imageAlt: string
  assurances: string[]
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  appointmentUrl: string
}

export const homeCtaContent: HomeCtaContent = {
  eyebrow: "Start a conversation",
  title: "Tell us the requirement. We will scope a pilot.",
  description:
    "Share your volumes and timelines to get a documented pilot plan before committing to scale.",
  image: "/images/cta-consultation.png",
  imageAlt: "Client consultation meeting with a Muenot delivery lead",
  assurances: [
    "Response within one business day",
    "Scoping call with a delivery lead, not a sales rep",
    "Written pilot proposal with pricing and acceptance criteria",
  ],
  primaryLabel: "Contact our team",
  primaryHref: "/contact",
  secondaryLabel: "Schedule a call",
  appointmentUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2H1mDyZZCvmW3Borgz4b3tdC_wtzo8KjAQ_2SHFVMW70qdjK75tPsr8a4mc7OOyNy1KA57B_IF?gv=true",
}

export type NavItem = {
  name: string
  href: string
  children?: { name: string; href: string }[]
}

export type NavbarContent = {
  topBarText: string
  phone: string
  phoneHref: string
  email: string
  emailHref: string
  logo: string
  ctaLabel: string
  appointmentUrl: string
  navItems: NavItem[]
}

export const navbarContent: NavbarContent = {
  topBarText:
    "Enterprise data, learning & localization services — delivered across 40+ languages.",
  phone: "+91 637 780 9826",
  phoneHref: "tel:+916377809826",
  email: "info@muenot.co.in",
  emailHref: "mailto:info@muenot.co.in",
  logo: "/logo.png",
  ctaLabel: "Book a Consultation",
  appointmentUrl:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2H1mDyZZCvmW3Borgz4b3tdC_wtzo8KjAQ_2SHFVMW70qdjK75tPsr8a4mc7OOyNy1KA57B_IF?gv=true",
  navItems: [
    {
      name: "Services",
      href: "/#services",
      children: [
        { name: "AI Data Services", href: "/services/ai-data-services" },
        { name: "E-Learning Services", href: "/services/e-learning-services" },
        { name: "Technology", href: "/services/technology" },
        { name: "Localization", href: "/services/localization-services" },
        { name: "Publishing", href: "/services/publishing" },
      ],
    },
    { name: "Industries", href: "/#industries" },
    { name: "About", href: "/about" },
    {
      name: "Insights",
      href: "/#case-studies",
      children: [
        { name: "Blogs", href: "/blog" },
        { name: "Case Studies", href: "/#case-studies" },
      ],
    },
    { name: "Contact", href: "/#cta-section" },
  ],
}

export type FooterContent = {
  logo: string
  brandBlurb: string
  socialLinks: { name: string; icon: string; href: string }[]
  companyLinks: { name: string; href: string }[]
  servicesLinks: { name: string; href: string }[]
  offices: { location: string; address: string }[]
  contacts: { icon: string; value: string; href: string; note: string }[]
  copyright: string
  certText: string
  website: string
  websiteHref: string
  legalLinks: { name: string; href: string }[]
}

export const footerContent: FooterContent = {
  logo: "/logo.png",
  brandBlurb:
    "Muenot Technologies is an enterprise services partner for AI training data, workforce learning, localization and digital engineering — delivered by managed teams with documented quality controls.",
  socialLinks: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      href: "https://www.linkedin.com/company/muenot/?viewAsMember=true",
    },
    {
      name: "Instagram",
      icon: "instagram",
      href: "https://www.linkedin.com/company/muenot/?viewAsMember=true",
    },
  ],
  companyLinks: [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Our Services", href: "/#services" },
    { name: "Our Clients", href: "/#our-clients" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Blogs", href: "/blog" },
  ],
  servicesLinks: [
    { name: "AI Data Services", href: "/#ai-data" },
    { name: "E-Learning Services", href: "/#elearning" },
    { name: "Technology Solutions", href: "/services/technology" },
    { name: "Localization", href: "/#localization" },
    { name: "Publishing", href: "/#publishing" },
  ],
  offices: [
    {
      location: "Jaipur, India",
      address: "56, Mukhya Sodala, Shyam Nagar, Jaipur, Rajasthan",
    },
    {
      location: "Jhunjhunu, India",
      address: "Tal, Jhunjhunu, Rajasthan, 333026",
    },
  ],
  contacts: [
    {
      icon: "phone",
      value: "+91 63778 09826",
      href: "tel:+916377809826",
      note: "(Sales)",
    },
    {
      icon: "mail",
      value: "info@muenot.co.in",
      href: "mailto:info@muenot.co.in",
      note: "",
    },
    {
      icon: "mail",
      value: "career@muenot.co.in",
      href: "mailto:career@muenot.co.in",
      note: "(Careers)",
    },
  ],
  copyright: "Muenot Technologies. All rights reserved.",
  certText: "ISO 27001 aligned processes",
  website: "www.muenot.co.in",
  websiteHref: "https://www.muenot.co.in",
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
}

export type AboutContent = {
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
  whoWeAre: {
    eyebrow: string
    title: string
    description: string
    items: string[]
    linkLabel: string
    linkHref: string
    image: string
    imageAlt: string
  }
  vision: { title: string; description: string; points: string[] }
  mission: { title: string; description: string; points: string[] }
  valuesEyebrow: string
  valuesTitle: string
  valuesDescription: string
  values: { title: string; description: string; icon: string }[]
  operationsEyebrow: string
  operationsTitle: string
  operationsDescription: string
  operations: { title: string; description: string; tag: string; icon: string }[]
  closing: {
    title: string
    description: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
}

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "About Muenot",
    title: "A delivery partner built for enterprise accountability",
    description:
      "Muenot runs the operational work enterprise teams can't staff internally — AI data, courseware, localization, technology and publishing — with managed pods and measurable quality.",
    image: "/images/about-team.png",
    imageAlt:
      "Muenot leadership and delivery team collaborating in a modern office",
    primaryLabel: "Talk to our team",
    primaryHref: "/contact",
    secondaryLabel: "Explore services",
    secondaryHref: "/#services",
    highlights: ["6+ years", "300+ specialists", "10+ countries"],
  },
  whoWeAre: {
    eyebrow: "Who we are",
    title: "Infinite learning, endless possibilities",
    description:
      "Domain specialists, production tooling, and documented governance — so complex programmes land on schedule.",
    items: [
      "Five service lines under one delivery organisation",
      "Delivery centres across three regions, extended weekday coverage",
      "ISO-aligned handling with NDA-backed secure floors",
      "Sector-assigned delivery leads on every account",
    ],
    linkLabel: "See how we work with clients",
    linkHref: "/case-studies",
    image: "/images/about-office.png",
    imageAlt:
      "Muenot delivery centre floor with specialists at production workstations",
  },
  vision: {
    title: "Our vision",
    description:
      "To be the delivery partner enterprises trust with the work that cannot fail — measured, audited, and repeatable.",
    points: [
      "Leading our categories on measured quality, not marketing claims",
      "Expanding delivery capacity without diluting governance",
      "Creating durable partnerships that survive procurement cycles",
    ],
  },
  mission: {
    title: "Our mission",
    description:
      "To deliver operational programmes that hold their quality bar as volumes scale.",
    points: [
      "Provide scalable, reliable delivery under contractual SLAs",
      "Build long-term partnerships based on audited performance",
      "Foster continuous learning across every delivery pod",
      "Empower teams to own outcomes, not just tasks",
    ],
  },
  valuesEyebrow: "Core values",
  valuesTitle: "The principles behind every engagement",
  valuesDescription:
    "These shape how pods are staffed, how quality is measured, and how we report.",
  values: [
    {
      title: "Quality and excellence",
      description:
        "Rigorous QA processes and written acceptance criteria on every deliverable.",
      icon: "Award",
    },
    {
      title: "Customer first",
      description:
        "We start from your definition of done, not a generic service catalogue.",
      icon: "Heart",
    },
    {
      title: "Integrity",
      description:
        "Transparent reporting, honest timelines, and no surprises at invoice time.",
      icon: "Shield",
    },
    {
      title: "Ownership",
      description:
        "A named delivery manager accountable for SLA performance end to end.",
      icon: "CheckCircle",
    },
    {
      title: "Learning and innovation",
      description:
        "Tooling and process improvements fed back into every active engagement.",
      icon: "Lightbulb",
    },
    {
      title: "Global, local",
      description:
        "Delivery centres across three regions with native-language capability.",
      icon: "Globe",
    },
  ],
  operationsEyebrow: "How we operate",
  operationsTitle: "The delivery model behind the work",
  operationsDescription:
    "Every engagement runs on the same operating spine — regional capacity, defined coverage windows, and documented governance.",
  operations: [
    {
      title: "Regional delivery centres",
      description:
        "Capacity across three regions with native-language specialists, so work follows the timezone it is needed in.",
      tag: "3 regions",
      icon: "MapPin",
    },
    {
      title: "Defined coverage windows",
      description:
        "extended weekday coverage with agreed escalation paths and a named delivery manager accountable for SLA performance.",
      tag: "extended weekday coverage",
      icon: "Clock",
    },
    {
      title: "Documented governance",
      description:
        "ISO-aligned handling, NDA-backed secure floors, and written acceptance criteria on every deliverable.",
      tag: "ISO-aligned",
      icon: "ClipboardCheck",
    },
  ],
  closing: {
    title: "Join us on our journey",
    description:
      "Partner with Muenot and get a documented pilot before you commit to scale.",
    primaryLabel: "Get in touch",
    primaryHref: "/contact",
    secondaryLabel: "Explore services",
    secondaryHref: "/#services",
  },
}

export type ContactContent = {
  hero: {
    eyebrow: string
    title: string
    description: string
    image: string
    imageAlt: string
    highlights: string[]
  }
  contactInfo: { icon: string; title: string; content: string; href: string }[]
  whatHappensNextTitle: string
  whatHappensNext: string[]
  formTitle: string
}

export const contactContent: ContactContent = {
  hero: {
    eyebrow: "Get in touch",
    title: "Let's start a conversation",
    description:
      "Share your requirement and a delivery lead will respond within one business day with next steps.",
    image: "/images/contact-reception.png",
    imageAlt:
      "Friendly receptionist welcoming visitors at the Muenot office front desk",
    highlights: [
      "Response within one business day",
      "NDA on request",
      "No obligation scoping call",
    ],
  },
  contactInfo: [
    {
      icon: "mail",
      title: "Email us",
      content: "info@muenot.co.in",
      href: "mailto:info@muenot.co.in",
    },
    {
      icon: "phone",
      title: "Call us",
      content: "+91-6377809826",
      href: "tel:+916377809826",
    },
    {
      icon: "map",
      title: "Visit us",
      content: "56, Mukhya Sodala, Shyam Nagar, Jaipur",
      href: "#",
    },
  ],
  whatHappensNextTitle: "What happens next",
  whatHappensNext: [
    "We review your requirement",
    "Scoping call with a delivery lead",
    "Written pilot proposal with pricing",
  ],
  formTitle: "Send us a message",
}
