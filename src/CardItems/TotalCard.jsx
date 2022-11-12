import React from 'react';
import Button from '../Button/Button';

function TotalCard() {


  return (
    <div className="border border-gray-500 rounded-md">
      <div className="p-4 bg-gray-200 font-bold text-3xl border-b border-gray-500">Cart Totals</div>
      <div className="p-4">
        <div className="p-4 border-b border-gray-500 flex w-full">
          <span className="text-xl font-medium w-1/2">Subtotal</span>
          <span className="text-xl font-medium">$</span>
        </div>
        <div className="p-4 border-b border-gray-500 flex w-full">
          <span className="text-xl font-medium w-1/2">Total</span>
          <span className="text-xl font-medium">$</span>
        </div>
        <div className="py-4 flex flex-col justify-center">
          <Button>PROCEED TO CHECKOUT</Button>
        </div>
      </div>

    </div>
  );
}

export default TotalCard