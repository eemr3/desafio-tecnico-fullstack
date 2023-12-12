import ProfessionalRegisterForm from '../../components/Forms/Professional/Register';

export default function Register() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold">Cadastro de Profissionais</h1>
      </div>
      <div className="w-full">
        <ProfessionalRegisterForm />
      </div>
    </div>
  );
}
