import React, { memo } from 'react';


function Input({ id, labal, name, ...rest }) {

  return (
    <>
      <labal htmlFor={id} className="sr-only">{labal}</labal>
      <input
        name={name}
        {...rest}
        className="relative block w-full appearance-none  bg-transparent  text-gray-900 placeholder-gray-500 focus:z-10 focus:outline-none placeholder:text-xs md:placeholder:text-base sm:text-sm" />
    </>
  );
}

export default memo(Input)