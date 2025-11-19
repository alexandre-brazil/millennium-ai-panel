"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Power } from "lucide-react";
import { toggleBot, getBotActivationStatus } from "@/lib/api";

export function BotGlobal() {
  const [botEnabled, setBotEnabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const active = await getBotActivationStatus();
      setBotEnabled(active);
    })();
  }, []);

  const handleToggleBot = async () => {
    setLoading(true);
    try {
      await toggleBot(!botEnabled);
      setBotEnabled((v) => !v);
    } catch {
      alert("Não foi possível atualizar o estado do bot.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl ${botEnabled ? "bg-green-100" : "bg-red-100"}`}>
            <Power className={`h-5 w-5 ${botEnabled ? "text-green-600" : "text-red-600"}`} />
          </div>
          <div>
            <h2 className="font-semibold">Bot Global</h2>
            <p className="text-sm text-muted-foreground">
              {botEnabled ? "Ativo" : "Pausado"}
            </p>
          </div>
        </div>
        <Button
          variant={botEnabled ? "destructive" : "default"}
          onClick={handleToggleBot}
          disabled={loading}
        >
          {loading ? "Atualizando..." : botEnabled ? "Desligar bot" : "Ligar bot"}
        </Button>
      </CardContent>
    </Card>
  );
}
