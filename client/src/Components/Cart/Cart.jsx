import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductCart from './ProductCart';
import './style.css';

export default function Cart({ cart }) {
  const [total, setTotal] = useState(0);
  return (
    <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <button type="button"> Total price ${total}</button>
      </div>

      {cart.length &&
        cart.map((ele) => (
          <ProductCart key={ele.id} info={ele} setTotal={setTotal} />
        ))}
    </div>
  );
}
Cart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
