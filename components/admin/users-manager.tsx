"use client"

import { useActionState, useState } from "react"
import { useFormStatus } from "react-dom"
import { Plus, Trash2, Check, AlertCircle, Shield, User } from "lucide-react"
import { createUserAction, deleteUserAction } from "@/app/admin/actions"
import type { AdminUser } from "@/lib/auth"

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
      {pending ? "Creating..." : "Create admin"}
    </button>
  )
}

export function UsersManager({
  admins,
  currentId,
}: {
  admins: AdminUser[]
  currentId: number
}) {
  const [state, formAction] = useActionState(createUserAction, null)
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      {open ? (
        <section className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold">New admin account</h2>
          <form action={formAction} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input id="name" name="name" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input id="email" name="email" type="email" required className={inputClass} />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className={labelClass}>
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={8}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="role" className={labelClass}>
                  Role
                </label>
                <select id="role" name="role" defaultValue="editor" className={inputClass}>
                  <option value="editor">Editor</option>
                  <option value="owner">Owner</option>
                </select>
              </div>
            </div>

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
                  onClick={() => setOpen(false)}
                  className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-surface"
                >
                  Close
                </button>
                <SaveButton />
              </div>
            </div>
          </form>
        </section>
      ) : (
        <div className="flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <Plus className="size-4" /> Add admin
          </button>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <ul className="divide-y divide-border">
          {admins.map((a) => (
            <li key={a.id} className="flex items-center justify-between gap-4 px-5 py-4">
              <div className="flex items-center gap-3 min-w-0">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-surface text-muted-foreground">
                  {a.role === "owner" ? <Shield className="size-4" /> : <User className="size-4" />}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground truncate">{a.name}</span>
                    {a.id === currentId ? (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                        You
                      </span>
                    ) : null}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">{a.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium capitalize text-muted-foreground">
                  {a.role}
                </span>
                {a.id !== currentId ? (
                  <form action={deleteUserAction} className="inline">
                    <input type="hidden" name="id" value={a.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      aria-label={`Delete ${a.name}`}
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </form>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
