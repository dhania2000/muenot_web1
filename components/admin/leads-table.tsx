"use client"

import { useState } from "react"
import { Trash2, ChevronDown, ChevronRight } from "lucide-react"
import { setLeadStatusAction, deleteLeadAction } from "@/app/admin/actions"
import type { Lead, LeadStatus } from "@/lib/leads"

const STATUS_STYLES: Record<LeadStatus, string> = {
  new: "bg-primary/10 text-primary",
  in_progress: "bg-accent/15 text-accent",
  won: "bg-emerald-600/10 text-emerald-700",
  lost: "bg-destructive/10 text-destructive",
}

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  in_progress: "In progress",
  won: "Won",
  lost: "Lost",
}

export function LeadsTable({ leads }: { leads: Lead[] }) {
  const [open, setOpen] = useState<number | null>(null)

  if (leads.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card px-6 py-16 text-center">
        <p className="text-sm text-muted-foreground">No leads match this filter yet.</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="hidden md:grid grid-cols-[1fr_1fr_auto_auto_auto] gap-4 border-b border-border bg-surface px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        <span>Contact</span>
        <span>Details</span>
        <span>Received</span>
        <span>Status</span>
        <span className="text-right">Actions</span>
      </div>
      <ul className="divide-y divide-border">
        {leads.map((lead) => {
          const isOpen = open === lead.id
          const payloadEntries = lead.payload ? Object.entries(lead.payload).filter(([, v]) => v != null && v !== "") : []
          return (
            <li key={lead.id} className="px-5 py-4">
              <div className="md:grid md:grid-cols-[1fr_1fr_auto_auto_auto] md:items-center md:gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium truncate">{lead.name}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium capitalize ${
                        lead.type === "estimate" ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"
                      }`}
                    >
                      {lead.type}
                    </span>
                  </div>
                  <a href={`mailto:${lead.email}`} className="text-sm text-primary hover:underline">
                    {lead.email}
                  </a>
                  {lead.company ? <div className="text-sm text-muted-foreground truncate">{lead.company}</div> : null}
                </div>

                <div className="mt-2 md:mt-0 min-w-0 text-sm text-muted-foreground">
                  {lead.message ? <p className="line-clamp-2">{lead.message}</p> : <span className="italic">No message</span>}
                  {payloadEntries.length > 0 ? (
                    <button
                      onClick={() => setOpen(isOpen ? null : lead.id)}
                      className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      {isOpen ? <ChevronDown className="size-3.5" /> : <ChevronRight className="size-3.5" />}
                      {payloadEntries.length} extra field{payloadEntries.length > 1 ? "s" : ""}
                    </button>
                  ) : null}
                </div>

                <time className="mt-2 md:mt-0 block text-xs text-muted-foreground whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleString()}
                </time>

                <div className="mt-2 md:mt-0">
                  <form action={setLeadStatusAction} className="inline">
                    <input type="hidden" name="id" value={lead.id} />
                    <select
                      name="status"
                      defaultValue={lead.status}
                      onChange={(e) => e.currentTarget.form?.requestSubmit()}
                      className={`cursor-pointer rounded-full border-0 px-2.5 py-1 text-xs font-medium outline-none ${STATUS_STYLES[lead.status]}`}
                      aria-label="Lead status"
                    >
                      {(Object.keys(STATUS_LABELS) as LeadStatus[]).map((s) => (
                        <option key={s} value={s}>
                          {STATUS_LABELS[s]}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>

                <div className="mt-2 md:mt-0 md:text-right">
                  <form action={deleteLeadAction} className="inline">
                    <input type="hidden" name="id" value={lead.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      aria-label="Delete lead"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </form>
                </div>
              </div>

              {isOpen && payloadEntries.length > 0 ? (
                <dl className="mt-3 grid grid-cols-1 gap-2 rounded-lg bg-surface p-4 sm:grid-cols-2">
                  {payloadEntries.map(([k, v]) => (
                    <div key={k} className="text-sm">
                      <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{k}</dt>
                      <dd className="mt-0.5 break-words">{String(v)}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
