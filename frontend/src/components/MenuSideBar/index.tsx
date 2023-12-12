import { useState } from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';
import DashboardIcon from '../icons/Dashboard';
import HamburgerIcon from '../icons/Hamburger';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { SidebarMenu } from './components/SidebarMenu';

export const NavBar = () => {
  const path = useLocation().pathname;
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? 'w-56' : 'w-72 '
        } flex flex-col h-screen p-3 bg-gray-800 shadow duration-300`}
      >
        <div className="space-y-3 h-2/4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">Dashboard</h2>
            <button onClick={() => setOpen(!open)}>
              <HamburgerIcon />
            </button>
          </div>
          <div className="flex-1">
            <div className="pt-2 pb-4 space-y-1 text-sm">
              <div className="flex items-center p-2 space-x-3 rounded-md">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <FaCircleUser className="w-6 h-6 text-gray-100" />
                  <h3 className="text-gray-100">Admin</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Link
              to="/"
              className="p-2 hover:bg-gray-700 flex items-center text-gray-100 gap-x-3 cursor-pointer"
            >
              <DashboardIcon />
              Dashboard
            </Link>
          </div>
          <div className="flex-1">
            <SidebarMenu isOpen={open} />
          </div>
          <div className="text-gray-100 fixed bottom-0">
            <button className="flex gap-3 p-2">
              <IoExitOutline className="w-6 h-6 text-gray-100" />
              Sair
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full p-4 m-8 overflow-y-auto">
        {path === '/' ? (
          <div className="flex items-center justify-center p-40 border-4 border-dotted">
            Conteúdo da Dashboard
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};
