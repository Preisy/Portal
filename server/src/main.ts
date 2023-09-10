import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { whatsAppClient } from './waLibrary/waLibraryInit';

//NestJs initialization
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: true, credentials: true },
  });
  await app.listen(3000);
}

//WhatsApp library initialization
async function clientInit() {
  whatsAppClient.on('ready', () => {
    bootstrap(); //Init Nest after whatsapp
  });
  await whatsAppClient.initialize();
}

function envVariablesCheck() {
  if (!process.env.PHONE_NUMBER)
    throw new Error('No PHONE_NUMBER env variable provided!');
}

envVariablesCheck();
clientInit();
