import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TypeProfessionalService } from './type-professional.service';
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';

@Controller('type-professionals')
export class TypeProfessionalController {
  constructor(
    private readonly typeProfessionalService: TypeProfessionalService,
  ) {}

  @Post()
  create(@Body() createTypeProfessionalDto: CreateTypeProfessionalDto) {
    return this.typeProfessionalService.create(createTypeProfessionalDto);
  }

  @Get()
  findAll() {
    return this.typeProfessionalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeProfessionalService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeProfessionalDto: UpdateTypeProfessionalDto,
  ) {
    return this.typeProfessionalService.update(+id, updateTypeProfessionalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeProfessionalService.remove(+id);
  }
}
