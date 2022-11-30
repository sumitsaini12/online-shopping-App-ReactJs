import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { withAlert } from './withProvider';

function ProdectDetailCard({
  id,
  thumbnail,
  category,
  title,
  price,
  description,
  onAddToCard,
  setAlert
}) {

  const [quantity, setQuantity] = useState(1);

  const onHandleChange = e => {
    setQuantity(e.target.value);
  };

  const decreaseQuantity = () => setQuantity(quantity - 1);
  const IncreaseQuantity = () => setQuantity(quantity + 1);

  const handleAddToCard = () => {
    onAddToCard(id, quantity);
    setQuantity(1);
    setAlert({type: "Success", message: "Product Add To Cart Successfully"});
  };

  useEffect(
    () => {
      setQuantity(1);
    },
    [id]
  );

  return (
    <>
      <div className=" flex">
        <Link
          className=" flex px-6 py-1 bg-red-500 hover:bg-red-700 rounded-full text-white font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
          to="/"
        >
          <TiArrowBack className="w-6 h-6 text-green-500" /> Back
				</Link>
      </div>
      <div className="w-full sm:flex bg-white rounded-md">
        <div className="sm:w-1/2 bg-white">
          <img className="w-full sm:rounded-md" src={thumbnail} />
        </div>
        <div className="sm:w-1/2 bg-white px-4">
          <div>
            <span className="text-base text-gray-500">Home/</span>
            <span className="text-base text-gray-500">{category}/</span>
            <span className="text-base text-gray-500">{title}</span>
          </div>

          <h1 className="sm:text-2xl text-xl text-slate-700 font-medium mt-4">
            {title}
          </h1>

          <div className="sm:text-2xl text-2xl text-neutral-800 font-semibold mt-3">
            ${price}
          </div>
          <p className="text-base text-slate-500">{description}</p>

          <div className="mt-8 flex flex-col sm:flex-row sm:justify-start gap-4 justify-center items-center pb-4 sm:pb-1 ">
            <div className="flex gap-3">
              {quantity > 1 && (
                <button
                  onClick={decreaseQuantity}
                  className="p-2 rounded-md bg-red-500 hover:bg-gray-300 text-white"
                >
                  -
								</button>
              )}
              <input
                value={quantity}
                onChange={onHandleChange}
                className="w-12 rounded-md pl-4 py-1 border border-gray-700 "
              />
              <button
                onClick={IncreaseQuantity}
                className="p-2 rounded-md bg-red-500 hover:bg-gray-300 text-white"
              >
                +
							</button>
            </div>

            <button
              onClick={handleAddToCard}
              className="ml-4 text-white py-2 px-8 rounded-md bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 "
            >
              ADD TO CART
						</button>
          </div>
          <span className="w-full py-3 border-b border-gray-300  flex" />
          <h3 className="text-base text-gray-500">
            category:{' '}
            <span className="text-base text-orange-500">{category}</span>
          </h3>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          {id > 1 && (
            <Link
              className="flex pl-5 pr-8 py-2 bg-orange-500 hover:bg-orange-700 border-4 border-orange-600 rounded-lg text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700"
              to={'/product/' + (id - 1) + '/detail'}
            >
              <MdArrowBack className="w-6 h-6 text-white" /> Previous
						</Link>
          )}
        </div>
        <div>
          <Link
            className="flex pl-8 pr-7 py-2 bg-green-500 hover:bg-green-700 border-4 border-green-600 rounded-lg text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700"
            to={'/product/' + (id + 1) + '/detail'}
          >
            Back <MdArrowForward className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default withAlert(ProdectDetailCard);
