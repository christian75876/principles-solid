import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, EntityRepository } from 'typeorm';
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
export class GetUsers{
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){};
  async getAllUsers(): Promise<User[]>{
    const users = await this.userRepository.find();
    console.log(users)
    return users
  }
}


@Injectable()
export class UserService {
  constructor(
    private readonly createUser: CreateUser,
    private readonly getUsers: GetUsers,
  ) {};

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.createUser.saveUser(createUserDto);
  }

  async getAll(): Promise<User[]> {
    return await this.getUsers.getAllUsers();
  }
}

/*
@EntityRepository(User)  
 // Use EntityRepository for direct database interaction
export class UserRepository {
  async save(createUserDto: CreateUserDto): Promise<User> {
    const user = this.create(createUserDto);
    return await this.save(user); // Assuming 'save' is a TypeORM method
  }

  private create(createUserDto: CreateUserDto): User {
    const user = new User();
    // Map properties from CreateUserDto to User entity (implementation omitted for brevity)
    return user;
  }
}

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto):  
 Promise<User> {
    return await this.userRepository.save(createUserDto);  

  }
}
*/