import { Inject, Injectable } from '@nestjs/common';
import {  SignUpDTO } from './user.dto';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


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
  
}
