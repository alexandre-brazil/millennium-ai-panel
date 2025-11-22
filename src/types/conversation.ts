export type Conversation = {
  instance: string;            // corresponde ao nome da instância
  remoteJid: string;           // JID do contato
  name: string;                // nome do contato ou fallback para número
  profilePic: string | null;   // URL da foto de perfil
  pause: boolean;              // status de pausa
  attendant: string | null;    // nome do atendente se estiver pausado
};
