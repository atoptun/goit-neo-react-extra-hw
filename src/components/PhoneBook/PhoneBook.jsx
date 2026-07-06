import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../../redux/contactsOps';
import { selectError, selectLoading } from '../../redux/contactsSlice';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Heading from '../Heading/Heading';
import SearchBox from '../SearchBox/SearchBox';
import style from './PhoneBook.module.css';

function PhoneBook() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.phoneBook}>
      <Heading bottom={20}>Phonebook</Heading>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <p>Loading ...</p>}
      {!isLoading && error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
}
export default PhoneBook;
