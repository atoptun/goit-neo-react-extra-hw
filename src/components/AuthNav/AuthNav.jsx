import { Link } from 'react-router-dom';

function AuthNav() {
  return (
    <ul>
      <li>
        <Link to={'/register'}>Signup</Link>
      </li>
      <li>
        <Link to={'/login'}>Login</Link>
      </li>
    </ul>
  );
}
export default AuthNav;
