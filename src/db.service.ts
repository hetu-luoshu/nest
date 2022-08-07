import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  constructor(private option: { host: string }) {}

  connect() {
    return `<h1>连接数据库 -- ${this.option.host}</h1>`
  }
}
