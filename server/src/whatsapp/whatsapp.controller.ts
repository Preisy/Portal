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
      const number = process.env.PHONE_NUMBER;
      const chat = await getChatWithNumber(whatsAppClient, number);

      const id = chat ? chat.id._serialized : chatIdFromNumber(number);
      whatsAppClient.sendMessage(
        id,
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
