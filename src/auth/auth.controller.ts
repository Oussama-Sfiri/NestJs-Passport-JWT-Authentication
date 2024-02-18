import { Body, Controller, Get, HttpException, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dtos/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post("login")
    @UseGuards(LocalAuthGuard)
    login(@Body() authPayload: AuthPayloadDto, @Req() req){
        // return this.authService.validateUser(authPayload); so we don't need to do this anymore because we did this in the localStrategy file

        // return {
        //     id: req.body.id,
        //     username: req.body.username,
        //     token : req.user
        // };

        return req.user;
    }

    @Get("status")
    @UseGuards(JwtAuthGuard)
    getStatus(@Req() req: Request){
        console.log("inside authcontroller getStatus()");
        console.log(req.user)
        return req.user;
    }

}
