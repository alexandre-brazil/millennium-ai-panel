'use client';

import React, { useEffect } from 'react';
import { getSocketClient } from '@/lib/RealtimeClient';

/**
 * Componente Cliente vazio que existe apenas para forçar a inicialização
 * da instância única do Socket.IO (Singleton) no lado do cliente,
 * logo que a aplicação carrega.
 */
export function SocketInitializer() {
  useEffect(() => {
    // Chamamos a função singleton para criar ou obter a instância do socket.
    // Isso dispara a conexão (io(API_URL)) uma única vez.
    const socket = getSocketClient();

    // Nota: Não é necessário fazer nada com o 'socket' aqui,
    // pois os listeners de conexão/desconexão já estão no 'RealtimeClient.ts'.
    
    // Não precisamos de cleanup aqui, pois queremos que a conexão
    // permaneça viva por toda a vida da aplicação.

  }, []); // O array de dependências vazio garante que roda apenas na montagem

  return null; // Este componente não renderiza NADA no DOM
}