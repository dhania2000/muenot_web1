"use client"

import { useActionState, useState } from "react"
import { useFormStatus } from "react-dom"
import { Plus, Trash2, Check, AlertCircle, Pencil } from "lucide-react"
import { saveSeoAction, deleteSeoAction } from "@/app/admin/actions"
import type { SeoRow } from "@/lib/seo-db"

const inputClass =
  "w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-shadow focus:ring-2 focus:ring-ring/40"
const labelClass = "block text-sm font-medium text-foreground mb-1.5"

function SaveButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark disabled:opacity-50"
    >
      {pending ? "Saving..." : "Save"}
    </button>
  )
}

function Editor({ row, onDone }: { row: SeoRow | null; onDone: () => void }) {
  const [state, formAction] = useActionState(saveSeoAction, null)
  return (
    <form action={formAction} className="flex flex-col gap-4">
      {row ? <input type="hidden" name="id" value={row.id} /> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="path" className={labelClass}>
            Path
          </label>
          <input id="path" name="path" required placeholder="/services" defaultValue={row?.path ?? ""} className={inputClass} />
        </div>
        <div>
          <label htmlFor="page_title" className={labelClass}>
            Page title
          </label>
          <input id="page_title" name="page_title" required defaultValue={row?.page_title ?? ""} className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="meta_title" className={labelClass}>
          Meta title
        </label>
        <input id="meta_title" name="meta_title" defaultValue={row?.meta_title ?? ""} className={inputClass} />
      </div>

      <div>
        <label htmlFor="meta_description" className={labelClass}>
          Meta description
        </label>
        <textarea id="meta_description" name="meta_description" rows={3} defaultValue={row?.meta_description ?? ""} className={inputClass} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="keywords" className={labelClass}>
            Keywords
          </label>
          <input id="keywords" name="keywords" placeholder="ai, data, services" defaultValue={row?.keywords ?? ""} className={inputClass} />
        </div>
        <div>
          <label htmlFor="og_image" className={labelClass}>
            OG image URL
          </label>
          <input id="og_image" name="og_image" defaultValue={row?.og_image ?? ""} className={inputClass} />
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="no_index" defaultChecked={Boolean(row?.no_index)} className="size-4 rounded border-border" />
        Hide from search engines (noindex)
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="text-sm">
          {state?.error ? (
            <span className="inline-flex items-center gap-1.5 text-destructive">
              <AlertCircle className="size-4" /> {state.error}
            </span>
          ) : state?.success ? (
            <span className="inline-flex items-center gap-1.5 text-emerald-700">
              <Check className="size-4" /> {state.success}
            </span>
          ) : null}
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onDone}
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-surface"
          >
            {state?.success ? "Close" : "Cancel"}
          </button>
          <SaveButton />
        </div>
      </div>
    </form>
  )
}

export function SeoManager({ rows }: { rows: SeoRow[] }) {
  const [editing, setEditing] = useState<SeoRow | null | "new">(null)

  return (
    <div className="flex flex-col gap-6">
      {editing !== null ? (
        <section className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold">
            {editing === "new" ? "New SEO entry" : "Edit SEO entry"}
          </h2>
          <Editor row={editing === "new" ? null : editing} onDone={() => setEditing(null)} />
        </section>
      ) : (
        <div className="flex justify-end">
          <button
            onClick={() => setEditing("new")}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <Plus className="size-4" /> Add page
          </button>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {rows.length === 0 ? (
          <p className="px-6 py-16 text-center text-sm text-muted-foreground">
            No SEO overrides yet. Add per-page titles and meta descriptions.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {rows.map((row) => (
              <li key={row.id} className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-medium">{row.path}</span>
                    {row.no_index ? (
                      <span className="rounded-full bg-destructive/10 px-2 py-0.5 text-[11px] font-medium text-destructive">
                        noindex
                      </span>
                    ) : null}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {row.meta_title || row.page_title}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => setEditing(row)}
                    className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                    aria-label="Edit SEO entry"
                  >
                    <Pencil className="size-4" />
                  </button>
                  <form action={deleteSeoAction} className="inline">
                    <input type="hidden" name="id" value={row.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      aria-label="Delete SEO entry"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
