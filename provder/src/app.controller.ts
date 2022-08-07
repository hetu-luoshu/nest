import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { DbService } from './db.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('DbService') private readonly dbService) {}

  @Get()
  getHello(): string {
    return this.appService.get()
  }

  @Get('/conn')
  conn(): string {
    return this.dbService.connect()
  }
}
