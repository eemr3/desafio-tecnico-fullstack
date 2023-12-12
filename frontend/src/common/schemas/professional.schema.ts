import * as Yup from 'yup';

export const professionalSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  phone: Yup.string().required('Telefone é obrigatório'),
  typeProfessionalId: Yup.string().required('Tipo de profissional é obrigatório'),
});
