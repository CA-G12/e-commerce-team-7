import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';

import {
  Header,
  LandingCard,
  ProductsPage,
  Cart,
  Signup,
  Login,
  Error,
  SingleProduct,
} from './Components';

function App() {
  const [cart, setCart] = useState({ total: 0, items: [] });
  const [isLogged, setLogged] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (isLogged) {
      axios
        .get('/api/v1/cart')
        .then((res) => {
          const totalPrice = res.data.reduce(
            (acc, v) => acc + v.price * v.quantity,
            0
          );
          setCart({ total: totalPrice, items: res.data });
        })
        .catch((err) => err);
    }
  }, [isLogged]);

  useEffect(() => {
    axios('/api/v1/auth/verify')
      .then((res) => {
        if (res.status === 200) {
          setLogged(true);
          setUsername(res.data.username);
        }
      })
      .catch(() => toast.info('You can login'));
  }, [cart]);

  return (
    <div className="App">
      <Router>
        <Header isLogged={isLogged} setLogged={setLogged} username={username} />
        <Routes>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route end path="/" element={<LandingCard />} />
          <Route path="/signup" element={<Signup setLogged={setLogged} />} />
          <Route path="/login" element={<Login setLogged={setLogged} />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
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
