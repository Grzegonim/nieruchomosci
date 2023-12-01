import { Controller, Get, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get()
  getHello(): string {
    return this.appService.getHello();
  }*/

  @Get('/uploads/photos/:imageName')
  invoke(@Req() req, @Res() res) {
    return res.sendFile(req.path, { root: './' });  
  }
}
