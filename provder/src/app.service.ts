import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  constructor(
    @Inject('ConfigService')
    private readonly configService: { host: string }
  ) {}
  get(): string {
    return `Hello World! [${this.configService.host}]`
  }
}
