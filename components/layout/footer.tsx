"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useFooterContent } from "@/components/layout/site-chrome-provider";

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

/**
 * Same-page hash targets must be native anchors: next/link resolves them with
 * history.pushState, which never fires a `hashchange` event, so sections that
 * react to the hash (the service-line tabs) would never update or scroll into
 * view when the link is clicked from the home page itself.
 */
function FooterLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.includes("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
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

/** Resolve the string icon names stored in the editable content store. */
function SocialIcon({ name, className }: { name: string; className?: string }) {
  if (name.toLowerCase() === "linkedin")
    return <LinkedinIcon className={className} />;
  return <InstagramIcon className={className} />;
}

function ContactIcon({ name, className }: { name: string; className?: string }) {
  if (name.toLowerCase() === "phone")
    return <Phone className={className} aria-hidden="true" />;
  return <Mail className={className} aria-hidden="true" />;
}

export function Footer() {
  const content = useFooterContent();

  return (
    <footer id="footer" className="bg-primary-dark text-primary-foreground">
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
                src={content.logo || "/logo.png"}
                alt="Muenot"
                width={244}
                height={55}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 text-sm leading-relaxed opacity-75 max-w-sm">
              {content.brandBlurb}
            </p>

            <div className="mt-6 flex items-center gap-3">
              {content.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-md border border-primary-foreground/20 flex items-center justify-center opacity-75 hover:opacity-100 hover:bg-primary-foreground/10 transition-all"
                >
                  <SocialIcon name={social.icon} className="w-4 h-4" />
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
              {content.companyLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                    <span>{link.name}</span>
                  </FooterLink>
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
              {content.servicesLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      aria-hidden="true"
                    />
                    <span>{link.name}</span>
                  </FooterLink>
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
              {content.offices.map((office) => (
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
                {content.contacts.map((contact) => (
                  <a
                    key={contact.value}
                    href={contact.href}
                    className="flex items-center gap-3 text-sm opacity-75 hover:opacity-100 transition-opacity"
                  >
                    <ContactIcon name={contact.icon} className="w-4 h-4 shrink-0" />
                    {contact.value}
                    {contact.note ? (
                      <span className="opacity-60">{contact.note}</span>
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs opacity-60 text-center sm:text-left">
            &copy; 2020&ndash;{new Date().getFullYear()} {content.copyright}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs opacity-60">
            <span>{content.certText}</span>
            {content.legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:opacity-100 transition-opacity"
              >
                {link.name}
              </Link>
            ))}
            <a
              href={content.websiteHref}
              className="hover:opacity-100 transition-opacity"
            >
              {content.website}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
