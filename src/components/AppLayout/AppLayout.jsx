import { Box, Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import AppFooter from '../AppFooter/AppFooter';
import AppHeader from '../AppHeader/AppHeader';
import * as styles from './AppLayout.styles.js';

function AppLayout() {
  return (
    <Box sx={styles.baseBox}>
      <AppHeader />

      <Box component={'main'} sx={{ flexGrow: 1, py: 3 }}>
        <Container>
          <Suspense fallback={'loading...'}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>

      <AppFooter />
    </Box>
  );
}
export default AppLayout;
