import "./product-card.scss";

import React from "react";
import ButtonComp from "../button/Button.comp";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Sup" />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComp buttonType="inverted">ADD TO CART</ButtonComp>
    </div>
  );
};

export default ProductCard;
