import { Injectable, UnauthorizedException } from '@nestjs/common'; 
import { JwtService } from '@nestjs/jwt'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import * as bcrypt from 'bcrypt'; 
import { User } from '../users/entities/user.entity'; 

@Injectable() 
export class AuthService { 
constructor( 
@InjectRepository(User) 
private userRepository: Repository<User>, 
private jwtService: JwtService, 
) {} 
async validateUser(email: string, password: string): Promise<any> { 
const user = await this.userRepository.findOne({ where: { email } }); 
if (user && await bcrypt.compare(password, user.password)) { 
const { password, ...result } = user; 
return result; 
} 
return null; 
} 
async login(user: any) {
const payload = { email: user.email, sub: user.id }; 
return { 
access_token: this.jwtService.sign(payload), 
}; 
} 
async register(email: string, password: string, firstName: string, lastName: 
string) { 
const hashedPassword = await bcrypt.hash(password, 10); 
const user = this.userRepository.create({ 
email, 
password: hashedPassword, 
firstName, 
lastName, 
}); 
return this.userRepository.save(user); 
} 
} 