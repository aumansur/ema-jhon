import React from 'react';
import './Cart.css'
import { AiOutlineDelete } from 'react-icons/ai';

const Cart = ({ cart, cartRemove, children }) => {

    // const cart = props.cart



    let total = 0;
    let totalShipping = 0;
    let quantity = 0;



    for (const product of cart) {
        product.quantity = quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;



    }

    const tax = total * 7 / 100;
    const grandTotal = total + totalShipping + tax;


    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items:{quantity}</p>
            <p>Total Price:${total.toFixed(2)}</p>
            <p>Total shipping:${totalShipping.toFixed(2)}</p>
            <p>Tax:${tax.toFixed(2)} </p>
            <h6>Grand Total:${grandTotal.toFixed(2)} </h6>
            <button onClick={cartRemove} className='clear-cart'>
                <span>Clear Cart</span>
                <AiOutlineDelete></AiOutlineDelete>
            </button>
            {children}

        </div>
    );
};

export default Cart;