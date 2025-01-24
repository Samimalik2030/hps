import {  Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInDto, SignUpDTO} from './user.dto';
import { User } from './user.schema';
import { ApiResponse, } from '@nestjs/swagger';

@Controller('users')
export class UserController {
    constructor(private readonly UserService:UserService){}


    @Post( 'signup')
    @ApiResponse({type:User})
    async signUp(
       @Body() body:SignUpDTO
    ):Promise<User>{
        console.log(body)
        const user = await this.UserService.createUser(body)
        return user
    }


    @Post('signin')
    async signIn(
        @Body() body:SignInDto
    ){
     const isValidUser = await this.UserService.findByEmailAndPassword(body.email,body.password)
     if(!isValidUser){
        throw new NotFoundException('Invalid credentials')
     }
     return isValidUser

    }
    
   
}