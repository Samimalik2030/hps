import {  Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDTO} from './user.dto';
import { User } from './user.schema';
import { ApiResponse, } from '@nestjs/swagger';

@Controller('users')
export class UserController {
    constructor(private readonly UserService:UserService){}


    @Post()
    @ApiResponse({type:User})
    async signUp(
       @Body() body:SignUpDTO
    ):Promise<User>{
        console.log(body)
        const user = await this.UserService.createUser(body)
        return user
    }
   
}