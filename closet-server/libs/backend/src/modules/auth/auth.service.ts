import { HttpException, Injectable } from '@nestjs/common';
import {InjectRepository } from '@nestjs/typeorm'
import { UsersEntity } from '@closet-web/models';
import { Repository } from 'typeorm';
import { pbkdf2Sync, randomBytes } from 'crypto';
import {JwtService} from '@nestjs/jwt'
@Injectable()
export class AuthService {
  constructor(@InjectRepository(UsersEntity) private readonly usersRepository: Repository<UsersEntity>,
  private readonly jwtService: JwtService) { }

  async signIn(param) {
    const user = await this.usersRepository.find({ email: param.email });
    if (!user) {
      throw new HttpException('Invalid User', 400);
    }
    const encryptPassword =
          param.password &&
          pbkdf2Sync(param.password, user.encKey, 131072, 64, 'sha512').toString('base64')
    if (encryptPassword === user.password) {
      
    } else {
      throw new HttpException('Invalid Password', 400);
    }
    return this.jwtService.sign({
      email: user.email
    }, {
      expiresIn: '1d'
    });
    }

    async signUp(param):Promise<boolean> {
      const hasUser = await this.usersRepository.find({ email: param.email });
      if (hasUser) {
        new HttpException('This email is already signed', 400)
      }

      const buffer = randomBytes(64).toString('base64'),
        encryptPassword =
          param.password &&
          pbkdf2Sync(param.password, buffer, 131072, 64, 'sha512').toString('base64');

      try {
        const user = this.usersRepository.create({
          password: encryptPassword,
          encKey: buffer,
          email: param.email,
          gender: param.gender,
          height: param.height,
          weight: param.weight,
          name: param.name,
          nickname: param.nickname,
        });
        await this.usersRepository.save(user);

        return true;
      } catch(e) {
        new HttpException('Invalid SignUp date',400);
      }
    }
}
