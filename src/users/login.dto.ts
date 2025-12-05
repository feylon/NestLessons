import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class loginDTO {
    @ApiProperty({example : "jamshid14092002"})
    @MaxLength(20)
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    login: string;

    @ApiProperty({example : "1234"})
    @MaxLength(20)
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    password: string;
}