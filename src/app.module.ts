import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MicrocreditModule } from './microcredit/microcredit.module';
import { FinancialHistoryModule } from './financial-history/financial-history.module';

@Module({
  imports: [UserModule, MicrocreditModule, FinancialHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
