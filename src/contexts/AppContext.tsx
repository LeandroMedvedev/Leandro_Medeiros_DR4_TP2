import React, { ReactNode } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { createContext, useContext, useState } from 'react';

import {
  AlertComponent,
  GridComponent,
  SnackbarComponent,
} from '../components';
import { validateEnvVariables } from '../utils';

type AlertSeverity = 'info' | 'warning' | 'error' | 'success';

interface IShowAlertParams {
  (message: string, severity: AlertSeverity): void;
}

interface IAppContext {
  showSnackbarMessage: (message: string) => void;
  showAlertMessage: IShowAlertParams;
  supabase: SupabaseClient<any, 'public', any>;
}

interface IAppProviderProps {
  children: ReactNode;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

const { VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY } = validateEnvVariables({
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
});

const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState<
    AlertSeverity | undefined
  >();
  const timeoutDuration = 5000;
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const signIn = () => setIsAuthenticated(true);
  // const signOut = () => setIsAuthenticated(false);

  const showSnackbarMessage = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const showAlertMessage: IShowAlertParams = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);

    setTimeout(() => setAlertMessage(''), timeoutDuration);
  };

  const handleClose = () => {
    setSnackbarMessage('');
    setSnackbarOpen(false);
  };

  const sharedState = {
    // isAuthenticated,
    // signIn,
    // signOut,
    showSnackbarMessage,
    showAlertMessage,
    supabase,
  };

  return (
    <AppContext.Provider value={sharedState}>
      {children}
      <SnackbarComponent
        open={snackbarOpen}
        onClose={handleClose}
        autoHideDuration={3000}
        message={snackbarMessage}
      />
      {alertMessage && (
        <GridComponent
          container
          spacing={2}
          padding={2}
          sx={{ position: 'absolute', left: 0, bottom: 0, width: '100%' }}
        >
          <GridComponent size={3}>
            <AlertComponent severity={alertSeverity}>
              {alertMessage}
            </AlertComponent>
          </GridComponent>
        </GridComponent>
      )}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context)
    throw new Error('useAppContext must be used within an AppProvider');

  return context;
};

export { AppProvider, useAppContext };
