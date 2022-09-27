import './style.css';

function SingleProduct() {
  return (
    <div className="product-container">
      <div className="product-info-div">
        <p className="product-category">Products Category</p>
        <h1 className="product-title">Products Name</h1>
        <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
          felis neque. Nullam sed fringilla leo. Nullam et nisl ligula. Sed
          consectetur arcu quis neque ornare, id sagittis diam mattis. Maecenas
          sit amet mollis nibh. Curabitur eget sem nulla. Cras gravida posuere
          ipsum nec lacinia. Donec convallis eleifend aliquet. Integer id
          laoreet diam. Ut sollicitudin erat nec ex cursus, quis molestie eros
          dapibus. Donec quis iaculis nibh, eu condimentum ipsum. Donec sit amet
          eros et elit suscipit laoreet. Maecenas id dolor eu eros fringilla
          faucibus eget pharetra magna. Praesent dictum fringilla diam ut
          viverra. In maximus tellus a pretium lobortis.
        </p>
        <div className="btn-div">
          <a className="btn-class buy-btn" href="/">
            Buy
          </a>
          <a href="/" className="btn-class cart-btn">
            Add to cart!
          </a>
        </div>
      </div>
      <div className="product-img-div">
        <img
          className="img"
          src="https://www.pngmart.com/files/7/IPhone-PNG-Background-Image.png"
          alt="iphone x"
        />
      </div>
    </div>
  );
}

export default SingleProduct;
