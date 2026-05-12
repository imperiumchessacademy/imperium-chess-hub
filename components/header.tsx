"use client"

import { Crown } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Crown className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold text-foreground">Imperium Online Chess Hub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#standings" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Standings
          </Link>
          <Link href="#tournaments" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Tournaments
          </Link>
          <Link href="#players" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Players
          </Link>
        </nav>
      </div>
    </header>
  )
}
