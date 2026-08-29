import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth"
import { getBlogPosts } from "@/lib/blog-db"
import { AdminShell } from "@/components/admin/admin-shell"
import { BlogManager } from "@/components/admin/blog-manager"

export const dynamic = "force-dynamic"

export default async function BlogAdminPage() {
  const user = await getCurrentUser()
  if (!user) redirect("/admin/login")

  const posts = await getBlogPosts()

  return (
    <AdminShell user={user} active="blog" title="Blog" description="Create, edit, and publish blog posts.">
      <BlogManager posts={posts} />
    </AdminShell>
  )
}
