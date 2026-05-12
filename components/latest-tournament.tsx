import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Calendar, Users, Clock } from "lucide-react"

export function LatestTournament() {
  return (
    <Card id="tournaments" className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-foreground">Latest Tournament</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Imperial Blitz Championship</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1">
              <Zap className="h-3 w-3" />
              blitz
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Calendar className="h-3 w-3" />
              May 12, 2026
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              24 participants
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              Time control: 5+0
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
