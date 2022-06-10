import { TypeOrmConfiguration } from "@closet-web/globals";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm"
import {entities} from "./imported-entities"
import {SnakeNamingStrategy} from "./snake-naming.stategy"
@Module({
    imports: [
        ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [TypeOrmConfiguration],
    }),
        TypeOrmModule.forRootAsync({
            useFactory: async (configService: ConfigService) => ({
                type: 'mariadb',
                host: configService.get<string>('typeorm.host'),
                port: configService.get<number>('typeorm.port'),
                database:configService.get<string>('typeorm.database'),
                username: configService.get<string>('typeorm.username'),
                password: configService.get<string>('typeorm.password'),
                synchronize: configService.get<boolean>('typeorm.synchronize'),
                logging: configService.get<boolean>('typeorm.logging'),
                namingStrategy: new SnakeNamingStrategy(),
                keepConnectionAlive: true,
                timezone: 'Z',
                entities: [...entities],
                bigNumberStrings: false,
            })
        })
    ],
})
export class GlobalTypeOrmModule {}
