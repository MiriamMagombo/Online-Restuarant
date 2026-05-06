import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common'; 
import { AuthService } from './auth.service'; 
import { LocalAuthGuard } from './Guard/local-auth.guard'; 

@Controller('auth') 
export class AuthController { 
constructor(private authService: AuthService) {} 
@UseGuards(LocalAuthGuard) 
@Post('login') 
async login(@Request() req) { 
return this.authService.login(req.user); 
} 
@Post('register') 
async register( 
@Body('email') email: string, 
@Body('password') password: string, 
@Body('firstName') firstName: string, 
@Body('lastName') lastName: string, 
) { 
return this.authService.register(email, password, firstName, lastName); 
} 
} 