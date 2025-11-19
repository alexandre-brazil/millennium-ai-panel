"use client";
import "./login.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const STATIC_EMAIL = "admin@example.com";
    const STATIC_PASSWORD = "123456";

    setTimeout(() => {
      if (email === STATIC_EMAIL && password === STATIC_PASSWORD) {
        router.push("/dashboard"); // redireciona para dashboard
      } else {
        setError("Email ou senha inválidos");
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white-600 via-white-500 to-black px-4">
      
      {/* Logo centralizada */}
      <div className="mb-8">
        <Image
          src="/logo/mobile-logo.png"
          alt="Logo Empresa"
          width={200}
          height={60}
          className="rounded-md"
        />
      </div>

      {/* Card do login */}
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-black">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleLogin}>
            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <div className="space-y-1">
              <Label htmlFor="email" className="text-black">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="password" className="text-black">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full hover:cursor-pointer hover:scale-105 transition-transform duration-200"
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <Separator className="my-4 border-gray-300" />
        </CardContent>
      </Card>
    </div>
  );
}
