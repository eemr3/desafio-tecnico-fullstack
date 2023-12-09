import { Module } from '@nestjs/common';
import { TypeProfessionalService } from './type-professional.service';
import { TypeProfessionalController } from './type-professional.controller';

@Module({
  controllers: [TypeProfessionalController],
  providers: [TypeProfessionalService],
})
export class TypeProfessionalModule {}
