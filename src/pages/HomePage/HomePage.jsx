import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import DevicesIcon from '@mui/icons-material/Devices';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

import * as styles from './HomePage.styles.js';

const FEATURES = [
  {
    icon: <SpeedIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Lightning Fast',
    description:
      'Instant search, filtering, and seamless editing of your contacts without page reloads.',
  },
  {
    icon: <SecurityIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Safe & Secure',
    description:
      'Your contacts are securely saved on our server, so you will never lose important numbers.',
  },
  {
    icon: <DevicesIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Responsive Design',
    description:
      'Manage your phonebook anywhere. Works perfectly on smartphones, tablets, and PCs.',
  },
];

function HomePage() {
  return (
    <Box sx={styles.baseBox}>
      <Box sx={styles.bgBox}>
        <Container maxWidth="md">
          <Stack
            sx={{
              spacing: 4,
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Box sx={styles.mainIconBox}>
              <ContactPhoneIcon sx={{ fontSize: 55 }} />
            </Box>

            <Typography variant="h2" component="h1" sx={styles.nameTypo}>
              Your Ultimate{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Contact Book
              </Box>
            </Typography>

            <Typography
              variant="h5"
              color="text.secondary"
              sx={styles.subTitleTypo}
            >
              Keep your friends, family, and colleagues organized in one modern,
              fast, and secure place. No more messy papers.
            </Typography>

            <Button
              component={Link}
              to="/contacts"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={styles.getStartedBtn}
            >
              Get Started
            </Button>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 }, flexGrow: 1 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}
        >
          Why choose our Contact Book?
        </Typography>

        <Grid container spacing={4}>
          {FEATURES.map((feature, idx) => (
            <Grid key={idx} sx={{ xs: 12, md: 4 }}>
              <Paper elevation={0} variant="outlined" sx={styles.featurePaper}>
                <Box sx={{ display: 'inline-flex', mb: 1 }}>{feature.icon}</Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
