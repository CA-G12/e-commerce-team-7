import PropTypes from 'prop-types';
import './style.css';

function Card({ product }) {
  const { name, price, image, description } = product;
  return (
    <div className="product-card">
      <img src={image} alt="product" />
      <div className="info">
        <p className="product-category"> {name} </p>
        <p className="description">{description}</p>
        <div className="buy-info">
          <span> ${price}</span>
          <button type="button"> Add </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    name: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    galary: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;
