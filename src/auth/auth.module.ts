import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import this
import { AuthService } from './auth.service';
import { User } from '../users/entities/user.entity'; // Path to your User entity
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './Strategy/jwt.strategy';
import { LocalStrategy } from './Strategy/local.strategy';


@Module({
  imports: [
   
    TypeOrmModule.forFeature([User]), 
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
