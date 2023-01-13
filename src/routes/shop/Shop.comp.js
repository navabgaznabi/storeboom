import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../category-preview/CategoryPreviewRoute";
import CategoryRoute from "../category/CategoryRoute";

import './shop.scss';

const ShopComp = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=':category' element={<CategoryRoute />} />
    </Routes>
  );
};

export default ShopComp;
