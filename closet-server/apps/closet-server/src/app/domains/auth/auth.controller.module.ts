import { Module } from '@nestjs/common';
import { AuthService } from '@closet-web/backend'
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@closet-web/models';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthControllerModule {}
