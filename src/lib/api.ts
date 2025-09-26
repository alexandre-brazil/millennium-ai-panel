import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function fetchConversations() {
  const res = await api.get("/conversations");
  return res.data;
}

export async function pauseConversation(remoteJid: string) {
  await api.post(`/conversations/${encodeURIComponent(remoteJid)}/pause`, {
    attendant: "Painel",
  });
}

export async function resumeConversation(remoteJid: string) {
  await api.post(`/conversations/${encodeURIComponent(remoteJid)}/resume`);
}
