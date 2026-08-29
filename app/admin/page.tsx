import Link from "next/link"
import { redirect } from "next/navigation"
import { Inbox, Newspaper, LayoutTemplate, Search, ArrowUpRight } from "lucide-react"
import { getCurrentUser } from "@/lib/auth"
import { getLeadStats, getLeads } from "@/lib/leads"
import { getBlogPosts } from "@/lib/blog-db"
import { AdminShell } from "@/components/admin/admin-shell"

export const dynamic = "force-dynamic"

export default async function AdminDashboardPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/admin/login")

  const [stats, recent, posts] = await Promise.all([
    getLeadStats(),
    getLeads().then((l) => l.slice(0, 5)),
    getBlogPosts(),
  ])

  const cards = [
    { label: "Total leads", value: stats.total, href: "/admin/leads", icon: Inbox },
    { label: "New leads", value: stats.new, href: "/admin/leads", icon: Inbox },
    { label: "Estimate requests", value: stats.estimate, href: "/admin/leads", icon: Search },
    { label: "Blog posts", value: posts.length, href: "/admin/blog", icon: Newspaper },
  ]

  const quickLinks = [
    { label: "Manage leads", description: "Review contact & estimate submissions", href: "/admin/leads", icon: Inbox },
    { label: "Edit site content", description: "Services, industries, case studies, stats", href: "/admin/content", icon: LayoutTemplate },
    { label: "Write a blog post", description: "Create and publish articles", href: "/admin/blog", icon: Newspaper },
    { label: "SEO settings", description: "Per-page titles, meta & keywords", href: "/admin/seo-settings", icon: Search },
  ]

  return (
    <AdminShell user={user} active="dashboard" title={`Welcome back, ${user.name.split(" ")[0]}`} description="Here's what's happening across your site.">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => {
          const Icon = c.icon
          return (
            <Link
              key={c.label}
              href={c.href}
              className="group rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <Icon className="size-5 text-primary" />
                <ArrowUpRight className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="mt-4 font-display text-3xl font-bold">{c.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{c.label}</div>
            </Link>
          )
        })}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Recent leads */}
        <section className="lg:col-span-2 rounded-xl border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <h2 className="font-display text-lg font-semibold">Recent leads</h2>
            <Link href="/admin/leads" className="text-sm font-medium text-primary hover:underline">
              View all
            </Link>
          </div>
          {recent.length === 0 ? (
            <p className="px-5 py-10 text-center text-sm text-muted-foreground">No leads yet.</p>
          ) : (
            <ul className="divide-y divide-border">
              {recent.map((lead) => (
                <li key={lead.id} className="flex items-center justify-between gap-4 px-5 py-3.5">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium truncate">{lead.name}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[11px] font-medium capitalize ${
                          lead.type === "estimate"
                            ? "bg-accent/15 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {lead.type}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground truncate">{lead.email}</div>
                  </div>
                  <time className="shrink-0 text-xs text-muted-foreground">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </time>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Quick actions */}
        <section className="rounded-xl border border-border bg-card">
          <div className="border-b border-border px-5 py-4">
            <h2 className="font-display text-lg font-semibold">Quick actions</h2>
          </div>
          <ul className="divide-y divide-border">
            {quickLinks.map((q) => {
              const Icon = q.icon
              return (
                <li key={q.label}>
                  <Link href={q.href} className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-surface">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{q.label}</div>
                      <div className="text-xs text-muted-foreground truncate">{q.description}</div>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </AdminShell>
  )
}
