import Link from "next/link"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { getLeads, type LeadType } from "@/lib/leads"
import { AdminShell } from "@/components/admin/admin-shell"
import { LeadsTable } from "@/components/admin/leads-table"

export const dynamic = "force-dynamic"

const TABS: { label: string; value?: LeadType }[] = [
  { label: "All" },
  { label: "Contact", value: "contact" },
  { label: "Estimate", value: "estimate" },
]

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const user = await getCurrentUser()
  if (!user) redirect("/admin/login")

  const { type } = await searchParams
  const activeType = type === "contact" || type === "estimate" ? (type as LeadType) : undefined
  const leads = await getLeads(activeType ? { type: activeType } : undefined)

  return (
    <AdminShell user={user} active="leads" title="Leads" description="Contact and estimate submissions from your site.">
      <div className="mb-5 flex items-center gap-1 rounded-lg border border-border bg-card p-1 w-fit">
        {TABS.map((tab) => {
          const isActive = tab.value === activeType
          const href = tab.value ? `/admin/leads?type=${tab.value}` : "/admin/leads"
          return (
            <Link
              key={tab.label}
              href={href}
              className={`rounded-md px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </Link>
          )
        })}
      </div>

      <LeadsTable leads={leads} />
    </AdminShell>
  )
}
