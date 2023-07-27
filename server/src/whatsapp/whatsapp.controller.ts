import { Body, Controller, Post } from '@nestjs/common';
import WhatsappRequest from 'src/models/whatsappRequest';
import chatIdFromNumber from 'src/waLibrary/chatIdFromNumber.util';
import getChatWithNumber from 'src/waLibrary/getChatWithNumber.util';
import { whatsAppClient } from 'src/waLibrary/waLibraryInit';

@Controller('whatsapp')
export class WhatsappController {
  @Post()
  async sendWhatsappMessage(@Body() request: WhatsappRequest) {
    try {
      console.log(request);
      const chat = await getChatWithNumber(whatsAppClient, '79215654388');

      console.log(
        `serializedChatId: ${chat.id._serialized}; 
       emulatedId: ${chatIdFromNumber('79215654388')}`,
      );

      whatsAppClient.sendMessage(
        chat.id._serialized,
        `
        Площадь потолка: ${request.ceilArea}
        Количество углов: ${request.cornersCount}
        Количество светильников: ${request.lightersCount}
        Контакт для связи: ${request.phonenumber}
        `,
      );
      return request;
    } catch (error) {
      console.log(error);
    }
  }
}
