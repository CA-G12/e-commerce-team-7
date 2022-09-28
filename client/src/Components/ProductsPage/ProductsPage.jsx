import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../ProductCard/Card';
import 'react-toastify/dist/ReactToastify.css';

function ProductsPage() {
  const numberOfShownCounts = 10;
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({
    min: 0,
    max: 1000,
  });
  const [productsCount, setProductsCount] = useState(0);
  // const [categories, setCategories] = useState([]);
  const [offset, setOffset] = useState(0);
  const categories = ['SMART PHONES', 'smart watch', 'laptops'];
  useEffect(() => {
    axios
      .get(`/api/v1/product/all/count`)
      .then((res) => {
        setProductsCount(res.data[0].count);
      })
      .catch(() => toast.error('Internal server error'));
  }, []);

  useEffect(() => {
    axios
      .get(`/api/v1/product/${offset}`)
      .then((res) => setProducts(res.data))
      .catch(() => toast.error('Internal server error'));
  }, [offset]);

  const getBtnPaginationNumbers = () => {
    const btnCount = productsCount / numberOfShownCounts;
    const numbersArr = [];
    for (let i = 0; i < btnCount; i += 1) {
      numbersArr.push(i + 1);
    }
    return numbersArr;
  };

  return (
    <div className="product-page">
      <div className="pagination">
        {getBtnPaginationNumbers().map((btn) => (
          <button
            type="button"
            key={btn}
            value={btn}
            onClick={(e) => {
              setOffset((e.target.value - 1) * numberOfShownCounts);
            }}
          >
            {btn}
          </button>
        ))}
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
      <ToastContainer />
    </div>
  );
}

export default ProductsPage;
