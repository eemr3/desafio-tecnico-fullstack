import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTypeProfessionalDto {
  @IsNotEmpty()
  @IsString()
  type: string;
}
