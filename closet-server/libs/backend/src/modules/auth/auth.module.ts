import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";

@Module({
    providers:[AuthService, JwtModule],
  exports: [AuthService]
})
export class AuthModule {}
