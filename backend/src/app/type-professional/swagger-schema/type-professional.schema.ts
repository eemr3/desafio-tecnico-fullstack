import { ApiProperty } from '@nestjs/swagger';

class CreateResponseTypeProfessional {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'Médico' })
  type: string;
  @ApiProperty({ example: true })
  isActived: boolean;
  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  createdAt: string;
  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  updatedAt: string;
}

export const createResponseTypeProfessionalSchema = {
  description: 'Endpoint responsável por criar novo tipo de profissional.',
  type: CreateResponseTypeProfessional,
};

class ConflictErrorResponseTypeProfessional {
  @ApiProperty({ example: 'Type Professional already exists' })
  message: string;
  @ApiProperty({ example: 'Conflict' })
  error: string;
  @ApiProperty({ example: 409 })
  statusCode: number;
}

export const conflictErrorResponseTypeProfessionalSchema = {
  description:
    'Retorna um erro de conflito quando o tipo de profissional já existe.',
  type: ConflictErrorResponseTypeProfessional,
};

class NotFoundErrorResponseTypeProfessional {
  @ApiProperty({ example: 'Type Professional not found' })
  message: string;
  @ApiProperty({ example: 'Not Found' })
  error: string;
  @ApiProperty({ example: 404 })
  statusCode: number;
}

export const notFoundErrorResponseTypeProfessionalSchema = {
  description:
    'Retorna um erro de não encontrado quando o tipo de profissional não existe.',
  type: NotFoundErrorResponseTypeProfessional,
};

class UpdateResponseTypeProfessional {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Médico' })
  type: string;

  @ApiProperty({ example: false })
  isActived: boolean;

  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  updatedAt: string;
}

export const updateResponseTypeProfessionalSchema = {
  description: 'Endpoint responsável por atualizar um tipo de profissional.',
  type: UpdateResponseTypeProfessional,
};

class RemoveResponseTypeProfessional {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Médico' })
  type: string;

  @ApiProperty({ example: true })
  isActived: boolean;

  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  updatedAt: string;
}

export const removeResponseTypeProfessionalSchema = {
  description: 'Endpoint responsável por remover um tipo de profissional.',
  type: RemoveResponseTypeProfessional,
};

export class ResponseGetTypeProfessional {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Médico' })
  type: string;

  @ApiProperty({ example: true })
  isActived: boolean;

  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2021-09-07T23:55:38.000Z' })
  updatedAt: string;
}

export const responseGetTypeProfessionalSchema = {
  description: 'Endpoint responsável por buscar um tipo de profissional.',
  type: ResponseGetTypeProfessional,
};

class UpdateBodyTypeProfessional {
  @ApiProperty({ example: 'Médico' })
  type: string;

  @ApiProperty({ example: false })
  isActived: boolean;
}

export const updateBodyTypeProfessionalSchema = {
  description: 'Endpoint responsável por atualizar um tipo de profissional.',
  type: UpdateBodyTypeProfessional,
};
