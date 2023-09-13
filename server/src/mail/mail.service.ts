import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import MailMessageRequest from 'src/model/request/MailMessageRequest';


@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendInfoMessage(req: MailMessageRequest) {
    var text = `Площадь потолка: ${req.ceilArea}
Количество углов: ${req.cornersCount}
Количество светильников: ${req.lightersCount}
Контакт для связи: ${req.phonenumber}`;
    await this.mailerService.sendMail({
      to: 'jacobzzzzz572@gmail.com',
      // from: '"Support Team" <support@example.com>',
      subject: "У вас новый заказ!",
      text: text,
    });
  }
}