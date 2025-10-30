import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Users, Youtube, Send, Hash, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "Discord",
    description: "Присоединяйтесь к нашему Discord серверу с 15,000+ участниками",
    members: "15,247 участников",
    icon: MessageCircle,
    color: "primary",
    link: "#",
  },
  {
    name: "Telegram",
    description: "Новости, обновления и общение с игроками в нашем Telegram канале",
    members: "8,532 подписчика",
    icon: Send,
    color: "accent",
    link: "#",
  },
  {
    name: "VK",
    description: "Официальная группа ВКонтакте с новостями и конкурсами",
    members: "12,891 участник",
    icon: Hash,
    color: "secondary",
    link: "#",
  },
  {
    name: "YouTube",
    description: "Гайды, обзоры обновлений и стримы на нашем YouTube канале",
    members: "6,234 подписчика",
    icon: Youtube,
    color: "primary",
    link: "#",
  },
]

const communityFeatures = [
  {
    title: "Активное сообщество",
    description: "Тысячи игроков онлайн каждый день, всегда найдется с кем поиграть",
  },
  {
    title: "Дружелюбная атмосфера",
    description: "Опытные игроки всегда помогут новичкам освоиться на сервере",
  },
  {
    title: "Регулярные конкурсы",
    description: "Участвуйте в конкурсах в социальных сетях и выигрывайте призы",
  },
  {
    title: "Обратная связь",
    description: "Ваше мнение важно - мы прислушиваемся к предложениям игроков",
  },
]

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Сообщество</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Присоединяйтесь к <span className="gold-gradient bg-clip-text text-transparent">сообществу</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Общайтесь с игроками, следите за новостями и участвуйте в жизни сервера
              </p>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Наши социальные сети
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Выберите удобную платформу для общения
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Card key={social.name} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-${social.color}/10`}
                        >
                          <Icon className={`h-6 w-6 text-${social.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground">{social.name}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{social.description}</p>
                          <div className="mt-3 flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium text-foreground">{social.members}</span>
                          </div>
                          <Button className="mt-4" asChild>
                            <a href={social.link} target="_blank" rel="noopener noreferrer">
                              Присоединиться
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Community Features */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Почему стоит присоединиться
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Преимущества участия в нашем сообществе
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {communityFeatures.map((feature, index) => (
                <Card key={feature.title} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <span className="font-bold text-primary">{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Наше сообщество в цифрах
              </h2>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">42,000+</div>
                <div className="mt-2 text-sm text-muted-foreground">Участников в соцсетях</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent">5,000+</div>
                <div className="mt-2 text-sm text-muted-foreground">Активных игроков</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">150+</div>
                <div className="mt-2 text-sm text-muted-foreground">Контент-мейкеров</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <div className="mt-2 text-sm text-muted-foreground">Активное общение</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="ocean-gradient border-primary/20">
              <CardContent className="p-8 text-center">
                <MessageCircle className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">Станьте частью сообщества</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  Присоединяйтесь к тысячам игроков и будьте в курсе всех новостей
                </p>
                <Button size="lg" className="mt-6">
                  Присоединиться к Discord
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
