import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Dashboard, Form, Home, Settings, SignIn, SignUp } from '../views';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas privadas */}
        {/* <Route element={<PrivateRoute />}> */}
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/new/:type' element={<Form />} />
        <Route path='/type/:id' element={<Form />} />
        {/* </Route> */}

        {/* Rotas públicas */}
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
