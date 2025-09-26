export type Conversation = {
  remoteJid: string;
  name: string;
  profilePicUrl: string | null;
  pause: boolean;
  attendant: string | null;
};
