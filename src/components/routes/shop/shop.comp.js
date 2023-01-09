import { useContext } from "react";
import { ProductsContext } from "../../../context/Products.context";
import ProductCard from "../../product-cards/ProductCard";
import './shop.scss'
const ShopComp = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {
        products.map((product) => {
          return (
            <div key={product.id}>
              <ProductCard product = {product}></ProductCard>
            </div>
          );
        })}
    </div>
  );
};

export default ShopComp;
