import { Module } from '@nestjs/common';
import { FinancialHistoryService } from './financial-history.service';
import { FinancialHistoryController } from './financial-history.controller';

@Module({
  controllers: [FinancialHistoryController],
  providers: [FinancialHistoryService],
})
export class FinancialHistoryModule {}
