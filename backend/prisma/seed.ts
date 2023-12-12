import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeProfessionals = [
  {
    type: 'Gerente Geral',
  },
  {
    type: 'Gerente de contas',
  },
  {
    type: 'Gerente de Operações',
  },
  {
    type: 'Consultor Financeiro',
    isActived: false,
  },
  {
    type: 'Caixa',
  },
  {
    type: 'Atendente de Relacionamento',
  },
  {
    type: 'Analista de Crédito',
  },
  {
    type: 'Analista de Risco',
    isActived: false,
  },
  {
    type: 'Assistente Administrativo',
  },
];

async function seedTypeProfessional() {
  await prisma.typeProfessional.createMany({ data: typeProfessionals });
}

seedTypeProfessional();
