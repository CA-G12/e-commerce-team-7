import './style.css';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ setLogged }) {
  const navigate = useNavigate();

  const [userData, setUserdata] = React.useState({
    username: '',
    password: '',
  });

  const validateUserData = () => {
    const { username, password } = userData;
    const passwordRegex = /^[a-zA-Z0-9]{3,30}$/;
    const usernameRegex = /^[a-zA-Z0-9]{3,30}$/;
    if (!usernameRegex.test(username)) {
      toast.error('invalid credentials');
      return false;
    }
    if (!passwordRegex.test(password)) {
      toast.error('invalid credentials');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateUserData()) {
      axios
        .post('/api/v1/auth/login', userData, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setLogged(true);
            navigate('/');
          }
        })
        .catch(() => toast.error('Internal Server Error'));
    }
  };
  return (
    <div className="container">
      <form className="form">
        <label htmlFor="username">
          Username
          <input
            id="username"
            type="text"
            placeholder="fadezak100"
            value={userData.username}
            onChange={(e) => {
              setUserdata((prevState) => ({
                ...prevState,
                username: e.target.value,
              }));
            }}
          />
        </label>

        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            placeholder="********"
            value={userData.password}
            onChange={(e) => {
              setUserdata((prevState) => ({
                ...prevState,
                password: e.target.value,
              }));
            }}
          />
        </label>
      </form>
      <button
        type="submit"
        className="submit-btn"
        onClick={handleSubmit}
        href="/Login"
      >
        Login
      </button>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

Login.propTypes = {
  setLogged: PropTypes.func.isRequired,
};
