import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactDeleteDialog from '../../components/ContactDeleteDialog/ContactDeleteDialog';
import ContactEditDialog from '../../components/ContactEditDialog/ContactEditDialog';
import ContactList from '../../components/ContactList/ContactList';
import ContactToolBar from '../../components/ContactToolBar/ContactToolBar';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';

function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box>
      <ContactToolBar />

      {isLoading && !error && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {!isLoading && error && (
        <Typography color="error" sx={{ my: 2, textAlign: 'center' }}>
          Error: {error}
        </Typography>
      )}

      <ContactList />
      <ContactEditDialog />
      <ContactDeleteDialog />
    </Box>
  );
}
export default ContactsPage;
