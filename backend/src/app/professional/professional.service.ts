import { Injectable } from '@nestjs/common';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { PrismaService } from '../../confing/database/prisma/prisma.service';
import { ConflictError } from '../../common/exceptions/conflict.error';
import { NotFoundError } from '../../common/exceptions/not-found.error';

@Injectable()
export class ProfessionalService {
  constructor(private readonly prismaSevice: PrismaService) {}

  async create(createProfessional: CreateProfessionalDto) {
    const professionalExistis = await this.prismaSevice.professional.findUnique(
      { where: { email: createProfessional.email } },
    );

    if (professionalExistis) {
      throw new ConflictError('Professional already exists');
    }

    const professional = await this.prismaSevice.professional.create({
      data: createProfessional,
    });

    return professional;
  }

  async findAll() {
    return await this.prismaSevice.professional.findMany();
  }

  findOne(id: number) {
    const professional = this.prismaSevice.professional.findUnique({
      where: { id },
    });

    if (!professional) {
      throw new NotFoundError('Professional not found');
    }

    return professional;
  }

  async update(id: number, updateProfessionalDto: UpdateProfessionalDto) {
    await this.findOne(id);

    return await this.prismaSevice.professional.update({
      where: { id },
      data: updateProfessionalDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return await this.prismaSevice.professional.delete({ where: { id } });
  }
}
