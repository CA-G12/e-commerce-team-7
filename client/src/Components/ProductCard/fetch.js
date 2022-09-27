export default function fetchingProduct() {
  return fetch('/api/v1/product', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
