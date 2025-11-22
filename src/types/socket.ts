// ---------------------------------------------
// Tipos de direções de mensagem
// ---------------------------------------------
export type MessageDirection = "inbound" | "outbound";

// ---------------------------------------------
// Mensagem enviada pelo BOT
// Evento: "botMessageSent"
// ---------------------------------------------
export interface BotMessageSentData {
  instance: string;
  remoteJid: string;
  text: string;
  timestamp: string;   // ISO 8601 string
  direction: "outbound";
}

// ---------------------------------------------
// Mensagem recebida do USUÁRIO
// Evento: "userMessageReceived"
// ---------------------------------------------
export interface UserMessageReceivedData {
  instance: string;
  remoteJid: string;
  text: string;
  timestamp: string;   // ISO 8601 string
  direction: "inbound";
  profilePicUrl?: string | null;

}

// ---------------------------------------------
// Status do Bot
// Evento: "botStatus"
// ---------------------------------------------
export interface BotStatusData {
  isActive: boolean;
}

// ---------------------------------------------
// Evento unificado (se quiser)
// ---------------------------------------------
export type RealtimeEvent =
  | { type: "botMessageSent"; data: BotMessageSentData }
  | { type: "userMessageReceived"; data: UserMessageReceivedData }
  | { type: "botStatus"; data: BotStatusData };
