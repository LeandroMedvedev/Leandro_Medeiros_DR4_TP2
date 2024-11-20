import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAppContext } from '../../contexts';
import { signIn } from '../../services';
import { logo } from '../../assets';
import {
  AvatarComponent,
  BoxComponent,
  ButtonComponent,
  GridComponent,
  TextFieldComponent,
  TypographyComponent,
} from '../../components';
import { handleInputChange } from '../../utils';
import { SignInDataProps } from '../../interfaces';

const SignIn: React.FC = () => {
  const { showSnackbarMessage, showAlertMessage, supabase } = useAppContext();
  const navigate = useNavigate();

  const [data, setData] = useState<SignInDataProps>({
    email: {
      value: '',
      error: null,
      helperText: null,
    },
    password: {
      value: '',
      error: null,
      helperText: null,
    },
  });

  const checkSignIn = async () => {
    let { data: response, error } = await signIn({
      email: data.email.value,
      password: data.password.value,
      supabase,
    });

    if (error && error.message === 'Invalid login credentials') {
      showSnackbarMessage('Credenciais inválidas');
    } else {
      localStorage.setItem('session', JSON.stringify(response.session));
      localStorage.setItem('user', JSON.stringify(response.user));
      navigate('/');
    }
  };

  return (
    <BoxComponent sx={styles.container}>
      <GridComponent
        sx={{ ...styles.boxAdjustment, ...styles.centerBox }}
        container
      >
        <GridComponent sx={styles.centerBox} size={{ xs: 8 }}>
          <AvatarComponent sx={{ width: 180, height: 180 }} src={logo} />
        </GridComponent>

        <GridComponent
          sx={{ ...styles.centerBox, ...styles.marginTop }}
          size={{ xs: 8 }}
        >
          <TypographyComponent variant='h3'>Entrar</TypographyComponent>
        </GridComponent>

        <GridComponent sx={styles.marginTop} size={{ xs: 8 }}>
          <TypographyComponent variant='h5'>
            Seja Bem-vindo!
          </TypographyComponent>
        </GridComponent>

        <GridComponent sx={styles.marginTop} size={{ xs: 8 }}>
          <TextFieldComponent
            label='E-mail'
            fullWidth
            value={data.email.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputChange(setData, 'email', event.target.value);
            }}
          />
        </GridComponent>

        <GridComponent sx={styles.marginTop} size={{ xs: 8 }}>
          <TextFieldComponent
            label='Senha'
            fullWidth
            value={data.password.value}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputChange(setData, 'password', event.target.value);
            }}
            type='password'
          />
        </GridComponent>

        <GridComponent
          sx={{ ...styles.centerBox, ...styles.marginTop }}
          size={{ xs: 8 }}
        >
          <Link to='/signup'>Cadastrar</Link>
        </GridComponent>

        <GridComponent size={{ xs: 8 }}>
          <ButtonComponent
            sx={styles.marginTop}
            fullWidth
            onClick={checkSignIn}
          >
            Enviar
          </ButtonComponent>
        </GridComponent>
      </GridComponent>
    </BoxComponent>
  );
};

const styles = {
  container: {
    height: '100vh',
    paddingTop: 8,
  },
  centerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxAdjustment: {
    padding: 2,
  },
  marginTop: {
    marginTop: 1,
  },
};

export default SignIn;

/*
  <div>
    <h1>Sign In</h1>
    <ButtonComponent onClick={handleSignIn}>Entrar</ButtonComponent>
    <ButtonComponent onClick={() => showSnackbarMessage('Sucesso')}>
      Exibir Snackbar
    </ButtonComponent>
    <ButtonComponent
      onClick={() => showAlertMessage('Mensagem de Alerta', 'error')}
    >
      Exibir Alerta
    </ButtonComponent>

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
*/
