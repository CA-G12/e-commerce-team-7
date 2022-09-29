import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function ProductCart({ info, setCart, index }) {
  const [numberOfProduct, setNumberOfProduct] = useState(info.quantity);
  useEffect(() => {
    if (!numberOfProduct) {
      axios
        .delete(`/api/v1/cart/id?id=${info.id}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => res.data)
        .then(() => {
          setCart((prevCart) => ({
            total:
              prevCart.total -
              prevCart.items[index].quantity * info.price +
              numberOfProduct * info.price,
            items: prevCart.items.filter((el, i) => index !== i),
          }));
        })
        .catch((err) => err);
    }
  }, [numberOfProduct]);

  useEffect(() => {
    setCart((prevCart) => ({
      total:
        prevCart.total -
        prevCart.items[index].quantity * info.price +
        numberOfProduct * info.price,
      items: prevCart.items.map((el, i) => {
        if (index === i) {
          return { ...el, quantity: numberOfProduct };
        }
        return el;
      }),
    }));
  }, [numberOfProduct]);

  return (
    <div className="Cart-Items">
      <div className="image-box">
        <img src={info.image} alt="product " />
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
            setNumberOfProduct(
              (prevNumberOfProduct) => prevNumberOfProduct + 1
            );
          }}
        >
          +
        </button>
        <div className="count">{numberOfProduct}</div>
        <button
          type="button"
          className="btn"
          onClick={() => {
            setNumberOfProduct(
              (prevNumberOfProduct) => prevNumberOfProduct - 1
            );
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
  setCart: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
