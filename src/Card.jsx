import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function Card({ title, id, category, thumbnail, price }) {

  return (
    <Link
      to={'/product/' + id + '/detail'}>
      <div className="max-w-xs bg-white drop-shadow-lg hover:drop-shadow-2xl rounded-md m-3">
        <img className="w-full aspect-square" src={thumbnail} />
        <span className="mt-2 text-gray-700">{category} </span>
        <h1 className="text-xl font-bold flex flex-col">{title}</h1>

        <img
          className="w-28"
          src="https://media.discordapp.net/attachments/937339895591079957/1009454339749847090/red_five_star.jpg?width=1025&height=155"
        />
        <p className="text-xl font-bold py-3 pl-2"> $ {price}</p>

      </div>
    </Link>
  );
}

export default memo(Card);
