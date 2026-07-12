import { useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import { logIn } from '../../redux/auth/operators';

function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = creds => {
    dispatch(logIn(creds));
  };

  return (
    <>
      <div>LoginPage</div>
      <LoginForm onSubmit={handleSubmit} />
    </>
  );
}
export default LoginPage;
