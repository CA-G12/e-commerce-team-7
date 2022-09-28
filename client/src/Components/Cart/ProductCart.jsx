import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function ProductCart({ setTotal, total, info }) {
  const [nmbProduct, setNmbProduct] = React.useState(1);
  const [deleteFlag, setFlag] = React.useState(false);
  useEffect(() => {
    if (deleteFlag) {
      console.log('here');
      axios
        .delete('/api/v1/cart', info.id, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    setTotal((price) => price + info.price * info.quantity);
    setNmbProduct(info.quantity);
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
            setNmbProduct((prev) => prev + 1);
            const price = total + info.price;
            setTotal(price);
          }}
        >
          +
        </button>
        <div className="count">{nmbProduct}</div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            if (nmbProduct > 1) {
              setNmbProduct(nmbProduct - 1);
              const price = total - info.price;
              setTotal(price);
            } else {
              setFlag(true);
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
  total: PropTypes.number.isRequired,
};
