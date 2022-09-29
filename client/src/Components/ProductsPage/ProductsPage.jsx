import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import Card from '../ProductCard/Card';
import 'react-toastify/dist/ReactToastify.css';

function ProductsPage({ setCart }) {
  const numberOfShownCounts = 10;
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState({
    min: 0,
    max: 5000,
  });
  const [productsCount, setProductsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [offset, setOffset] = useState(0);
  const [currentCategory, setCurrentCategory] = useState('all');
  useEffect(() => {
    axios
      .get('/api/v1/product/categories')
      .then(({ data }) => setCategories([{ category: 'all' }, ...data]))
      .catch(() => toast.error('Internal server error'));
  }, []);

  useEffect(() => {
    axios
      .get(
        `api/v1/product/filterAll?min=${price.min}&max=${price.max}&category=${currentCategory}&offset=${offset}`
      )
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => toast.error('Internal server error'));
  }, [offset]);

  useEffect(() => {
    axios
      .get(
        `api/v1/product/filterAll?min=${price.min}&max=${price.max}&category=${currentCategory}&offset=0`
      )
      .then(({ data }) => {
        setProducts(data);
      })
      .catch(() => toast.error('Internal server error'));

    axios
      .get(
        `/api/v1/product/all/count?min=${price.min}&max=${price.max}&category=${currentCategory}`
      )
      .then((res) => {
        setProductsCount(res.data[0].count);
      })
      .catch(() => {
        toast.error('Internal server error');
      });
  }, [price, currentCategory]);

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
        {products.length > 0
          ? products.map((ele) => (
              <Card product={ele} key={ele.id} setCart={setCart} />
            ))
          : 'No Products'}
      </div>
      <div className="filters">
        <h3 className="price-title">Price: </h3>
        <div className="price">
          <label htmlFor="min-price">
            Min Price
            <input
              type="range"
              min="0"
              max="5000"
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
              max="5000"
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
        <h3 className="categories-title">Categories: </h3>
        <div className="categories">
          {categories.map((ele) => (
            <label htmlFor={ele.category} key={ele.category}>
              {ele.category}
              <input
                type="radio"
                className="radio-btn"
                id={ele.category}
                value={ele.category}
                name="categories"
                checked={currentCategory === ele.category}
                onChange={(e) => setCurrentCategory(e.target.value)}
              />
            </label>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductsPage;
