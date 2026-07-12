import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import Heading from '../../components/Heading/Heading';
import SearchBox from '../../components/SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectError, selectLoading } from '../../redux/contacts/selectors';
import style from './ContactsPage.module.css';

function ContactsPage() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.phoneBook}>
      <Heading bottom={20}>Contacts</Heading>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p>Loading ...</p>}
      {!isLoading && error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}
export default ContactsPage;
