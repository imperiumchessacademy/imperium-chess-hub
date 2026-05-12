import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

const movers = [
  { name: "ThunderKnight", rank: 13, change: 3, direction: "up" },
  { name: "SilentBishop", rank: 14, change: 2, direction: "up" },
  { name: "SwiftPawn", rank: 18, change: -2, direction: "down" },
  { name: "CastleGuard", rank: 20, change: -1, direction: "down" },
]

export function MovementHighlights() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">Movement Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {movers.map((mover, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-lg border border-border bg-secondary/30 p-4"
            >
              <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
                {mover.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{mover.name}</p>
                <p className="text-sm text-muted-foreground">Rank #{mover.rank}</p>
              </div>
              <div className={`flex items-center gap-1 ${
                mover.direction === "up" ? "text-primary" : "text-destructive"
              }`}>
                {mover.direction === "up" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span className="font-bold">{Math.abs(mover.change)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
