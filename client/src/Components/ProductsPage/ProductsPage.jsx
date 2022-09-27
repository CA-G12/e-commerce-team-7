import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import Card from '../ProductCard/Card';

function ProductsPage() {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('/api/v1/product')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="product-container">
      {Products.map((ele) => (
        <Card product={ele} />
      ))}
    </div>
  );
}

export default ProductsPage;
