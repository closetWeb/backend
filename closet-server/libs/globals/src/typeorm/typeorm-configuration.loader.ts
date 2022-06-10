import { registerAs } from '@nestjs/config';

export default registerAs('typeorm', () => ({
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  synchronize: process.env.TYPEORM_SYNCHRONIZE?.toLowerCase() === 'true',
  logging: process.env.TYPEORM_LOGGING,
  keepConnectionAlive: process.env.TYPEORM_KEEP_CONNECTION_ALIVE,
}));
