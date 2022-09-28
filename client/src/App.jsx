import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import axios from 'axios';
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
  const [isLogged, setLogged] = useState(false);

  useEffect(() => {
    axios('/api/v1/auth/verify').then((res) => {
      if (res.status === 200) {
        setLogged(true);
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header isLogged={isLogged} setLogged={setLogged} />
        <Routes>
          <Route path="/cart" element={<Cart />} />
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
