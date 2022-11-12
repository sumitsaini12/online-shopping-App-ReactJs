import React,{ memo } from 'react';

function Futer() {
  console.log("Footer is rerunning");
  return (
    <div className="h-20 w-full bg-gray-800 drop-shadow-lg flex flex-col justify-center items-center sm:justify-between sm:flex-row">
      <p className="text-white sm:ml-10">Copyright © 2022 | SUMIT</p>
      <p className="text-white sm:mr-10">Powered By Sumit Kumar</p>
    </div>
  );
}

export default memo(Futer);
