import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { MdShoppingCartCheckout } from 'react-icons/md';

const Orders = () => {


    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromDb(id)

    }
    const cartRemove = () => {
        setCart([])
        deleteShoppingCart();

    }

    console.log(savedCart)
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='card-container'>
                <Cart
                    cart={cart}
                    cartRemove={cartRemove}

                >
                    <Link className='proceed-link' to="/checkout">
                        <button className='proceed-checkout'>
                            <span>Proceed Checkout</span>
                            <MdShoppingCartCheckout></MdShoppingCartCheckout>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;