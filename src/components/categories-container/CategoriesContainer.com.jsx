import React from "react";
import "./categories-container.scss";
import CategoryItemComp from "../category-item/category-item.comp";

const CategoriesContainerCom = ({categories}) => {

  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <CategoryItemComp key={category.id} category={category} />;
      })}
    </div>
  );}

export default CategoriesContainerCom;