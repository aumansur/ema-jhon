import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller,ratings, quantity, price} = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button className='btn-card'>Add to card</button>
        </div>
    );
};

export default Product;