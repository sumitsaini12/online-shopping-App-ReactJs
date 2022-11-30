import React, { useEffect, useState } from 'react';
import TotalCard from './CardItems/TotalCard';
import ListCart from './CardItems/ListCart';
import Loading from './Loading';
import { withAlert, withCart } from './withProvider';

function AddToCart({ cart, updateCart, setAlert }) {

  // const [loading, setLoading] = useState(true);
  const [quantityMap, setQuantityMap] = useState({});


  const cartToQuantityMap = () => cart.reduce(
    (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity })
    , {})

  useEffect(() => {
    setQuantityMap(cartToQuantityMap());
  }, [cart]);


  const Data = cart.map(p => {
    return {
      id: p.product.id,
      title: p.product.title,
      price: p.product.price,
      img: p.product.thumbnail,
      Subtotal: p.product.price,
      quantity: (quantityMap[p.product.id] || cart.quantity),
    };
  });

  const Total = cart.map(p => {
    return p.product.price * p.quantity
  });

  const TotalPrice = Total.reduce((previous, current) => {
    return previous + current;
  }, 0);

  const handleRomove = (productId) => {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
    
    setAlert({ type: "Info", message: "Remove cart successfully!" });
  };

  const handleChange = (newValue, productId) => {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  };

  const myUpdataCart = () => {
    updateCart(quantityMap);
    setAlert({ type: "Info", message: "Updata cart successfully!" });
  };

  return (
    <>
      <div className="w-full p-4 bg-gray-200 ">
        <div className="h-full max-w-6xl p-4 bg-white mx-auto">
          <ListCart updataCart={myUpdataCart} remove={handleRomove} onChange={handleChange} data={Data} localCart={quantityMap} />
          <div className="w-full lg:py-2 flex">
            <div className="hidden lg:flex w-1/2" />
            <div className="lg:w-1/2 w-full lg:flex justify-end items-end">
              <TotalCard TotalPrice={TotalPrice} />
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withAlert(withCart(AddToCart));
