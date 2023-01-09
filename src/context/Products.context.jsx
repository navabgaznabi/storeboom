import { createContext, useState } from "react";

import PRODUCTS from "../data/shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProider = ({ children }) => {
  const [products] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
