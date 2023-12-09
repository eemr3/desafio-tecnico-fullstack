import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeProfessionalDto {
  @ApiProperty({ example: 'Médico' })
  @IsNotEmpty()
  @IsString()
  type: string;
}
