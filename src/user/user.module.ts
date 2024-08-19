import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { CreateUser, GetUsers, UserService } from './user.service';
import { Microcredit } from 'src/microcredit/entities/microcredit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [CreateUser, UserService, GetUsers],
  exports: [UserService]
})
export class UserModule { }
