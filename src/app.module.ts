import { Module } from '@nestjs/common'
import dotenv from 'dotenv'
import path from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { developmentConfig } from './config/development.config'
import { productionConfig } from './config/production.config'
import { DbService } from './db.service';
import { HdModule } from './hd/hd.module';
import { TestModule } from './test/test.module';

dotenv.config({
  path: path.join(__dirname, '../.env'),
})

// 根据配置文件获取不同的Servie
// const HdService = {
//   provide: 'HdService',
//   useClass: process.env.NODE_ENV === 'development' ? DevService : AppService
// }

const ConfigService = {
  provide: 'ConfigService',
  useValue: process.env.NODE_ENV === 'development' ? developmentConfig : productionConfig,
}

@Module({
  imports: [HdModule, TestModule],
  controllers: [AppController],
  providers: [AppService, ConfigService, {
    // 使用工厂函数方式动态返回服务对象
    provide: 'DbService',
    inject: ['ConfigService'],
    useFactory(config) {
      return new DbService(config)
    }
  }],
})
export class AppModule {}
