import BugReportIcon from '@mui/icons-material/BugReport';
import HelpOutlineIcon from '@mui/icons-material/HelpOutlineOutlined';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { Box, Button, Container, Typography } from '@mui/material';
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

import * as styles from './ErrorPage.styles.js';

function ErrorPage() {
  const error = useRouteError();
  if (import.meta.env.DEV) {
    console.error('Captured Error:', error);
  }

  let title = 'Something went wrong';
  let description = 'An unexpected error occurred. Please try again later.';
  let icon = <BugReportIcon sx={{ fontSize: 80 }} />;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = 'Page Not Found';
      description = "We couldn't find the page you were looking for.";
      icon = <HelpOutlineIcon sx={{ fontSize: 80 }} />;
    } else if (error.status === 500) {
      title = 'Server Error';
      description =
        'Our servers are having a bad day. Please try again shortly.';
    }
  }
  // Connection error
  else if (
    error instanceof TypeError &&
    error?.message &&
    error.message.includes('fetch')
  ) {
    title = 'Connection Error';
    description =
      'Failed to connect to the server. Please check your internet connection.';
    icon = <WifiOffIcon sx={{ fontSize: 80 }} />;
  }

  return (
    <Container maxWidth="md">
      <Box sx={styles.baseBox}>
        <Box sx={styles.iconBox}>{icon}</Box>

        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: 480 }}
        >
          {description}
        </Typography>

        <Button
          component={Link}
          to="/"
          variant="contained"
          size="large"
          sx={{ mt: 2 }}
        >
          Back to Safety
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;
