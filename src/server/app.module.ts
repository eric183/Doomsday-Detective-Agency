import { Module } from '@nestjs/common';
import { EventsModule } from 'events/events.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [EventsModule],
  controllers: [CatsController],
  providers: [],
  // imports: [],
  // controllers: [],
  // providers: [EventsModule],
})
export class AppModule {}
