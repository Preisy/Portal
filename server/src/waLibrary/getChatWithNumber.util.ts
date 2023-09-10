import { Client } from 'whatsapp-web.js';

export default async function getChatWithNumber(client: Client, num: string) {
  return (await client.getChats()).find((chat) => chat.id.user === num);
}
