import React from "react";
import ProductCard from "../../components/product-cards/ProductCard";
import "./popular-products.scss";

const products = [
    {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220,
    },
    {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35,
    },
    {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18,
    },
    {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14,
    },
];
const PopularProducts = () => {
    return (
        <>
            <div className="category-preview-container pop-items with-margin">
                <div className="section-heading-wrapper">
                    <div className="section-sub-heading">POPULAR PRODUCTS</div>
                    <div className="section-heading">Trending Now</div>
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

export default PopularProducts;
