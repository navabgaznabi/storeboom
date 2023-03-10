import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../asserts/shopping-bag.svg";

import { CartContext } from "../../context/cart.context";
import "./cart-icon.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className="cart-icon-container"
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemCount}</span>
    </div>
  );
};

export default CartIcon;
