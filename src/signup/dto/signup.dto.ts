// import { PartialType } from '@nestjs/mapped-types';

export class SignupDto{
    readonly username: string;
    readonly email: string;
    readonly password: string;
}
