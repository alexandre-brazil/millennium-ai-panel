"use client";
import "./welcome.css"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Welcome() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-orange-600 via-orange-500 to-black text-white px-4">

      <div className="text-center max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Bem-vindo ao Agent AI Dashboard
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Gerencie conversas, ative ou pause o bot e visualize estatísticas em tempo real.
        </p>
        <Button size="lg" onClick={goToLogin} className="bg-black text-white-600 button-hover">
          Entrar no Painel
        </Button>
      </div>
    </div>
  );
}
