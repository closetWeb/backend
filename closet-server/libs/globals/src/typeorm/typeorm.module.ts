import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm"
import {entities} from "./imported-entities"
import {SnakeNamingStrategy} from "./snake-naming.stategy"
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mariadb',
                host: process.env.TYPEORM_HOST,
                port: Number(process.env.TYPEORM_PORT) || 3304,
                database: process.env.TYPEORM_DATABASE,
                username: process.env.TYPEORM_USERNAME,
                password: process.env.TYPEORM_PASSWORD,
                synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE) || false,
                logging: Boolean(process.env.TYPEORM_LOGGING) || false,
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
