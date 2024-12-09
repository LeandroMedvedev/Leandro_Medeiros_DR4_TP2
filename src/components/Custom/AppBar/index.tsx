import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { IconButtonComponent, BoxComponent } from '../..';
import { IAppBarProps } from '../../../interfaces';

const AppBarComponent: React.FC<IAppBarProps> = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButtonComponent
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{
            position: 'relative',
            zIndex: '2',
          }}
          onClick={() => navigate('/')}
        >
          <ArrowBackIcon />
        </IconButtonComponent>
        <Typography
          variant='h6'
          component='div'
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            position: 'absolute',
            left: '0',
            width: '100%',
            zIndex: '1',
          }}
        >
          {props.title}
        </Typography>
        {props.id ? (
          <BoxComponent
            sx={{
              display: { xs: 'flex', md: 'none' },
              position: 'absolute',
              right: '1.5em',
            }}
          >
            <IconButtonComponent
              size='large'
              edge='end'
              color='inherit'
              aria-label='menu'
              sx={{
                position: 'relative',
                zIndex: '2',
              }}
              onClick={props._delete}
            >
              <DeleteIcon />
            </IconButtonComponent>
          </BoxComponent>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
