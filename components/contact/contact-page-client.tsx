"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ContactContent } from "@/lib/site-content-data";

/** Resolve the string icon names stored in the editable Contact content. */
const contactIconMap: Record<string, LucideIcon> = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  mappin: MapPin,
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  captcha?: string;
}

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const inputBase =
  "w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30";

export function ContactPageClient({ content }: { content: ContactContent }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else {
      const digitsOnly = formData.phone.replace(/\D/g, "");

      if (digitsOnly.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      } else if (digitsOnly.length > 12) {
        newErrors.phone = "Phone number cannot exceed 12 digits";
      } else if (digitsOnly.length === 10 && !/^[6-9]\d{9}$/.test(digitsOnly)) {
        newErrors.phone = "Please enter a valid Indian mobile number";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
    }

    if (recaptchaSiteKey && !captchaToken) {
      newErrors.captcha = "Please verify you are not a robot";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return undefined;

    const digitsOnly = phone.replace(/\D/g, "");

    if (digitsOnly.length > 0 && digitsOnly.length < 10) {
      return "Phone number must be at least 10 digits";
    }
    if (digitsOnly.length > 12) {
      return "Phone number cannot exceed 12 digits";
    }
    if (digitsOnly.length === 10 && !/^[6-9]\d{9}$/.test(digitsOnly)) {
      return "Please enter a valid Indian mobile number";
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const sanitizedValue = value.replace(/[^\d+\-\s()]/g, "");
      setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
      setErrors((prev) => ({ ...prev, phone: validatePhone(sanitizedValue) }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token && errors.captcha) {
      setErrors((prev) => ({ ...prev, captcha: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setSubmitStatus("error");
        if (data.error) {
          setErrors({ captcha: data.error });
        }
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = content.contactInfo.map((info) => ({
    ...info,
    icon: contactIconMap[info.icon.toLowerCase()] ?? Mail,
  }));

  const phoneDigits = formData.phone.replace(/\D/g, "").length;
  const phoneValid = phoneDigits >= 10 && !errors.phone;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          description={content.hero.description}
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          image={content.hero.image}
          imageAlt={content.hero.imageAlt}
          highlights={content.hero.highlights}
        />

        <section className="bg-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
              <div className="flex flex-col gap-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.href}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <info.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-1">
                      <h2 className="font-display text-sm font-semibold text-foreground">
                        {info.title}
                      </h2>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {info.content}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <h2 className="font-display text-sm font-semibold text-foreground">
                    {content.whatHappensNextTitle}
                  </h2>
                  <ol className="mt-4 flex flex-col gap-3">
                    {content.whatHappensNext.map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                          {index + 1}
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-3xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(11,18,32,0.04)] sm:p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {content.formTitle}
                  </h2>

                  {submitStatus === "success" && (
                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/8 p-4">
                      <CheckCircle
                        className="h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-foreground">
                        Thank you — your message has been sent. We&apos;ll get
                        back to you shortly.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-destructive/25 bg-destructive/8 p-4">
                      <AlertCircle
                        className="h-5 w-5 shrink-0 text-destructive"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-foreground">
                        Something went wrong. Please try again later.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Full name{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <User
                            className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden="true"
                          />
                          <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            maxLength={50}
                            className={`${inputBase} pl-10 ${errors.name ? "border-destructive" : "border-border"}`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-xs text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email address{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Mail
                            className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden="true"
                          />
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${inputBase} pl-10 ${errors.email ? "border-destructive" : "border-border"}`}
                            placeholder="john@example.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-foreground"
                        >
                          Phone number{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <div className="relative">
                          <Phone
                            className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden="true"
                          />
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={15}
                            className={`${inputBase} pl-10 pr-10 ${
                              errors.phone
                                ? "border-destructive"
                                : phoneValid
                                  ? "border-primary/50"
                                  : "border-border"
                            }`}
                            placeholder="+91 9876543210"
                          />
                          {phoneValid && (
                            <CheckCircle
                              className="absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-destructive">
                            {errors.phone}
                          </p>
                        )}
                        {!errors.phone && formData.phone && phoneDigits < 10 && (
                          <p className="text-xs text-muted-foreground">
                            {10 - phoneDigits} more digit(s) required
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-medium text-foreground"
                        >
                          Company name
                        </label>
                        <div className="relative">
                          <Building
                            className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                            aria-hidden="true"
                          />
                          <input
                            id="company"
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`${inputBase} border-border pl-10`}
                            placeholder="Your company"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject <span className="text-destructive">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        maxLength={100}
                        className={`${inputBase} ${errors.subject ? "border-destructive" : "border-border"}`}
                        placeholder="What is your inquiry about?"
                      />
                      {errors.subject && (
                        <p className="text-xs text-destructive">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-foreground"
                        >
                          Message <span className="text-destructive">*</span>
                        </label>
                        <span className="text-xs text-muted-foreground">
                          {formData.message.length}/1000
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        maxLength={1000}
                        className={`${inputBase} resize-none ${errors.message ? "border-destructive" : "border-border"}`}
                        placeholder="Tell us about your project, volumes, and timelines..."
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {recaptchaSiteKey ? (
                      <div className="flex flex-col gap-2">
                        <ReCAPTCHA
                          ref={recaptchaRef}
                          sitekey={recaptchaSiteKey}
                          onChange={handleCaptchaChange}
                          theme="light"
                        />
                        {errors.captcha && (
                          <p className="text-xs text-destructive">
                            {errors.captcha}
                          </p>
                        )}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2
                            className="h-4 w-4 animate-spin"
                            aria-hidden="true"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" />
                          Send message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
