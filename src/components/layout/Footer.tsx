"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        {/* Logo + Nome */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo/millennium.png" // 🔹 agora pega direto do public/
            alt="Logo empresa"
            width={250}
            height={50}
            className="rounded-md"
          />
          <span className="font-medium">Millennium AI</span>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <Link href="/" className="hover:text-primary transition">
            Início
          </Link>
          <Link href="/conversations" className="hover:text-primary transition">
            Conversas
          </Link>
          <Link href="/stats" className="hover:text-primary transition">
            Estatísticas
          </Link>
        </div>

        {/* Direitos */}
        <div>
          © {new Date().getFullYear()} Millennium AI. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
