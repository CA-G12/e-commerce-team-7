import './style.css';
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

export default function Signup({ setLogged }) {
  const navigate = useNavigate();

  const [userData, setUserdata] = React.useState({
    username: '',
    password: '',
    avatar: '',
  });
  const [confirmPassword, setConfirmPassword] = React.useState({
    confirmPassword: '',
  });

  const validateUserData = () => {
    const { username, password, avatar } = userData;
    const avatarRegex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/i;
    const passwordRegex = /^[a-zA-Z0-9]{3,30}$/;
    const usernameRegex = /^[a-zA-Z0-9]{3,30}$/;
    if (!usernameRegex.test(username)) {
      toast.error('invalid username');
      return false;
    }
    if (!passwordRegex.test(password)) {
      toast.error('invalid password');
      return false;
    }
    if (!(userData.password === confirmPassword)) {
      toast.error("passwords don't match");
      return false;
    }
    if (!avatarRegex.test(avatar)) toast.error('invalid avatar formate');
    return true;
  };

  const handleSubmit = () => {
    if (validateUserData()) {
      axios
        .post('/api/v1/auth/signup', userData, {
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

        <label htmlFor="confirm-password">
          Confirm Password
          <input
            id="confirm-password"
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        <label htmlFor="avatar">
          Avatar
          <input
            id="avatar"
            type="text"
            placeholder="https://example.com/image.png"
            value={userData.avatar}
            onChange={(e) => {
              setUserdata((prevState) => ({
                ...prevState,
                avatar: e.target.value,
              }));
            }}
          />
        </label>
      </form>
      <button
        type="submit"
        className="submit-btn"
        onClick={handleSubmit}
        href="/signup"
      >
        Signup
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

Signup.propTypes = {
  setLogged: PropTypes.func.isRequired,
};
