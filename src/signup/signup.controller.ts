import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignupService } from './signup.service';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';

@Controller('signup') //http://localhost:8000/signup
export class SignupController {}
