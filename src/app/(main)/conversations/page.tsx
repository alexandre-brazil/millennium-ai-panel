"use client";

import { useEffect, useState } from "react";
import { fetchConversations, pauseConversation, resumeConversation } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Loading from "@/components/ui/loading";
import { Conversation } from "@/types/conversation";

export default function ConversationsPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadConversations() {
    setLoading(true);
    try {
      const data = await fetchConversations();
      setConversations(data);
    } catch (err) {
      console.error("[FRONT] Erro ao buscar conversas:", err);
    } finally {
      setLoading(false);
    }
  }

async function handlePause(instanceId: string, phone: string) {
  await pauseConversation(instanceId, phone);
  loadConversations();
}

async function handleResume(instanceId: string, phone: string) {
  await resumeConversation(instanceId, phone);
  loadConversations();
}


  useEffect(() => {
    loadConversations();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 flex items-center justify-center">
          <Loading />
        </main>
        <footer className="mt-auto py-4 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Painel AI Mobile
        </footer>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conteúdo */}
      <main className="flex-1 flex justify-center px-4 py-6">
        <div className="w-full max-w-4xl space-y-4">
          <h1 className="text-4xl font-bold">Conversas Ativas</h1>

          {conversations.length === 0 ? (
            <p className="p-4 text-center text-gray-500">Nenhuma conversa encontrada.</p>
          ) : (
            conversations.map((c) => (
              <Card key={c.remoteJid}>
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      {c.profilePicUrl ? (
                        <AvatarImage src={c.profilePicUrl} alt={c.name || c.remoteJid} />
                      ) : (
                        <AvatarFallback>{c.name?.trim()?.[0] || "?"}</AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-medium">{c.name?.trim() || "Desconhecido"}</p>
                      <p className="text-sm text-gray-500">{c.remoteJid}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={c.pause ? "destructive" : "outline"}>
                      {c.pause ? "Pausada" : "Ativa"}
                    </Badge>
                    {c.pause ? (
  <Button onClick={() => handleResume(c.instanceId, c.remoteJid)}>
    Retomar
  </Button>
) : (
  <Button onClick={() => handlePause(c.instanceId, c.remoteJid)}>
    Pausar
  </Button>
)}

                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>

      {/* Footer fixo */}
      <footer className="mt-auto py-4 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Painel AI Mobile
      </footer>
    </div>
  );
}
