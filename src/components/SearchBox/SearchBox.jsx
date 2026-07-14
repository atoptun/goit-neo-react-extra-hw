import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

function SearchBox() {
  const dispatch = useDispatch();

  const filterValue = useSelector(selectNameFilter) || '';

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box sx={{ width: '100%', my: 2 }}>
      <TextField
        fullWidth
        variant="outlined"
        label="Find contacts by name or phone"
        placeholder="Search contacts..."
        value={filterValue}
        onChange={handleChange}

        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
}

export default SearchBox;
