import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeProfessionalDto } from './create-type-professional.dto';

export class UpdateTypeProfessionalDto extends PartialType(CreateTypeProfessionalDto) {}
