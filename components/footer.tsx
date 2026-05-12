import { Crown } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Crown className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Imperium Online Chess Hub</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2026 Imperium Online Chess Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
