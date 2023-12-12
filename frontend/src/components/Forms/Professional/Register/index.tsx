import { useContext } from 'react';
import { AppContext } from '../../../../context/AppContext';
import { useFormik } from 'formik';
import { IProfessional } from '../../../../common/interfaces';
import { ToastContainer, toast } from 'react-toastify';
import { professionalSchema } from '../../../../common/schemas/professional.schema';
import { Input } from '../../CustomInput';

export default function ProfessionalRegisterForm() {
  const {
    getAllTypeProfessional,
    createNewProfessional,
    addAndUpdateProfessional,
    setAddAndUpdateProfessional,
  } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      typeProfessionalId: '',
    },
    validationSchema: professionalSchema,
    onSubmit: async (values: IProfessional, { resetForm }) => {
      try {
        await createNewProfessional({
          name: values.name,
          email: values.email,
          phone: values.phone,
          typeProfessionalId: values.typeProfessionalId,
        });

        toast.success('Profissional cadastrado com sucesso');
        setAddAndUpdateProfessional(!addAndUpdateProfessional);
      } catch (err) {
        if (err === 409) {
          toast.error('E-mail já cadastrado');
        }
      }

      resetForm();
    },
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      <ToastContainer />
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <Input.Root>
            <Input.Label htmlFor="name" text="Nome completo" />
            <Input.CustomInput
              id="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Nome completo"
            />
          </Input.Root>
          {formik.errors.name && formik.touched.name ? (
            <span className="text-red-500">{formik.errors.name}</span>
          ) : null}
        </div>
        <div className="mb-6">
          <Input.Root>
            <Input.Label htmlFor="email" text="E-mail" />
            <Input.CustomInput
              id="email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="E-mail"
            />
          </Input.Root>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-red-500">{formik.errors.email}</span>
          ) : null}
        </div>
        <div className="mb-6">
          <Input.Root>
            <Input.Label htmlFor="phone" text="Telefone" />
            <Input.CustomInput
              id="phone"
              type="text"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="Telefone"
            />
          </Input.Root>
          {formik.errors.phone && formik.touched.phone ? (
            <span className="text-red-500">{formik.errors.phone}</span>
          ) : null}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="typeProfessional"
          >
            Tipo de profissional
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="typeProfessional"
            name="typeProfessionalId"
            value={formik.values.typeProfessionalId}
            onChange={formik.handleChange}
            placeholder="Tipo de profissional"
          >
            <option disabled={true} value="">
              --Escolha uma opção--
            </option>
            {getAllTypeProfessional?.map((type) => (
              <option key={type.id} value={type.id}>
                {type.type}
              </option>
            ))}
          </select>
          {formik.errors.typeProfessionalId ? (
            <span className="text-red-500">{formik.errors.typeProfessionalId}</span>
          ) : null}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
