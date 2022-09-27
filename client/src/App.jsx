import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Header,
  LandingCard,
  ProductsPage,
  Signup,
  SingleProduct,
  Login,
} from './Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/cart" element={<SingleProduct />} />
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
