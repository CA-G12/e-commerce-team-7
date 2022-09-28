import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

function Card({ product }) {
  const navigate = useNavigate();
  const { id, name, price, image, category } = product;
  return (
    <div className="productCard-card">
      <img src={image} alt="product" />
      <div className="info">
        <p className="productCard-category"> {category} </p>
        <p className="description">{name}</p>
        <div className="buy-info">
          <span> ${price}</span>
          <button type="button"> Add </button>
          <button onClick={() => navigate(`/product/${id}`)} type="button">
            View
          </button>
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
