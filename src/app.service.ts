import { Injectable, Res } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

import shell = require('shelljs');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async deployReact(@Res() res: Response) {
    await this.deploy(res, '/usr/local/web/qk-react');
  }
  async deployVue(@Res() res: Response) {
    await this.deploy(res, '/usr/local/web/qk-vue');
  }
  async deployMain(@Res() res: Response) {
    await this.deploy(res, '/usr/local/web/qk-main');
  }

  async deploy(res: Response, path: string) {
    const date = new Date();
    const fileName = `${date.getFullYear()}${date.getMonth()}${date.getDate()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    await shell.exec(`${path}/build.sh ${fileName}`);
    const file = createReadStream(join(`${path}/log`, `${fileName}.txt`));
    file.pipe(res as any);
  }
}
