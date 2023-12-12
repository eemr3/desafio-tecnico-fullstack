import { useContext } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { FaRegTrashAlt } from 'react-icons/fa';
import { AppContext } from '../../../context/AppContext';
import { formatarTelefone } from '../../../common/utils/formatPhone';
import { Link } from 'react-router-dom';
import { ModalConfirmation } from '../../Modal';

export default function ListAllProfessional() {
  const { getAllProfessional, setOpen, setProfessionalIdDelete } = useContext(AppContext);

  const handleDeleteProfessional = (id: number) => {
    setOpen(true);
    setProfessionalIdDelete(id);
  };

  return (
    <div className="flex flex-col">
      <ModalConfirmation />
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Telefone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Tipo de Profissional
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Esta ativo?
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Editar
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Deletar
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getAllProfessional?.map((professional) => (
                  <tr key={professional.id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {professional.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {professional.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {professional.email}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {formatarTelefone(professional.phone)}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {professional?.typeProfessional?.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {professional?.isActived ? 'Sim' : 'Não'}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <Link
                        className="text-green-500 hover:text-green-700 text-2xl"
                        to={`/professional/update/${professional.id}`}
                      >
                        <FaRegEdit />
                      </Link>
                    </td>
                    <td className="px-6 py-4 font-medium text-right whitespace-nowrap text-2xl">
                      <button
                        onClick={() =>
                          handleDeleteProfessional(professional.id as number)
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaRegTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
