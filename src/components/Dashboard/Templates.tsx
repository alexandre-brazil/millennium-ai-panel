"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import Link from "next/link";

export function Templates() {
  return (
    <Card className="hover:shadow-lg transition">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-orange-100">
            <Bot className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h2 className="font-semibold">Templates</h2>
            <p className="text-sm text-muted-foreground">
              Personalize seu Agent IA
            </p>
          </div>
        </div>
        <Button variant="outline" >
          <Link href="/template">Template</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
