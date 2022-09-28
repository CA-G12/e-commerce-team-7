import axios from 'axios';

export default function fetchingProduct() {
  return axios
    .get('/api/v1/product/4')
    .then((res) => res.data)
    .catch((err) => err);
}
