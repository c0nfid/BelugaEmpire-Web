import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Newspaper } from "lucide-react"

const newsItems = [
  {
    title: "Обновление 2.5: Новые боссы и зачарования",
    date: "5 ноября 2024",
    category: "Обновление",
    excerpt:
      "Встречайте крупное обновление с тремя новыми легендарными боссами, 50+ уникальными зачарованиями и улучшенной системой кланов.",
  },
  {
    title: "Хэллоуин ивент: Результаты",
    date: "1 ноября 2024",
    category: "События",
    excerpt:
      "Подводим итоги хэллоуинского события. Поздравляем победителей и благодарим всех участников за активность!",
  },
  {
    title: "Новый сезон клановых войн",
    date: "28 октября 2024",
    category: "Кланы",
    excerpt:
      "Стартует 5-й сезон клановых войн с обновленными правилами, новыми наградами и увеличенным призовым фондом.",
  },
  {
    title: "Техническое обслуживание 25 октября",
    date: "24 октября 2024",
    category: "Техническое",
    excerpt:
      "25 октября с 03:00 до 05:00 МСК будет проведено плановое техническое обслуживание для улучшения производительности.",
  },
  {
    title: "Обновление магазина: Новые привилегии",
    date: "20 октября 2024",
    category: "Магазин",
    excerpt: "В магазине появились новые наборы предметов и обновленные привилегии с дополнительными возможностями.",
  },
  {
    title: "Конкурс строителей: Осенняя тема",
    date: "15 октября 2024",
    category: "События",
    excerpt: "Объявляем конкурс строителей на осеннюю тематику. Призовой фонд 100,000 монет и эксклюзивные блоки!",
  },
]

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Новости</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Новости <span className="gold-gradient bg-clip-text text-transparent">сервера</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Будьте в курсе всех обновлений, событий и изменений на BelugaEmpire
              </p>
            </div>
          </div>
        </section>

        {/* News List */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.title} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary">{item.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <CardTitle className="mt-3 text-2xl">{item.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="group">
                      Читать далее
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" variant="outline" className="bg-transparent">
                Загрузить еще
              </Button>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="ocean-gradient border-primary/20">
              <CardContent className="p-8 text-center">
                <Newspaper className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">Не пропускайте новости</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  Подпишитесь на наш Discord и Telegram для получения уведомлений о новостях
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg">Подписаться в Discord</Button>
                  <Button size="lg" variant="outline" className="bg-transparent">
                    Подписаться в Telegram
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
