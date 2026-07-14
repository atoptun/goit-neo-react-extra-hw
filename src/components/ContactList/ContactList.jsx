import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import ContactCard from '../ContactCard/ContactCard';
import * as styles from './ContactList.styles.js';

function ContactList() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!isLoading && !error && filteredContacts.length === 0) {
    return (
      <Box sx={styles.emptyBox}>
        <ContactPhoneIcon sx={{ fontSize: 60, opacity: 0.5 }} />
        <Typography variant="h6">No contacts found...</Typography>
        <Typography variant="body2">
          Try adding a new contact or clear your search filter.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} sx={{ mt: 2 }}>
      {filteredContacts.map(contact => (
        <Grid
          key={contact.id}
          size={{
            xs: 12,
            sm: 8,
            md: 6,
            lg: 4,
          }}
        >
          <ContactCard contact={contact} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ContactList;
