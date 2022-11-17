import React, { memo, useState } from 'react';
import { HiOutlineShoppingBag, HiOutlineHome } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import Button from './Button/LoginButton';
import { FiMenu } from 'react-icons/fi';
import { MdClear } from "react-icons/md";

function Header({ productCount }) {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <div className=" z-10 relative py-2 bg-white  drop-shadow-2xl">
      <div className="hidden md:flex max-w-6xl px-4  justify-between items-center mx-auto ">
        <img
          className="h-16"
          src="https://media.discordapp.net/attachments/937339895591079957/1016232781564608613/amazon_icons.png"
        />
        <div className="flex space-x-4 justify-center items-center">
          <Link to="/">
            <HiOutlineHome className="w-8 h-8 text-blue-500  hover:text-green-400" />
          </Link>
          <Link to="/login">
            <Button theme="secondary">Login</Button>
          </Link>
          <Link to="/signUp">
            <Button>Sign Up</Button>
          </Link>

          <Link to="/cart" >
            <div className="relative flex items-center justify-center">
              {' '}
              <HiOutlineShoppingBag className="text-4xl text-red-400 hover:text-red-600" />
              {productCount > 0 && (
                <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-500 hover:bg-transparent border hover:border-red-500 flex items-center justify-center">
                  <p className="text-sm hover:text-red-500  text-white font-semibold ">
                    {productCount}
                  </p>
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>




      <div className="md:hidden flex justify-between my-4">
        <img
          className="h-16"
          src="https://media.discordapp.net/attachments/937339895591079957/1016232781564608613/amazon_icons.png"
        />
        <div className="flex justify-center items-center gap-3 ">

          <Link
          to="/"
          >
            <div className="relative   flex items-center justify-center">
              {' '}
              <HiOutlineShoppingBag className="text-4xl text-red-400 hover:text-red-600" />
              {productCount > 0 && (
                <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-red-500 hover:bg-transparent border hover:border-red-500 flex items-center justify-center">
                  <p className="text-sm hover:text-red-500  text-white font-semibold ">
                    {productCount}
                  </p>
                </div>
              )}
            </div>
          </Link>
          <div className='md:hidden mr-4 md:mr-4 sm:mr-2' onClick={handleClick}>
            {!nav ? <FiMenu className='w-8 h-8' /> : <MdClear className='w-8 h-8' />}

          </div>
        </div>

      </div>
      <div className={!nav ? 'hidden' : ' md:hidden font-normal flex-col absolute bg-white w-full px-8'}>
        <ul >
          <li className='border-b-2 p-4 border-zinc-300 w-full cursor-pointer'><Link to="/">Home</Link></li>
          <li className='border-b-2 p-4 border-zinc-300 w-full cursor-pointer'><Link to="/">All Prodects</Link></li>
          <li className='border-b-2 p-4 border-zinc-300 w-full cursor-pointer'>About</li>
        </ul>

        <div className="py-4">
          <Link to="/login">
            <div className="flex flex-col py-4">
              <Button theme="secondary">Login</Button>
            </div>
          </Link>

          <Link to="/signUp">
            <div className="flex flex-col py-4">
              <Button>Sign Up</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
