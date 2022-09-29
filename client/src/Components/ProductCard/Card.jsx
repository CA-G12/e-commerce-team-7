import { useNavigate } from 'react-router-dom';
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Card({ product, setCart }) {
  const navigate = useNavigate();
  const { id, name, price, image, category } = product;

  const handleAddToCart = (productId) => {
    axios
      .get(`/api/v1/cart/byProductId/${productId}`)
      .then(({ data }) => {
        if (data.length === 0) {
          axios
            .post('/api/v1/cart', { productId, quantity: 1 })
            .then((res) => res.data)
            .then(() => {
              setCart((prev) => ({
                total: prev.total + price,
                items: [...prev.items, { id, name, price, image, quantity: 1 }],
              }));
              navigate('/cart');
            })
            .catch((err) => {
              toast.error(err);
            });
        } else {
          toast.info('Product is already added');
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <div className="productCard-card">
      <img src={image} alt="product" />
      <div className="info">
        <p className="productCard-category"> {category} </p>
        <p className="description">{name}</p>
        <div className="buy-info">
          <span> ${price}</span>
          <button
            type="button"
            onClick={() => {
              handleAddToCart(id);
            }}
          >
            Add{' '}
          </button>
          <button onClick={() => navigate(`/product/${id}`)} type="button">
            View
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

export default Card;
