"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentModal } from "@/components/ui/appointment-modal";

const navItems = [
  {
    name: "Services",
    href: "/#services",
    children: [
      { name: "AI Data Services", href: "/#ai-data" },
      { name: "E-Learning Services", href: "/#elearning" },
      { name: "Technology", href: "/#technology" },
      { name: "Localization", href: "/#localization" },
      { name: "Publishing", href: "/#publishing" },
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
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Utility bar */}
        <div className="hidden lg:block bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-9 text-xs">
              <p className="opacity-90">
                Enterprise data, learning &amp; localization services — delivered
                across 40+ languages.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="tel:+916377809826"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  +91 637 780 9826
                </a>
                <a
                  href="mailto:info@muenot.co.in"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  info@muenot.co.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className={cn(
            "transition-all duration-300 border-b",
            isScrolled
              ? "bg-background/95 backdrop-blur-lg border-border shadow-sm"
              : "bg-background border-transparent"
          )}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-18">
              {/* Logo */}
              <Link href="/" className="flex items-center cursor-pointer">
                <Image
                  src="/logo.png"
                  alt="Muenot"
                  width={222}
                  height={50}
                  className="h-9 w-auto sm:h-10"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() =>
                      item.children && setActiveDropdown(item.name)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium tracking-tight transition-colors",
                        "text-foreground/70 hover:text-primary",
                        "flex items-center gap-1"
                      )}
                    >
                      {item.name}
                      {item.children && (
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform",
                            activeDropdown === item.name && "rotate-180"
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {item.children && activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2"
                        >
                          <div className="bg-card border border-border rounded-lg p-2 shadow-lg min-w-[220px]">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex items-center">
                <Button onClick={() => setIsModalOpen(true)} className="rounded-md">
                  Book a Consultation
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-md hover:bg-secondary"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden overflow-hidden absolute left-0 right-0 top-16 bg-background border-b border-border shadow-xl"
                >
                  <div className="py-4 space-y-1 px-4 max-w-7xl mx-auto">
                    {navItems.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-secondary rounded-md"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.children && (
                          <div className="pl-3 mt-1 space-y-1 border-l border-border ml-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-4">
                      <Button
                        className="w-full"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsModalOpen(true);
                        }}
                      >
                        Book a Consultation
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.div>
      </header>

      {/* Appointment Modal - Rendered outside header to avoid positioning issues */}
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentUrl="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0-2HacjoEaGmbT8c2DojXpF5MUpHvL9fvDuOK83py17R0RYHWnh8jfRf8a4mVDParjfSakNJ2X"
      />
    </>
  );
}
