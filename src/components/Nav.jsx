import { useAuthContext } from '../features/Auth.context';
import { CustomNavLink } from './CustomNavLink';

export function Nav() {
  const { user, logout } = useAuthContext();
  return (
    <nav className='navi'>
      <ul>
        <li className='home'>
          <CustomNavLink to="/">
            Home
          </CustomNavLink>
        </li>

        {user && (
          <li className='welcome'>
            Welcome, <strong>{user.firstName}! </strong>
            <a className='logout'
              href="/"
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
            >
              Logout
            </a>
          </li>
        )}
        {!user && (
          <>
            <li className='loginNav' >
              <CustomNavLink to="/login">Login</CustomNavLink>
            </li>
            <li className='registerNav'>
              <CustomNavLink to="/register">
                Register
              </CustomNavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
