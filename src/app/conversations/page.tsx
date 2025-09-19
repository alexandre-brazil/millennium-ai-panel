"use client";

import { useEffect, useState } from "react";
import { fetchConversations, pauseConversation, resumeConversation } from "@/lib/api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Conversation = {
  remoteJid: string;
  name: string;
  profilePicUrl: string | null;
  pause: boolean;
  attendant: string | null;
};

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

  async function handlePause(remoteJid: string) {
    await pauseConversation(remoteJid);
    loadConversations();
  }

  async function handleResume(remoteJid: string) {
    await resumeConversation(remoteJid);
    loadConversations();
  }

  useEffect(() => {
    loadConversations();
  }, []);

  if (loading) return <p className="p-4">Carregando conversas...</p>;
  if (!conversations.length) return <p className="p-4">Nenhuma conversa encontrada.</p>;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Conversas Ativas</h1>
      {conversations.map((c) => (
        <Card key={c.remoteJid}>
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <Avatar>
                {c.profilePicUrl ? (
                  <AvatarImage src={c.profilePicUrl} alt={c.name || c.remoteJid} />
                ) : (
                  <AvatarFallback>{c.name?.[0] || "?"}</AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="font-medium">{c.name || "Desconhecido"}</p>
                <p className="text-sm text-gray-500">{c.remoteJid}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={c.pause ? "destructive" : "outline"}>
                {c.pause ? "Pausada" : "Ativa"}
              </Badge>
              {c.pause ? (
                <Button onClick={() => handleResume(c.remoteJid)}>Retomar</Button>
              ) : (
                <Button onClick={() => handlePause(c.remoteJid)}>Pausar</Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
