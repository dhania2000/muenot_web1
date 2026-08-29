import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { getSection, SECTION_LABELS, type SectionKey } from "@/lib/content"
import { AdminShell } from "@/components/admin/admin-shell"
import { ContentEditor } from "@/components/admin/content-editor"

export const dynamic = "force-dynamic"

export default async function ContentPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/admin/login")

  const keys = Object.keys(SECTION_LABELS) as SectionKey[]
  const sections = await Promise.all(
    keys.map(async (key) => ({
      key,
      label: SECTION_LABELS[key],
      json: JSON.stringify(await getSection(key), null, 2),
    })),
  )

  return (
    <AdminShell
      user={user}
      active="content"
      title="Site Content"
      description="Manage the marketing content shown across the public site."
    >
      <ContentEditor sections={sections} />
    </AdminShell>
  )
}
