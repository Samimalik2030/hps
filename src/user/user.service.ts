import { Inject, Injectable } from '@nestjs/common';
import {  SignUpDTO } from './user.dto';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PassThrough } from 'stream';


@Injectable()   
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel:Model<User>
    ){}

 
    async createUser(data:SignUpDTO){
        const storedUser = await this.userModel.create({
            password:data.password,
            email:data.email,
             confirmPassword:data.confirmPassword,
             name:data.name
        })
        return storedUser
    }


    async findByEmailAndPassword(email:string,password:string){
        const user = await this.userModel.findOne({
            email:email,
            password:password
        })
        return user
    }
    async findOtp(password:string){
        const user = await this.userModel.findOne({
            password:password
        })
    }
    async genrate(){
    //     const otp = await Math.floor(Math.random() * 1000000)
    //   .toString()
    //   .padEnd(6, Math.ceil(Math.random() * 9).toString());


    
        const otp = Math.floor(Math.random()*8)

        8.5
    }
    
}



