import { ApiProperty } from '@nestjs/swagger';

class TypeProfessional {
  @ApiProperty({ example: 'Médico' })
  type: string;

  @ApiProperty({ example: true })
  isActivated: boolean;
}

class CreateProfessionalResponse {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'João da Silva' })
  name: string;
  @ApiProperty({ example: 'joaosilva@email.com' })
  email: string;
  @ApiProperty({ example: '123456789' })
  phone: string;
  @ApiProperty({ example: true })
  isActived: boolean;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  createdAt: Date;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  updatedAt: Date;
  @ApiProperty({ example: 1 })
  typeProfessionalId: number;
}

export const createProfessionalResponseSchema = {
  description: 'Endpoint responsável por criar um profissional.',
  type: CreateProfessionalResponse,
};

class ConflictErrorProfessionalResponse {
  @ApiProperty({ example: 'Já existe um profissional com esse email.' })
  message: string;
  @ApiProperty({ example: 409 })
  statusCode: number;
  @ApiProperty({ example: 'ConflictError' })
  error: string;
}

export const conflictErrorProfessionalResponseSchema = {
  description: 'Erro de conflito.',
  type: ConflictErrorProfessionalResponse,
};

export class ResponseGetProfessional {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'João da Silva' })
  name: string;
  @ApiProperty({ example: '123456789' })
  phone: string;
  @ApiProperty({ example: true })
  isActived: boolean;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  createdAt: Date;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  updatedAt: Date;
  @ApiProperty({ example: 1 })
  typeProfessionalId: number;
  @ApiProperty({
    example: {
      type: 'Médico',
      isActivated: true,
    },
  })
  typeProfessional: TypeProfessional;
}

export const responseGetProfessionalSchema = {
  description: 'Endpoint responsável por buscar um profissional.',
  type: ResponseGetProfessional,
};

class NotFoundErrorProfessionalResponse {
  @ApiProperty({ example: 'Não existe um profissional com esse id.' })
  message: string;
  @ApiProperty({ example: 404 })
  statusCode: number;
  @ApiProperty({ example: 'NotFoundError' })
  error: string;
}

export const notFoundErrorProfessionalResponseSchema = {
  description: 'Erro profissão não encontrada.',
  type: NotFoundErrorProfessionalResponse,
};

class UpdateBodyProfessional {
  @ApiProperty({ example: '123456789' })
  phone: string;
  @ApiProperty({ example: false })
  isActived: boolean;
}

export const updateBodyProfessionalSchema = {
  description: 'Corpo da requisição para atualizar um profissional.',
  type: UpdateBodyProfessional,
};

class UpdateResponseProfessional {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'João da Silva' })
  name: string;
  @ApiProperty({ example: '123456789' })
  phone: string;
  @ApiProperty({ example: false })
  isActived: boolean;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  createdAt: Date;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  updatedAt: Date;
  @ApiProperty({ example: 1 })
  typeProfessionalId: number;
}

export const updateResponseProfessionalSchema = {
  description: 'Endpoint responsável por atualizar um profissional.',
  type: UpdateResponseProfessional,
};

class RemoveResponseProfessional {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'João da Silva' })
  name: string;
  @ApiProperty({ example: '123456789' })
  phone: string;
  @ApiProperty({ example: false })
  isActived: boolean;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  createdAt: Date;
  @ApiProperty({ example: '2021-07-16T02:10:00.000Z' })
  updatedAt: Date;
  @ApiProperty({ example: 1 })
  typeProfessionalId: number;
}

export const removeResponseProfessionalSchema = {
  description: 'Endpoint responsável por remover um profissional.',
  type: RemoveResponseProfessional,
};
