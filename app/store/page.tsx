import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Crown, Zap, Star, Gift, Shield, Sparkles, Package } from "lucide-react"

const products = [
  {
    name: "VIP статус",
    price: "299₽",
    period: "/месяц",
    icon: Crown,
    color: "accent",
    popular: true,
    features: [
      "Префикс [VIP] в чате",
      "Доступ к VIP зоне",
      "x1.5 к опыту",
      "5 дополнительных домов",
      "Приоритет входа на сервер",
      "Эксклюзивные команды",
    ],
  },
  {
    name: "Premium статус",
    price: "599₽",
    period: "/месяц",
    icon: Star,
    color: "primary",
    popular: false,
    features: [
      "Все привилегии VIP",
      "Префикс [PREMIUM] в чате",
      "x2 к опыту",
      "10 дополнительных домов",
      "Цветной ник в чате",
      "Доступ к Premium боссам",
      "Эксклюзивные питомцы",
    ],
  },
  {
    name: "Elite статус",
    price: "999₽",
    period: "/месяц",
    icon: Sparkles,
    color: "secondary",
    popular: false,
    features: [
      "Все привилегии Premium",
      "Префикс [ELITE] в чате",
      "x3 к опыту",
      "Неограниченные дома",
      "Анимированный ник",
      "Личный варп",
      "Эксклюзивные скины",
      "Приоритетная поддержка",
    ],
  },
]

const itemPacks = [
  {
    name: "Стартовый набор",
    price: "99₽",
    icon: Package,
    items: ["Алмазная броня", "Алмазные инструменты", "64 золотых яблока", "Стартовые ресурсы"],
  },
  {
    name: "Набор строителя",
    price: "149₽",
    icon: Shield,
    items: ["1000 различных блоков", "Инструменты с Эффективностью V", "Элитры", "Фейерверки"],
  },
  {
    name: "Боевой набор",
    price: "199₽",
    icon: Zap,
    items: ["Зачарованное оружие", "Зелья силы и регенерации", "Тотемы бессмертия x3", "Золотые яблоки x64"],
  },
]

export default function StorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Магазин сервера</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Магазин <span className="gold-gradient bg-clip-text text-transparent">BelugaEmpire</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Получите эксклюзивные привилегии, наборы предметов и уникальные возможности
              </p>
            </div>
          </div>
        </section>

        {/* VIP Ranks */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Привилегии</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Выберите подходящий статус и получите уникальные возможности
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {products.map((product) => {
                const Icon = product.icon
                return (
                  <Card
                    key={product.name}
                    className={`relative border-primary/20 bg-card/50 backdrop-blur ${
                      product.popular ? "border-accent/40 shadow-lg shadow-accent/10" : ""
                    }`}
                  >
                    {product.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-accent/20 text-accent border-accent/30">Популярный</Badge>
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <div
                        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-${product.color}/10`}
                      >
                        <Icon className={`h-8 w-8 text-${product.color}`} />
                      </div>
                      <CardTitle className="mt-4 text-2xl">{product.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-foreground">{product.price}</span>
                        <span className="text-muted-foreground">{product.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full" size="lg">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Купить
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Item Packs */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Наборы предметов
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Готовые наборы для быстрого старта и развития
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {itemPacks.map((pack) => {
                const Icon = pack.icon
                return (
                  <Card key={pack.name} className="border-primary/20 bg-card/50 backdrop-blur">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="mt-4">{pack.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-2xl font-bold text-foreground">{pack.price}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">В набор входит:</CardDescription>
                      <ul className="space-y-2">
                        {pack.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full bg-transparent" variant="outline">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Купить набор
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Payment Info */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Способы оплаты
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Мы принимаем различные способы оплаты для вашего удобства
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Банковские карты</CardTitle>
                  <CardDescription>Visa, Mastercard, МИР - мгновенное зачисление</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Электронные кошельки</CardTitle>
                  <CardDescription>ЮMoney, QIWI, WebMoney - быстрая оплата</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Криптовалюта</CardTitle>
                  <CardDescription>Bitcoin, Ethereum, USDT - анонимная оплата</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>Мобильные платежи</CardTitle>
                  <CardDescription>Оплата через баланс мобильного телефона</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-8 border-accent/20 bg-accent/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Gift className="h-6 w-6 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-semibold text-foreground">Гарантия возврата</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Все покупки защищены. Если у вас возникли проблемы с получением товара, мы вернем деньги в течение
                      24 часов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-muted/30 py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="ocean-gradient border-primary/20">
              <CardContent className="p-8 text-center">
                <Crown className="mx-auto h-12 w-12 text-accent" />
                <h3 className="mt-4 text-2xl font-bold text-foreground">Получите преимущество</h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  Приобретите привилегии и наслаждайтесь игрой на полную
                </p>
                <Button size="lg" className="mt-6">
                  Перейти в магазин
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
