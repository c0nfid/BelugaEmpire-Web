import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Anchor, Heart, Zap, Users, Globe, Shield } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">О проекте</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                О сервере BelugaEmpire
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                История создания и развития одного из самых популярных Minecraft-серверов
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Наша история</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  BelugaEmpire был основан в 2020 году группой энтузиастов, мечтавших создать уникальный игровой опыт
                  для русскоязычного сообщества Minecraft. Начав с небольшого сервера на 50 игроков, мы выросли в
                  крупнейшее сообщество с тысячами активных участников.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Наша миссия</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Мы стремимся создать лучший игровой опыт, объединяя инновационные механики, дружелюбное сообщество и
                  стабильную техническую базу. Каждое обновление разрабатывается с учетом обратной связи от игроков.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Наши ценности
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Принципы, которыми мы руководствуемся
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Сообщество</CardTitle>
                  <CardDescription>Мы ценим каждого игрока и создаем дружелюбную атмосферу для всех</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Инновации</CardTitle>
                  <CardDescription>
                    Постоянно разрабатываем уникальные механики и улучшаем игровой процесс
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Честность</CardTitle>
                  <CardDescription>Прозрачная администрация и справедливые правила для всех игроков</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Доступность</CardTitle>
                  <CardDescription>Кроссплатформенность и низкий порог входа для новых игроков</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Поддержка</CardTitle>
                  <CardDescription>Быстрая и качественная помощь игрокам в любое время суток</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Anchor className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Стабильность</CardTitle>
                  <CardDescription>Надежная работа сервера 24/7 без лагов и технических проблем</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Команда проекта
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                За BelugaEmpire стоит команда из более чем 30 человек: разработчики, администраторы, модераторы и
                контент-мейкеры, работающие над улучшением сервера каждый день.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
