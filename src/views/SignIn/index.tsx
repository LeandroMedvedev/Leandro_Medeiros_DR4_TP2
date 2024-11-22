import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ButtonComponent, DatePickerComponent } from '../../components';
import { useAppContext } from '../../contexts';
import DateTimePickerComponent from '../../components/DateTimePicker';

const SignIn: React.FC = () => {
  const { showSnackbarMessage, showAlertMessage, translate, changeLanguage } =
    useAppContext();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Sign In</h1>
      <ButtonComponent onClick={handleSignIn}>
        {translate('welcome')}
      </ButtonComponent>
      <ButtonComponent onClick={() => changeLanguage('en')}>EN</ButtonComponent>
      <ButtonComponent onClick={() => changeLanguage('es')}>ES</ButtonComponent>
      <ButtonComponent onClick={() => changeLanguage('pt')}>PT</ButtonComponent>

      <DateTimePickerComponent
        ampm={false}
        format='DD/MM/YYYY HH:mm'
        onChange={(value: object) => console.log(value.toString())}
      />
      <DatePickerComponent
        format='DD/MM/YYYY'
        onChange={(value: object) => console.log(value.toString())}
      />
    </div>
  );
};

export default SignIn;
