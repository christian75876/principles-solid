import { Injectable } from '@nestjs/common';
import { CreateFinancialHistoryDto } from './dto/create-financial-history.dto';
import { UpdateFinancialHistoryDto } from './dto/update-financial-history.dto';

@Injectable()
export class FinancialHistoryService {
  create(createFinancialHistoryDto: CreateFinancialHistoryDto) {
    return 'This action adds a new financialHistory';
  }

  findAll() {
    return `This action returns all financialHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialHistory`;
  }

  update(id: number, updateFinancialHistoryDto: UpdateFinancialHistoryDto) {
    return `This action updates a #${id} financialHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialHistory`;
  }
}
