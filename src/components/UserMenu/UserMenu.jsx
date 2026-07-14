import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../redux/auth/operators';
import { selectUser } from '../../redux/auth/selectors';
import * as styles from './UserMenu.styles.js';

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Box sx={styles.baseBox}>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={styles.welcomeTypo}
      >
        Welcome,{' '}
        <Box component="span" sx={styles.userTypo}>
          {user.name}
        </Box>
      </Typography>
      <Button
        variant="outlined"
        color="error"
        size="small"
        startIcon={<LogoutIcon />}
        sx={{ textTransform: 'none', borderRadius: 2 }}
        onClick={() => handleLogout()}
      >
        Log Out
      </Button>
    </Box>
  );
}
export default UserMenu;
