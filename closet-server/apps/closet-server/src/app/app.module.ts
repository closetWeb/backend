import { Module } from '@nestjs/common';
import { AuthControllerModule } from './domains/auth/auth.controller.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from '@closet-web/models';
import { GlobalTypeOrmModule } from '@closet-web/globals';


@Module({
  imports: [AuthControllerModule, TypeOrmModule.forFeature([UsersEntity]), GlobalTypeOrmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
