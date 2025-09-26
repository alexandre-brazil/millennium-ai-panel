import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Buscar conversas
export async function fetchConversations() {
  const res = await api.get("/conversations"); // vira /api/conversations
  return res.data;
}

// Pausar conversa
export async function pauseConversation(remoteJid: string) {
  await api.post(`/conversations/${encodeURIComponent(remoteJid)}/pause`, {
    attendant: "Painel",
  });
}

// Retomar conversa
export async function resumeConversation(remoteJid: string) {
  await api.post(`/conversations/${encodeURIComponent(remoteJid)}/resume`);
}
