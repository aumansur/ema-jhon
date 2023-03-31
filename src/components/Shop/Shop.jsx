import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] =useState ([])
    
  useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=> setProducts(data))
  },[]);

  useEffect (()=>{
    console.log(products)
    const storedCart = getShoppingCart()
    const savedCart = [];

    // step 1 get id
    for (const id in storedCart){
        // console.log(id)
        // step number 2
        const addedProduct = products.find(product => product.id ===id)
  
        // step number 3
       if (addedProduct) {
        const quantity = storedCart[id];
       addedProduct.quantity=quantity;
       savedCart.push(addedProduct);
       // step number 4
       console.log(quantity)
       }
       console.log(addedProduct)

    }
    // step number5
    setCart(savedCart)
  },[products])

  const handleeAddToCard = (product) => {
   const newCart= [...cart, product];
   setCart(newCart)
   addToDb(product.id)
  
}

    return (
        <div className='shop-container'>
            <div className="products-container">
               {
               products.map(product => <Product
               key={product.id}
               product ={product}
               handleeAddToCard ={handleeAddToCard}
               ></Product>)
               }
            </div>
            <div className="card-container">
               <Cart 
               cart={cart}
               >
               </Cart>
            </div>
        </div>
    );
};

export default Shop;