import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

function AddList({ img, price, title, Quantity, Subtotal, onChange, id, onClick, value }) {


  return (
    <>
      <div className=" p-4">
        <div className="hidden lg:flex  p-4 border-b border-gray-500 w-full">
          <div className="text-xl font-medium flex justify-between w-1/2">
            <TiDeleteOutline className="w-8 h-8 text-gray-500 hover:text-red-500" />
            <img className="w-12" src={img} />
            <p className="text-red-500">{title}</p>

          </div>
          <div className="text-xl font-medium w-1/2 px-2 flex justify-between  ">
            <p className="text-gray-700 ">${price}</p>
            <input productId={id} value={value} onChange={onChange} className="p-4 border border-gray-300 w-16 text-center h-6 font-bold " value={Quantity} />
            <p className="text-gray-700 ">${Subtotal}</p>
          </div>
        </div>
      </div>


      <div className="lg:hidden border border-gray-500">
        <div className=" flex items-end border-b border-gray-500 justify-end p-2">
          <button productId={id} onClick={onClick}>
            <TiDeleteOutline className="w-8 h-8 text-gray-500 hover:text-red-500" />
          </button>
        </div>
        <div className="md:hidden flex justify-center p-2 border-b border-gray-500 ">
          <img className="w-16" src={img} />
        </div>
        <div className=" flex justify-between p-2 border-b border-gray-500 ">
          <span className="text-xl font-semibold">Product:</span>
          <span className="text-xl font-normal text-red-500">{title}</span>
        </div>
        <div className=" flex justify-between p-2 border-b border-gray-500 ">
          <span className="text-xl font-semibold">Prace:</span>
          <span className="text-xl font-normal text-red-500">$ {price}</span>
        </div>
        <div className=" flex justify-between p-2 border-b border-gray-500 ">
          <span className="text-xl font-semibold">Quantity:</span>
          <input productId={id} onChange={onChange} className="p-4 border border-gray-300 text-center w-16 h-6 font-bold " value={Quantity} />
        </div>
        <div className=" flex justify-between p-2 ">
          <span className="text-xl font-semibold">Subtotals:</span>
          <span className="text-xl font-normal text-red-500">$ {Subtotal}</span>
        </div>
      </div>


    </>
  );
}

export default AddList


