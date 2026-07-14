import { Box } from '@mui/material';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { register } from '../../redux/auth/operators';
import * as styles from './RegistrationPage.styles.js';

function RegistrationPage() {
  const dispatch = useDispatch();

  const onSubmiit = async creds => {
    try {
      await dispatch(register(creds)).unwrap();
      toast.success('Welcome');
    } catch {
      toast.error('Something went wrong...');
    }
  };

  return (
    <Box sx={styles.formWrapper}>
      <RegistrationForm onSubmit={onSubmiit} />
    </Box>
  );
}
export default RegistrationPage;
