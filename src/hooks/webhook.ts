import { WebhookClient } from 'discord.js';

export function useWebhook(): WebhookClient{
const webhookId = "1183779871592292352";
const webhookToken = "tBHP670iaugopWRDiZkZOJnhfLxese_n8cbSXpo74SacDOElHAnpeKp20Tg_84gKPTAi";
const webhookClient = new WebhookClient({ id: webhookId, token: webhookToken });
return webhookClient;
}
