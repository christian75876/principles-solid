import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class CreateUser {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {};
  async saveUser(createUserDto: CreateUserDto): Promise<User>{
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }
};

@Injectable()
export class UserService {
  constructor(
    private readonly createUser: CreateUser
  ) {};

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.createUser.saveUser(createUserDto);
  }

}




