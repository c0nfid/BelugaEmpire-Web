import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Download, LogIn, Map, Pickaxe, Sword, Users, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function StartPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Гайд для новичков</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Как начать играть
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Пошаговое руководство для быстрого старта на BelugaEmpire
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start Steps */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Установите Minecraft</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    Вам понадобится Minecraft Java Edition (версии 1.20–1.21.X) или Bedrock Edition. Скачайте клиент с
                    официального сайта Mojang.
                  </p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Скачать Minecraft
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Подключитесь к серверу</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    Откройте Minecraft, выберите "Сетевая игра" и добавьте наш сервер с адресом:
                  </p>
                  <code className="mt-4 block rounded-lg bg-muted px-4 py-3 font-mono text-foreground">
                    play.belugaempire.ru
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Зарегистрируйтесь</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    После входа на сервер используйте команду для регистрации:
                  </p>
                  <code className="mt-4 block rounded-lg bg-muted px-4 py-3 font-mono text-foreground">
                    /register [пароль] [повтор пароля]
                  </code>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <span className="text-xl font-bold text-accent">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">Начните приключение!</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
                    Изучите спавн, получите стартовый набор и отправляйтесь исследовать мир BelugaEmpire!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Guide */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Основные возможности
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Что вы можете делать на сервере
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Pickaxe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Выживание</CardTitle>
                  <CardDescription>
                    Добывайте ресурсы, стройте базы и развивайтесь в классическом режиме выживания
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Кланы</CardTitle>
                  <CardDescription>Создайте клан, пригласите друзей и захватывайте территории вместе</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Sword className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Боссы</CardTitle>
                  <CardDescription>Сражайтесь с уникальными боссами и получайте легендарные награды</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Исследование</CardTitle>
                  <CardDescription>Огромный мир с уникальными биомами и структурами для исследования</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Rocket className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Зачарования</CardTitle>
                  <CardDescription>Более 200 уникальных зачарований для создания мощного снаряжения</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Квесты</CardTitle>
                  <CardDescription>Выполняйте ежедневные и еженедельные квесты за ценные награды</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Useful Commands */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Полезные команды
            </h2>
            <div className="mt-8 space-y-4">
              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <code className="font-mono text-sm text-foreground">/spawn</code>
                    <p className="mt-1 text-sm text-muted-foreground">Телепортироваться на спавн</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <code className="font-mono text-sm text-foreground">/clan create [название]</code>
                    <p className="mt-1 text-sm text-muted-foreground">Создать свой клан</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <code className="font-mono text-sm text-foreground">/bosses</code>
                    <p className="mt-1 text-sm text-muted-foreground">Посмотреть список доступных боссов</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <code className="font-mono text-sm text-foreground">/shop</code>
                    <p className="mt-1 text-sm text-muted-foreground">Открыть внутриигровой магазин</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div className="flex-1">
                    <code className="font-mono text-sm text-foreground">/help</code>
                    <p className="mt-1 text-sm text-muted-foreground">Получить помощь по командам</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="ocean-gradient border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground">Готовы начать?</h3>
                <p className="mt-2 text-lg text-muted-foreground">Присоединяйтесь к тысячам игроков прямо сейчас</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg">
                    <LogIn className="mr-2 h-5 w-5" />
                    Начать играть
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent" asChild>
                    <Link href="/community">
                      Присоединиться к Discord
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
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
