export const formatarTelefone = (numero: string) => {
  return numero.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
};
