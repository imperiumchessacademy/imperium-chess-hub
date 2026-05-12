import { Button } from "@/components/ui/button"
import { LogIn, Info, Trophy } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Track live league standings in real time.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Follow premiership movement, tournament outcomes, and player performance from one place. Sign in to access full member and admin workflows.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Info className="h-4 w-4" />
              About Imperium
            </Button>
            <Button size="lg" variant="secondary" className="gap-2">
              <Trophy className="h-4 w-4" />
              View Full Standings
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
