"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Power,
  MessageCircle,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";
import axios from "axios";

const INSTANCE_NAME = process.env.NEXT_PUBLIC_INSTANCE_NAME || "helloMobile";

// Instância axios com URL da API
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default function DashboardPage() {
  const [botEnabled, setBotEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  // Função que chama a rota do backend
  const toggleBot = async () => {
    setLoading(true);
    try {
      await api.post("/admin/toggle-ai-agent", { enable: !botEnabled });
      setBotEnabled((v) => !v);
    } catch (err) {
      console.error("Erro ao alternar bot:", err);
      alert("Não foi possível atualizar o estado do bot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-6xl mx-auto space-y-6">
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Bot Global */}
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
              onClick={toggleBot}
              disabled={loading}
            >
              {loading ? "Atualizando..." : botEnabled ? "Desligar bot" : "Ligar bot"}
            </Button>
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
                <p className="text-sm text-muted-foreground">Listar, pausar e retomar conversas</p>
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
                <p className="text-sm text-muted-foreground">Volume, tempo de resposta e taxa de pausa</p>
              </div>
            </div>
            <Button asChild variant="secondary">
              <Link href="/stats">Ver Estatísticas</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Templates de Resposta */}
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-100">
                <FileText className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <h2 className="font-semibold">Templates</h2>
                <p className="text-sm text-muted-foreground">Mensagens prontas e variações comerciais</p>
              </div>
            </div>
            <Button variant="outline" disabled>
              Em breve
            </Button>
          </CardContent>
        </Card>

        {/* Configurações */}
        <Card className="hover:shadow-lg transition">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-slate-100">
                <Settings className="h-5 w-5 text-slate-600" />
              </div>
              <div>
                <h2 className="font-semibold">Configurações</h2>
                <p className="text-sm text-muted-foreground">Instância padrão, horários, integrações</p>
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
