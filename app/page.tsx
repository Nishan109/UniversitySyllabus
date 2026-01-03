import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-start gap-4 px-4 py-10">
      <h1 className="text-balance text-3xl font-semibold tracking-tight">Welcome</h1>
      <p className="text-muted-foreground">Explore the professionally formatted 6th Semester syllabus.</p>
      <Link
        href="/syllabus"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        View Syllabus
      </Link>
    </main>
  )
}
