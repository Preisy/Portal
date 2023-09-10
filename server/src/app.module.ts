import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { WhatsappController } from './whatsapp/whatsapp.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, WhatsappController],
  providers: [AppService],
})
export class AppModule {}
