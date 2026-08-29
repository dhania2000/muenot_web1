"use client"

import { useActionState, useMemo, useState } from "react"
import { useFormStatus } from "react-dom"
import { Check, AlertCircle } from "lucide-react"
import { saveContentAction } from "@/app/admin/actions"
import { SECTION_LABELS, type SectionKey } from "@/lib/content"

type SectionData = { key: SectionKey; label: string; json: string }

function SaveButton({ disabled }: { disabled: boolean }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-50"
    >
      {pending ? "Saving..." : "Save changes"}
    </button>
  )
}

function SectionPanel({ section }: { section: SectionData }) {
  const [state, formAction] = useActionState(saveContentAction, null)
  const [value, setValue] = useState(section.json)
  const [jsonError, setJsonError] = useState<string | null>(null)

  const dirty = value !== section.json
  const rows = Math.min(28, Math.max(10, value.split("\n").length + 1))

  function handleChange(next: string) {
    setValue(next)
    try {
      JSON.parse(next)
      setJsonError(null)
    } catch (e: any) {
      setJsonError(e?.message ?? "Invalid JSON")
    }
  }

  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input type="hidden" name="section" value={section.key} />
      <textarea
        name="data"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        spellCheck={false}
        rows={rows}
        className="w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 font-mono text-[13px] leading-relaxed text-foreground outline-none focus:ring-2 focus:ring-ring/40"
      />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm">
          {jsonError ? (
            <span className="inline-flex items-center gap-1.5 text-destructive">
              <AlertCircle className="size-4" /> Invalid JSON: {jsonError}
            </span>
          ) : state?.error ? (
            <span className="inline-flex items-center gap-1.5 text-destructive">
              <AlertCircle className="size-4" /> {state.error}
            </span>
          ) : state?.success ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-700">
              <Check className="size-4" /> {state.success}
            </span>
          ) : dirty ? (
            <span className="text-muted-foreground">Unsaved changes</span>
          ) : (
            <span className="text-muted-foreground">Up to date</span>
          )}
        </div>
        <SaveButton disabled={Boolean(jsonError)} />
      </div>
    </form>
  )
}

export function ContentEditor({ sections }: { sections: SectionData[] }) {
  const [active, setActive] = useState<SectionKey>(sections[0]?.key ?? "service_pillars")
  const activeSection = useMemo(() => sections.find((s) => s.key === active), [active, sections])

  return (
    <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
      <nav className="lg:sticky lg:top-24 h-fit">
        <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible rounded-xl border border-border bg-card p-2">
          {sections.map((s) => (
            <li key={s.key} className="shrink-0 lg:shrink">
              <button
                onClick={() => setActive(s.key)}
                className={`w-full whitespace-nowrap rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                  s.key === active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-surface"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rounded-xl border border-border bg-card p-5">
        {activeSection ? (
          <>
            <div className="mb-4">
              <h2 className="font-display text-lg font-semibold">{SECTION_LABELS[activeSection.key]}</h2>
              <p className="text-sm text-muted-foreground">
                Edit the structured content for this section. Changes go live immediately after saving.
              </p>
            </div>
            <SectionPanel key={activeSection.key} section={activeSection} />
          </>
        ) : null}
      </div>
    </div>
  )
}
