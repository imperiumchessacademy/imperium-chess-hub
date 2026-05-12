import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { LiveStandings } from "@/components/live-standings"
import { LatestTournament } from "@/components/latest-tournament"
import { CageMatch } from "@/components/cage-match"
import { TopPlayers } from "@/components/top-players"
import { MovementHighlights } from "@/components/movement-highlights"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <div className="container mx-auto px-4 py-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <LiveStandings />
            <div className="space-y-8">
              <LatestTournament />
              <CageMatch />
            </div>
          </div>
          <TopPlayers />
          <MovementHighlights />
        </div>
      </main>
      <Footer />
    </div>
  )
}
