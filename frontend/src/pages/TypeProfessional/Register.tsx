import RegisterTypeProfessionalForm from '../../components/Forms/TypeProfessional/Registe';

export default function RegisterTypeProfessional() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold">Cadastro de Profissionais</h1>
      </div>
      <div className="w-full">
        <RegisterTypeProfessionalForm />
      </div>
    </div>
  );
}
