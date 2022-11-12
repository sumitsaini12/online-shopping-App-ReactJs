import React, { useEffect, useState } from 'react';
import TotalCard from './CardItems/TotalCard';
import ListCard from './CardItems/ListCard';
import { getProductData } from './api';
import Loading from './Loading';

function AddToCart({ cart, UpdateCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [localCart, setLocalCart] = useState(cart);
  const productIds = Object.keys(cart);

  useEffect(
    () => {
      setLocalCart(cart);
    },
    [cart]
  );

  console.log('outSide Product data', products);

  useEffect(
    () => {
      const myProductsPromises = productIds.map(id => {
        return getProductData(id);
      });

      Promise.all(myProductsPromises).then(products => {
        console.log('useEffect data', products);
        setProducts(products);
        setLoading(false);
      });
    },
    [cart]
  );

  const Data = products.map(p => {
    return {
      id: p.data.id,
      title: p.data.title,
      price: p.data.price,
      img: p.data.thumbnail,
      Subtotal: p.data.price
    };
  });

  const handleRemove = event => {
    const productId = event.currentTarget.getAttribute('productid');
    console.log('product to be removed', productId);
    const newCart = { ...cart };
    console.log('before', newCart);
    delete newCart[productId];
    UpdateCart(newCart);
    console.log('after', newCart);
    setLoading(true);
  };

  const handleChange = event => {
    const newValue = +(event.target.value);
    const productId = event.target.getAttribute('productid');
    console.log('handleChandge', newValue, productId);
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  };

  const updateMyCart = () => {
    UpdateCart(localCart);
  };

  console.log('Data', Data);
  console.log('this is products', products);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="w-full bg-gray-200 ">
        <div className="h-full max-w-6xl p-4 bg-white mx-auto">
          <ListCard data={Data} ListRemove={handleRemove} valueChange={handleChange} value={localCart} updataCart={updateMyCart} />
          <div className="w-full lg:py-2 flex">
            <div className="hidden lg:flex w-1/2" />
            <div className="lg:w-1/2 w-full lg:flex justify-end items-end">
              <TotalCard />
              <div />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddToCart;
