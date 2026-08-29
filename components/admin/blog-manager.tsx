"use client"

import { useActionState, useRef, useState } from "react"
import { useFormStatus } from "react-dom"
import { Plus, Trash2, Check, AlertCircle, Pencil, ImageIcon, Loader2, X, Upload } from "lucide-react"
import { saveBlogAction, deleteBlogAction } from "@/app/admin/actions"
import type { BlogPost } from "@/lib/blog-db"

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
      {pending ? "Saving..." : "Save post"}
    </button>
  )
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

function CoverImageField({ initialUrl }: { initialUrl: string }) {
  const [url, setUrl] = useState(initialUrl)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File) {
    setError(null)
    setUploading(true)
    try {
      const body = new FormData()
      body.append("file", file)
      const res = await fetch("/api/admin/upload", { method: "POST", body })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Upload failed")
      setUrl(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <span className={labelClass}>Cover image</span>
      {/* The server action still reads cover_image; we submit the uploaded URL. */}
      <input type="hidden" name="cover_image" value={url} />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) handleFile(file)
          e.target.value = ""
        }}
      />

      {url ? (
        <div className="relative overflow-hidden rounded-lg border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url || "/placeholder.svg"} alt="Cover preview" className="h-44 w-full object-cover" />
          <div className="absolute right-2 top-2 flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-1.5 rounded-md bg-card/90 px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card disabled:opacity-50"
            >
              <Upload className="size-3.5" /> Replace
            </button>
            <button
              type="button"
              onClick={() => setUrl("")}
              className="inline-flex items-center justify-center rounded-md bg-card/90 p-1.5 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-destructive hover:text-destructive-foreground"
              aria-label="Remove cover image"
            >
              <X className="size-3.5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-background px-4 py-8 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground disabled:opacity-60"
        >
          {uploading ? (
            <>
              <Loader2 className="size-6 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <ImageIcon className="size-6" />
              <span className="font-medium">Click to upload cover image</span>
              <span className="text-xs">PNG, JPG, WEBP or GIF up to 8MB</span>
            </>
          )}
        </button>
      )}

      {error ? (
        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-destructive">
          <AlertCircle className="size-4" /> {error}
        </p>
      ) : null}
    </div>
  )
}

function Editor({ post, onDone }: { post: BlogPost | null; onDone: () => void }) {
  const [state, formAction] = useActionState(saveBlogAction, null)
  const [title, setTitle] = useState(post?.title ?? "")
  const [slug, setSlug] = useState(post?.slug ?? "")
  const [slugTouched, setSlugTouched] = useState(Boolean(post))

  if (state?.success && !post) {
    // Reset handled by parent re-render on revalidation; give feedback then close.
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {post ? <input type="hidden" name="id" value={post.id} /> : null}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className={labelClass}>
            Title
          </label>
          <input
            id="title"
            name="title"
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              if (!slugTouched) setSlug(slugify(e.target.value))
            }}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="slug" className={labelClass}>
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value)
              setSlugTouched(true)
            }}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="author" className={labelClass}>
            Author
          </label>
          <input id="author" name="author" defaultValue={post?.author ?? ""} className={inputClass} />
        </div>
        <div>
          <label htmlFor="category" className={labelClass}>
            Category
          </label>
          <input id="category" name="category" defaultValue={post?.category ?? ""} className={inputClass} />
        </div>
      </div>

      <CoverImageField initialUrl={post?.cover_image ?? ""} />

      <div>
        <label htmlFor="excerpt" className={labelClass}>
          Excerpt
        </label>
        <textarea id="excerpt" name="excerpt" rows={2} defaultValue={post?.excerpt ?? ""} className={inputClass} />
      </div>

      <div>
        <label htmlFor="body" className={labelClass}>
          Body
        </label>
        <textarea id="body" name="body" rows={10} defaultValue={post?.body ?? ""} className={`${inputClass} font-mono text-[13px]`} />
      </div>

      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" name="published" defaultChecked={Boolean(post?.published)} className="size-4 rounded border-border" />
        Published
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

export function BlogManager({ posts }: { posts: BlogPost[] }) {
  const [editing, setEditing] = useState<BlogPost | null | "new">(null)

  return (
    <div className="flex flex-col gap-6">
      {editing !== null ? (
        <section className="rounded-xl border border-border bg-card p-5">
          <h2 className="mb-4 font-display text-lg font-semibold">
            {editing === "new" ? "New post" : "Edit post"}
          </h2>
          <Editor post={editing === "new" ? null : editing} onDone={() => setEditing(null)} />
        </section>
      ) : (
        <div className="flex justify-end">
          <button
            onClick={() => setEditing("new")}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            <Plus className="size-4" /> New post
          </button>
        </div>
      )}

      <div className="overflow-hidden rounded-xl border border-border bg-card">
        {posts.length === 0 ? (
          <p className="px-6 py-16 text-center text-sm text-muted-foreground">
            No blog posts yet. Create your first one.
          </p>
        ) : (
          <ul className="divide-y divide-border">
            {posts.map((post) => (
              <li key={post.id} className="flex items-center justify-between gap-4 px-5 py-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium truncate">{post.title}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                        post.published ? "bg-emerald-600/10 text-emerald-700" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    /{post.slug}
                    {post.category ? ` · ${post.category}` : ""}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => setEditing(post)}
                    className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                    aria-label="Edit post"
                  >
                    <Pencil className="size-4" />
                  </button>
                  <form action={deleteBlogAction} className="inline">
                    <input type="hidden" name="id" value={post.id} />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      aria-label="Delete post"
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
