import { Controller, Get, Inject } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import { AppService } from './app.service';
import databaseConfig from './config/database.config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly config: ConfigService,
    @Inject(databaseConfig.KEY)
    private readonly database: ConfigType<typeof databaseConfig>
  ) {}

  @Get()
  getHello(): string {
    return this.config.get('APP_NAME') + this.config.get('app.isDev') + this.config.get('upload.exts') + this.database.host;
    // return this.appService.getHello();
  }
}
