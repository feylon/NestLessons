import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { loginDTO } from "./login.dto";
import { UserService } from "./user.service";
import { ApiBearerAuth, ApiBody, ApiUnauthorizedResponse } from "@nestjs/swagger";

@Controller("users")
export class userController {
    constructor(private userservice: UserService) { }

    @ApiBody({schema : {example : {login : "jamshid", password : "1234"}}})
    @ApiUnauthorizedResponse({example : {message : "Login yoki parol xato"}})
    @Post('login')
    loginFunction(@Body() body: loginDTO) {
        const { login, password } = body;

        return this.userservice.loginFunction(login, password);
    }

    @ApiBearerAuth()
    @Get("bio")
    getFunction(@Req() req : any){
        return this.userservice.getBio(req.user)
    }
}