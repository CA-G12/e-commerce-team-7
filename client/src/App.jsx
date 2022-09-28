// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, LandingCard, ProductsPage, Cart } from './Components';
import './App.css';

function App() {
  // const [cart ,SetCart]= React.useState([]);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route end path="/" element={<LandingCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
