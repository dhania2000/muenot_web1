import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "primary" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "primary"
          ? "border-primary/20 bg-primary/8 text-primary"
          : "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "primary" ? "bg-accent" : "bg-accent",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "primary",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "primary" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "primary" ? "text-foreground" : "text-primary-foreground",
          align === "center" && "max-w-3xl",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "text-base leading-relaxed text-pretty sm:text-lg",
            tone === "primary"
              ? "text-muted-foreground"
              : "text-primary-foreground/75",
            align === "center" && "max-w-2xl",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
