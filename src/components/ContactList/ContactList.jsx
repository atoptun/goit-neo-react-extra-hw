import { useSelector } from 'react-redux';

import {
  selectError,
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

function ContactList() {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!isLoading && !error && filteredContacts.length === 0) {
    return <p className={styles.emptyMessage}>No contacts found...</p>;
  }

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
