import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Shield, Users, MessageCircle, Gavel } from "lucide-react"

const ruleCategories = [
  {
    title: "Общие правила",
    icon: Shield,
    rules: [
      "Уважайте всех игроков независимо от их уровня, статуса или национальности",
      "Запрещены оскорбления, угрозы, дискриминация по любому признаку",
      "Не распространяйте личную информацию других игроков без их согласия",
      "Следуйте указаниям администрации и модераторов сервера",
      "Незнание правил не освобождает от ответственности",
    ],
  },
  {
    title: "Игровой процесс",
    icon: Gavel,
    rules: [
      "Запрещено использование читов, модов дающих преимущество, и макросов",
      "Запрещена эксплуатация багов и уязвимостей сервера",
      "Запрещен гриф чужих построек и территорий без разрешения",
      "Запрещены попытки обмана игроков и администрации",
      "Запрещена продажа игровых ценностей за реальные деньги",
    ],
  },
  {
    title: "Общение в чате",
    icon: MessageCircle,
    rules: [
      "Запрещен спам, флуд и бессмысленные сообщения",
      "Запрещена реклама других серверов и сторонних ресурсов",
      "Запрещено попрошайничество и выпрашивание привилегий",
      "Используйте соответствующие каналы для разных типов сообщений",
      "Запрещено выдавать себя за администрацию или модераторов",
    ],
  },
  {
    title: "Кланы и PvP",
    icon: Users,
    rules: [
      "Соблюдайте правила клановых войн и турниров",
      "Запрещено убийство игроков на спавне и в безопасных зонах",
      "Запрещены договорные бои для накрутки статистики",
      "Уважайте соглашения между кланами",
      "Запрещено использование багов в PvP сражениях",
    ],
  },
]

const punishments = [
  { offense: "Первое нарушение", punishment: "Предупреждение или мут на 1-24 часа" },
  { offense: "Повторное нарушение", punishment: "Бан на 1-7 дней" },
  { offense: "Серьезное нарушение", punishment: "Бан на 30 дней или перманентный" },
  { offense: "Использование читов", punishment: "Перманентный бан" },
  { offense: "Мошенничество", punishment: "Перманентный бан + блокировка IP" },
]

export default function RulesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Правила сервера</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Правила <span className="gold-gradient bg-clip-text text-transparent">BelugaEmpire</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Ознакомьтесь с правилами сервера перед началом игры. Соблюдение правил обязательно для всех игроков.
              </p>
            </div>
          </div>
        </section>

        {/* Rules Categories */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {ruleCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Card key={category.title} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {category.rules.map((rule, index) => (
                          <li key={index} className="flex items-start gap-3 text-muted-foreground">
                            <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                              {index + 1}
                            </span>
                            <span className="leading-relaxed">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Punishments */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <AlertTriangle className="mx-auto h-12 w-12 text-accent" />
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Система наказаний
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Нарушение правил влечет за собой наказание в зависимости от тяжести проступка
              </p>
            </div>

            <div className="mt-12 space-y-3">
              {punishments.map((item) => (
                <Card key={item.offense} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="flex items-center justify-between p-6">
                    <span className="font-medium text-foreground">{item.offense}</span>
                    <Badge variant="outline" className="text-accent border-accent/30">
                      {item.punishment}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Администрация оставляет за собой право изменять наказание в зависимости от обстоятельств. При
                  повторных нарушениях наказание может быть усилено. Апелляции рассматриваются в Discord канале
                  #appeals.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
