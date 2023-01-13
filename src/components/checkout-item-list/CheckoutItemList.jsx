import React from "react";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-item.scss";

const CheckoutItemList = ({ cartItem }) => {
  console.log('aaaaaa');
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemsToCart, removeItemsFromCart, clearItemFromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemFromCart(cartItem);

  const increaseCartItem = () => {
    addItemsToCart(cartItem);
  };
  
  const decreaserItemFromCart = () => {
    removeItemsFromCart(cartItem);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={decreaserItemFromCart}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseCartItem}>
          &#10095;
        </div>
      </span>
      <span className="price"> ${price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItemList;
