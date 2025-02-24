import { IsEmail, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SignUpDto {
    @ApiProperty({ required: true, default: 'example@mail.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ required: true, default: 'user123', minLength: 8 })
    @IsNotEmpty()
    password: string;
}