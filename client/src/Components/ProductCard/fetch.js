export default function fetchingProduct() {
  return (
    fetch('/api/v1/product', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err))
  );
}
