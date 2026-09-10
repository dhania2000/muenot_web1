"use client"

import { useRef, useState } from "react"
import { AlertCircle, ImageIcon, Loader2, Upload, X } from "lucide-react"

const labelClass = "block text-sm font-medium text-foreground mb-1.5"

/**
 * Reusable "click to upload" image field. Uploads the chosen file to
 * /api/admin/upload (which stores it in the SQL database) and reports back the
 * served URL via onChange. Pass `name` to also emit a hidden input so the value
 * is submitted with a plain <form>.
 */
export function ImageUploadField({
  value,
  onChange,
  name,
  label = "Image",
  previewClassName = "h-44",
}: {
  value: string
  onChange: (url: string) => void
  name?: string
  label?: string
  previewClassName?: string
}) {
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
      onChange(data.url)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      {label ? <span className={labelClass}>{label}</span> : null}
      {name ? <input type="hidden" name={name} value={value} /> : null}
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

      {value ? (
        <div className="relative overflow-hidden rounded-lg border border-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value || "/placeholder.svg"} alt="Preview" className={`w-full object-cover ${previewClassName}`} />
          <div className="absolute right-2 top-2 flex gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="inline-flex items-center gap-1.5 rounded-md bg-card/90 px-2.5 py-1.5 text-xs font-medium text-foreground shadow-sm backdrop-blur transition-colors hover:bg-card disabled:opacity-50"
            >
              {uploading ? <Loader2 className="size-3.5 animate-spin" /> : <Upload className="size-3.5" />} Replace
            </button>
            <button
              type="button"
              onClick={() => onChange("")}
              className="inline-flex items-center justify-center rounded-md bg-card/90 p-1.5 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-destructive hover:text-destructive-foreground"
              aria-label="Remove image"
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
              <span className="font-medium">Click to upload image</span>
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
