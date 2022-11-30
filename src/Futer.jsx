import React, { memo } from 'react';

function Futer() {

  return (
    <div className="h-20 w-full bg-gray-800 drop-shadow-lg flex flex-col justify-center items-center sm:justify-between sm:flex-row">
      <p className="text-white sm:ml-10">Copyright © 2022 | SUMIT</p>
      <p className="text-white sm:mr-10">Powered By <a href='https://www.linkedin.com/in/sumit-kumar-728468244/' target="_blank">Sumit Kumar</a></p>
    </div>
  );
}

export default memo(Futer);
