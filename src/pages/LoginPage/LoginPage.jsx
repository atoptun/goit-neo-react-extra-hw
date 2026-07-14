import { Box } from '@mui/material';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import { logIn } from '../../redux/auth/operators';
import * as styles from './LoginPage.styles.js';

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = async creds => {
    try {
      await dispatch(logIn(creds)).unwrap();
      toast.success('Nice to see you again');
    } catch {
      toast.error('Something went wrong...');
    }
  };

  return (
    <Box sx={styles.formWrapper}>
      <LoginForm onSubmit={handleSubmit} />
    </Box>
  );
}
export default LoginPage;
