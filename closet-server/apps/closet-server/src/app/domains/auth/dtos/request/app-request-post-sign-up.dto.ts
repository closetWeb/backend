import { ParamSignUpUserInterface } from '@closet-web/backend';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class AppRequestPostSignUpDto implements ParamSignUpUserInterface {
  @ApiProperty({
    description: 'user email address',
    example: 'gyo@plask.ai',
  })
  @IsEmail()
  email: string;

  @IsString()
  @ApiProperty({
    description: 'user password',
    example: 'asdf1234!',
  })
  password: string;

  @IsNumber()
  @ApiProperty({
    description: 'user height value',
    example: 179.9,
  })
  height: number;

  @IsNumber()
  @ApiProperty({
    description: 'user weight value',
    example: 69,
  })
  weight: number;

  @IsString()
  @ApiProperty({
    description: 'user gender, man | woman | none',
    example: 'man',
  })
  gender: string;

  @IsString()
  @ApiProperty({
    description: 'user name, ',
    example: 'Jeong Ingyo',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'user nickname in our website',
    example: 'GyoGyoo',
  })
  nickname: string;
}
