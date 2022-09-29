import PropTypes from 'prop-types';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Card({ product }) {
  const navigate = useNavigate();
  const { id, name, price, image, description, category } = product;

  const handleAddToCart = (productId) => {
    axios
      .get(`/api/v1/cart/byProductId/${productId}`)
      .then(({ data }) => {
        if (data.length === 0) {
          axios
            .post('/api/v1/cart', { productId, quantity: 1 })
            .then(() => {
              navigate('/cart');
            })
            .catch((err) => {
              toast.error(err.response.message);
            });
        } else {
          toast.info('Product is already added');
        }
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  return (
    <div className="productCard-card">
      <img src={image} alt="product" />
      <div className="info">
        <p className="productCard-category"> {category} </p>
        <p className="description">{name}</p>
        <p className="description">{description}</p>
        <div className="buy-info">
          <span> ${price}</span>
          <button
            type="button"
            onClick={() => {
              handleAddToCart(id);
            }}
          >
            {' '}
            Add{' '}
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
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
