import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import Card from '../ProductCard/Card';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({
    min: 0,
    max: 1000,
  });
  // const [categories, setCategories] = useState([]);
  const categories = ['SMART PHONES', 'smart watch', 'laptops'];
  useEffect(() => {
    axios
      .get('/api/v1/product')
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-page">
      <div className="pagination">
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
      </div>
      <div className="product-container">
        {products.map((ele) => (
          <Card product={ele} key={ele.id} />
        ))}
      </div>
      <div className="filters">
        <div className="price">
          <h3 className="price-title">Price</h3>
          <label htmlFor="min-price">
            Min Price
            <input
              // onMouseUp={(e) => {

              // }}
              type="range"
              min="0"
              max="1000"
              id="min-price"
              value={price.min}
              onChange={(e) => setPrice({ ...price, min: e.target.value })}
            />
          </label>
          <label htmlFor="max-price">
            Max Price
            <input
              type="range"
              min="0"
              max="1000"
              id="max-price"
              value={price.max}
              onChange={(e) => {
                setPrice((prev) => {
                  // eslint-disable-next-line eqeqeq
                  if (prev.max != e.target.value) {
                    return { ...prev, max: e.target.value };
                  }
                  return prev;
                });
              }}
            />
          </label>
        </div>
        <div className="categories">
          <h3 className="categories-title">Categories</h3>
          {categories.map((ele) => (
            <label htmlFor={ele} key={ele}>
              {ele}
              <input type="radio" id={ele} name="categories" />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
