import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Dashboard, Form, Home, Settings, SignIn, SignUp } from '../views';
import { handlePrivateRouteChecking, isAuthenticated } from '../services';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Rotas privadas */}
        <Route element={<PrivateRoute />}>
          <Route
            path='/'
            element={<Home />}
            loader={() => handlePrivateRouteChecking()}
          />
          <Route
            path='/dashboard'
            element={<Dashboard />}
            loader={() => handlePrivateRouteChecking()}
          />
          <Route
            path='/settings'
            element={<Settings />}
            loader={() => handlePrivateRouteChecking()}
          />
          <Route
            path='/new/:type'
            element={<Form />}
            loader={() => handlePrivateRouteChecking()}
          />
          <Route
            path=':type/:id'
            element={<Form />}
            loader={() => handlePrivateRouteChecking()}
          />
        </Route>

        {/* Rotas públicas */}
        <Route
          path='/signin'
          element={<SignIn />}
          loader={() => isAuthenticated()}
        />
        <Route
          path='/signup'
          element={<SignUp />}
          loader={() => isAuthenticated()}
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
