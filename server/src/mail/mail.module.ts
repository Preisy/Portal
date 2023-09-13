import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['src/config/.env'],
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
          user: `${process.env.OWNER_MAIL_ADRESS}`,
          pass: `${process.env.OWNER_MAIL_PASSWORD}`,
        },
      },
      defaults: {
        from: `"portalpotolki.ru" <${process.env.OWNER_MAIL_ADRESS}>`,
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
  controllers: [MailController],
})
export class MailModule {}