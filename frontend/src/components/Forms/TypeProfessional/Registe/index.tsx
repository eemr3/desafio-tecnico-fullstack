import { useFormik } from 'formik';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { IAddNewTypeProfessional } from '../../../../common/interfaces';
import { typeProfessionalSchema } from '../../../../common/schemas/typeProfessiona.schemal';
import { AppContext } from '../../../../context/AppContext';
import { Input } from '../../CustomInput';

export default function RegisterTypeProfessionalForm() {
  const {
    addNewTypeProfessional,
    addAndUpdateTypeProfessional,
    setAddAndUpdateTypeProfessional,
  } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      title: '',
    },
    validationSchema: typeProfessionalSchema,
    onSubmit: async (values: IAddNewTypeProfessional, { resetForm }) => {
      try {
        await addNewTypeProfessional(values);
        toast.success('Tipo de profissional cadastrado com sucesso');
        setAddAndUpdateTypeProfessional(!addAndUpdateTypeProfessional);
      } catch (err) {
        if (err === 409) {
          toast.error('Nome de profissional já cadastrado');
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
            <Input.Label htmlFor="title" text="Tipo de profissional" />
            <Input.CustomInput
              id="title"
              type="text"
              value={formik.values.title}
              onChange={formik.handleChange}
              placeholder="Ex: Product Owner"
            />
          </Input.Root>
          {formik.errors.title && formik.touched.title ? (
            <span className="text-red-500">{formik.errors.title}</span>
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
