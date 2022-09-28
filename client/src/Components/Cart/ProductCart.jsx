import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function ProductCart({ info, setTotal }) {
  const [productTotalPrice, setProductTotalPrice] = useState(0);
  const [deleteFlag, setFlag] = useState(false);
  const [numberOfProduct, setNumberOfProduct] = useState(1);

  useEffect(() => {
    if (deleteFlag) {
      axios
        .delete(`/api/v1/cart/id?id=${info.id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => res.data)
        .catch((err) => err);
    }
  }, [deleteFlag]);

  useEffect(() => {
    setNumberOfProduct(info.quantity);
    setProductTotalPrice(info.quantity * info.price);
    setTotal((prevTotal) => prevTotal + productTotalPrice);
  }, [info.quantity]);

  return (
    <div className="Cart-Items">
      <div className="image-box">
        <img
          src="https://dummyjson.com/image/i/products/2/3.jpg"
          alt="product "
        />
      </div>
      <div className="about">
        <h1 className="title">{info.name}</h1>
        <h3 className="subtitle">${info.price}</h3>
      </div>
      <div className="counter">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setNumberOfProduct((prev) => prev + 1);
            setProductTotalPrice((prevPrice) => prevPrice + info.price);
            setTotal((prevTotal) => prevTotal + info.price);
          }}
        >
          +
        </button>
        <div className="count">{numberOfProduct}</div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (numberOfProduct > 1) {
              setNumberOfProduct((prev) => prev - 1);
              setProductTotalPrice((prevPrice) => prevPrice - info.price);
              setTotal((prevTotal) => prevTotal - info.price);
            } else {
              setFlag(true);
              setNumberOfProduct(0);
              setTotal(0);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
ProductCart.propTypes = {
  info: PropTypes.objectOf.isRequired,
  setTotal: PropTypes.func.isRequired,
};
