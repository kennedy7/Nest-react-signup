import { Module } from '@nestjs/common';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { SignupSchema } from './signup.model';

@Module({
  imports: [
    MongooseModule.forFeature([
    {
       name: "Signup",
      schema: SignupSchema
    }
  ])
],
  controllers: [SignupController],
  providers: [SignupService],
})
export class SignupModule {}
