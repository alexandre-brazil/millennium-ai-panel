import routes from "../../data/routes.json";
import { ConversationParams } from "../types/routes-types";

export const getPauseConversationUrl = (params: ConversationParams): string =>
  routes.conversations.pause
    .replace("{instanceId}", params.instanceId)
    .replace("{phone}", params.phone);

export const getResumeConversationUrl = (params: ConversationParams): string =>
  routes.conversations.resume
    .replace("{instanceId}", params.instanceId)
    .replace("{phone}", params.phone);


export default routes;
