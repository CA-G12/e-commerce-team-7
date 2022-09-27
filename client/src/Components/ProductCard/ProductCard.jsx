import './style.css';
import { useEffect, useState } from 'react';
import Card from './Card';
import fetchingProduct from './fetch';

function ProductCard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchingProduct().then((data) => setProducts(data));
  }, []);

  if (products.length) {
    return (
      <div className="product-container">
        {products.map((ele) => (
          <Card product={ele} key={ele.id} />
        ))}
      </div>
    );
  }
  return <h1> No Product </h1>;
}

export default ProductCard;
