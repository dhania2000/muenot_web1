import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { getAllSeo } from "@/lib/seo-db"
import { AdminShell } from "@/components/admin/admin-shell"
import { SeoManager } from "@/components/admin/seo-manager"

export const dynamic = "force-dynamic"

export default async function SeoSettingsPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/admin/login")

  const rows = await getAllSeo()

  return (
    <AdminShell
      user={user}
      active="seo"
      title="SEO settings"
      description="Override page titles, meta descriptions, keywords, and social images per route."
    >
      <SeoManager rows={rows} />
    </AdminShell>
  )
}
