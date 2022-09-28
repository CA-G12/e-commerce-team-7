import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCart({ setTotal, total }) {
  const [nmbProduct, setNmbProduct] = React.useState(1);

  return (
    <div className="Cart-Items">
      <div className="image-box">
        <img
          src="https://dummyjson.com/image/i/products/2/3.jpg"
          alt="product "
        />
      </div>
      <div className="about">
        <h1 className="title">name</h1>
        <h3 className="subtitle">$41</h3>
      </div>
      <div className="counter">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setNmbProduct((prev) => prev + 1);
            const price = total + 4;
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
              const price = total - 4;
              setTotal(price);
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
  setTotal: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
};
