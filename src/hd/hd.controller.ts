import { Controller, Get } from '@nestjs/common';
import { TestService } from 'src/test/test.service';

@Controller('hd')
export class HdController {

  constructor(private readonly testSrvice: TestService) {}

  @Get()
  show() {
    return this.testSrvice.get()
  }
}
