import { useState } from 'react';
import ProfessionalIcon from '../../icons/Professional';
import TypeProfessionalIcon from '../../icons/TypeProfessional';
import { CiViewList } from 'react-icons/ci';
import { IoPersonAddOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    id: 1,
    title: 'Profissional',
    icon: <ProfessionalIcon />,
    subItems: [
      { title: 'Cadastro', icon: IoPersonAddOutline, link: '/professional/register' },
      { title: 'Lista', icon: CiViewList, link: '/professional/list-all' },
    ],
  },
  {
    id: 2,
    title: 'Tipo de Profissional',
    icon: <TypeProfessionalIcon />,
    subItems: [
      {
        title: 'Cadastro',
        icon: IoPersonAddOutline,
        link: '/type-professional/register',
      },
      { title: 'Lista', icon: CiViewList, link: '/type-professional/list' },
    ],
  },
];
export const SidebarMenu = ({ isOpen }: { isOpen: boolean }) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  // Função para alternar a visibilidade dos subitens
  const toggleSubItems = (index: number | null) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  return (
    <aside className="text-gray-100">
      <nav>
        <ul className="space-y-2">
          {menuItems.map((category) => (
            <li key={category.id} className="opcion-con-desplegable cursor-pointer">
              <div
                className="flex items-center justify-between p-2 hover:bg-gray-700"
                onClick={() => toggleSubItems(category.id)}
              >
                <div className="flex items-center gap-x-3">
                  {!isOpen ? category.icon : null}
                  <span>{category.title}</span>
                </div>
                <i
                  className={`fas fa-chevron-down text-xs ${
                    expandedItem === category.id ? 'transform rotate-180' : ''
                  }`}
                ></i>
              </div>
              <ul
                className={`desplegable ml-4 ${
                  expandedItem === category.id ? '' : 'hidden'
                }`}
              >
                {category.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={subItem.link}
                      className="p-2 hover:bg-gray-700 flex items-center gap-x-3"
                    >
                      {<subItem.icon />}
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
