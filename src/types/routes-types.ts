export type RoutesTypes = {
  health: "/health";

  ai: {
    status: "/admin/ai-agent-status";
    toggle: "/admin/toggle-ai-agent";
  };

  conversations: {
    list: "/conversations";
    pause: "/conversations/{instanceId}/{phone}/pause";
    resume: "/conversations/{instanceId}/{phone}/resume";
  };
};

export type ConversationParams = {
  instanceId: string;
  phone: string;
};

// extração automática dos parâmetros das rotas com {param}
export type ExtractParams<T> = T extends `${string}{${infer Param}}${infer Rest}`
  ? Param | ExtractParams<Rest>
  : never;

export type PauseConversationParams = ExtractParams<
  RoutesTypes["conversations"]["pause"]
>;

export type ResumeConversationParams = ExtractParams<
  RoutesTypes["conversations"]["resume"]
>;
