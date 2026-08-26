import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export type Stat = { value: string; label: string };

export function StatBand({
  stats,
  tone = "light",
  className,
}: {
  stats: Stat[];
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4",
        tone === "dark"
          ? "border-primary-foreground/15 bg-primary-foreground/15"
          : "border-border bg-border",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <Reveal
          key={stat.label}
          delay={index * 0.08}
          y={16}
          className={cn(
            "flex flex-col gap-1.5 p-6",
            tone === "dark" ? "bg-primary-dark" : "bg-card",
          )}
        >
          <dt
            className={cn(
              "order-2 text-xs font-semibold uppercase tracking-[0.12em]",
              tone === "dark"
                ? "text-primary-foreground/65"
                : "text-muted-foreground",
            )}
          >
            {stat.label}
          </dt>
          <dd
            className={cn(
              "order-1 font-display text-3xl font-bold sm:text-4xl",
              tone === "dark" ? "text-primary-foreground" : "text-primary",
            )}
          >
            <CountUp value={stat.value} />
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
