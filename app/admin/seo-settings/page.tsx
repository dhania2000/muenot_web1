import { redirect } from "next/navigation"
import { getCurrentAdmin } from "@/lib/auth"
import { listSeoRows } from "@/lib/seo-db"
import { AdminShell } from "@/components/admin/admin-shell"
import { SeoManager } from "@/components/admin/seo-manager"

export const dynamic = "force-dynamic"

export default async function SeoSettingsPage() {
  const admin = await getCurrentAdmin()
  if (!admin) redirect("/admin/login")

  const rows = await listSeoRows()

  return (
    <AdminShell admin={admin} active="/admin/seo-settings">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-foreground">SEO settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Override page titles, meta descriptions, keywords, and social images per route.
        </p>
      </div>
      <SeoManager rows={rows} />
    </AdminShell>
  )
}
