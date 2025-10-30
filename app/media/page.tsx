import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ImageIcon, VideoIcon, DownloadIcon } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="ocean-gradient py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Медиа</Badge>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Галерея <span className="gold-gradient bg-clip-text text-transparent">BelugaEmpire</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Скриншоты, видео и другие материалы о нашем сервере
              </p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Скриншоты
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">Лучшие моменты с сервера</p>
              </div>
              <ImageIcon className="h-12 w-12 text-primary" />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="group overflow-hidden border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gradient-to-br from-ocean-deep to-ocean-mid">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-muted-foreground/50" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="border-y border-border/40 bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Видео</h2>
                <p className="mt-2 text-lg text-muted-foreground">Трейлеры и обзоры сервера</p>
              </div>
              <VideoIcon className="h-12 w-12 text-accent" />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="group overflow-hidden border-primary/20 bg-card/50 backdrop-blur">
                  <CardContent className="p-0">
                    <div className="relative aspect-video bg-gradient-to-br from-ocean-deep to-ocean-mid">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <VideoIcon className="h-16 w-16 text-muted-foreground/50" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Пресс-кит</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Логотипы, баннеры и другие материалы для контент-мейкеров
              </p>
            </div>

            <Card className="mt-12 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8 text-center">
                <DownloadIcon className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold text-foreground">Скачать пресс-кит</h3>
                <p className="mt-2 text-muted-foreground">
                  Включает логотипы в различных форматах, баннеры и гайдлайны по использованию
                </p>
                <Button size="lg" className="mt-6">
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Скачать архив
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
