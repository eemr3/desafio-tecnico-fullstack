import { Injectable } from '@nestjs/common';
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';
import { PrismaService } from '../../confing/database/prisma/prisma.service';
import { ConflictError } from '../../common/exceptions/conflict.error';
import { NotFoundError } from '../../common/exceptions/not-found.error';

@Injectable()
export class TypeProfessionalService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTypeProfessionalDto: CreateTypeProfessionalDto) {
    const typeProfessionalExists =
      await this.prismaService.typeProfessional.findUnique({
        where: { type: createTypeProfessionalDto.type },
      });

    if (typeProfessionalExists) {
      throw new ConflictError('Type Professional already exists');
    }

    return await this.prismaService.typeProfessional.create({
      data: createTypeProfessionalDto,
    });
  }

  async findAll() {
    return await this.prismaService.typeProfessional.findMany();
  }

  async findOne(id: number) {
    const typeProfessional =
      await this.prismaService.typeProfessional.findUnique({
        where: { id },
      });

    if (!typeProfessional) {
      throw new NotFoundError('Type Professional not found');
    }

    return typeProfessional;
  }

  async update(id: number, updateTypeProfessional: UpdateTypeProfessionalDto) {
    await this.findOne(id);
    return await this.prismaService.typeProfessional.update({
      where: { id },
      data: updateTypeProfessional,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prismaService.typeProfessional.delete({ where: { id } });
  }
}
