import * as Yup from 'yup';

export const typeProfessionalSchema = Yup.object().shape({
  title: Yup.string().required('Tipo de profissional é obrigatório'),
});

export const updateTypeProfessionalSchema = Yup.object().shape({
  title: Yup.string().optional(),
  isActived: Yup.string().optional(),
});
