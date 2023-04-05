import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  useEffect(() => {
    console.log(products)
    const storedCart = getShoppingCart()
    const savedCart = [];

    // step 1 get id
    for (const id in storedCart) {
      // console.log(id)
      // step number 2
      const addedProduct = products.find(product => product.id === id)

      // step number 3
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
        // step number 4
        console.log(quantity)
      }
      console.log(addedProduct)

    }
    // step number5
    setCart(savedCart)
  }, [products])
  const cartRemove = () => {
    setCart([])
    deleteShoppingCart()
  }
  const handleeAddToCard = (product) => {
    let newCart = [];
    const exists = cart.find(pd => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];

    }
    else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id)
      newCart = [...remaining, exists];


    }



    setCart(newCart)
    addToDb(product.id)

  }

  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleeAddToCard={handleeAddToCard}
          ></Product>)
        }
      </div>
      <div className="card-container">
        <Cart
          cart={cart}
          cartRemove={cartRemove}
        >
          <Link className='proceed-link' to="/orders">
            <button className='proceed-checkout'>
              <span>Review Order</span>
              <AiOutlineArrowRight></AiOutlineArrowRight>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;