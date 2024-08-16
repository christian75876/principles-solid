import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinancialHistoryService } from './financial-history.service';
import { CreateFinancialHistoryDto } from './dto/create-financial-history.dto';
import { UpdateFinancialHistoryDto } from './dto/update-financial-history.dto';

@Controller('financial-history')
export class FinancialHistoryController {
  constructor(private readonly financialHistoryService: FinancialHistoryService) {}

  @Post()
  create(@Body() createFinancialHistoryDto: CreateFinancialHistoryDto) {
    return this.financialHistoryService.create(createFinancialHistoryDto);
  }

  @Get()
  findAll() {
    return this.financialHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialHistoryDto: UpdateFinancialHistoryDto) {
    return this.financialHistoryService.update(+id, updateFinancialHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialHistoryService.remove(+id);
  }
}
