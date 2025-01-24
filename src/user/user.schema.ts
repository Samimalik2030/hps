import { Prop, SchemaFactory,Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class User{
    @Prop({type:String,default:null})
    @ApiProperty({type:String,})
    name:string;


    @Prop({type:String,default:null})
    @ApiProperty({type:String,})
    email:string;


    @Prop({type:String,default:null})
    @ApiProperty({type:String,})
    password:string;


    @Prop({type:String,default:null})
    @ApiProperty({type:String,})
    confirmPassword:string
}
export const userSchema =  SchemaFactory.createForClass(User)