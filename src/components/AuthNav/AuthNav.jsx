import LoginIcon from '@mui/icons-material/Login';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';

import * as styles from './AuthNav.styles.js';

function AuthNav() {
  return (
    <Stack direction="row" spacing={1.5}>
      <Button
        component={NavLink}
        to="/register"
        variant="text"
        color="primary"
        startIcon={<PersonAddAlt1Icon />}
        sx={styles.signUpBtn}
      >
        Sign Up
      </Button>

      <Button
        component={NavLink}
        to="/login"
        variant="outlined"
        color="primary"
        startIcon={<LoginIcon />}
        sx={styles.loginBtn}
      >
        Log In
      </Button>
    </Stack>
  );
}

export default AuthNav;
