import React from "react";
import "./category-items.scss";
const CategoryItemComp = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2 className="category-title">{title}</h2>
        <h3 className="category-subtitle">Shop Now</h3>
      </div>
    </div>
  );
};

export default CategoryItemComp;
