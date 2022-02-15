import { Body, Controller, Get, Post } from '@nestjs/common';
import { FormDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  public form(@Body() body: FormDto): FormDto {
    return body;
  }
}

// curl -X POST http://localhost:3000 -H "Content-Type: application/json" -d '{"age": 1, "name": "Elon Musk", "acceptedTOS": true, "nums": [2]}'
