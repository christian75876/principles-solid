import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dotenv from "dotenv";
import { FinancialHistory } from './financial-history/entities/financial-history.entity';
import { Microcredit } from './microcredit/entities/microcredit.entity';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';


dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',

    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [User, Microcredit, FinancialHistory],
    synchronize: true,
  }),
    UserModule
  ],
})
export class AppModule { }
