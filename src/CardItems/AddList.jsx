import React from 'react';
import { TiDeleteOutline } from 'react-icons/ti';

function AddList({ img, price, title, quantity, Subtotal, onChange, id, remove }) {


  return (
    <>
      <div className="py-2 px-4">
        <div className="hidden lg:flex text-xl font-medium space-x-4 p-4 border-b border-gray-500 w-full">

          <button onClick={() => { remove(id) }}>
            <TiDeleteOutline className="w-8 h-8 text-gray-500 hover:text-red-500" />
          </button>
          <div className="w-16 ml-8">
            <img className="w-16 object-cover" src={img} />
          </div>
          <span className="text-red-500 grow pl-20">{title}</span>
          <span className="text-gray-700 w-28">${price}.00</span>
          <div className="w-32">
            <input type="number" value={quantity} onChange={(event) => { onChange(+event.target.value, id) }} className="pl-4 py-4 border border-gray-300 w-16 text-center h-6 font-bold" />
          </div>
          <span className="text-gray-700 w-28">${Subtotal * quantity}.00</span>

        </div>
      </div>


      <div className="lg:hidden border border-gray-500">
        <div className=" flex items-end border-b border-gray-500 justify-end p-2">
          <button onClick={() => { remove(id) }}>
            <TiDeleteOutline className="w-8 h-8 text-gray-500 hover:text-red-500" />
          </button>
        </div>
        <div className="flex justify-center p-2 border-b border-gray-500">
          <img className="w-16" src={img} />
        </div>
        <div className=" flex justify-between p-2 border-b border-gray-500 ">
          <span className="text-xl font-semibold">Product:</span>
          <span className="text-xl font-medium text-red-500">{title}</span>
        </div>
        <div className=" flex justify-between p-2 border-b border-gray-500 ">
          <span className="text-xl font-semibold">Prace:</span>
          <span className="text-xl font-medium text-red-500">${price}.00</span>
        </div>
        <div className=" flex justify-between p-2 border-b border-gray-500 ">
          <span className="text-xl font-semibold">Quantity:</span>
          <input type="type" onChange={(event) => { onChange(+event.target.value, id) }} className="pl-4 py-4 border border-gray-300 text-center w-16 h-6 font-medium " value={quantity} />
        </div>
        <div className=" flex justify-between p-2 ">
          <span className="text-xl font-semibold">Subtotals:</span>
          <span className="text-xl font-medium text-red-500">${Subtotal * quantity}.00</span>
        </div>
      </div>
    </>
  );
}

export default AddList