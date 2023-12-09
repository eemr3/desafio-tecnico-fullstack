import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './confing/database/prisma/prisma.module';
import { ProfessionalModule } from './app/professional/professional.module';
import { TypeProfessionalModule } from './app/type-professional/type-professional.module';

@Module({
  imports: [PrismaModule, ProfessionalModule, TypeProfessionalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
