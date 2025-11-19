import axios from "axios";
import routes from "../../data/routes.json";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export async function fetchConversations() {
  const res = await api.get(routes.conversations.list);
  return res.data;
}
export async function toggleBot(enable: boolean) {
  try {
    await api.post(routes.ai.toggle, { enable });
  } catch (error) {
    console.error("Erro ao alternar bot:", error);
    throw error; // relança o erro para ser tratado na página
  }
}
export async function pauseConversation(instanceId: string, phone: string) {
  const url = routes.conversations.pause
    .replace("{instanceId}", encodeURIComponent(instanceId))
    .replace("{phone}", encodeURIComponent(phone));
  await api.post(url, { attendant: "Painel" });
}

export async function resumeConversation(instanceId: string, phone: string) {
  const url = routes.conversations.resume
    .replace("{instanceId}", encodeURIComponent(instanceId))
    .replace("{phone}", encodeURIComponent(phone));
  await api.post(url);
}

export async function getBotActivationStatus() {
  try {
    const res = await api.get(routes.ai.status);
    return res.data.active;
  } catch (error) {
    console.error("Erro ao buscar status inicial do bot:", error);
    return false;
  }
}
