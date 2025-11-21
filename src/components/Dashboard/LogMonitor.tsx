
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";
import Link from "next/link";

export function RealtimeLogMonitor() {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-100">
            <Timer className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-semibold">Agora</h2>
            <p className="text-sm text-muted-foreground">Conversas acontecendo</p>
          </div>
        </div>
        <Button asChild variant="secondary">
          <Link href="/monitor">Ver Estatísticas</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
