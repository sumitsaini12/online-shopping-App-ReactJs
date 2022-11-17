import React, { useEffect, useState } from 'react';
import TotalCard from './CardItems/TotalCard';
import ListCart from './CardItems/ListCart';
import { getProductData } from './api';
import Loading from './Loading';

function AddToCart({ cart, UpdateCart }) {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localCart, setLocalCart] = useState(cart);
  const ProductId = Object.keys(cart);


  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);


  useEffect(() => {
    const myProductPromise = ProductId.map(id => {
      return getProductData(id);
    });

    Promise.all(myProductPromise).then((product) => {
      setProduct(product);
      setLoading(false);
    })

  }, [cart]);

  const Data = product.map(p => {
    return {
      id: p.data.id,
      title: p.data.title,
      price: p.data.price,
      img: p.data.thumbnail,
      Subtotal: p.data.price
    };
  });

  const Total = Data.map(p => {
    return p.price * cart[p.id]
  });

  const TotalPrice = Total.reduce((previous, current) => {
    return previous + current;
  }, 0);


  const handleRomove = (productId) => {

    const newCart = { ...cart };
    delete newCart[productId];
    UpdateCart(newCart);
    setLoading(true);
  };

  const handleChange = (newValue, productId) => {
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  };

  const myUpdataCart = () => {
    UpdateCart(localCart);
    setLoading(true);
  };

  if (loading) {
    return (<Loading />)
  };

  return (
    <>
      <div className="w-full p-4 bg-gray-200 ">
        <div className="h-full max-w-6xl p-4 bg-white mx-auto">
          <ListCart updataCart={myUpdataCart} remove={handleRomove} onChange={handleChange} data={Data} cart={cart} localCart={localCart} />
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

export default AddToCart;



// updataCart={updateMyCart}