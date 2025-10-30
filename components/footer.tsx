import Link from "next/link"
import { Waves } from "lucide-react"

const footerLinks = {
  server: [
    { name: "О сервере", href: "/about" },
    { name: "Кланы", href: "/clans" },
    { name: "Боссы", href: "/bosses" },
    { name: "Ивенты", href: "/events" },
  ],
  resources: [
    { name: "Гайд по старту", href: "/start" },
    { name: "Магазин", href: "/store" },
    { name: "Медиа", href: "/media" },
    { name: "Новости", href: "/news" },
  ],
  support: [
    { name: "Поддержка", href: "/support" },
    { name: "Правила", href: "/rules" },
    { name: "Конфиденциальность", href: "/privacy" },
  ],
  community: [
    { name: "Discord", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "VK", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Сервер</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.server.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Ресурсы</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Поддержка</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Сообщество</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-8">
          <div className="flex items-center gap-2">
            <Waves className="h-6 w-6 text-primary" />
            <span className="text-sm text-muted-foreground">© 2025 BelugaEmpire. Все права защищены.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
