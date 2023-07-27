import * as qrcode from 'qrcode-terminal';
import { Client, LocalAuth } from 'whatsapp-web.js';

export const whatsAppClient = new Client({
  authStrategy: new LocalAuth(),
});

whatsAppClient.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

whatsAppClient.on('ready', async () => {
  console.log('WA Client is ready!');
});