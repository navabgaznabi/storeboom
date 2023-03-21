import React from "react";
import ProductCard from "../../components/product-cards/ProductCard";

const products = [
    {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160,
    },
    {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280,
    },
    {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25,
    },
    {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25,
    },
];
const BestSelling = () => {
    return (
        <>
            <div className="category-preview-container pop-items with-margin">
                <div className="section-heading-wrapper">
                    <div className="section-sub-heading">POPULAR PRODUCTS</div>
                    <div className="section-heading">Best Selling</div>
                </div>
                <div className="preview">
                    {products
                        .filter((_, idx) => idx < 4)
                        .map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            ></ProductCard>
                        ))}
                </div>
            </div>
        </>
    );
};

export default BestSelling;
