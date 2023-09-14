import { Controller } from '@nestjs/common';
import { MailService } from './mail.service';
import { Post, Body } from '@nestjs/common';
import MailMessageRequest from 'src/model/request/MailMessageRequest';
@Controller('mail')
export class MailController {
    constructor(private mailService: MailService) { }
    @Post()
    sendInfoMessage(@Body() req: MailMessageRequest) {
        this.mailService.sendInfoMessage(req);
    }
}