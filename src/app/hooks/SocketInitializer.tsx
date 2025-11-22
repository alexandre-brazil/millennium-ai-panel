'use client';

import { useEffect } from 'react';
import { getSocketClient } from '@/lib/RealtimeClient';

export function SocketInitializer() {
  useEffect(() => {
    // Chamamos a função singleton.
    // Isso dispara a conexão (io(API_URL)) uma única vez.
    getSocketClient(); // 👈 Sem atribuição de variável

    // ... (comentários)
  }, []); 

  return null;
}