"use client";
import { Power } from "lucide-react";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Header() {
  const [botEnabled] = useState(true); // Mantido o estado local apenas para o status de cor do ícone
  const [greeting, setGreeting] = useState("");
const name = "Mobile Clinic";
  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Bom dia");
    } else if (hour >= 12 && hour < 18) {
      setGreeting("Boa tarde");
    } else {
      setGreeting("Boa noite");
    }
  }, []);

  return (
    <header className="flex justify-center w-full bg-white shadow-sm border-b">
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

        <h1 className="text-2xl">{greeting}, {name}</h1>

      </div>
    </header>
  );
}
