import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProfessionalDto {
  @ApiProperty({ example: 'João da Silva' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'joaosilva@email.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ example: '11999999999' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsNumber()
  typeProfessionalId: number;
}
