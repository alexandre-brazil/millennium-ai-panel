"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function Conversas() {
  return (
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
  );
}
