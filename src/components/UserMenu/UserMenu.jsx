import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../../redux/auth/operators';
import { selectUser } from '../../redux/auth/selectors';

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      Welcome, {user.name}{' '}
      <button onClick={() => handleLogout()}>Log out</button>
    </div>
  );
}
export default UserMenu;
