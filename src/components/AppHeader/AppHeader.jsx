import { AppBar as MuiAppBar, Box, Container, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import AppLogo from '../AppLogo/AppLogo';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import * as styles from './AppHeader.styles.js';

function AppHeader() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <MuiAppBar color="primary" position="sticky" elevation={0} sx={styles.base}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <AppLogo />
            <Navigation />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}
export default AppHeader;
