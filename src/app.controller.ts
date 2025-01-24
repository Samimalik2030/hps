import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  @Get()
  index() {
    return {
      api: 'Online',
      version: '0.1.0',
    };
  }

  @Get('health')
  helth() {
    return {
      health: 'Ok',
    };
  }



  //@Post()
  //async signUp(){}
  //async signIn(){}
  //async forgotPassword(){}
  

}
