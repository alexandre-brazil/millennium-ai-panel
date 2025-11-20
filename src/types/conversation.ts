export type Conversation = {
  instanceId: string;      // ✅ adicionado
  remoteJid: string;
  name: string;
  profilePicUrl: string | null;
  pause: boolean;
  attendant: string | null;
};
