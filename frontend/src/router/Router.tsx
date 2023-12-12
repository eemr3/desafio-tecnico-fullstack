import { Routes, Route } from 'react-router-dom';

import Register from '../pages/Professional/Register';
import Layout from '../pages/Layout';
import ListAll from '../pages/Professional/ListAll';
import UpdateProfessional from '../pages/Professional/Update';
import RegisterTypeProfessional from '../pages/TypeProfessional/Register';
import TypeProfessionalList from '../pages/TypeProfessional/ListAll';
import UpdateTypeProfessional from '../pages/TypeProfessional/Update';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/professional/register" element={<Register />} />
        <Route path="/professional/list-all" element={<ListAll />} />
        <Route path="/professional/update/:id" element={<UpdateProfessional />} />
        <Route
          path="/type-professional/register"
          element={<RegisterTypeProfessional />}
        />
        <Route path="/type-professional/list" element={<TypeProfessionalList />} />
        <Route
          path="/type-professional/update/:id"
          element={<UpdateTypeProfessional />}
        />
      </Route>
    </Routes>
  );
}
