import React from 'react';

import { AppProvider } from './contexts';
import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

export default App;
