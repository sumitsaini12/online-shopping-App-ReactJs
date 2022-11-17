import React from 'react';
import Button from '../Button/Button';
import AddList from './AddList';


function ListCart({ data, localCart, updataCart, ...rest }) {

  return (
    <>
      <div className="hidden lg:flex flex-col border border-gray-500 rounded-md">
        <div className="flex px-4 py-2 space-x-8 bg-gray-200 border border-gray-500">
          <span className="font-bold ml-56 text-xl grow">Product</span>
          <span className="font-bold w-24 text-xl">Price</span>
          <span className="font-bold w-32 text-xl">Quantity</span>
          <span className="font-bold w-28 text-xl">Subtotal</span>
        </div>

        {data.map(List => {
          return <AddList {...rest} quantity={localCart[List.id]} key={List.id} {...List} />;
        })}

        <div className="p-4 flex justify-between">
          <input className="p-2 text-xl font-medium placeholder:text-xl border border-gray-600" placeholder="Coupon code" />
          <Button>APPLY COUPON</Button>
          <Button onClick={updataCart} productId={data.id} theme="secondary">UPDATA CART</Button>
        </div>
      </div>


      <div className="lg:hidden">
        {data.map(List => {
          return <AddList {...rest} quantity={localCart[List.id]} key={List.id} {...List} />;
        })}
        <div className="border border-gray-500">
          <div className="py-4 px-2 flex-col md:flex-row space-y-2 flex justify-between ">
            <input className="p-1 text-xl font-medium placeholder:text-xl border border-gray-600" placeholder="Coupon code" />
            <Button >APPLY COUPON</Button>
          </div>
          <div className="flex flex-col my-3 mx-2">
            <Button onClick={updataCart} theme="secondary">UPDATA CART</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCart