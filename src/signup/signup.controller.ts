import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupDto } from './dto/signup.dto';


@Controller('signup') //http://localhost:8000/signup
export class SignupController {

    constructor(
        private readonly signupservice: SignupService
    ){}

    @Post()
    signup(@Body() signupupDto:SignupDto ){
        return this.signupservice.signup(signupupDto)
    }
}
