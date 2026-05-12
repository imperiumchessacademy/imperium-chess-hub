import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Swords } from "lucide-react"

export function CageMatch() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-bold text-foreground">Cage Match Pairing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-foreground">Friday Blitz Cage Match</h3>
              <p className="text-sm text-muted-foreground">Friday, May 15 | 10 games | 3+0 | ARMAGEDDON</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 py-4">
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold text-foreground mx-auto">
                D
              </div>
              <p className="mt-2 font-medium text-foreground">DragonSlayer</p>
            </div>
            <div className="flex items-center gap-2">
              <Swords className="h-6 w-6 text-primary" />
              <span className="text-sm font-bold text-muted-foreground">VS</span>
            </div>
            <div className="text-center">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold text-foreground mx-auto">
                S
              </div>
              <p className="mt-2 font-medium text-foreground">StormRider</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            View Match Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
