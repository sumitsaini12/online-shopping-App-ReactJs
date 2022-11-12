import React, { memo } from 'react';

function LoginButton(props) {

  let theme = "bg-blue-500 border-blue-600 hover:border-green-600 hover:bg-green-500 text-white";

  if (props.theme == "secondary") {
    theme = "bg-white border-gray-500 hover:border-green-500 hover:text-green-500";
  };


  return (
    <button className={`px-6 py-1 rounded-md font-normal border-2 text-2xl ` + theme}>
      {props.children}
    </button>
  );
}

export default memo(LoginButton)