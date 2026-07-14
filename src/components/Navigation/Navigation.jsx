import { Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import * as styles from './Navigation.styles.js';

function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button component={NavLink} to="/" sx={styles.btn}>
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" sx={styles.btn}>
          Contacts
        </Button>
      )}
    </Box>
  );
}
export default Navigation;
