import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown } from "lucide-react"

export function LiveStandings() {
  return (
    <Card id="standings" className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-foreground">Live Standings</CardTitle>
          <Badge variant="outline" className="text-xs text-muted-foreground">
            Updated May 12, 2:30 PM
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
              1
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-foreground">
                  M
                </span>
                <span className="font-semibold text-foreground">MasterKnight</span>
                <Crown className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mt-1">Current league leader</p>
              <div className="flex items-center gap-4 mt-3">
                <div>
                  <p className="text-xs text-muted-foreground">Form</p>
                  <div className="flex gap-1 mt-1">
                    {["W", "W", "D", "W", "W"].map((result, i) => (
                      <span
                        key={i}
                        className={`text-xs font-bold px-1.5 py-0.5 rounded ${
                          result === "W" 
                            ? "bg-primary/20 text-primary" 
                            : result === "D" 
                            ? "bg-yellow-500/20 text-yellow-400" 
                            : "bg-destructive/20 text-destructive"
                        }`}
                      >
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Events</p>
                  <p className="font-semibold text-foreground">56</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">MPI</p>
                  <p className="font-semibold text-primary">99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
