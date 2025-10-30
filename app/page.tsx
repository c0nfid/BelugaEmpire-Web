import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServerStatus } from "@/components/server-status"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sword, Users, Trophy, Sparkles, Shield, Zap, Crown, Anchor } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden ocean-gradient py-20 sm:py-32">
          <div className="wave-pattern absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Версии 1.20–1.21.X</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Море безграничных <span className="gold-gradient bg-clip-text text-transparent">возможностей</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Кроссплатформенный Minecraft-сервер с уникальными боссами, кланами, сотнями дополнительных зачарований и
                эпическими ивентами
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="w-full sm:w-auto">
                  <Anchor className="mr-2 h-5 w-5" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Смотреть трейлер
                </Button>
              </div>
            </div>

            <div className="mt-12">
              <ServerStatus />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Почему BelugaEmpire?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Уникальные возможности, которые делают наш сервер особенным
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary/40">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sword className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Эпические боссы</CardTitle>
                  <CardDescription>
                    Сражайтесь с уникальными боссами, каждый со своими механиками и наградами
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary/40">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Система кланов</CardTitle>
                  <CardDescription>
                    Создавайте кланы, захватывайте территории и сражайтесь за господство
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary/40">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Сотни зачарований</CardTitle>
                  <CardDescription>Более 200 уникальных зачарований для создания идеального снаряжения</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary/40">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Регулярные ивенты</CardTitle>
                  <CardDescription>Участвуйте в еженедельных турнирах и событиях с ценными призами</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary/40">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Кроссплатформа</CardTitle>
                  <CardDescription>Играйте с друзьями на Java и Bedrock Edition одновременно</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur transition-all hover:border-primary/40">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Zap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Без лагов</CardTitle>
                  <CardDescription>Мощное оборудование обеспечивает стабильную работу 24/7</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">5000+</div>
                <div className="mt-2 text-sm text-muted-foreground">Активных игроков</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">50+</div>
                <div className="mt-2 text-sm text-muted-foreground">Уникальных боссов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">200+</div>
                <div className="mt-2 text-sm text-muted-foreground">Зачарований</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="mt-2 text-sm text-muted-foreground">Онлайн без лагов</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="ocean-gradient border-primary/20 overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                <div className="flex flex-col items-center text-center">
                  <Crown className="mb-4 h-16 w-16 text-accent" />
                  <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Готовы начать приключение?
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                    Присоединяйтесь к тысячам игроков в самом захватывающем Minecraft-сервере
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" className="w-full sm:w-auto">
                      Начать играть
                    </Button>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                      <Link href="/start">Гайд для новичков</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
