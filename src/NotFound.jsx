import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <>
      <div className="md:flex md:h-screen w-full h-full md:flex-row-reverse">
        <div className="md:w-2/5 flex justify-center items-center">
          <img className="flex h-68 md:h-96 w-full" src="https://media.discordapp.net/attachments/937339895591079957/1017731875340566558/angry-pikachu.gif" alt="Error images" />
        </div>
        <div className="md:w-3/5 flex flex-col justify-center items-center p-5 md:space-y-4">
          <h1 className="md:text-5xl text-4xl font-bold">ERROR 404</h1>
          <h1 className="md:text-5xl text-4xl font-bold text-yellow-500">PAGE NOT FOUND</h1>
          <span className="md:text-xl text-gray-500 text-center text-base">We're sorry, but the page you are looking for can't be found. Please go back to the homepage.</span>
          <Link to="/" className="text-xl text-white px-8 py-2 rounded-md bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 m-4">Back To Home</Link>
        </div>
      </div>
    </>
  );
}

export default memo(NotFound);

