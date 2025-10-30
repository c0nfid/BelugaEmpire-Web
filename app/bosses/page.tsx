import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skull, Flame, Zap, Droplets, Wind, Mountain, Heart, Shield, Sword, Trophy, Star, Crown } from "lucide-react"

const bosses = [
  {
    name: "Левиафан Глубин",
    difficulty: "Легендарный",
    level: 50,
    health: "500,000 HP",
    icon: Droplets,
    color: "primary",
    description: "Древний морской змей, охраняющий сокровища затонувших кораблей",
    rewards: ["Трезубец Левиафана", "Чешуя глубин", "Морской кристалл"],
  },
  {
    name: "Огненный Титан",
    difficulty: "Легендарный",
    level: 45,
    health: "450,000 HP",
    icon: Flame,
    color: "accent",
    description: "Гигантский элементаль огня, обитающий в вулканических пещерах",
    rewards: ["Пламенный меч", "Огненное сердце", "Лавовая броня"],
  },
  {
    name: "Повелитель Бурь",
    difficulty: "Эпический",
    level: 40,
    health: "350,000 HP",
    icon: Wind,
    color: "secondary",
    description: "Воздушный дракон, управляющий молниями и ураганами",
    rewards: ["Посох бури", "Крылья ветра", "Грозовой кристалл"],
  },
  {
    name: "Каменный Страж",
    difficulty: "Эпический",
    level: 35,
    health: "400,000 HP",
    icon: Mountain,
    color: "primary",
    description: "Древний голем, защищающий горные сокровищницы",
    rewards: ["Каменный молот", "Рунная броня", "Кристалл земли"],
  },
  {
    name: "Теневой Жнец",
    difficulty: "Редкий",
    level: 30,
    health: "250,000 HP",
    icon: Skull,
    color: "accent",
    description: "Призрачная сущность, охотящаяся в темных лесах",
    rewards: ["Коса жнеца", "Теневой плащ", "Душа тьмы"],
  },
  {
    name: "Громовержец",
    difficulty: "Редкий",
    level: 25,
    health: "200,000 HP",
    icon: Zap,
    color: "secondary",
    description: "Электрический элементаль, обитающий на вершинах гор",
    rewards: ["Молния", "Электрический щит", "Заряженный кристалл"],
  },
]

export default function BossesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Эпические сражения</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Боссы <span className="gold-gradient bg-clip-text text-transparent">BelugaEmpire</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Сражайтесь с уникальными боссами, каждый со своими механиками, способностями и легендарными наградами
              </p>
            </div>
          </div>
        </section>

        {/* Boss Features */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Особенности боссов
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Что делает наших боссов уникальными
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Sword className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Уникальные механики</CardTitle>
                  <CardDescription>Каждый босс имеет особые способности и фазы боя</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Trophy className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Легендарная добыча</CardTitle>
                  <CardDescription>Получайте эксклюзивное оружие и броню</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Shield className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>Групповые битвы</CardTitle>
                  <CardDescription>Объединяйтесь с друзьями для победы</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Еженедельные события</CardTitle>
                  <CardDescription>Усиленные боссы с двойными наградами</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Boss List */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Доступные боссы
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Более 50 уникальных боссов ждут вас
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bosses.map((boss) => {
                const Icon = boss.icon
                return (
                  <Card key={boss.name} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${boss.color}/10`}>
                          <Icon className={`h-6 w-6 text-${boss.color}`} />
                        </div>
                        <Badge
                          variant={boss.difficulty === "Легендарный" ? "default" : "secondary"}
                          className={
                            boss.difficulty === "Легендарный" ? "bg-accent/20 text-accent border-accent/30" : ""
                          }
                        >
                          {boss.difficulty}
                        </Badge>
                      </div>
                      <CardTitle className="mt-4">{boss.name}</CardTitle>
                      <CardDescription>{boss.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Уровень</span>
                          <span className="font-semibold text-foreground">{boss.level}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Здоровье</span>
                          <span className="font-semibold text-foreground">{boss.health}</span>
                        </div>
                        <div className="pt-2">
                          <p className="text-xs font-semibold text-muted-foreground">Награды:</p>
                          <ul className="mt-2 space-y-1">
                            {boss.rewards.map((reward) => (
                              <li key={reward} className="flex items-center gap-2 text-xs text-foreground">
                                <div className="h-1 w-1 rounded-full bg-accent" />
                                {reward}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Советы по сражению с боссами
            </h2>
            <div className="mt-8 space-y-4">
              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <Heart className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Подготовьтесь заранее</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Запаситесь зельями, едой и лучшим снаряжением перед битвой
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <Shield className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">Изучите механики</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Каждый босс имеет уникальные атаки и слабости - изучите их паттерны
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50">
                <CardContent className="flex items-start gap-4 p-6">
                  <Crown className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Сражайтесь в группе</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Легендарные боссы требуют командной работы - объединяйтесь с кланом
                    </p>
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
                <Skull className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">Готовы принять вызов?</h3>
                <p className="mt-2 text-lg text-muted-foreground">Докажите свою силу в битвах с легендарными боссами</p>
                <Button size="lg" className="mt-6">
                  Начать охоту
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
