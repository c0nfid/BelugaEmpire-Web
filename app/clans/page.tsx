import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Shield, Swords, Trophy, Crown, Flag, MapPin, Coins, TrendingUp } from "lucide-react"

export default function ClansPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Система кланов</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Создайте свою <span className="gold-gradient bg-clip-text text-transparent">империю</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Объединяйтесь с друзьями, захватывайте территории и сражайтесь за господство на сервере
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Возможности кланов
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Все, что нужно для создания мощного клана
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Территории</CardTitle>
                  <CardDescription>
                    Захватывайте и защищайте территории, расширяйте владения вашего клана
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Защита базы</CardTitle>
                  <CardDescription>
                    Система защиты территорий от врагов и грифферов с настраиваемыми правами
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Swords className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Клановые войны</CardTitle>
                  <CardDescription>Объявляйте войны другим кланам и сражайтесь за ресурсы и территории</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Система уровней</CardTitle>
                  <CardDescription>
                    Прокачивайте клан, открывайте новые возможности и бонусы для участников
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Coins className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Клановая казна</CardTitle>
                  <CardDescription>Общий банк клана для совместных покупок и развития территорий</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Trophy className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Рейтинг кланов</CardTitle>
                  <CardDescription>Соревнуйтесь с другими кланами за место в топе и получайте награды</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How to Create */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Как создать клан
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Накопите ресурсы</h3>
                  <p className="mt-1 text-muted-foreground">
                    Для создания клана потребуется 10,000 игровых монет. Зарабатывайте их, выполняя квесты и продавая
                    ресурсы.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Используйте команду</h3>
                  <p className="mt-1 text-muted-foreground">
                    Введите команду{" "}
                    <code className="rounded bg-muted px-2 py-1 font-mono text-sm">/clan create [название]</code> для
                    создания клана.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Пригласите участников</h3>
                  <p className="mt-1 text-muted-foreground">
                    Используйте <code className="rounded bg-muted px-2 py-1 font-mono text-sm">/clan invite [ник]</code>{" "}
                    чтобы пригласить игроков в свой клан.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <span className="font-bold text-accent">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Захватите территорию</h3>
                  <p className="mt-1 text-muted-foreground">
                    Найдите подходящее место и используйте{" "}
                    <code className="rounded bg-muted px-2 py-1 font-mono text-sm">/clan claim</code> для захвата
                    территории.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Clans */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Топ кланов сервера
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Самые могущественные кланы BelugaEmpire
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <Card className="border-accent/40 bg-gradient-to-r from-accent/10 to-transparent">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <Crown className="h-8 w-8 text-accent" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-foreground">OceanLords</h3>
                        <Badge variant="secondary">Уровень 25</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">47 участников • 156 территорий</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">12,450</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <Flag className="h-8 w-8 text-primary" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-foreground">SeaWolves</h3>
                        <Badge variant="secondary">Уровень 23</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">42 участников • 134 территорий</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">11,890</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <Shield className="h-8 w-8 text-secondary" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-foreground">DeepGuardians</h3>
                        <Badge variant="secondary">Уровень 21</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">38 участников • 118 территорий</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-secondary">10,720</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
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
                <Users className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">Создайте свой клан сегодня</h3>
                <p className="mt-2 text-lg text-muted-foreground">Объединяйтесь с друзьями и стройте свою империю</p>
                <Button size="lg" className="mt-6">
                  Начать играть
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
