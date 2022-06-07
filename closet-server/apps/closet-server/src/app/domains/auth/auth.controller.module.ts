import { Module } from '@nestjs/common';
import { AuthService } from '@closet-web/backend'
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@closet-web/models';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity]),JwtModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthControllerModule {}
