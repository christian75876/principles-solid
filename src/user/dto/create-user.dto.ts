import { IsNotEmpty, IsString } from "class-validator";
import { MinDigits } from "./validator";

export class CreateUserDto {
  @IsNotEmpty({ message: 'The name is required' })
  @IsString({ message: 'The name must be a string' })
  name: string;

  @MinDigits(3, { message: 'Please enter a creditScore of at least 3' })
  creditScore: number;
}
