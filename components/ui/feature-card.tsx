import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function IconBadge({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const box =
    size === "sm" ? "h-9 w-9" : size === "lg" ? "h-14 w-14" : "h-12 w-12";
  const glyph =
    size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/8 text-primary transition-colors duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground",
        box,
        className,
      )}
    >
      <Icon className={glyph} strokeWidth={1.9} aria-hidden="true" />
    </span>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn more",
  className,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  className?: string;
}) {
  const body = (
    <>
      <IconBadge icon={icon} />
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
          {title}
        </h3>
        {description ? (
          <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        ) : null}
      </div>
      {href ? (
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          {linkLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      ) : null}
    </>
  );

  const shell = cn(
    "group relative flex h-full flex-col gap-5 rounded-2xl border border-border bg-card p-6 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_40px_-24px_rgba(11,79,158,0.45)]",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={shell}>
        {body}
      </Link>
    );
  }

  return <div className={shell}>{body}</div>;
}

export function CheckList({
  items,
  columns = 1,
  className,
}: {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        columns === 2 ? "sm:grid-cols-2" : "grid-cols-1",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-1.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
