import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { ConflictError } from '../../common/exceptions/conflict.error';
import { NotFoundError } from '../../common/exceptions/not-found.error';

@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post()
  async create(@Body() createProfessionalDto: CreateProfessionalDto) {
    try {
      return await this.professionalService.create(createProfessionalDto);
    } catch (error) {
      if (error instanceof ConflictError) {
        throw new ConflictException(error.message);
      }

      throw new InternalServerErrorException();
    }
  }

  @Get()
  async findAll() {
    return await this.professionalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.professionalService.findOne(+id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }

      throw new InternalServerErrorException();
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfessionalDto: UpdateProfessionalDto,
  ) {
    try {
      return await this.professionalService.update(+id, updateProfessionalDto);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }

      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.professionalService.remove(+id);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw new NotFoundException(error.message);
      }

      throw new InternalServerErrorException();
    }
  }
}
