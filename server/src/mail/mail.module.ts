import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: 'jacobzzzzz572@gmail.com',
          pass: 'kfkgfoatwsjmfpqw',
        },
      },
      defaults: {
        from: '"portalpotolki.ru" <jacobzzzzz572@gmail.com>',
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}