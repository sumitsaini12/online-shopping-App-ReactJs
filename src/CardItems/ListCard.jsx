import React from 'react';
import Button from '../Button/Button';
import AddList from './AddList';

function ListCard({ data, updataCart, ListRemove, value, valueChange, ...rest }) {

  console.log("id is ", data.id);
  return (
    <>

      <div className="hidden lg:flex flex-col border border-gray-500 rounded-md">
        <div className="p-4 bg-gray-200 border-b border-gray-500 flex">
          <div className="w-1/3 flex justify-center items-center font-bold text-xl"></div>
          <div className="w-2/3 flex justify-between px-3">
            <span className="font-bold text-xl">Product</span>
            <span className="font-bold text-xl">Price</span>
            <span className="font-bold text-xl">Quantity</span>
            <span className="font-bold text-xl">Subtotal</span>
          </div>
        </div>

        {data.map(List => {
          return <AddList key={List.id} {...List} {...rest} onClick={ListRemove} onChange={valueChange} />;
        })}

        <div className="p-4 flex justify-between ">

          <input className="p-2 text-xl font-medium placeholder:text-xl border border-gray-600" placeholder="Coupon code" />
          <Button>APPLY COUPON</Button>
          <Button productId={data.id} value={value} theme="secondary" onClick={updataCart}>UPDATA CART</Button>
        </div>
      </div>


      <div className="lg:hidden">
        {data.map(List => {
          return <AddList key={List.id} {...List} />;
        })}
        <div className="border border-gray-500">
          <div className="py-4 px-2 flex-col md:flex-row space-y-2 flex justify-between ">
            <input className="p-1 text-xl font-medium placeholder:text-xl border border-gray-600" placeholder="Coupon code" />
            <Button>APPLY COUPON</Button>
          </div>
          <div className="flex flex-col my-3 mx-2">
            <Button onClick={updataCart} theme="secondary">UPDATA CART</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard