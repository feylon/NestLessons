import { IsNotEmpty, IsString,  MaxLength, MinLength } from "class-validator";

export class loginDto{
    
    
    @MaxLength(10, {
        message : "Belgilar login  soni 10ta oshmasin"
    })
    @MinLength(3, {
        message : "Belgilar soni 3 tadan kam bo'lmasin"
    })
    @IsNotEmpty()
    @IsString()
    login : string;

    
    @MaxLength(10)
    @MinLength(3)
    @IsNotEmpty()
    @IsString()
    password : string;
}