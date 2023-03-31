import React from 'react';
import './Product.css'
import { FaCartPlus } from "react-icons/fa";

const Product = (props) => {
    
    const {img, name, seller,ratings, quantity, price} = props.product;
    const handleeAddToCard = props.handleeAddToCard
    

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() =>handleeAddToCard(props.product)} className='btn-card'>Add to card {<FaCartPlus/>}</button>
        </div>
    );
};

export default Product;