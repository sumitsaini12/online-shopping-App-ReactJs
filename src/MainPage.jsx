import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Futer from './Futer';


function MainPage() {
  return (

    <div className="">
      <Header />

      <div className=" px-8 py-16 bg-gray-200 grow">
        <Outlet />
      </div>
      <Futer />
    </div>

  )
}

export default MainPage;