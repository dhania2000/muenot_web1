import { redirect } from "next/navigation"
import { getCurrentUser, adminCount } from "@/lib/auth"
import { ensureSchema } from "@/lib/schema"
import { LoginForm, SetupForm } from "@/components/admin/auth-forms"

export const dynamic = "force-dynamic"

export default async function AdminLoginPage() {
  // If already signed in, go straight to the dashboard.
  const existing = await getCurrentUser()
  if (existing) redirect("/admin")

  // Ensure the schema exists so first-time setup works out of the box.
  let firstTime = false
  let dbError: string | null = null
  try {
    await ensureSchema()
    firstTime = (await adminCount()) === 0
  } catch (error: any) {
    console.error("[v0] login page schema error:", error)
    dbError = error?.message ?? "Could not connect to the database."
  }

  return (
    <main className="min-h-screen bg-navy-deep flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <span className="font-display text-2xl font-bold text-white">Muenot</span>
          <p className="mt-1 text-sm text-white/60">Admin Portal</p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-xl">
          {dbError ? (
            <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
              <p className="font-medium">Database connection failed</p>
              <p className="mt-1 text-destructive/80">{dbError}</p>
            </div>
          ) : firstTime ? (
            <>
              <h2 className="font-display text-xl font-bold">Create your admin account</h2>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">
                This is the first-time setup. This account will be the portal owner.
              </p>
              <SetupForm />
            </>
          ) : (
            <>
              <h2 className="font-display text-xl font-bold">Sign in</h2>
              <p className="mt-1 mb-6 text-sm text-muted-foreground">
                Enter your credentials to access the dashboard.
              </p>
              <LoginForm />
            </>
          )}
        </div>
      </div>
    </main>
  )
}
