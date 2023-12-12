import { useFormik } from 'formik';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { IUpdateTypeProfessional } from '../../../../common/interfaces';
import { AppContext } from '../../../../context/AppContext';
import { Input } from '../../CustomInput';

export default function UpdateTypeProfessionalForm() {
  const { id } = useParams();
  const {
    updateTypeProfessional,
    addAndUpdateTypeProfessional,
    setAddAndUpdateTypeProfessional,
    getTypeProfessionalById,
  } = useContext(AppContext);

  useEffect(() => {
    const getTypeProfessional = async () => {
      const response = await getTypeProfessionalById(Number(id));
      formik.setValues({
        type: response.type,
        isActived: response.isActived ? 'SIM' : 'NÃO',
      });
    };

    getTypeProfessional();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTypeProfessionalById, id]);

  const formik = useFormik({
    initialValues: {
      type: '',
      isActived: '',
    },
    onSubmit: async (values: IUpdateTypeProfessional, { resetForm }) => {
      try {
        await updateTypeProfessional({
          id: Number(id),
          type: values.type,
          isActived: values.isActived,
        });
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
            <Input.Label htmlFor="type" text="Tipo de profissional" />
            <Input.CustomInput
              id="type"
              type="text"
              value={formik.values.type}
              onChange={formik.handleChange}
              placeholder="Ex: Product Owner"
            />
          </Input.Root>
          {formik.errors.type && formik.touched.type ? (
            <span className="text-red-500">{formik.errors.type}</span>
          ) : null}
        </div>
        <div className="mb-4">
          <Input.Root>
            <Input.Label htmlFor="isActived" text="Tipo de profissional" />
            <Input.CustomInput
              id="isActived"
              type="text"
              value={formik.values.isActived.toUpperCase()}
              onChange={formik.handleChange}
              placeholder="Ex: Product Owner"
            />
          </Input.Root>
          {formik.errors.isActived && formik.touched.isActived ? (
            <span className="text-red-500">{formik.errors.isActived}</span>
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
