import { Module } from '@nestjs/common';
import { MicrocreditService } from './microcredit.service';
import { MicrocreditController } from './microcredit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Microcredit } from './entities/microcredit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Microcredit])],
  exports: [MicrocreditService],
  controllers: [MicrocreditController],
  providers: [MicrocreditService],
})
export class MicrocreditModule {}
