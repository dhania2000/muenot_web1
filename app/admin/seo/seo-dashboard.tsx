"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SeoSetting } from "@/lib/seo";
import { logout } from "./actions";
import { SeoEditor } from "./seo-editor";

interface Props {
  initialSettings: SeoSetting[];
  writeEnabled: boolean;
}

type EditorTarget = SeoSetting | "new" | null;

export function SeoDashboard({ initialSettings, writeEnabled }: Props) {
  const router = useRouter();
  const [editing, setEditing] = useState<EditorTarget>(null);

  async function handleLogout() {
    await logout();
    router.refresh();
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            SEO Manager
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Update page titles, descriptions, and keywords. Changes go live after saving.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setEditing("new")}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Add page
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-muted"
          >
            Sign out
          </button>
        </div>
      </header>

      {!writeEnabled ? (
        <div className="mb-6 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-foreground">
          <strong className="font-semibold">Read-only mode.</strong> Add{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">SANITY_API_WRITE_TOKEN</code>{" "}
          in your project environment variables to enable saving.
        </div>
      ) : null}

      {initialSettings.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card/50 p-12 text-center">
          <p className="text-sm text-muted-foreground">
            No SEO records yet. Click <span className="font-medium text-foreground">Add page</span>{" "}
            to create your first one.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3">
          {initialSettings.map((s) => (
            <li
              key={s._id}
              className="flex flex-col gap-3 rounded-xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="truncate font-semibold text-foreground">{s.pageTitle}</h2>
                  {s.noIndex ? (
                    <span className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      noindex
                    </span>
                  ) : null}
                </div>
                <p className="truncate text-xs text-primary">{s.path}</p>
                <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                  {s.metaDescription || "No description set"}
                </p>
                {s.updatedAt ? (
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Updated {new Date(s.updatedAt).toLocaleString()}
                  </p>
                ) : null}
              </div>
              <button
                onClick={() => setEditing(s)}
                className="shrink-0 self-start rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-foreground transition hover:bg-muted sm:self-auto"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      )}

      {editing ? (
        <SeoEditor
          setting={editing === "new" ? null : editing}
          onClose={() => setEditing(null)}
        />
      ) : null}
    </div>
  );
}
