import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  // 挂载根模块
  const app = await NestFactory.create(AppModule)

  // 监听服务，端口为3000
  await app.listen(3000)
}
bootstrap()
