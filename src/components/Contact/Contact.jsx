import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from '../../redux/contactsOps';
import { editContact, selectEditingContact } from '../../redux/contactsSlice';
import styles from './Contact.module.css';

function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const editingContact = useSelector(selectEditingContact);

  const isEditing = editingContact?.id === id;

  const handleEdit = id => {
    dispatch(editContact(id));
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.infoWrapper}>
        <div className={styles.infoRow}>
          <Icon icon="material-symbols:person" className={styles.icon} />
          <p className={styles.name}>{name}</p>
        </div>

        <div className={styles.infoRow}>
          <Icon icon="material-symbols:call" className={styles.icon} />
          <p className={styles.number}>{number}</p>
        </div>
      </div>

      <div className={styles.actionsWrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={() => handleEdit(id)}
          disabled={isEditing}
        >
          Edit
        </button>

        <button
          type="button"
          className={clsx(styles.button, styles.delete)}
          onClick={() => handleDelete(id)}
          disabled={isEditing}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Contact;
