import { NestFactory } from '@nestjs/core';
import { RedisIoAdapter } from './adapters/redis-io.adapter';
import { AppModule } from './app.module';
// import { WsAdapter } from '@nestjs/platform-ws';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useWebSocketAdapter(new RedisIoAdapter(app)); // Add this line
  app.enableCors();
  await app.listen(3000);
  // console.log(`Application is running on: ${await app.getUrl()}`);

  // ptyProcess.write('ls\r');
}
bootstrap();
