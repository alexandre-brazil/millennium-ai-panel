// src/lib/api.ts
import axios from "axios";

const API_URL = process.env.LOCAL_API_URL;

// Buscar conversas
export async function fetchConversations() {
  const res = await axios.get(`${API_URL}/conversations`);
  return res.data;
}

// Pausar conversa
export async function pauseConversation(remoteJid: string) {
  await axios.post(`${API_URL}/conversations/${encodeURIComponent(remoteJid)}/pause`, {
    attendant: "Painel",
  });
}

// Retomar conversa
export async function resumeConversation(remoteJid: string) {
  await axios.post(`${API_URL}/conversations/${encodeURIComponent(remoteJid)}/resume`);
}
