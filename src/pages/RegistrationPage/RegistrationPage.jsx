import { useDispatch } from 'react-redux';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { register } from '../../redux/auth/operators';

function RegistrationPage() {
  const dispatch = useDispatch();

  const onSubmiit = creds => {
    console.info(creds);
    dispatch(register(creds));
  };

  return (
    <>
      <div>RegistrationPage</div>
      <RegistrationForm onSubmit={onSubmiit} />
    </>
  );
}
export default RegistrationPage;
