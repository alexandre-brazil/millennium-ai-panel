'use client'; 

import { io, Socket } from 'socket.io-client';

// Define a interface para os dados de status, para tipagem
interface BotStatusData {
  isActive: boolean;
}

// Armazena a instância única do Socket.IO
let socketInstance: Socket | null = null;
const API_URL = "https://mobile-clinic-agentai.onrender.com";

/**
 * Retorna a instância única do Socket.IO (Singleton).
 * Garante que a conexão seja estabelecida apenas uma vez.
 */
export function getSocketClient(): Socket {
  if (socketInstance) {
    return socketInstance;
  }

  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL não está definida. Não é possível iniciar o Socket.IO.");
  }
  
  // 1. Cria a nova instância do socket
  const socket = io(API_URL, {
    transports: ["websocket"],
    // Adicione outras configurações como autenticação ou path, se necessário
  });

  // 2. Configura os listeners de status de conexão (apenas uma vez)
  socket.on('connect', () => {
    console.log('✅ Singleton Socket: Conexão estabelecida.');
  });

  socket.on('disconnect', (reason) => {
    console.log(`❌ Singleton Socket: Desconectado. Motivo: ${reason}`);
  });

  // 3. Listener inicial para o status do bot (exemplo)
  socket.on('botStatus', (data: BotStatusData) => {
    console.log('💡 Singleton Socket: Status inicial do Bot recebido:', data.isActive ? 'ATIVO' : 'INATIVO');
  });

  socketInstance = socket;
  return socket;
}