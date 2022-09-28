import './style.css';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function Header({ isLogged, setLogged }) {
  const handleLogout = () => {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });
    setLogged(false);
  };
  return (
    <header>
      <div className="navbar">
        <h1 className="header-title">E-commerce</h1>
        <nav>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? 'active' : 'in-active')}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'active' : 'in-active')}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? 'active' : 'in-active')}
          >
            Cart
          </NavLink>
        </nav>
        {!isLogged ? (
          <div className="auth-buttons">
            <button type="button" className="sign-in-btn">
              <Link to="/login">Log In</Link>
            </button>
            <button type="button" className="sign-up-btn">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        ) : (
          <div className="auth-buttons">
            <button type="button" className="log-out-btn">
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  setLogged: PropTypes.func.isRequired,
};
export default Header;
