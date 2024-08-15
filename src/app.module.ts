import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MicrocreditModule } from './microcredit/microcredit.module';

@Module({
  imports: [UserModule, MicrocreditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
