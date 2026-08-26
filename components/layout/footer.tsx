"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const offices = [
  {
    location: "Jaipur, India",
    address: "56, Mukhya Sodala, Shyam Nagar, Jaipur, Rajasthan",
  },
  {
    location: "Jhunjhunu, India",
    address: "Tal, Jhunjhunu, Rajasthan, 333026",
  },
];

const aboutLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Our Services", href: "/#services" },
  { name: "Our Clients", href: "/#our-clients" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Blogs", href: "/blog" },
];

const servicesLinks = [
  { name: "AI Data Services", href: "/#ai-data" },
  { name: "E-Learning Services", href: "/#elearning" },
  { name: "Technology Solutions", href: "/#technology" },
  { name: "Localization", href: "/#localization" },
  { name: "Publishing", href: "/#publishing" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/muenot/?viewAsMember=true",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.linkedin.com/company/muenot/?viewAsMember=true",
  },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-white px-3 py-2 shadow-sm"
            >
              <Image
                src="/logo.png"
                alt="Muenot"
                width={244}
                height={55}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed opacity-75 max-w-sm">
              Muenot Technologies is an enterprise services partner for AI
              training data, workforce learning, localization and digital
              engineering — delivered by managed teams with documented quality
              controls.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-md border border-primary-foreground/20 flex items-center justify-center opacity-75 hover:opacity-100 hover:bg-primary-foreground/10 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest opacity-60">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest opacity-60">
              Services
            </h4>
            <ul className="mt-5 space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest opacity-60">
              Contact
            </h4>
            <div className="mt-5 space-y-5">
              {offices.map((office) => (
                <div key={office.address} className="flex gap-3">
                  <MapPin
                    className="w-4 h-4 mt-0.5 shrink-0 opacity-60"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-medium">{office.location}</p>
                    <p className="text-sm opacity-70 leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-1 space-y-2">
                <a
                  href="tel:+916377809826"
                  className="flex items-center gap-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  +91 63778 09826
                  <span className="opacity-60">(Sales)</span>
                </a>
                <a
                  href="mailto:info@muenot.co.in"
                  className="flex items-center gap-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  info@muenot.co.in
                </a>
                <a
                  href="mailto:career@muenot.co.in"
                  className="flex items-center gap-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                  career@muenot.co.in
                  <span className="opacity-60">(Careers)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-60 text-center sm:text-left">
            &copy; 2020&ndash;{new Date().getFullYear()} Muenot Technologies. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs opacity-60">
            <span>ISO 27001 aligned processes</span>
            <Link
              href="/privacy-policy"
              className="hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:opacity-100 transition-opacity"
            >
              Terms &amp; Conditions
            </Link>
            <a
              href="https://www.muenot.co.in"
              className="hover:opacity-100 transition-opacity"
            >
              www.muenot.co.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
