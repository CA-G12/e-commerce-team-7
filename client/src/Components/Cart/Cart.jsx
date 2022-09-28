import React from "react";
import ProductCart from './ProductCart';
import './style.css';

export default function Cart() {

const [total,setTotal]=React.useState(4);

  return (
    <div className="Cart-Container">
      <div className="Header">
        <h3 className="Heading">Shopping Cart</h3>  
        <button type='button'> Total price $ {total} </button>
      </div>
      <ProductCart total = {total} setTotal = {setTotal} />

    </div>
  );
}
