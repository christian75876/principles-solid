import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DatabaseconfigService } from "src/common/config/connection-db.config";


@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: DatabaseconfigService,
        }),
    ],
    providers: [DatabaseconfigService,],
    exports: [DatabaseconfigService],
})
export class DatabaseModule{};