import { Controller, Body, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';

@Controller('users')
export class UsersController {
    @Post()
    async createUser(@Body() dto: CreateUserDto): Promise<void> {
        console.log(dto);
    }

    @Post('/email-verify')
    async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
        console.log(dto);
        return;
    }
}
