import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './style.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function SingleProduct() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`/api/v1/product/id?id=${id}`).then(({ data }) => {
      setProduct(data);
    });
  }, []);

  return (
    <>
      <div className="product-container">
        <div className="product-info-div">
          {product && <p className="product-category">{product[0].category}</p>}
          {product && <h1 className="product-title">{product[0].name}</h1>}
          {product && (
            <p className="product-description"> {product[0].description}</p>
          )}
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
          {product && (
            <img className="img" src={product[0].image} alt="iphone x" cursor />
          )}
        </div>
      </div>
      <div className="gallery">
        <h3 className="gallery-title">Gallery: </h3>
        <Carousel className="carousell">
          {product &&
            product[0].galary
              .filter((filterElement) => {
                if (filterElement.length > 10) return filterElement;
                return false;
              })
              .map((item) => (
                <div key={`${item + id}`}>
                  <img alt="product" src={item} />
                </div>
              ))}
        </Carousel>
      </div>
    </>
  );
}

export default SingleProduct;
