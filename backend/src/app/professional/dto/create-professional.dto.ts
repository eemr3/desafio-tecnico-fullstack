import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProfessionalDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsNumber()
  typeProfessionalId: number;
}
