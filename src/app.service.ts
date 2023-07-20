import { Injectable } from '@nestjs/common';
import shell = require('shelljs');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  deployReact() {
    shell.echo('hello world');
    return '';
  }
}
