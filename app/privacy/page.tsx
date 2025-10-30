import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Lock, Eye, Database, UserCheck } from "lucide-react"

const sections = [
  {
    title: "Какие данные мы собираем",
    icon: Database,
    content:
      "Мы собираем минимально необходимую информацию: игровой никнейм, IP-адрес для защиты от читеров, данные об игровой активности, информацию о покупках в магазине. Мы не собираем личные данные без вашего согласия.",
  },
  {
    title: "Как мы используем данные",
    icon: Eye,
    content:
      "Собранные данные используются для: обеспечения работы сервера, защиты от читеров и нарушителей, улучшения игрового опыта, обработки покупок в магазине, связи с игроками по важным вопросам.",
  },
  {
    title: "Защита данных",
    icon: Lock,
    content:
      "Мы используем современные методы шифрования и защиты данных. Доступ к данным имеет только ограниченный круг администраторов. Мы не передаем ваши данные третьим лицам без вашего согласия.",
  },
  {
    title: "Ваши права",
    icon: UserCheck,
    content:
      "Вы имеете право: запросить копию своих данных, потребовать удаления данных, отозвать согласие на обработку, подать жалобу на обработку данных. Для реализации прав свяжитесь с нами через Discord или email.",
  },
  {
    title: "Cookies и аналитика",
    icon: Shield,
    content:
      "Мы используем cookies для улучшения работы сайта и аналитики посещений. Вы можете отключить cookies в настройках браузера, но это может ограничить функциональность сайта.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Конфиденциальность</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Политика <span className="gold-gradient bg-clip-text text-transparent">конфиденциальности</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Мы серьезно относимся к защите ваших данных и соблюдаем все требования законодательства
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Sections */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section) => {
                const Icon = section.icon
                return (
                  <Card key={section.title} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed text-muted-foreground">{section.content}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <Card className="mt-8 border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Последнее обновление: 1 ноября 2024 года. Мы можем обновлять эту политику конфиденциальности. О
                  существенных изменениях мы сообщим на сайте и в Discord. Продолжая использовать наши услуги, вы
                  соглашаетесь с актуальной версией политики.
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
