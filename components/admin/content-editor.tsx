"use client"

import { useActionState, useMemo, useState } from "react"
import { useFormStatus } from "react-dom"
import { Check, AlertCircle, Plus, Trash2 } from "lucide-react"
import { saveContentAction } from "@/app/admin/actions"
import { SECTION_LABELS, type SectionKey } from "@/lib/content-schema"

type Json = string | number | boolean | null | Json[] | { [key: string]: Json }
type SectionData = { key: SectionKey; label: string; json: string }

const labelClass = "mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground"
const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring/40"

/** "imageAlt" -> "Image alt", "meta_title" -> "Meta title" */
function humanize(key: string): string {
  const spaced = key
    .replace(/_/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .trim()
  return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

/** Build an empty item that mirrors the shape of an existing one. */
function makeTemplate(value: Json): Json {
  if (Array.isArray(value)) return value.length ? [makeTemplate(value[0])] : []
  if (value && typeof value === "object") {
    const out: { [key: string]: Json } = {}
    for (const k of Object.keys(value)) out[k] = makeTemplate((value as Record<string, Json>)[k])
    return out
  }
  if (typeof value === "number") return 0
  if (typeof value === "boolean") return false
  return ""
}

/** A short human label for an array item card. */
function itemTitle(value: Json, index: number): string {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const obj = value as Record<string, Json>
    for (const key of ["name", "title", "label", "eyebrow", "client", "slug", "value"]) {
      const v = obj[key]
      if (typeof v === "string" && v.trim()) return v
    }
  }
  return `Item ${index + 1}`
}

function StringField({
  keyName,
  value,
  onChange,
}: {
  keyName: string
  value: string
  onChange: (v: string) => void
}) {
  const multiline = value.length > 48 || value.includes("\n") || /detail|description|summary|tagline|highlight/i.test(keyName)
  return (
    <label className="block">
      <span className={labelClass}>{humanize(keyName)}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={2}
          className={`${inputClass} resize-y leading-relaxed`}
        />
      ) : (
        <input value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />
      )}
    </label>
  )
}

function ValueEditor({
  keyName,
  value,
  onChange,
}: {
  keyName: string
  value: Json
  onChange: (v: Json) => void
}) {
  if (Array.isArray(value)) {
    return <ArrayEditor keyName={keyName} value={value} onChange={onChange} />
  }
  if (value && typeof value === "object") {
    return (
      <fieldset className="rounded-lg border border-border bg-surface/50 p-3">
        <legend className="px-1 text-xs font-semibold text-foreground">{humanize(keyName)}</legend>
        <ObjectEditor value={value as Record<string, Json>} onChange={onChange} />
      </fieldset>
    )
  }
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2 py-1">
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} className="size-4" />
        <span className="text-sm text-foreground">{humanize(keyName)}</span>
      </label>
    )
  }
  if (typeof value === "number") {
    return (
      <label className="block">
        <span className={labelClass}>{humanize(keyName)}</span>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value === "" ? 0 : Number(e.target.value))}
          className={inputClass}
        />
      </label>
    )
  }
  return <StringField keyName={keyName} value={String(value ?? "")} onChange={onChange} />
}

function ObjectEditor({
  value,
  onChange,
}: {
  value: Record<string, Json>
  onChange: (v: Json) => void
}) {
  const keys = Object.keys(value)
  return (
    <div className="grid gap-3">
      {keys.map((k) => (
        <ValueEditor
          key={k}
          keyName={k}
          value={value[k]}
          onChange={(nv) => onChange({ ...value, [k]: nv })}
        />
      ))}
    </div>
  )
}

function ArrayEditor({
  keyName,
  value,
  onChange,
}: {
  keyName: string
  value: Json[]
  onChange: (v: Json) => void
}) {
  const itemsArePrimitive = value.length > 0 && (typeof value[0] === "string" || typeof value[0] === "number")

  function update(index: number, next: Json) {
    const copy = value.slice()
    copy[index] = next
    onChange(copy)
  }
  function remove(index: number) {
    const copy = value.slice()
    copy.splice(index, 1)
    onChange(copy)
  }
  function add() {
    const template = value.length ? makeTemplate(value[0]) : ""
    onChange([...value, template])
  }

  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {humanize(keyName)}
          <span className="ml-1.5 font-normal normal-case text-muted-foreground/70">({value.length})</span>
        </span>
      </div>

      {itemsArePrimitive ? (
        <ul className="grid gap-2">
          {value.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                value={String(item ?? "")}
                onChange={(e) => update(i, typeof item === "number" ? Number(e.target.value) : e.target.value)}
                className={inputClass}
              />
              <button
                type="button"
                onClick={() => remove(i)}
                className="shrink-0 rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                aria-label={`Remove ${humanize(keyName)} ${i + 1}`}
              >
                <Trash2 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid gap-3">
          {value.map((item, i) => (
            <li key={i} className="rounded-xl border border-border bg-card p-3">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="truncate text-sm font-semibold text-foreground">{itemTitle(item, i)}</span>
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-destructive hover:text-destructive"
                >
                  <Trash2 className="size-3.5" /> Remove
                </button>
              </div>
              <ValueEditor keyName={keyName} value={item} onChange={(nv) => update(i, nv)} />
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={add}
        className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-dashed border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Plus className="size-4" /> Add {humanize(keyName).replace(/s$/, "").toLowerCase()}
      </button>
    </div>
  )
}

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
  const initial = useMemo<Json>(() => {
    try {
      return JSON.parse(section.json) as Json
    } catch {
      return []
    }
  }, [section.json])

  const [data, setData] = useState<Json>(initial)
  const serialized = useMemo(() => JSON.stringify(data, null, 2), [data])
  const dirty = serialized !== JSON.stringify(initial, null, 2)

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="section" value={section.key} />
      <input type="hidden" name="data" value={serialized} />

      {Array.isArray(data) ? (
        <ArrayEditor keyName={section.label} value={data} onChange={setData} />
      ) : data && typeof data === "object" ? (
        <ObjectEditor value={data as Record<string, Json>} onChange={setData} />
      ) : (
        <ValueEditor keyName={section.label} value={data} onChange={setData} />
      )}

      <div className="sticky bottom-0 -mx-5 flex flex-wrap items-center justify-between gap-3 border-t border-border bg-card/95 px-5 py-3 backdrop-blur">
        <div className="text-sm">
          {state?.error ? (
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
        <SaveButton disabled={!dirty} />
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
                Edit each field directly. Use Add and Remove to manage list items. Changes go live immediately after
                saving.
              </p>
            </div>
            <SectionPanel key={activeSection.key} section={activeSection} />
          </>
        ) : null}
      </div>
    </div>
  )
}
