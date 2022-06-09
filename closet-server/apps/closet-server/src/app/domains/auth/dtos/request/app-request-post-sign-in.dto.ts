import { ApiProperty } from '@nestjs/swagger';
import { ParamSignInUserInterface } from '@closet-web/backend';

export class AppRequestPostSignInDto implements ParamSignInUserInterface {
  @ApiProperty({
    description: 'email address',
    example: 'gyo@plask.ai',
  })
  email: string;

  @ApiProperty({
    description: 'password for login',
    example: 'asdf1234!',
  })
  password: string;
}
