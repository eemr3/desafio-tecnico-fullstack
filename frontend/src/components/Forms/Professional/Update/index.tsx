import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IUpdateProfessional } from '../../../../common/interfaces';
import { AppContext } from '../../../../context/AppContext';
import { useParams } from 'react-router-dom';
import { Input } from '../../CustomInput';

export default function ProfessionalUpdateForm() {
  const param = useParams();
  const { getProfessionalById, updateProfessinal } = useContext(AppContext);

  useEffect(() => {
    const getProfessional = async () => {
      const response = await getProfessionalById(Number(param.id));
      const data = {
        name: response.name,
        email: response.email,
        phone: response.phone,
        typeProfessionalId: response.typeProfessionalId,
        isActived: response.isActived ? 'SIM' : 'NÃO',
      };
      formik.setValues(data);
    };

    getProfessional();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProfessionalById, param.id]);

  const {
    getAllTypeProfessional,
    addAndUpdateProfessional,
    setAddAndUpdateProfessional,
  } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      typeProfessionalId: '',
      isActived: '',
    },
    onSubmit: async (values: IUpdateProfessional, { resetForm }) => {
      try {
        await updateProfessinal({
          name: values.name,
          email: values.email,
          phone: values.phone,
          typeProfessionalId: param.id as string,
          isActived: values.isActived,
        });

        toast.success('Profissional atualizado com sucesso');
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
        </div>
        <div className="mb-6">
          <Input.Root>
            <Input.Label htmlFor="email" text="E-mail" />
            <Input.CustomInput
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="E-mail"
            />
          </Input.Root>
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
        </div>
        <div className="mb-6">
          <Input.Root>
            <Input.Label htmlFor="isActived" text="Esta ativo?" />
            <Input.CustomInput
              id="isActived"
              type="text"
              value={formik.values.isActived}
              onChange={formik.handleChange}
              placeholder="Esta ativo?"
            />
          </Input.Root>
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
