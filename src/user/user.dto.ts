import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDTO {
  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}


