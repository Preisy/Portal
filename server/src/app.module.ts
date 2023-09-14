import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [MailModule, ConfigModule.forRoot({
    envFilePath: ['src/config/.env'],
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}