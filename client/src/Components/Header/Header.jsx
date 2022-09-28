import './style.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
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
        <div className="auth-buttons">
          <button type="button" className="sign-in-btn">
            <Link to="/login">Log In</Link>
          </button>
          <button type="button" className="sign-up-btn">
            <Link to="/signup">Sign Up</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
