import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const players = [
  { pos: 1, name: "MasterKnight", played: 56, move: "+3", points: 133 },
  { pos: 2, name: "KingCrusher", played: 40, move: "+1", points: 77 },
  { pos: 3, name: "BishopStrike", played: 29, move: "-", points: 70 },
  { pos: 4, name: "RookMaster", played: 61, move: "-2", points: 52 },
  { pos: 5, name: "QueenGambit", played: 41, move: "+4", points: 41 },
  { pos: 6, name: "ChessViper", played: 41, move: "-", points: 26 },
  { pos: 7, name: "PawnStorm", played: 44, move: "+1", points: 25 },
  { pos: 8, name: "NightRider", played: 38, move: "-1", points: 22 },
  { pos: 9, name: "KnightWatch", played: 19, move: "-", points: 21 },
  { pos: 10, name: "EndgameKing", played: 32, move: "+2", points: 19 },
  { pos: 11, name: "BlitzMaster", played: 47, move: "-3", points: 16 },
  { pos: 12, name: "TacticsPro", played: 12, move: "-", points: 13 },
]

export function TopPlayers() {
  return (
    <Card id="players" className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">Top 12 Snapshot</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground w-16">Pos</TableHead>
                <TableHead className="text-muted-foreground">Player</TableHead>
                <TableHead className="text-muted-foreground text-center">Played</TableHead>
                <TableHead className="text-muted-foreground text-center">Move</TableHead>
                <TableHead className="text-muted-foreground text-right">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.pos} className="border-border hover:bg-secondary/50">
                  <TableCell className="font-medium text-foreground">{player.pos}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-xs font-bold text-foreground">
                        {player.name[0]}
                      </span>
                      <span className="text-foreground">{player.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">{player.played}</TableCell>
                  <TableCell className="text-center">
                    <span className={
                      player.move.startsWith("+") 
                        ? "text-primary" 
                        : player.move.startsWith("-") 
                        ? "text-destructive" 
                        : "text-muted-foreground"
                    }>
                      {player.move}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-semibold text-foreground">{player.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
