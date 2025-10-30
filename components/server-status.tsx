"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Copy, Check, Users, Zap } from "lucide-react"

export function ServerStatus() {
  const [copied, setCopied] = useState(false)
  const serverIP = "play.belugaempire.ru"

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(serverIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="border-primary/20 bg-card/50 p-6 backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm font-medium text-muted-foreground">Сервер онлайн</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-sm text-foreground">
                <span className="font-bold text-primary">247</span> / 1000
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm text-foreground">
                <span className="font-bold text-accent">12ms</span>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <code className="rounded bg-muted px-2 py-1 text-sm font-mono text-foreground">{serverIP}</code>
            <Button size="sm" variant="ghost" onClick={copyToClipboard} className="h-8 w-8 p-0">
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button size="sm" className="w-full sm:w-auto">
            Играть сейчас
          </Button>
          <Button size="sm" variant="outline" className="w-full sm:w-auto bg-transparent">
            Вступить в Discord
          </Button>
        </div>
      </div>
    </Card>
  )
}
