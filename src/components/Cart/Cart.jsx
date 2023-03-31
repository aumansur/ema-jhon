import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    // const cart = props.cart
    const { cart} = props
    
let total=0;
let totalShipping= 0;


   for (const product of cart){
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;

    
   }

   const  tax= total*7/100;
   const grandTotal = total + totalShipping+tax;


    return (
        <div className='cart'>
             <h4>Order summary</h4>
                <p>Selected items:{cart.length}</p>
                <p>Total Price:${total.toFixed(2)}</p>
                <p>Total shipping:${totalShipping.toFixed(2)}</p>
                <p>Tax:${tax.toFixed(2)} </p>
                <h6>Grand Total:${grandTotal.toFixed(2)} </h6>

        </div>
    );
};

export default Cart;