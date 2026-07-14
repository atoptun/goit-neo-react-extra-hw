import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contacts/operations';
import {
  selectDeletingContact,
  selectIsDeleteDialogOpen,
} from '../../redux/contacts/selectors';
import { cancelDeleteContact } from '../../redux/contacts/slice';

function ContactDeleteDialog() {
  const dispatch = useDispatch();
  const contact = useSelector(selectDeletingContact);
  const isOpen = useSelector(selectIsDeleteDialogOpen);

  const handleDelete = async () => {
    if (!contact) return;

    const toastId = toast.loading('⏳ Deleting...');
    try {
      await dispatch(deleteContact(contact.id)).unwrap();
      toast.success('Contact deleted successfully', { id: toastId });
      handleClose();
    } catch (err) {
      const errorMessage =
        typeof err === 'string'
          ? err
          : err?.message || 'Error deleting contact';
      toast.error(errorMessage, { id: toastId });
    }
  };

  const handleClose = () => {
    dispatch(cancelDeleteContact());
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      disableRestoreFocus
      fullWidth
      maxWidth="sm"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">
        Confirm delete contact
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="dialog-description">
          Are you sure you want to delete <strong>{contact?.name}</strong>?
          <br />
          This action cannot be undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button onClick={handleClose} variant="outlined" color="primary">
          Cancel
        </Button>
        <Button
          onClick={handleDelete}
          variant="contained"
          color="error"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default ContactDeleteDialog;
