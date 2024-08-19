import { Module } from '@nestjs/common';
import { FinancialHistoryService } from './financial-history.service';
import { FinancialHistoryController } from './financial-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FinancialHistory } from './entities/financial-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FinancialHistory])],
  controllers: [FinancialHistoryController],
  providers: [FinancialHistoryService],
})
export class FinancialHistoryModule {}
