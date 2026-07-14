import HomeIcon from '@mui/icons-material/Home';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import * as styles from './NotFoundPage.styles.js';

function NotFoundPage() {
  return (
    <Container maxWidth="md">
      <Box sx={styles.baseBox}>
        <Box sx={styles.iconBox}>
          <SearchOffIcon sx={{ fontSize: 80 }} />
        </Box>

        <Typography variant="h1" component="h1" sx={styles.nonTypo}>
          404
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 600,
            fontSize: { xs: '1.5rem', sm: '2rem' },
          }}
        >
          Oops! Page not found
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 480, mb: 2 }}
        >
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Let&apos;s get you back on
          track!
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          startIcon={<HomeIcon />}
          sx={styles.goHomeBtn}
        >
          Go back to Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFoundPage;
