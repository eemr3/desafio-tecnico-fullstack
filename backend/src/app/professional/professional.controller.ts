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
import {
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  ResponseGetProfessional,
  conflictErrorProfessionalResponseSchema,
  createProfessionalResponseSchema,
  notFoundErrorProfessionalResponseSchema,
  responseGetProfessionalSchema,
  updateBodyProfessionalSchema,
  updateResponseProfessionalSchema,
} from './swagger-schema/professional.schema';

@ApiTags('Professionals')
@Controller('professionals')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @Post()
  @ApiOperation({ summary: 'Endpoint responsável por criar um profissional.' })
  @ApiCreatedResponse(createProfessionalResponseSchema)
  @ApiConflictResponse(conflictErrorProfessionalResponseSchema)
  async create(@Body() createProfessionalDto: CreateProfessionalDto) {
    try {
      return await this.professionalService.create(createProfessionalDto);
    } catch (error) {
      if (error instanceof ConflictError) {
        throw new ConflictException(error.message);
      }
      console.error(error);
      throw new InternalServerErrorException();
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Endpoint responsável por listar todos os profissionais.',
  })
  @ApiOkResponse({ type: [ResponseGetProfessional] })
  async findAll() {
    return await this.professionalService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Endpoint responsável por buscar um profissional.' })
  @ApiOkResponse(responseGetProfessionalSchema)
  @ApiNotFoundResponse(notFoundErrorProfessionalResponseSchema)
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
  @ApiOperation({
    summary: 'Endpoint responsável por atualizar um profissional.',
  })
  @ApiBody(updateBodyProfessionalSchema)
  @ApiOkResponse(updateResponseProfessionalSchema)
  @ApiNotFoundResponse(notFoundErrorProfessionalResponseSchema)
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
  @ApiOperation({
    summary: 'Endpoint responsável por remover um profissional.',
  })
  @ApiOkResponse({ description: 'Profissional removido com sucesso.' })
  @ApiNotFoundResponse(notFoundErrorProfessionalResponseSchema)
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
