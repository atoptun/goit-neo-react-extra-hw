import CallIcon from '@mui/icons-material/Call';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectEditingContact } from '../../redux/contacts/selectors';
import { confirmDeleteContact, editContact } from '../../redux/contacts/slice';
import * as styles from './ContactCard.styles.js';

function ContactCard({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const editingContact = useSelector(selectEditingContact);

  const isEditing = editingContact?.id === id;

  const handleEdit = () => {
    dispatch(editContact(id));
  };

  const handleDelete = async () => {
    dispatch(confirmDeleteContact(id));
  };

  return (
    <Card variant="outlined" sx={styles.cardStyles}>
      <CardContent
        sx={{ p: 1, '&:last-child': { pb: 1 }, minWidth: 0, flexGrow: 1 }}
      >
        <Stack gap={1.5}>
          <Box sx={styles.fieldBoxStyles}>
            <PersonIcon color="action" sx={{ flexShrink: 0 }} />
            <Typography variant="h6" component="p" sx={styles.fieldNameStyles}>
              {name}
            </Typography>
          </Box>

          <Box sx={styles.fieldBoxStyles}>
            <CallIcon color="action" sx={{ flexShrink: 0 }} />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={styles.fieldPhoneStyles}
            >
              {number}
            </Typography>
          </Box>
        </Stack>
      </CardContent>

      <CardActions sx={styles.actionsBoxStyles}>
        <Tooltip title="Edit contact" arrow placement="left">
          <Box component="span" sx={styles.actionButtonBoxStyles}>
            <IconButton
              aria-label="edit contact"
              color="primary"
              onClick={handleEdit}
              disabled={isEditing}
              size="small"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>

        <Tooltip title="Delete contact" arrow placement="left">
          <Box component="span" sx={styles.actionButtonBoxStyles}>
            <IconButton
              aria-label="delete contact"
              color="error"
              onClick={handleDelete}
              disabled={isEditing}
              size="small"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default ContactCard;
