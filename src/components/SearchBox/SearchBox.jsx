import { useId } from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

function SearchBox() {
  const searchId = useId();
  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(changeFilter(value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        placeholder="Search contacts..."
        className={styles.searchField}
        id={searchId}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}
export default SearchBox;
