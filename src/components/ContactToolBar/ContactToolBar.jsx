import AddIcon from '@mui/icons-material/Add';
import { Box, Button, Container, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { newContact } from '../../redux/contacts/slice';
import SearchBox from '../SearchBox/SearchBox';
import * as styles from './ContactToolBar.styles.js';

function ContactToolBar() {
  const dispatch = useDispatch();
  const handleNewContact = () => {
    dispatch(newContact());
  };

  return (
    <Container sx={{ py: 4 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} sx={styles.baseBox}>
        <Box sx={styles.searchWrapper}>
          <SearchBox />
        </Box>

        <Button
          variant="contained"
          onClick={() => handleNewContact()}
          startIcon={<AddIcon />}
          sx={styles.addBtn}
        >
          Add New Contact
        </Button>
      </Stack>
    </Container>
  );
}
export default ContactToolBar;
