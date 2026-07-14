import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import { addContact, updateContact } from '../../redux/contacts/operations';
import {
  selectEditingContact,
  selectIsEditDialogOpen,
} from '../../redux/contacts/selectors';
import { cancelEditContact } from '../../redux/contacts/slice';
import ContactForm from '../ContactForm/ContactForm';

const FORM_ID = 'contact-dialog-form';

function ContactEditDialog() {
  const dispatch = useDispatch();

  const isEditDialogOpen = useSelector(selectIsEditDialogOpen);
  const editingContact = useSelector(selectEditingContact);
  const isEditing = !!editingContact;

  const currentContact = {
    id: editingContact?.id || '',
    name: editingContact?.name || '',
    number: editingContact?.number || '',
  };

  const handleSaveContact = async contact => {
    const contactData = { ...contact };
    const toastId = toast.loading('⏳ Saving...');
    try {
      if (editingContact) {
        await dispatch(updateContact(contactData)).unwrap();
        toast.success('Contact saved successfully', { id: toastId });
      } else {
        await dispatch(addContact(contactData)).unwrap();
        toast.success('Contact added successfully', { id: toastId });
      }
      dispatch(cancelEditContact());
    } catch (err) {
      const errorMessage =
        typeof err === 'string' ? err : err?.message || 'Error saving contact';
      toast.error(errorMessage, { id: toastId });
    }
  };

  const handleCloseModal = () => {
    dispatch(cancelEditContact());
  };

  return (
    <Dialog
      open={isEditDialogOpen}
      onClose={handleCloseModal}
      disableRestoreFocus
      fullWidth
      maxWidth="sm"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <DialogTitle id="dialog-title">
        {isEditing ? 'Edit contact' : 'Add new contact'}
        <IconButton
          onClick={handleCloseModal}
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

      <DialogContent id="dialog-description">
        <ContactForm
          contact={currentContact}
          onSubmit={handleSaveContact}
          formId={FORM_ID}
        ></ContactForm>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        <Button onClick={handleCloseModal} variant="outlined" color="secondary">
          Cancel
        </Button>
        <Button type="submit" form={FORM_ID} variant="outlined" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default ContactEditDialog;
