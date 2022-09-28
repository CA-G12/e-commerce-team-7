import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import fetchCartItem from './Components/Cart/fetch';
import {
  Header,
  LandingCard,
  ProductsPage,
  Cart,
  Signup,
  Login,
} from './Components';

import './App.css';

function App() {
  const [cart, setCart] = useState([
    {
      data: 'No data',
    },
  ]);
  useEffect(() => {
    fetchCartItem().then((data) => setCart(data));
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route end path="/" element={<LandingCard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
