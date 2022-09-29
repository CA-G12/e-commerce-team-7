import './style.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header({ isLogged, setLogged, username }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios.get('/api/v1/auth/logout').then(() => {
      setLogged(false);
      navigate('/');
    });
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
            <Link to="/login" className="aLink">
              <button type="button" className="sign-in-btn">
                Log In
              </button>
            </Link>
            <Link to="/signup" className="aLink">
              <button type="button" className="sign-up-btn">
                Sign Up
              </button>
            </Link>
          </div>
        ) : (
          <>
            <p>Hi {username}</p>
            <div className="auth-buttons">
              <Link to="/" onClick={handleLogout} className="aLink">
                <button type="button" className="log-out-btn">
                  Logout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
