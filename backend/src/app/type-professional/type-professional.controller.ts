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
} from '@nestjs/common';
import { TypeProfessionalService } from './type-professional.service';
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';
import {
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ConflictError } from '../../common/exceptions/conflict.error';
import {
  ResponseGetTypeProfessional,
  conflictErrorResponseTypeProfessionalSchema,
  createResponseTypeProfessionalSchema,
  notFoundErrorResponseTypeProfessionalSchema,
  removeResponseTypeProfessionalSchema,
  responseGetTypeProfessionalSchema,
  updateBodyTypeProfessionalSchema,
  updateResponseTypeProfessionalSchema,
} from './swagger-schema/type-professional.schema';

@ApiTags('Type Professionals')
@Controller('type-professionals')
export class TypeProfessionalController {
  constructor(
    private readonly typeProfessionalService: TypeProfessionalService,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Endpoint responsável por criar novo tipo de profissional.',
  })
  @ApiCreatedResponse(createResponseTypeProfessionalSchema)
  @ApiConflictResponse(conflictErrorResponseTypeProfessionalSchema)
  async create(@Body() createTypeProfessionalDto: CreateTypeProfessionalDto) {
    try {
      return await this.typeProfessionalService.create(
        createTypeProfessionalDto,
      );
    } catch (error) {
      if (error instanceof ConflictError) {
        throw new ConflictException(error.message);
      }

      throw new InternalServerErrorException();
    }
  }

  @Get()
  @ApiOperation({
    summary: 'Endpoint responsável por listar todos os tipos de profissionais.',
  })
  @ApiOkResponse({ type: [ResponseGetTypeProfessional] })
  findAll() {
    return this.typeProfessionalService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Endpoint responsável por listar um tipo de profissional.',
  })
  @ApiOkResponse(responseGetTypeProfessionalSchema)
  @ApiNotFoundResponse(notFoundErrorResponseTypeProfessionalSchema)
  findOne(@Param('id') id: string) {
    return this.typeProfessionalService.findOne(+id);
  }

  @Patch(':id')
  @ApiBody(updateBodyTypeProfessionalSchema)
  @ApiOkResponse(updateResponseTypeProfessionalSchema)
  @ApiNotFoundResponse(notFoundErrorResponseTypeProfessionalSchema)
  update(
    @Param('id') id: string,
    @Body() updateTypeProfessionalDto: UpdateTypeProfessionalDto,
  ) {
    return this.typeProfessionalService.update(+id, updateTypeProfessionalDto);
  }

  @Delete(':id')
  @ApiOkResponse(removeResponseTypeProfessionalSchema)
  remove(@Param('id') id: string) {
    return this.typeProfessionalService.remove(+id);
  }
}
