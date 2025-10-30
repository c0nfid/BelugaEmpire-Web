import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Swords, Target, Gift, Clock, Users, Zap, Crown, Star } from "lucide-react"

const upcomingEvents = [
  {
    title: "Клановая война: Битва за океан",
    date: "15 ноября, 18:00 МСК",
    type: "PvP",
    participants: "Неограничено",
    prize: "100,000 монет + Легендарное оружие",
    icon: Swords,
    status: "Скоро",
  },
  {
    title: "Охота на Левиафана",
    date: "18 ноября, 20:00 МСК",
    type: "PvE",
    participants: "До 50 игроков",
    prize: "Уникальная броня + Титул",
    icon: Target,
    status: "Регистрация открыта",
  },
  {
    title: "Турнир строителей",
    date: "22 ноября, 15:00 МСК",
    type: "Творчество",
    participants: "До 30 команд",
    prize: "50,000 монет + Эксклюзивные блоки",
    icon: Crown,
    status: "Скоро",
  },
]

const weeklyEvents = [
  {
    title: "Понедельник: Двойной опыт",
    description: "Получайте x2 опыта за все действия",
    icon: Zap,
    time: "Весь день",
  },
  {
    title: "Среда: Усиленные боссы",
    description: "Боссы дают двойную награду",
    icon: Trophy,
    time: "18:00 - 22:00 МСК",
  },
  {
    title: "Пятница: Клановые битвы",
    description: "Специальные арены для кланов",
    icon: Swords,
    time: "19:00 - 23:00 МСК",
  },
  {
    title: "Воскресенье: Раздача призов",
    description: "Случайные подарки активным игрокам",
    icon: Gift,
    time: "20:00 МСК",
  },
]

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Ивенты и турниры</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                События <span className="gold-gradient bg-clip-text text-transparent">BelugaEmpire</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Участвуйте в регулярных турнирах, соревнованиях и специальных событиях с ценными призами
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Предстоящие события
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">Не пропустите крупные турниры</p>
              </div>
              <Calendar className="h-12 w-12 text-primary" />
            </div>

            <div className="mt-12 space-y-6">
              {upcomingEvents.map((event) => {
                const Icon = event.icon
                return (
                  <Card key={event.title} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                              <Badge
                                variant={event.status === "Регистрация открыта" ? "default" : "secondary"}
                                className={
                                  event.status === "Регистрация открыта"
                                    ? "bg-accent/20 text-accent border-accent/30"
                                    : ""
                                }
                              >
                                {event.status}
                              </Badge>
                            </div>
                            <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Users className="h-4 w-4" />
                                <span>{event.participants}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Trophy className="h-4 w-4" />
                                <span>{event.prize}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button size="lg" className="sm:w-auto">
                          Зарегистрироваться
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Weekly Events */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Еженедельные события
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Регулярные активности каждую неделю
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {weeklyEvents.map((event) => {
                const Icon = event.icon
                return (
                  <Card key={event.title} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>{event.description}</CardDescription>
                      <div className="pt-2">
                        <Badge variant="outline">{event.time}</Badge>
                      </div>
                    </CardHeader>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Типы событий
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Разнообразные активности для всех игроков
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Swords className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>PvP турниры</CardTitle>
                  <CardDescription>
                    Сражайтесь с другими игроками в арене за звание лучшего воина сервера
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Охота на боссов</CardTitle>
                  <CardDescription>Объединяйтесь для победы над мощными боссами и получения наград</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Crown className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Конкурсы строителей</CardTitle>
                  <CardDescription>Покажите свои навыки строительства и выиграйте уникальные призы</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Клановые войны</CardTitle>
                  <CardDescription>Масштабные сражения между кланами за территории и ресурсы</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Star className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Сезонные события</CardTitle>
                  <CardDescription>Специальные праздничные события с эксклюзивными наградами</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Gift className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Раздачи призов</CardTitle>
                  <CardDescription>Случайные розыгрыши ценных предметов среди активных игроков</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="ocean-gradient border-primary/20">
              <CardContent className="p-8 text-center">
                <Trophy className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">Участвуйте в событиях</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  Выигрывайте ценные призы и становитесь легендой сервера
                </p>
                <Button size="lg" className="mt-6">
                  Посмотреть календарь
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
