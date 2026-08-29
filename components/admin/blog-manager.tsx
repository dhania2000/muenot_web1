"use client"

import { useActionState, useState } from "react"
import { useFormStatus } from "react-dom"
import { Plus, Trash2, Check, AlertCircle, Pencil } from "lucide-react"
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

      <div>
        <label htmlFor="cover_image" className={labelClass}>
          Cover image URL
        </label>
        <input id="cover_image" name="cover_image" defaultValue={post?.cover_image ?? ""} className={inputClass} />
      </div>

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
