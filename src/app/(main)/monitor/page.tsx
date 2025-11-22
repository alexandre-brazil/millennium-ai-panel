"use client";

import React, { useEffect, useState } from "react";
import { getSocketClient } from "@/lib/RealtimeClient";
import {
  BotMessageSentData,
  UserMessageReceivedData,
} from "../../../types/socket";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { User, Bot, Smartphone } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type ConversationState = Record<
  string,
  { lastMessage: string; timestamp: string; direction: string; profilePicUrl?: string | null }
>;

export default function RealtimeConversationsDashboard() {
  const [conversations, setConversations] = useState<ConversationState>({});
  const [connectionStatus, setConnectionStatus] = useState("Desconectado");
  const MAX_VISIBLE_CONVERSATIONS = 2;

  useEffect(() => {
    const socket = getSocketClient();

    const updateConnectionStatus = () => {
      setConnectionStatus(socket.connected ? "Conectado" : "Desconectado");
    };

    socket.on("connect", updateConnectionStatus);
    socket.on("disconnect", updateConnectionStatus);
    updateConnectionStatus();

    const handleInbound = (data: UserMessageReceivedData) => {
      setConversations((prev) => ({
        ...prev,
        [data.remoteJid]: {
          lastMessage: data.text,
          timestamp: data.timestamp,
          direction: "inbound",
          profilePicUrl: data.profilePicUrl || null,
        },
      }));
    };

    const handleOutbound = (data: BotMessageSentData) => {
      setConversations((prev) => ({
        ...prev,
        [data.remoteJid]: {
          lastMessage: data.text,
          timestamp: data.timestamp,
          direction: "outbound",
          profilePicUrl: data.profilePicUrl || null,
        },
      }));
    };

    socket.on("userMessageReceived", handleInbound);
    socket.on("botMessageSent", handleOutbound);

    return () => {
      socket.off("userMessageReceived", handleInbound);
      socket.off("botMessageSent", handleOutbound);
      socket.off("connect", updateConnectionStatus);
      socket.off("disconnect", updateConnectionStatus);
    };
  }, []);

  const visibleConversations = Object.entries(conversations)
    .sort(
      (a, b) =>
        new Date(b[1].timestamp).getTime() - new Date(a[1].timestamp).getTime()
    )
    .slice(0, MAX_VISIBLE_CONVERSATIONS);

  return (
    <div className="flex-1 flex items-center justify-center py-10 bg-gray-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full px-4">
        {/* Skeletons */}
        {visibleConversations.length === 0 &&
          Array.from({ length: MAX_VISIBLE_CONVERSATIONS }).map((_, i) => (
            <Card key={i} className="p-4">
              <Skeleton className="h-5 w-2/3 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-2" />
              <Skeleton className="h-4 w-1/2" />
            </Card>
          ))}

        {/* Cards */}
        {visibleConversations.map(([jid, info]) => (
          <Card
            key={jid}
            className="shadow-sm border border-gray-200 hover:shadow-md transition bg-white"
          >
            <CardHeader className="flex items-center space-x-2">
              {info.profilePicUrl ? (
                <Avatar>
                  <AvatarImage src={info.profilePicUrl} alt={jid} />
                  <AvatarFallback>{jid[0]}</AvatarFallback>
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarFallback>{jid[0]}</AvatarFallback>
                </Avatar>
              )}
              <CardTitle className="truncate flex items-center gap-1">
                <Smartphone className="w-4 h-4 text-blue-500" />
                {jid.replace("@s.whatsapp.net", "")}
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-sm text-gray-700 mb-3">
                {info.lastMessage.substring(0, 120)}
                {info.lastMessage.length > 120 && "..."}
              </p>

              <div className="flex justify-between text-xs text-gray-400">
                <span>
                  {new Date(info.timestamp).toLocaleTimeString("pt-BR")}
                </span>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  {info.direction === "inbound" ? (
                    <User className="w-8 h-8 text-blue-500" />
                  ) : (
                    <Bot className="w-10 h-10 text-orange-500" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
