import React from 'react';
import PropTypes from 'prop-types';
import ProductCart from './ProductCart';

import './style.css';

export default function Cart({ cart }) {
  const [total, setTotal] = React.useState(0);

  return (
    <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <button type="button"> Total price $ {total} </button>
      </div>

      {!('data' in cart[0])
        ? cart.map((ele) => (
            <ProductCart
              key={ele.id}
              total={total}
              setTotal={setTotal}
              info={ele}
            />
          ))
        : null}
    </div>
  );
}
Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
