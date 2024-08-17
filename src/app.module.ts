import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DatabaseconfigService } from './common/config/connection-db.config';
import { DatabaseModule } from './modules/database.module';
import { MicrocreditModule } from './microcredit/microcredit.module';
import { FinancialHistoryModule } from './financial-history/financial-history.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseconfigService,
    }),
    DatabaseModule,
    UserModule,
    MicrocreditModule,
    FinancialHistoryModule
  ],
})
export class AppModule {}
