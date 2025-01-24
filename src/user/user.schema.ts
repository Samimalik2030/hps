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
    password:number;
    @Prop({type:String,default:null})
    @ApiProperty({type:String,})
    confirmPassword:number
}
export const userSchema =  SchemaFactory.createForClass(User)