import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../product-cards/ProductCard';
import './category-preview.scss'

const CategoryPreview = ({title, products}) => {
    return (
        <div className='category-preview-container with-margin'>
            <h2 ><Link className='title' to={title}>{title.toUpperCase()}</Link></h2>   
            <div className='preview'>
                {
                    products.filter((_,idx) => idx < 4).map((product) => 
                    <ProductCard key={product.id} product={product}></ProductCard>
                    )
                }
            </div>
        </div>
    );
}

export default CategoryPreview;
