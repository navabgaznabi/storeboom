import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import Button from "../button/Button.comp";
import CartItem from "../cart-item/CartItem";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems &&
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem} ></CartItem>;
          })}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;