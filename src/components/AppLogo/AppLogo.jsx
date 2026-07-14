import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Box, Link, Typography } from '@mui/material';
import { Link as DomLinkk } from 'react-router-dom';

import * as styles from './AppLogo.styles.js';

function AppLogo() {
  return (
    <Link underline="none" component={DomLinkk} to="/">
      <Box sx={styles.logoBox}>
        <ContactPhoneIcon />
        <Typography variant="h6" sx={styles.logoTypo}>
          PhoneBook
        </Typography>
      </Box>
    </Link>
  );
}
export default AppLogo;
