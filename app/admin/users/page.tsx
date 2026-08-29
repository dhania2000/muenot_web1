import { redirect } from "next/navigation"
import { getCurrentUser, getAdmins } from "@/lib/auth"
import { AdminShell } from "@/components/admin/admin-shell"
import { UsersManager } from "@/components/admin/users-manager"

export const dynamic = "force-dynamic"

export default async function UsersPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/admin/login")
  // Only owners can manage admin accounts.
  if (user.role !== "owner") redirect("/admin")

  const admins = await getAdmins()

  return (
    <AdminShell
      user={user}
      active="users"
      title="Admins"
      description="Manage who can sign in to the admin portal."
    >
      <UsersManager admins={admins} currentId={user.id} />
    </AdminShell>
  )
}
