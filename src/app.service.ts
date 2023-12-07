// Dada Ki Jay Ho

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Ram Ram From rajdave.dev backend!';
  }
}
