import { Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/deploy-react')
  deployReact(@Res() res: Response) {
    return this.appService.deployReact(res);
  }

  @Post('/deploy-vue')
  deployVue(@Res() res: Response) {
    return this.appService.deployVue(res);
  }
  @Post('/deploy-main')
  deployMain(@Res() res: Response) {
    return this.appService.deployMain(res);
  }
}
