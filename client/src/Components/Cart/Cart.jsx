import PropTypes from 'prop-types';
import ProductCart from './ProductCart';
import './style.css';

export default function Cart({ cart, setCart }) {
  return (
    <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>
        <button type="button"> Total price ${cart.total}</button>
      </div>
      {cart.items.length
        ? cart.items.map((ele, i) => (
            <ProductCart key={ele.id} info={ele} setCart={setCart} index={i} />
          ))
        : 'You have nothing in'}
    </div>
  );
}
Cart.propTypes = {
  cart: PropTypes.objectOf.isRequired,
  setCart: PropTypes.func.isRequired,
};
