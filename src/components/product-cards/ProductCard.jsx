import "./product-card.scss";

import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import ButtonComp from "../button/Button.comp";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemsToCart } = useContext(CartContext);

  const addToCartHandler = () => {
    addItemsToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Sup" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComp buttonType="inverted" onClick={addToCartHandler}>
        ADD TO CART
      </ButtonComp>
    </div>
  );
};

export default ProductCard;
