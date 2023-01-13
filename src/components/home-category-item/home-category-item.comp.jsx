import React from "react";
import { useNavigate } from "react-router-dom";
import "./category-items.scss";

const HomeCategoryItemComp = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const navigateHandler = () => navigate(route);
  return (
    <div className="home-category-container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="home-category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default HomeCategoryItemComp;
