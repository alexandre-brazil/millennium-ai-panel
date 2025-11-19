"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

export function SettingsAi() {
  return (
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
  );
}
