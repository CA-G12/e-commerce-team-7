import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import fetchCartItem from './Components/Cart/fetch';

import {
  Header,
  LandingCard,
  ProductsPage,
  Cart,
  Signup,
  Login,
  SingleProduct,
} from './Components';

function App() {
  const [cart, setCart] = useState([
    {
      data: 'Nodata',
    },
  ]);
  const [isLogged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchCartItem().then((data) => setCart(data));
  }, []);

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
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route end path="/" element={<LandingCard />} />
          <Route
            path="/signup"
            element={<Signup setLogged={setLogged} setUsername={setUsername} />}
          />
          <Route
            path="/login"
            element={<Login setLogged={setLogged} setUsername={setUsername} />}
          />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<h1>Error</h1>} />
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
