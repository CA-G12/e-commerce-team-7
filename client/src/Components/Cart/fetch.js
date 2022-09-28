import axios from 'axios';

export default function fetchCartItem() {
  return axios
    .get('/api/v1/cart')
    .then((res) => res.data)
    .catch((err) => err);
}
