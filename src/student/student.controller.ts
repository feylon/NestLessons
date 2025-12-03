import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, ParseUUIDPipe, Post, Query, Req } from "@nestjs/common";
import { StudentService } from "./student.service"
import { JuftSon } from "./juft.pipe";
import { loginDto } from "./login.dto";
import type  {Request} from "express"

@Controller('student')
export class StudentController {
    constructor(private StudentService: StudentService) { }

   @Post()
   loginFunction(@Body() body : loginDto, @Req() req : Request){
    
    const {login, password} = body
    
    return this.StudentService.loginFunction(login,password);

   }




}