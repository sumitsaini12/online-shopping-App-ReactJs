import React, { memo } from 'react';

function LoginButton(props) {

  let theme = "bg-blue-500 border-blue-600 hover:border-green-600 hover:bg-green-500 text-white";

  if (props.theme == "secondary") {
    theme = "bg-white border-gray-500 hover:border-green-500 hover:text-green-500";
  } else if (props.theme == "red") {
    theme = "bg-red-500 hover:bg-white border-red-600 hover:text-red-500 text-white";
  };


  return (
    <button className={`px-6 py-1 rounded-md font-normal border-2 text-2xl ` + theme} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default memo(LoginButton)