import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {
  Header,
  LandingCard,
  ProductsPage,
  Cart,
  Signup,
  Login,
} from './Components';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  const [isLogged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    axios('/api/v1/auth/verify')
      .then((res) => {
        if (res.status === 200) {
          setLogged(true);
          setUsername(res.data.username);
        }
      })
      .catch(() => toast.info('You can login'));
  }, []);
  return (
    <div className="App">
      <Router>
        <Header isLogged={isLogged} setLogged={setLogged} username={username} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route end path="/" element={<LandingCard />} />
          <Route path="/signup" element={<Signup setLogged={setLogged} />} />
          <Route path="/login" element={<Login setLogged={setLogged} />} />
        </Routes>
      </Router>
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

export default App;
