import './style.css';

import product from './img/product.png';
import ProductCard from '../ProductCard/ProductCard';

function LandingCard() {
  return (
    <>
      <div className="header-landeng">
        <div className="title-product">
          <h4>Exclusive Smart Watch</h4>
          <h1>Let go of the Challenge</h1>
          <div className="paragraph">
            <p>
              Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam
            </p>
            <p>
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              volutpat.
            </p>
            <p>
              Lorem ipsum dolor sit amet,consectetuer adipiscing elit,sed diam
            </p>
            <p>
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              volutpat.
            </p>
          </div>
          <div className="buttons-div">
            <button type="button" className="button-one">
              Get Started <span>&#8594;</span>
            </button>
            {/* <button type="button" className="button-two">
            How it Works <span>&#8594;</span>
          </button> */}
          </div>
        </div>
        <div>
          <img src={product} className="img-product" alt="product" />
        </div>
      </div>
      <ProductCard />
    </>
  );
}

export default LandingCard;
