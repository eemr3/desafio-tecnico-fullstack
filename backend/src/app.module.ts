import { Module } from '@nestjs/common';
import { ProfessionalModule } from './app/professional/professional.module';
import { TypeProfessionalModule } from './app/type-professional/type-professional.module';
import { PrismaModule } from './confing/database/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProfessionalModule, TypeProfessionalModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
