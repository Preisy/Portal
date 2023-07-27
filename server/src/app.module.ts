import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { WhatsappController } from './whatsapp/whatsapp.controller';

@Module({
  imports: [],
  controllers: [AppController, WhatsappController],
  providers: [AppService],
})
export class AppModule {}
