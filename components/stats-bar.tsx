import { Users, Trophy } from "lucide-react"

export function StatsBar() {
  return (
    <div className="border-y border-border bg-card/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">120</p>
              <p className="text-sm text-muted-foreground">Active players</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Trophy className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">64</p>
              <p className="text-sm text-muted-foreground">Tournaments played</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
