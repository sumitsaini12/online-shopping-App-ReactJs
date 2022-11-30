import React, { useState, useEffect } from 'react';
import ProdectDetailCard from './ProdectDetailCard';
import { useParams } from 'react-router-dom';
import { getProductData } from './api';
import Loading from './Loading';
import { withCart } from './withProvider';

function ProdectDetails({ addToCard }) {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState();

  useEffect(
    () => {
      const p = getProductData(id);

      p.then(response => {
        setProduct(response);
      });
    },
    ['', id]
  );

  return product ? (
    <div className="w-full h-full bg-gray-300 p-4 sm:p-8 md:p-16 lg:p-20">
      <div className="max-w-6xl h-full bg-white p-4 md:p-12 rounded-md space-y-4 drop-shadow-lg">
        <ProdectDetailCard {...product} onAddToCard={addToCard} />
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default withCart(ProdectDetails);
