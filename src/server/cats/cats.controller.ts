import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll() {
    return {
      data: 'I am the cat, not you',
    };
  }
}
