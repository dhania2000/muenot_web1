"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { SeoSetting } from "@/lib/seo";
import { saveSeoSetting, deleteSeoSetting, type ActionState } from "./actions";

const initialState: ActionState = { ok: false };

interface Props {
  setting: SeoSetting | null;
  onClose: () => void;
}

export function SeoEditor({ setting, onClose }: Props) {
  const router = useRouter();
  const [saveState, saveAction, saving] = useActionState(saveSeoSetting, initialState);
  const [deleteState, deleteAction, deleting] = useActionState(deleteSeoSetting, initialState);

  useEffect(() => {
    if (saveState.ok || deleteState.ok) {
      router.refresh();
      onClose();
    }
  }, [saveState.ok, deleteState.ok, router, onClose]);

  const error = saveState.message && !saveState.ok ? saveState.message : deleteState.message;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm">
      <div className="my-8 w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {setting ? "Edit page SEO" : "Add page SEO"}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form action={saveAction} className="flex flex-col gap-4">
          {setting ? <input type="hidden" name="id" value={setting._id} /> : null}

          <Field label="Page label" htmlFor="pageTitle">
            <input
              id="pageTitle"
              name="pageTitle"
              required
              defaultValue={setting?.pageTitle || ""}
              placeholder="e.g. Home"
              className={inputClass}
            />
          </Field>

          <Field label="Page path" htmlFor="path" hint='Route starting with "/" — e.g. /services/translation'>
            <input
              id="path"
              name="path"
              required
              defaultValue={setting?.path || ""}
              placeholder="/"
              className={inputClass}
            />
          </Field>

          <Field label="Meta title" htmlFor="metaTitle">
            <input
              id="metaTitle"
              name="metaTitle"
              defaultValue={setting?.metaTitle || ""}
              placeholder="Shown in search results and browser tab"
              className={inputClass}
            />
          </Field>

          <Field label="Meta description" htmlFor="metaDescription">
            <textarea
              id="metaDescription"
              name="metaDescription"
              rows={3}
              defaultValue={setting?.metaDescription || ""}
              placeholder="A concise summary under ~160 characters"
              className={`${inputClass} resize-y`}
            />
          </Field>

          <Field label="Keywords" htmlFor="keywords" hint="Comma-separated">
            <input
              id="keywords"
              name="keywords"
              defaultValue={setting?.keywords?.join(", ") || ""}
              placeholder="translation, localization, multilingual"
              className={inputClass}
            />
          </Field>

          <label className="flex items-center gap-2.5 text-sm text-foreground">
            <input
              type="checkbox"
              name="noIndex"
              defaultChecked={setting?.noIndex || false}
              className="h-4 w-4 rounded border-input accent-primary"
            />
            Hide this page from search engines (noindex)
          </label>

          {error ? (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          ) : null}

          <div className="mt-2 flex items-center justify-between gap-3">
            {setting ? (
              <button
                type="submit"
                formAction={deleteAction}
                disabled={deleting || saving}
                className="inline-flex items-center justify-center rounded-lg border border-destructive/40 px-4 py-2 text-sm font-medium text-destructive transition hover:bg-destructive/10 disabled:opacity-60"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            ) : (
              <span />
            )}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving || deleting}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/40";

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
    </div>
  );
}
