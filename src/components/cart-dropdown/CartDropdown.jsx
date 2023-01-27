import React, {useRef} from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";

import Button from "../button/Button.comp";
import CartItem from "../cart-item/CartItem";

import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const catMenu = useRef(null);

  const closeOpenMenus = (e) => {
    if (catMenu.current && isCartOpen && !catMenu.current.contains(e.target)) {
      setIsCartOpen(false);
    }
  };
  document.addEventListener("mousedown", closeOpenMenus);

  const navigate = useNavigate();
  const checkOutHandler = () => {
    navigate("/checkout");
  };
  return (
      <div ref={catMenu} className="cart-dropdown-container" >
      <div className="cart-items">
        {cartItems &&
          cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>;
          })}
      </div>
      <Button onClick={checkOutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
