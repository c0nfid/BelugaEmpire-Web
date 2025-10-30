import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle, Mail, FileText, AlertCircle, CheckCircle2, Clock, Shield } from "lucide-react"

const faqItems = [
  {
    question: "Как начать играть на сервере?",
    answer:
      "Скачайте Minecraft версии 1.20-1.21.X, добавьте сервер с IP play.belugaempire.ru и зарегистрируйтесь командой /register [пароль] [повтор пароля]",
  },
  {
    question: "Как создать клан?",
    answer:
      "Для создания клана вам понадобится 10,000 игровых монет. Используйте команду /clan create [название] для создания клана.",
  },
  {
    question: "Как получить VIP статус?",
    answer:
      "Посетите наш магазин на сайте, выберите подходящий статус и оплатите удобным способом. Привилегии активируются автоматически после оплаты.",
  },
  {
    question: "Что делать если меня забанили?",
    answer:
      "Если вы считаете бан несправедливым, создайте апелляцию в Discord канале #appeals с подробным описанием ситуации и доказательствами.",
  },
  {
    question: "Как сообщить о баге?",
    answer:
      "Сообщите о баге в Discord канале #bug-reports с подробным описанием проблемы, скриншотами и шагами для воспроизведения.",
  },
  {
    question: "Можно ли вернуть деньги за покупку?",
    answer:
      "Да, мы предоставляем гарантию возврата в течение 24 часов, если вы не получили товар или услугу. Обратитесь в поддержку для возврата.",
  },
]

const supportChannels = [
  {
    title: "Discord поддержка",
    description: "Создайте тикет в Discord для быстрой помощи от команды поддержки",
    icon: MessageCircle,
    color: "primary",
    responseTime: "5-15 минут",
  },
  {
    title: "Email поддержка",
    description: "Отправьте письмо на support@belugaempire.ru для решения сложных вопросов",
    icon: Mail,
    color: "accent",
    responseTime: "1-24 часа",
  },
  {
    title: "База знаний",
    description: "Изучите нашу базу знаний с подробными гайдами и инструкциями",
    icon: FileText,
    color: "secondary",
    responseTime: "Мгновенно",
  },
]

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Центр поддержки</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Как мы можем <span className="gold-gradient bg-clip-text text-transparent">помочь?</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Найдите ответы на частые вопросы или свяжитесь с нашей службой поддержки
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Способы связи
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Выберите удобный способ получения помощи
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {supportChannels.map((channel) => {
                const Icon = channel.icon
                return (
                  <Card key={channel.title} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div
                        className={`mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-${channel.color}/10`}
                      >
                        <Icon className={`h-6 w-6 text-${channel.color}`} />
                      </div>
                      <CardTitle>{channel.title}</CardTitle>
                      <CardDescription>{channel.description}</CardDescription>
                      <div className="pt-2 flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{channel.responseTime}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">Связаться</Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Частые вопросы
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Ответы на самые популярные вопросы игроков
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqItems.map((item) => (
                <Card key={item.question} className="border-primary/20 bg-card/50 backdrop-blur">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div className="flex-1">
                        <CardTitle className="text-lg">{item.question}</CardTitle>
                        <CardDescription className="mt-2">{item.answer}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Rules Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Правила сервера
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Ознакомьтесь с правилами перед началом игры
              </p>
            </div>

            <div className="mt-12 space-y-4">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Уважайте других игроков</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Запрещены оскорбления, угрозы, дискриминация и токсичное поведение
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="flex items-start gap-4 p-6">
                  <AlertCircle className="mt-1 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">Запрещены читы и баги</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Использование читов, эксплойтов и багов приведет к перманентному бану
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="flex items-start gap-4 p-6">
                  <Shield className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Не спамьте и не рекламируйте</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Запрещен спам в чате и реклама других серверов без разрешения администрации
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardContent className="flex items-start gap-4 p-6">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">Играйте честно</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Соблюдайте правила честной игры и не пытайтесь обмануть систему
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="bg-transparent">
                <FileText className="mr-2 h-4 w-4" />
                Полные правила сервера
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="ocean-gradient border-primary/20">
              <CardContent className="p-8 text-center">
                <MessageCircle className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">Не нашли ответ?</h3>
                <p className="mt-2 text-lg text-muted-foreground">Наша команда поддержки всегда готова помочь вам</p>
                <Button size="lg" className="mt-6">
                  Связаться с поддержкой
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
