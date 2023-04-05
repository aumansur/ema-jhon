import { getShoppingCart } from "../utilities/fakedb";

const cardProductLoader = async () => {
  const loadedProduct = await fetch("products.json");
  const products = await loadedProduct.json();
  // if card data is an database, you have to to async await fetch

  const storedCart = getShoppingCart();
  const saveCart = [];
  console.log(storedCart);
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      saveCart.push(addedProduct);
    }
  }
  // if you need to send two things

  console.log(products);
  return saveCart;
};

export default cardProductLoader;
