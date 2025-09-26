"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Power,
  MessageCircle,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const INSTANCE_NAME =
  process.env.NEXT_PUBLIC_INSTANCE_NAME || "helloMobile";

export default function DashboardPage() {
  // Toggle estático por enquanto (somente UI)
  const [botEnabled, setBotEnabled] = useState(true);

  return (
    <main className="p-8 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Image
                      src="/logo/mobile-logo.png"
                      alt="Logo empresa"
                      width={150}
                      height={50}
                      className="rounded-md"
                    />
        </div>
        <Badge
          variant="outline"
          className="flex items-center gap-2 px-3 py-1"
        >
          Instância: {INSTANCE_NAME}
          <Power
            className={`h-4 w-4 ${
              botEnabled ? "text-green-500" : "text-red-500"
            }`}
            strokeWidth={2.5}
          />
        </Badge>
      </div>

      {/* Grid de Cards */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Ligar/Desligar Bot (estático) */}
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${botEnabled ? "bg-green-100" : "bg-red-100"}`}>
                <Power className={`h-5 w-5 ${botEnabled ? "text-green-600" : "text-red-600"}`} />
              </div>
              <div className="space-y-1">
                <h2 className="font-semibold">Bot Global</h2>
                <p className="text-sm text-muted-foreground">
                  {botEnabled ? "Ativo" : "Pausado"}
                </p>
              </div>
            </div>
            <Button
              variant={botEnabled ? "destructive" : "default"}
              onClick={() => setBotEnabled((v) => !v)}
            >
              {botEnabled ? "Desligar bot" : "Ligar bot"}
            </Button>
            <p className="text-xs text-muted-foreground">
              (Estático por enquanto. Futuramente vai chamar um endpoint global.)
            </p>
          </CardContent>
        </Card>

        {/* Conversas Ativas */}
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <MessageCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="font-semibold">Conversas Ativas</h2>
                <p className="text-sm text-muted-foreground">
                  Listar, pausar e retomar conversas
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href="/conversations">Abrir Conversas</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Estatísticas */}
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h2 className="font-semibold">Estatísticas</h2>
                <p className="text-sm text-muted-foreground">
                  Volume, tempo de resposta e taxa de pausa
                </p>
              </div>
            </div>
            <Button asChild variant="secondary">
              <Link href="/stats">Ver Estatísticas</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Templates de Resposta (sugestão futura) */}
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-100">
                <FileText className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h2 className="font-semibold">Templates</h2>
                <p className="text-sm text-muted-foreground">
                  Mensagens prontas e variações comerciais
                </p>
              </div>
            </div>
            <Button variant="outline" disabled>
              Em breve
            </Button>
          </CardContent>
        </Card>

        {/* Configurações (sugestão futura) */}
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-100">
                <Settings className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <h2 className="font-semibold">Configurações</h2>
                <p className="text-sm text-muted-foreground">
                  Instância padrão, horários, integrações
                </p>
              </div>
            </div>
            <Button variant="outline" disabled>
              Em breve
            </Button>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
