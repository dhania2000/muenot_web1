import Link from "next/link"
import {
  LayoutDashboard,
  Inbox,
  LayoutTemplate,
  Newspaper,
  Search,
  Users,
  ExternalLink,
  LogOut,
} from "lucide-react"
import { logoutAction } from "@/app/admin/actions"
import type { AdminUser } from "@/lib/auth"

type NavKey = "dashboard" | "leads" | "content" | "blog" | "seo" | "users"

const NAV: { key: NavKey; label: string; href: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { key: "dashboard", label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { key: "leads", label: "Leads", href: "/admin/leads", icon: Inbox },
  { key: "content", label: "Site Content", href: "/admin/content", icon: LayoutTemplate },
  { key: "blog", label: "Blog", href: "/admin/blog", icon: Newspaper },
  { key: "seo", label: "SEO", href: "/admin/seo-settings", icon: Search },
  { key: "users", label: "Admins", href: "/admin/users", icon: Users },
]

export function AdminShell({
  user,
  active,
  title,
  description,
  actions,
  children,
}: {
  user: AdminUser
  active: NavKey
  title: string
  description?: string
  actions?: React.ReactNode
  children: React.ReactNode
}) {
  const initials = user.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()

  return (
    <div className="min-h-screen bg-surface text-foreground flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col bg-navy-deep text-white sticky top-0 h-screen">
        <div className="px-6 py-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight">Muenot</span>
            <span className="text-[10px] uppercase tracking-widest text-white/50 mt-1">Admin</span>
          </Link>
        </div>

        <nav className="flex-1 px-3 py-4">
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => {
              const Icon = item.icon
              const isActive = item.key === active
              return (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="size-[18px]" />
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="px-3 py-4 border-t border-white/10">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="size-[18px]" />
            View site
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-10 bg-background/85 backdrop-blur border-b border-border">
          <div className="flex items-center justify-between gap-4 px-5 md:px-8 py-4">
            <div className="min-w-0">
              <h1 className="font-display text-xl md:text-2xl font-bold truncate">{title}</h1>
              {description ? (
                <p className="text-sm text-muted-foreground mt-0.5 truncate">{description}</p>
              ) : null}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              {actions}
              <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-border">
                <div className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  {initials}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-muted-foreground capitalize">{user.role}</div>
                </div>
              </div>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground hover:bg-surface transition-colors"
                  aria-label="Sign out"
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline">Sign out</span>
                </button>
              </form>
            </div>
          </div>

          {/* Mobile nav */}
          <nav className="md:hidden border-t border-border overflow-x-auto">
            <ul className="flex gap-1 px-3 py-2">
              {NAV.map((item) => {
                const isActive = item.key === active
                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                        isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-surface"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>

        <main className="flex-1 px-5 md:px-8 py-6 md:py-8">{children}</main>
      </div>
    </div>
  )
}
