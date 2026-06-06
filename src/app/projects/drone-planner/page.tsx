import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Github } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Drone Assembly Path Planner · Akinde Peter',
  description:
    'Interactive 3D prototype of the spatial and computational layer of drone-assisted building assembly: dependency-aware sequencing, multi-drone coordination, collision-free scheduling, and georeferenced placement. Built with Babylon.js and TypeScript.',
}

export default function DronePlannerPage() {
  return (
    <main className="flex h-screen w-screen flex-col bg-neutral-900">
      {/* Slim header so the demo stays embedded in the portfolio. */}
      <header className="flex shrink-0 items-center justify-between gap-4 border-b border-white/10 bg-neutral-950 px-4 py-2.5 text-neutral-100">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <h1 className="hidden truncate text-sm font-semibold tracking-tight sm:block">
          Drone Assembly Path Planner
        </h1>

        <a
          href="https://github.com/peteviz/drone_construct"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Github className="h-4 w-4" />
          <span className="hidden sm:inline">Source</span>
        </a>
      </header>

      {/* The demo is a self-contained static build served from /public.
          Use the directory form (not /index.html): with trailingSlash: true,
          Vercel strips the .html extension and a direct .html URL 404s. */}
      <iframe
        src="/demos/drone-planner/"
        title="Drone Assembly Path Planner — interactive 3D demo"
        className="min-h-0 w-full flex-1 border-0"
        allow="fullscreen"
      />
    </main>
  )
}
