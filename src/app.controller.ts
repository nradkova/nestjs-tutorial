import { Controller, Get,Header } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-type', 'application/json')//set by default
  getHello(): {name:string} {
    return {name:'ssss'};
    // return this.appService.getHello();
  }
}
