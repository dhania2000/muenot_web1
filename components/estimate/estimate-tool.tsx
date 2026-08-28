"use client";

import { useMemo, useRef, useState } from "react";
import {
  Image as ImageIcon,
  Video,
  FileText,
  AudioLines,
  Box,
  Layers,
  Database,
  Boxes,
  Gauge,
  ShieldCheck,
  Sparkles,
  Clock,
  CalendarDays,
  CalendarRange,
  ArrowRight,
  ArrowLeft,
  Check,
  User,
  Mail,
  Building,
  Loader2,
  CheckCircle,
  AlertCircle,
  RotateCcw,
  type LucideIcon,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { cn } from "@/lib/utils";

type Option = {
  value: string;
  label: string;
  hint: string;
  icon: LucideIcon;
  weight: number;
};

type Step = {
  key: "dataType" | "volume" | "complexity" | "timeline";
  question: string;
  helper: string;
  options: Option[];
};

const steps: Step[] = [
  {
    key: "dataType",
    question: "What kind of data do you need?",
    helper: "Choose the primary modality for your project.",
    options: [
      { value: "Images", label: "Images", hint: "Bounding boxes, segmentation, tagging", icon: ImageIcon, weight: 1 },
      { value: "Video", label: "Video", hint: "Frame tracking, event labeling", icon: Video, weight: 3 },
      { value: "Text", label: "Text", hint: "NLP, entity, sentiment, RLHF", icon: FileText, weight: 1 },
      { value: "Audio", label: "Audio", hint: "Transcription, diarization", icon: AudioLines, weight: 2 },
      { value: "3D / Sensor", label: "3D / Sensor", hint: "LiDAR, point cloud, cuboids", icon: Box, weight: 4 },
    ],
  },
  {
    key: "volume",
    question: "How much data is in scope?",
    helper: "Approximate number of items to be processed.",
    options: [
      { value: "Up to 10K", label: "Up to 10K", hint: "Pilot or proof of concept", icon: Layers, weight: 1 },
      { value: "10K – 100K", label: "10K – 100K", hint: "Production batch", icon: Database, weight: 2 },
      { value: "100K – 1M", label: "100K – 1M", hint: "Scaled program", icon: Boxes, weight: 3 },
      { value: "1M+", label: "1M+", hint: "Enterprise pipeline", icon: Boxes, weight: 4 },
    ],
  },
  {
    key: "complexity",
    question: "How complex is the task?",
    helper: "Higher complexity needs more specialist review.",
    options: [
      { value: "Basic", label: "Basic", hint: "Simple, single-pass labels", icon: Gauge, weight: 1 },
      { value: "Medium", label: "Medium", hint: "Multi-attribute, guidelines", icon: ShieldCheck, weight: 2 },
      { value: "Advanced", label: "Advanced", hint: "Expert / domain-specific QA", icon: Sparkles, weight: 4 },
    ],
  },
  {
    key: "timeline",
    question: "What is your target timeline?",
    helper: "Tighter timelines need larger dedicated pods.",
    options: [
      { value: "3 months", label: "3 months", hint: "Comfortable ramp", icon: CalendarRange, weight: 1 },
      { value: "1 month", label: "1 month", hint: "Standard delivery", icon: CalendarDays, weight: 2 },
      { value: "1 week", label: "1 week", hint: "Rush / dedicated pod", icon: Clock, weight: 4 },
    ],
  },
];

type Selections = Record<Step["key"], string | null>;

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

const inputBase =
  "w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30";

type Tier = {
  name: string;
  range: string;
  description: string;
};

function getTier(score: number): Tier {
  if (score <= 6) {
    return {
      name: "Starter Pod",
      range: "Pilot engagement",
      description:
        "A focused team to validate quality gates before scaling. Ideal for proofs of concept and first batches.",
    };
  }
  if (score <= 10) {
    return {
      name: "Growth Program",
      range: "Managed batch delivery",
      description:
        "A dedicated pod with documented guidelines, QA layers, and audit trails for recurring production volumes.",
    };
  }
  return {
    name: "Enterprise Pipeline",
    range: "Scaled multi-pod program",
    description:
      "Multiple specialist pods with SLA-backed throughput, layered review, and custom tooling for large-scale delivery.",
  };
}

export function EstimateTool() {
  const [current, setCurrent] = useState(0);
  const [selections, setSelections] = useState<Selections>({
    dataType: null,
    volume: null,
    complexity: null,
    timeline: null,
  });
  const [showResult, setShowResult] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const totalSteps = steps.length;
  const answeredCount = Object.values(selections).filter(Boolean).length;
  const progress = showResult
    ? 100
    : Math.round((answeredCount / totalSteps) * 100);

  const score = useMemo(() => {
    return steps.reduce((sum, step) => {
      const selected = selections[step.key];
      const opt = step.options.find((o) => o.value === selected);
      return sum + (opt?.weight ?? 0);
    }, 0);
  }, [selections]);

  const tier = useMemo(() => getTier(score), [score]);

  const activeStep = steps[current];
  const activeValue = selections[activeStep.key];

  const handleSelect = (value: string) => {
    setSelections((prev) => ({ ...prev, [activeStep.key]: value }));
  };

  const goNext = () => {
    if (current < totalSteps - 1) {
      setCurrent((c) => c + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (showResult) {
      setShowResult(false);
      return;
    }
    if (current > 0) setCurrent((c) => c - 1);
  };

  const reset = () => {
    setSelections({
      dataType: null,
      volume: null,
      complexity: null,
      timeline: null,
    });
    setCurrent(0);
    setShowResult(false);
    setStatus("idle");
    setForm({ name: "", email: "", company: "" });
    setErrors({});
    setCaptchaToken(null);
    recaptchaRef.current?.reset();
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(form.name.trim()))
      next.name = "Letters and spaces only";
    if (!form.email.trim()) next.email = "Business email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (recaptchaSiteKey && !captchaToken)
      next.captcha = "Please verify you are not a robot";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          dataType: selections.dataType,
          volume: selections.volume,
          complexity: selections.complexity,
          timeline: selections.timeline,
          tier: tier.name,
          captchaToken,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        if (data.error) setErrors({ captcha: data.error });
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_70px_-50px_rgba(11,79,158,0.5)]">
        {/* Progress header */}
        <div className="border-b border-border bg-surface px-5 py-4 sm:px-7">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {showResult ? "Your estimate" : `Step ${current + 1} of ${totalSteps}`}
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              {progress}%
            </span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="p-5 sm:p-7">
          {!showResult ? (
            <>
              <h2 className="font-display text-xl font-bold leading-tight text-balance text-foreground sm:text-2xl">
                {activeStep.question}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeStep.helper}
              </p>

              <div className="mt-5 flex flex-col gap-3">
                {activeStep.options.map((opt) => {
                  const selected = activeValue === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelect(opt.value)}
                      aria-pressed={selected}
                      className={cn(
                        "group flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200",
                        selected
                          ? "border-primary bg-primary/8 ring-1 ring-primary/30"
                          : "border-border bg-card hover:border-primary/40 hover:bg-surface",
                      )}
                    >
                      <span
                        className={cn(
                          "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors",
                          selected
                            ? "border-primary/20 bg-primary text-primary-foreground"
                            : "border-primary/15 bg-primary/8 text-primary group-hover:bg-primary/12",
                        )}
                      >
                        <opt.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-sm font-semibold text-foreground">
                          {opt.label}
                        </span>
                        <span className="text-xs leading-relaxed text-muted-foreground">
                          {opt.hint}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors",
                          selected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card",
                        )}
                        aria-hidden="true"
                      >
                        {selected ? <Check className="h-3 w-3" /> : null}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={current === 0}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!activeValue}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {current === totalSteps - 1 ? "See estimate" : "Continue"}
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Result */}
              <div className="rounded-2xl border border-primary/20 bg-primary/8 p-5 text-center">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                  Recommended engagement
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {tier.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {tier.range}
                </p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>
              </div>

              <dl className="mt-4 grid grid-cols-2 gap-3">
                {steps.map((step) => (
                  <div
                    key={step.key}
                    className="rounded-xl border border-border bg-surface p-3"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {step.key === "dataType"
                        ? "Data type"
                        : step.key === "volume"
                          ? "Volume"
                          : step.key === "complexity"
                            ? "Complexity"
                            : "Timeline"}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-foreground">
                      {selections[step.key]}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 rounded-xl border border-border bg-surface px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground">
                Final pricing depends on guidelines, tooling, and QA depth.
                Share your details below and a delivery lead will send a
                tailored quotation.
              </p>

              {status === "success" ? (
                <div className="mt-5 flex flex-col items-center gap-3 rounded-2xl border border-primary/20 bg-primary/8 p-6 text-center">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Request received
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                    Thank you, {form.name.split(" ")[0] || "there"}. A Muenot
                    delivery lead will email your detailed estimate within one
                    business day.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-1 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Start over
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
                  <h3 className="font-display text-base font-bold text-foreground">
                    Get your detailed estimate
                  </h3>

                  {status === "error" && (
                    <div className="flex items-center gap-3 rounded-xl border border-destructive/25 bg-destructive/8 p-3">
                      <AlertCircle
                        className="h-4 w-4 shrink-0 text-destructive"
                        aria-hidden="true"
                      />
                      <p className="text-xs text-foreground">
                        {errors.captcha ||
                          "Something went wrong. Please try again."}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="est-name"
                      className="text-sm font-medium text-foreground"
                    >
                      Full name <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <input
                        id="est-name"
                        type="text"
                        value={form.name}
                        maxLength={50}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, name: e.target.value }));
                          if (errors.name)
                            setErrors((p) => ({ ...p, name: "" }));
                        }}
                        className={cn(
                          inputBase,
                          "pl-10",
                          errors.name ? "border-destructive" : "border-border",
                        )}
                        placeholder="John Doe"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="est-email"
                      className="text-sm font-medium text-foreground"
                    >
                      Business email{" "}
                      <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <input
                        id="est-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, email: e.target.value }));
                          if (errors.email)
                            setErrors((p) => ({ ...p, email: "" }));
                        }}
                        className={cn(
                          inputBase,
                          "pl-10",
                          errors.email ? "border-destructive" : "border-border",
                        )}
                        placeholder="john@company.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="est-company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <div className="relative">
                      <Building
                        className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                        aria-hidden="true"
                      />
                      <input
                        id="est-company"
                        type="text"
                        value={form.company}
                        maxLength={80}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, company: e.target.value }))
                        }
                        className={cn(inputBase, "border-border pl-10")}
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  {recaptchaSiteKey && (
                    <div className="flex flex-col gap-2">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={recaptchaSiteKey}
                        onChange={(token) => {
                          setCaptchaToken(token);
                          if (token && errors.captcha)
                            setErrors((p) => ({ ...p, captcha: "" }));
                        }}
                      />
                      {errors.captcha && (
                        <p className="text-xs text-destructive">
                          {errors.captcha}
                        </p>
                      )}
                    </div>
                  )}

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row-reverse">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2
                            className="h-4 w-4 animate-spin"
                            aria-hidden="true"
                          />
                          Sending
                        </>
                      ) : (
                        <>
                          Get detailed estimate
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                      Adjust
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
