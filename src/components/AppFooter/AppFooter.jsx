import { Box, Container, Typography } from '@mui/material';

import * as styles from './AppFooter.styles';

function AppFooter() {
  return (
    <Box component="footer" sx={styles.footerBox}>
      <Container>
        <Typography>© {new Date().getFullYear()} All right reserved</Typography>
      </Container>
    </Box>
  );
}
export default AppFooter;
