import React from 'react';
import './ReviewItem.css'
import { AiFillDelete, } from 'react-icons/ai';
const ReviewItem = ({ product, handleRemoveFromCart }) => {

    const { id, img, price, name, quantity } = product;


    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p> Price: <span className='orange-text'> ${price}</span></p>
                <p>Order quantity: <span className='orange-text'> ${quantity}</span></p>
            </div>
            <div  >
                <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'><AiFillDelete className='icon'></AiFillDelete></button>
            </div>
        </div>
    );
};

export default ReviewItem;