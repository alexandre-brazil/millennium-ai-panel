"use client";
import {
  Power,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const INSTANCE_NAME =
  process.env.NEXT_PUBLIC_INSTANCE_NAME || "helloMobile";

  export default function Header() {
      const [botEnabled] = useState(true); // Mantido o estado local apenas para o status de cor do ícone
      
    return (
        // 1. O contêiner pai garante que o conteúdo fique centralizado horizontalmente.
        <header className="flex justify-center w-full bg-white shadow-sm border-b">
            
            {/* 2. Este contêiner define a largura MÁXIMA de 600px e a largura total (w-full).
                 * O 'px-4' garante um padding nas laterais em telas menores que 600px.
                 * O 'gap-4' garante o espaçamento mínimo entre a logo e o badge.
            */}
            <div className="flex items-center justify-between max-w-[600px] w-full py-4 px-4 gap-4">
            
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image
                        src="/logo/mobile-logo.png"
                        alt="Logo empresa"
                        width={100}
                        height={50}
                        className="rounded-md"
                    />
                </div>
                
                {/* Instância/Status (Badge) */}
                <Badge
                    variant="outline"
                    className="flex items-center gap-2 px-3 py-1 font-semibold text-sm flex-shrink-0"
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
        </header>
    )
}